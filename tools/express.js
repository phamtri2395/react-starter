/**
 * Start express sever
 * Do server-side rendering
 * You can exec side-action in handleRequest function
 */

import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import ejs from 'ejs';

import routes from '../src/redux/routes';
import { enhancedStore } from '../src/redux/store';
import { createReduxApp } from '../src/redux/provider';
import assetsInfo from '../dist/public/bundle/assets.json';

const config = require('./config/config.js').server;
const ejs_path = path.resolve(__dirname, './dist/index.ejs');
const bundle_path = `.${assetsInfo.main.js}`;

const app = express();
const port = config.environment.port;

// Serve static files
app.use(express.static(path.resolve(__dirname, './dist/public')));


/**
 * Server-side rendering
 */

const handleRequest = function(req, res, next) {
  // Match request url with to React Router's path
  match({ routes: routes, location: req.url }, function(err, redirect, props) {
    // Create store & pass to Router Context
    const store = enhancedStore();
    const appRoutes = <RouterContext {...props}/>;

    // Render the component to a string
    const htmlInjection = renderToString(createReduxApp(store, appRoutes));

    // Send the rendered page back to the client
    res.render(ejs_path, {
      htmlInjection: htmlInjection,
      bundle: bundle_path
    });
  });
};


/**
 * Start & handle server
 */

// Apply server-side rendering
app.get('*', handleRequest);

app.listen(port, function() {
  console.log('Server is up & running on port', port);
});

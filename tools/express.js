/**
 * Start express sever
 * Do server-side rendering
 * You can exec side-action in handleRequest function
 */

import fs from 'fs';
import path from 'path';
import express from 'express';
const compression = require('compression');
import ejs from 'ejs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import routes from '../src/redux/routes';
import { enhancedStore } from '../src/redux/store';
import { createReduxApp } from '../src/redux/provider';
import assetsInfo from '../dist/public/bundle/assets.json';

const config = require('./config/config.js').server;
const ejs_path = path.resolve(__dirname, './dist/index.ejs');
const bundle_js_path = `.${assetsInfo.main.js}`;
const bundle_css_path = `.${assetsInfo.main.css}`;

const app = express();
const port = config.environment.port;

// Using compression on request
app.use(compression());

// Serve static files
app.use(express.static(path.resolve(__dirname, './dist/public')));


/**
 * Server-side rendering
 */

const handleRequest = function(req, res, next) {
  // Match request url with to React Router's path
  match({ routes: routes, location: req.url }, function(err, redirect, props) {
    // Handle errors
    if (err) return next(err);

    // Handle redirection
    if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search);
    }

    // Get components tree from react-router
    const components = props.components;

    // If the component being shown is 404 component, then send 404 status
    if (components.some((c) => c && c.displayName === 'error-404')) {
      res.status(404);
    }

    // Get component, which handle fetching data
    const Comp = components[components.length - 1].WrappedComponent;
    const getPreloadedState = (Comp && Comp.getPreloadedState) || (() => Promise.resolve());

    // Create store with empty initialState
    const initialState = {};
    const store = enhancedStore(initialState);
    // Get params from react-router
    const { location, params, history } = props;

    // Call static method in component to fetch preloadedState
    getPreloadedState({ store, location, params, history }).then(() => {
        // Route context based on current location & props
        const appRoutes = <RouterContext {...props}/>;

        // Get preloadedState after resolve promise
        const preloadedState = store.getState();

        // Render the component to a string
        const htmlInjection = renderToString(createReduxApp(store, appRoutes));

        // Send the rendered page back to the client
        res.render(ejs_path, {
          htmlInjection: htmlInjection,
          bundle_js: bundle_js_path,
          bundle_css: bundle_css_path,
          preloadedState
        });
      });
  });
};


/**
 * Start & handle server
 */

// Apply server-side rendering
app.use(handleRequest);

app.listen(port, function() {
  console.log('Server is up & running on port', port);
});

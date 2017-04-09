/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Environment config
 */

exports.dev = {
  host: 'http://localhost',
  port: '3000'
};

exports.story = {
  host: 'localhost',
  port: 6060
};

exports.prod = {
  host: 'http://localhost',
  port: '5000'
};

exports.server = {
  host: 'http://localhost',
  port: '8000'
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Action types constants
 */

/**
 * Home
 */

var FETCH_USER_LIST = exports.FETCH_USER_LIST = 'FETCH_USER_LIST';
var FETCH_SINGLE_USER = exports.FETCH_SINGLE_USER = 'FETCH_SINGLE_USER';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Miscellaneous constants
 */

var messageSymbol = exports.messageSymbol = {
  submit: function submit(type) {
    return "@@SUBMIT/" + type;
  },
  success: function success(type) {
    return "@@SUCCESS/" + type;
  },
  error: function error(type) {
    return "@@ERROR/" + type;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Babel config for Webpack
 */

module.exports = {
  "presets": ["latest", "stage-1", "react"],
  "plugins": ["transform-runtime"]
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("assets-webpack-plugin");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"main": {
		"js": "/bundle/main.4dffc32f8725742a6ce5.js"
	}
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReduxApp = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create App
var createReduxApp = exports.createReduxApp = function createReduxApp(injectedStore, routes) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: injectedStore },
    routes
  );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _Root = __webpack_require__(27);

var _Root2 = _interopRequireDefault(_Root);

var _NoRoute = __webpack_require__(26);

var _NoRoute2 = _interopRequireDefault(_NoRoute);

var _Home = __webpack_require__(22);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Routing
 */

var routes = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _Root2.default },
    _react2.default.createElement(_reactRouter.Route, { path: 'home', component: _Home2.default })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NoRoute2.default })
);

/**
 * Import containers
 */

/**
 * Routes of project
 */

exports.default = routes;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhancedStore = undefined;

var _redux = __webpack_require__(4);

var _developmentOnly = __webpack_require__(37);

var _reduxThunk = __webpack_require__(38);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(29);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Redux store
 */

var devToolsEnhancers = (0, _developmentOnly.composeWithDevTools)({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
});

var middlewares = [_reduxThunk2.default];

// Store configuration
var enhancedStore = exports.enhancedStore = function enhancedStore(preloadedState) {
  return (0, _redux.createStore)(_reducer2.default, preloadedState, devToolsEnhancers(_redux.applyMiddleware.apply(undefined, middlewares)));
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Configuration for server
 * Each mode using their own Webpack config & environment variables
 */

var environment = __webpack_require__(1);
var webpackDevConfig = __webpack_require__(31);
var webpackProdConfig = __webpack_require__(32);
var webpackServerConfig = __webpack_require__(33);

exports = module.exports = {};

exports.dev = {
  webpack: webpackDevConfig,
  environment: environment.dev
};

exports.story = {
  environment: environment.story
};

exports.prod = {
  webpack: webpackProdConfig,
  environment: environment.prod
};

exports.server = {
  webpack: webpackServerConfig,
  environment: environment.server
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * List component, which accepts an array & return list of Items.
 * It requires a display Item as prop, which handles rendering elements to view properly.
 */

var List = function List(_ref) {
  var collection = _ref.collection,
      Item = _ref.Item;
  return _react2.default.createElement(
    'div',
    null,
    collection.map(function (el) {
      return _react2.default.createElement(Item, _extends({ key: el.id }, el));
    })
  );
};

List.propTypes = {
  collection: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
  Item: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.func]).isRequired
};

exports.default = List;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchSingleUser = exports.FetchUserList = exports.URLs = exports.requestTimeout = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Define API handling methods
                                                                                                                                                                                                                                                                   */

var _ajax = __webpack_require__(30);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestTimeout = exports.requestTimeout = {
  response: 5000
};

var URLs = exports.URLs = {
  fetchUserList: { method: 'GET', url: 'https://reqres.in/api/users' },
  fetchSingleUser: function fetchSingleUser(id) {
    return { method: 'GET', url: 'https://reqres.in/api/users/' + id };
  }
};

/**
 * Home's apis
 */

var FetchUserList = exports.FetchUserList = function FetchUserList() {
  return new _ajax2.default(_extends({}, URLs.fetchUserList, {
    requestTimeout: requestTimeout,
    headers: { 'Content-Type': 'application/json' }
  }));
};

var FetchSingleUser = exports.FetchSingleUser = function FetchSingleUser(id) {
  return new _ajax2.default(_extends({}, URLs.fetchSingleUser(id), {
    requestTimeout: requestTimeout,
    headers: { 'Content-Type': 'application/json' }
  }));
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(10);

var _redux = __webpack_require__(4);

var _recompose = __webpack_require__(36);

var _List = __webpack_require__(20);

var _List2 = _interopRequireDefault(_List);

var _userInfoItem = __webpack_require__(25);

var _userInfoItem2 = _interopRequireDefault(_userInfoItem);

var _HomeAction = __webpack_require__(23);

var HomeAction = _interopRequireWildcard(_HomeAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Map properties from data to userInfoItem props name
var enhancedUserInfo = (0, _recompose.renameProps)({
  last_name: 'lastName',
  first_name: 'firstName'
})(_userInfoItem2.default);

var mapStoreToProps = function mapStoreToProps(store) {
  return store.HomeReducer;
};
var mapActionToProps = function mapActionToProps(dispatch) {
  return (0, _redux.bindActionCreators)(HomeAction, dispatch);
};

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('This log only appears in development mode');

      var fetch1 = this.props.fetchSingleUser(1);
      var fetch2 = this.props.fetchSingleUser(2);
      var fetch3 = this.props.fetchSingleUser(3);

      // Link async call in order, make them sync together
      fetch1.next(fetch2);
      fetch2.next(fetch3);

      fetch1();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Homepage'
        ),
        this.state.loading ? _react2.default.createElement(
          'h3',
          null,
          'Loading...'
        ) : _react2.default.createElement(_List2.default, { collection: this.props.data, Item: enhancedUserInfo })
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStoreToProps, mapActionToProps)(Home);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSingleUser = exports.fetchUserList = undefined;

var _action = __webpack_require__(28);

var _Apis = __webpack_require__(21);

var apis = _interopRequireWildcard(_Apis);

var _ActionTypes = __webpack_require__(6);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fetchUserList = exports.fetchUserList = new _action.ReduxAction(types.FETCH_USER_LIST)(function () {
  return apis.FetchUserList();
});

var fetchSingleUser = exports.fetchSingleUser = new _action.ReduxAction(types.FETCH_SINGLE_USER)(function (id) {
  return apis.FetchSingleUser(id);
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Misc = __webpack_require__(7);

var _ActionTypes = __webpack_require__(6);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Get function to transform message into submit, success or error status
var submit = _Misc.messageSymbol.submit,
    success = _Misc.messageSymbol.success,
    error = _Misc.messageSymbol.error;


var initialState = {
  data: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case success(types.FETCH_USER_LIST):
      return _extends({}, state, { data: action.payload.data });

    case success(types.FETCH_SINGLE_USER):
      return _extends({}, state, { data: [].concat(_toConsumableArray(state.data), [action.payload.data]) });

    default:
      return state;
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Custom Item for displaying user's info
 */

var userInfoItem = function userInfoItem(_ref) {
  var id = _ref.id,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      avatar = _ref.avatar;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'ID: ',
      id
    ),
    _react2.default.createElement('img', { style: { display: 'inline-block' }, src: avatar, alt: id }),
    _react2.default.createElement(
      'h5',
      null,
      'Name: ',
      firstName,
      ' ',
      lastName
    )
  );
};

userInfoItem.propTypes = {
  id: _react2.default.PropTypes.number.isRequired,
  firstName: _react2.default.PropTypes.string.isRequired,
  lastName: _react2.default.PropTypes.string.isRequired,
  avatar: _react2.default.PropTypes.string.isRequired
};

exports.default = userInfoItem;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoRoute = function (_Component) {
  _inherits(NoRoute, _Component);

  function NoRoute(props) {
    _classCallCheck(this, NoRoute);

    return _possibleConstructorReturn(this, (NoRoute.__proto__ || Object.getPrototypeOf(NoRoute)).call(this, props));
  }

  _createClass(NoRoute, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Sorry, We can\'t find your content'
      );
    }
  }]);

  return NoRoute;
}(_react.Component);

exports.default = NoRoute;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var linkStyle = {
  textDecoration: 'none',
  display: 'inline-block',
  marginLeft: 15,
  marginRight: 15
};

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root(props) {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Welcome to Redux Starter'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { style: linkStyle, to: '/home' },
          'Show Home Page'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { style: linkStyle, to: '/' },
          'Show Root Page'
        ),
        this.props.children
      );
    }
  }]);

  return Root;
}(_react.Component);

exports.default = Root;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReduxAction = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Standardize type of action using in project
                                                                                                                                                                                                                                                                   */

var _Misc = __webpack_require__(7);

var ReduxMessage = function ReduxMessage(type, payload, dispatch) {
  var _this = this;

  this.msg = { type: type, payload: payload };
  this.dispatch = dispatch;

  this.submit = function () {
    _this.dispatch({
      type: _Misc.messageSymbol.submit(_this.msg.type),
      payload: _this.msg.payload
    });
  };

  this.success = function (newPayload) {
    var mergedPayload = _extends({}, _this.msg.payload, newPayload);

    _this.dispatch({
      type: _Misc.messageSymbol.success(_this.msg.type),
      payload: mergedPayload
    });
  };

  this.error = function (errorMessage) {
    _this.dispatch({
      type: _Misc.messageSymbol.error(_this.msg.type),
      payload: errorMessage
    });
  };
};

var ReduxPromise = function ReduxPromise(action, message) {
  var _this2 = this;

  this.action = action;
  this.message = message;
  this.prev = null;
  this.next = null;

  this.createPromise = function () {
    typeof _this2.prev === 'function' && _this2.prev(); // Calling prev function

    return new Promise(function (resolve, reject) {
      var result = _this2.action();
      _this2.message.submit(); // Dispatch submit message

      // Check if action is promise
      var isPromise = result && typeof result.then === 'function';

      if (isPromise) {
        // If promise, resolve when promise's done
        result.then(function (res, err) {
          if (err) {
            _this2.message.error(err); // Dispatch error message

            typeof _this2.next === 'function' && _this2.next(null, err); // Calling next function

            reject(err);
          }

          _this2.message.success(res.body); // Dispatch success message

          typeof _this2.next === 'function' && _this2.next(res.body, null); // Calling next function

          resolve(res.body);
        });
      } else {
        // If not promise, return result
        _this2.message.success(result); // Dispatch success message

        typeof _this2.next === 'function' && _this2.next(result, null); // Calling next function

        resolve(result, null);
      }
    });
  };

  this.then = function (next) {
    if (typeof next === 'function') _this2.next = next;
  };

  this.before = function (prev) {
    if (typeof prev === 'function') _this2.prev = prev;
  };
};

var ReduxAction = exports.ReduxAction = function ReduxAction(type, payload) {
  return function (action) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return function (dispatch) {
        var promise = new ReduxPromise(function () {
          return action.apply(undefined, args);
        }, new ReduxMessage(type, payload, dispatch));

        var execPromise = function execPromise() {
          promise.createPromise();
        };

        execPromise.prev = function (prev) {
          typeof prev === 'function' && promise.before(prev);
        };

        execPromise.next = function (next) {
          typeof next === 'function' && promise.then(next);
        };

        return execPromise;
      };
    };
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _HomeReducer = __webpack_require__(24);

var _HomeReducer2 = _interopRequireDefault(_HomeReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine reducers
/**
 * Redux reducer
 */

exports.default = (0, _redux.combineReducers)({
  HomeReducer: _HomeReducer2.default
});

/**
 * Import separate reducers
 */

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ajax;

var _superagent = __webpack_require__(39);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Ajax(_ref) {
  var _this = this;

  var method = _ref.method,
      url = _ref.url,
      requestTimeout = _ref.requestTimeout,
      _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? {} : _ref$headers,
      _ref$body = _ref.body,
      body = _ref$body === undefined ? {} : _ref$body;

  this.method = method.toLowerCase();
  this.url = url;
  this.headers = headers;
  this.body = body;

  this.then = function (next) {
    return _superagent2.default[_this.method](_this.url).timeout(requestTimeout).send(_this.body).set(_this.headers).end(function (err, res) {
      // Callback
      typeof next === 'function' && next(res, err);

      return res, err;
    });
  };
} /**
   * Call AJAX here
   */

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

/**
 * Webpack configuration in development mode
 * Turn on debug, HMR, print linter's warning,...
 * Not optimize bundle files & assets
 */

var path = __webpack_require__(2);
var webpack = __webpack_require__(5);
var AssetsPlugin = __webpack_require__(9);

// Host
var host = __webpack_require__(1).dev.host;
// Environment port
var port = __webpack_require__(1).dev.port;

// Relative paths
var src_path = path.resolve(__dirname, '../../src');
var context = src_path;
var dist_path = path.resolve(__dirname, '../../dist/public/bundle');
var publicPath = host + ':' + port + '/bundle';
var filename = '[name].js?[hash]';
var chunkFilename = '[id].js?[chunkhash]';
var eslint_path = path.resolve(__dirname, './.eslintrc');

// Check if verbose mode is on
var isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');
// Hot Module Replacement (HMR)
var useHMR = !!global.HMR;
// Babel config
var babelrc = __webpack_require__(8);
var babelConfig = Object.assign({}, babelrc, {
  babelrc: false,
  cacheDirectory: useHMR,
  presets: babelrc.presets.map(function (x) {
    return x === 'latest' ? ['latest', { es2015: { modules: false } }] : x;
  })
});
// Babel config for development
babelConfig.presets.unshift("react-hmre");
babelConfig.plugins.unshift("react-hot-loader/babel");

var config = {
  // The base directory for resolving the entry option
  context: context,

  // The entry point for the bundle
  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', './app.js'],

  // Options affecting the output of the compilation
  output: {
    path: dist_path,
    publicPath: publicPath,
    filename: filename,
    chunkFilename: chunkFilename,
    sourcePrefix: '  '
  },

  // Developer tool to enhance debugging, source maps
  devtool: 'source-map',

  // Information would be printed to the console
  stats: {
    colors: true,
    reasons: true,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose
  },

  // Plugins for Webpack compiler
  plugins: [new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"',
    __DEV__: true
  }),

  // Hot Module Replacement (HMR) + React Hot Reload
  new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(),

  // Emit a JSON file with assets paths
  new AssetsPlugin({
    path: dist_path,
    filename: 'assets.json',
    prettyPrint: true
  }), new webpack.LoaderOptionsPlugin({
    debug: true,
    minimize: false
  })],

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [src_path, 'node_modules']
  },

  // Options affecting the normal modules
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: src_path,
      enforce: 'pre',
      loader: 'eslint-loader',
      query: {
        configFile: eslint_path
      }
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: babelConfig
    }, {
      test: /\.css/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: true,
          modules: true,
          localIdentName: '[name]_[local]_[hash:base64:3]',
          minimize: false
        }
      }, {
        loader: 'postcss-loader',
        options: {
          config: './postcss.config.js'
        }
      }]
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader'
    }]
  }
};

module.exports = config;
/* WEBPACK VAR INJECTION */}.call(exports, "config"))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

/**
 * Webpack configuration in production mode
 * Turn off debug, HMR, print linter's warning,...
 * Fully optimize bundle files & assets
 */

var path = __webpack_require__(2);
var webpack = __webpack_require__(5);
var AssetsPlugin = __webpack_require__(9);
var CompressionPlugin = __webpack_require__(35);

// Host
var host = __webpack_require__(1).prod.host;
// Environment port
var port = __webpack_require__(1).prod.port;

// Relative paths
var src_path = path.resolve(__dirname, '../../src');
var context = src_path;
var dist_path = path.resolve(__dirname, '../../dist/public/bundle');
var publicPath = '/bundle/';
var filename = '[name].[hash].js';
var chunkFilename = '[id].[chunkhash].js';
var eslint_path = path.resolve(__dirname, './.eslintrc');

// Check if verbose mode is on
var isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');
// Babel config
var babelrc = __webpack_require__(8);
var babelConfig = Object.assign({}, babelrc, {
  babelrc: false,
  cacheDirectory: false,
  presets: babelrc.presets.map(function (x) {
    return x === 'latest' ? ['latest', { es2015: { modules: false } }] : x;
  })
});
// Babel config for development
//babelConfig.presets.unshift("react-hmre");
//babelConfig.plugins.unshift("react-hot-loader/babel");


var config = {
  // The base directory for resolving the entry option
  context: context,

  // The entry point for the bundle
  entry: './app.js',

  // Options affecting the output of the compilation
  output: {
    path: dist_path,
    publicPath: publicPath,
    filename: filename,
    chunkFilename: chunkFilename,
    sourcePrefix: '  '
  },

  // Developer tool to enhance debugging, source maps
  devtool: false,

  // Information would be printed to the console
  stats: {
    colors: true,
    reasons: false,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
    warnings: false
  },

  // Plugins for Webpack compiler
  plugins: [new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
    __DEV__: false
  }),

  // Optimize the bundle in release (production) mode
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: false,
    warnings: false,
    mangle: true,
    compress: {
      drop_console: true
    }
  }),

  // Deduplication
  new webpack.optimize.DedupePlugin(), new webpack.optimize.AggressiveMergingPlugin(),

  // Emit a JSON file with assets paths
  new AssetsPlugin({
    path: dist_path,
    filename: 'assets.json',
    prettyPrint: true
  }), new webpack.LoaderOptionsPlugin({
    debug: false,
    minimize: true
  }), new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.jsx?$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })],

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [src_path, 'node_modules']
  },

  // Options affecting the normal modules
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: src_path,
      enforce: 'pre',
      loader: 'eslint-loader',
      query: {
        configFile: eslint_path
      }
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: babelConfig
    }, {
      test: /\.css/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: false,
          importLoaders: true,
          modules: true,
          localIdentName: '[hash:base64:4]',
          minimize: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          config: './postcss.config.js'
        }
      }]
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader'
    }]
  }
};

module.exports = config;
/* WEBPACK VAR INJECTION */}.call(exports, "config"))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

/**
 * Webpack configuration in server mode
 * Transform ES6 syntax in Express server file into ES5
 * Fully optimize & bundle
 */

var path = __webpack_require__(2);
var webpack = __webpack_require__(5);
var nodeExternals = __webpack_require__(40);

// Relative paths
var src_path = path.resolve(__dirname, '../');
var context = src_path;
var dist_path = path.resolve(__dirname, '../../dist');
var filename = 'server.js';

// Check if verbose mode is on
var isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');

var config = {
  // The base directory for resolving the entry option
  context: context,

  // The entry point for the bundle
  entry: './express.js',

  // Options affecting the output of the compilation
  output: {
    path: dist_path,
    filename: filename
  },

  // Information would be printed to the console
  stats: {
    colors: true,
    reasons: false,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
    warnings: false
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [src_path, 'node_modules']
  },

  // Options affecting the normal modules
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'stage-1', 'react']
      }
    }]
  },

  target: 'node',

  node: {
    __dirname: true
  },

  externals: [nodeExternals()]
};

module.exports = config;
/* WEBPACK VAR INJECTION */}.call(exports, "config"))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _fs = __webpack_require__(18);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(17);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(19);

var _reactRouter = __webpack_require__(3);

var _ejs = __webpack_require__(16);

var _ejs2 = _interopRequireDefault(_ejs);

var _routes = __webpack_require__(13);

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(14);

var _provider = __webpack_require__(12);

var _assets = __webpack_require__(11);

var _assets2 = _interopRequireDefault(_assets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = __webpack_require__(15).server; /**
                                                    * Start express sever
                                                    * Do server-side rendering
                                                    * You can exec side-action in handleRequest function
                                                    */

var ejs_path = _path2.default.resolve(__dirname, './dist/index.ejs');
console.log('EJS PATH', ejs_path);
var bundle_path = '.' + _assets2.default.main.js;

var app = (0, _express2.default)();
var port = config.environment.port;

// Serve static files
app.use(_express2.default.static(_path2.default.resolve(__dirname, './dist/public')));

/**
 * Server-side rendering
 */

var handleRequest = function handleRequest(req, res, next) {
  // Match request url with to React Router's path
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
    // Create store & pass to Router Context
    var store = (0, _store.enhancedStore)();
    var appRoutes = _react2.default.createElement(_reactRouter.RouterContext, props);

    // Render the component to a string
    var htmlInjection = (0, _server.renderToString)((0, _provider.createReduxApp)(store, appRoutes));

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

app.listen(port, function () {
  console.log('Server is up & running on port', port);
});
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("compression-webpack-plugin");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ })
/******/ ]);
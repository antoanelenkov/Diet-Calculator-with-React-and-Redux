webpackJsonp([0],{

/***/ 0:
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(/*! ./App */ 184);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _registerServiceWorker = __webpack_require__(/*! ./registerServiceWorker */ 290);
	
	var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);
	
	var _underscoreMin = __webpack_require__(/*! ../~/underscore/underscore-min.js */ 291);
	
	var _underscoreMin2 = _interopRequireDefault(_underscoreMin);
	
	var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 186);
	
	var _configureStore = __webpack_require__(/*! ./store/configureStore */ 293);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
	var _foodsActions = __webpack_require__(/*! ./actions/foodsActions */ 267);
	
	var _foodsActions2 = _interopRequireDefault(_foodsActions);
	
	var _consumationActions = __webpack_require__(/*! ./actions/consumationActions */ 281);
	
	var _consumationActions2 = _interopRequireDefault(_consumationActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import './index.css';
	//import '../node_modules/bootstrap/dist/css/bootstrap.css';
	var store = (0, _configureStore2.default)();
	store.dispatch(_foodsActions2.default.getAll());
	store.dispatch(_consumationActions2.default.getAll());
	console.log(_underscoreMin2.default);
	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(
	        _reactRouterDom.BrowserRouter,
	        null,
	        _react2.default.createElement(_App2.default, null)
	    )
	), document.getElementById('root'));
	
	(0, _registerServiceWorker2.default)();

/***/ },

/***/ 184:
/*!********************!*\
  !*** ./app/App.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Router = __webpack_require__(/*! ./Router */ 185);
	
	var _Router2 = _interopRequireDefault(_Router);
	
	var _Navigation = __webpack_require__(/*! ./components/Navigation */ 288);
	
	var _Navigation2 = _interopRequireDefault(_Navigation);
	
	var _Footer = __webpack_require__(/*! ./components/Footer */ 289);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import './App.css';
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'App' },
	        _react2.default.createElement(_Navigation2.default, null),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(_Router2.default, null)
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	exports.default = App;

/***/ },

/***/ 185:
/*!***********************!*\
  !*** ./app/Router.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 186);
	
	var _HomePage = __webpack_require__(/*! ./components/home/HomePage */ 229);
	
	var _HomePage2 = _interopRequireDefault(_HomePage);
	
	var _FoodsPage = __webpack_require__(/*! ./components/foods/FoodsPage */ 230);
	
	var _FoodsPage2 = _interopRequireDefault(_FoodsPage);
	
	var _ManageFoodPage = __webpack_require__(/*! ./components/foods/ManageFoodPage */ 274);
	
	var _ManageFoodPage2 = _interopRequireDefault(_ManageFoodPage);
	
	var _ErrorPage = __webpack_require__(/*! ./components/error/ErrorPage */ 279);
	
	var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
	
	var _ManageConsumationPage = __webpack_require__(/*! ./components/consumation/ManageConsumationPage */ 280);
	
	var _ManageConsumationPage2 = _interopRequireDefault(_ManageConsumationPage);
	
	var _ConsumationPage = __webpack_require__(/*! ./components/consumation/ConsumationPage */ 285);
	
	var _ConsumationPage2 = _interopRequireDefault(_ConsumationPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Routes = function Routes() {
	    return _react2.default.createElement(
	        _reactRouterDom.Switch,
	        null,
	        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/calculator/', component: _HomePage2.default }),
	        _react2.default.createElement(_reactRouterDom.Route, { path: '/calculator/home', component: _HomePage2.default }),
	        _react2.default.createElement(_reactRouterDom.Route, { path: '/calculator/foods', component: _FoodsPage2.default }),
	        _react2.default.createElement(_reactRouterDom.Route, { path: '/calculator/manage-food/:id', component: _ManageFoodPage2.default }),
	        _react2.default.createElement(_reactRouterDom.Route, { path: '/calculator/manage-food', component: _ManageFoodPage2.default }),
	        _react2.default.createElement(_reactRouterDom.Route, { path: '/calculator/manage-consumation/:id', component: _ManageConsumationPage2.default }),
	        _react2.default.createElement(_reactRouterDom.Route, { path: '/calculator/manage-consumation/', component: _ManageConsumationPage2.default }),
	        _react2.default.createElement(_reactRouterDom.Route, { path: '/calculator/consumations', component: _ConsumationPage2.default }),
	        _react2.default.createElement(_reactRouterDom.Route, { component: _ErrorPage2.default })
	    );
	};
	
	exports.default = Routes;

/***/ },

/***/ 229:
/*!*****************************************!*\
  !*** ./app/components/home/HomePage.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	    return _react2.default.createElement(
	        "div",
	        { className: "home-page-container" },
	        _react2.default.createElement("img", { className: "home-wallpaper", src: "../../../content/images/home-wallpaper.jpg" })
	    );
	};

/***/ },

/***/ 230:
/*!*******************************************!*\
  !*** ./app/components/foods/FoodsPage.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
	var _redux = __webpack_require__(/*! redux */ 240);
	
	var _foodsActions = __webpack_require__(/*! ../../actions/foodsActions */ 267);
	
	var _foodsActions2 = _interopRequireDefault(_foodsActions);
	
	var _FoodsPageView = __webpack_require__(/*! ./FoodsPageView */ 273);
	
	var _FoodsPageView2 = _interopRequireDefault(_FoodsPageView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FoodsPage = function (_React$Component) {
	    _inherits(FoodsPage, _React$Component);
	
	    function FoodsPage(props) {
	        _classCallCheck(this, FoodsPage);
	
	        var _this = _possibleConstructorReturn(this, (FoodsPage.__proto__ || Object.getPrototypeOf(FoodsPage)).call(this, props));
	
	        _this.handleOnClick = _this.handleOnClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(FoodsPage, [{
	        key: 'handleOnClick',
	        value: function handleOnClick(event) {
	            event.target.value === "Edit" && this.props.history.push('manage-food/' + event.target.attributes['data-food-id'].value);
	            event.target.value === "Delete" && this.props.actions.delete(event.target.attributes['data-food-id'].value * 1);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_FoodsPageView2.default, { foods: this.props.foods, handleOnClick: this.handleOnClick });
	        }
	    }]);
	
	    return FoodsPage;
	}(_react2.default.Component);
	
	function mapStateToProps(state, ownProps) {
	    return {
	        foods: state.foodsReducer
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(_foodsActions2.default, dispatch)
	    };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FoodsPage);

/***/ },

/***/ 267:
/*!*************************************!*\
  !*** ./app/actions/foodsActions.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getAllSuccess = getAllSuccess;
	exports.addFoodSuccess = addFoodSuccess;
	exports.editFoodSuccess = editFoodSuccess;
	exports.deleteFoodSuccess = deleteFoodSuccess;
	
	var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ 268);
	
	var ActionTypes = _interopRequireWildcard(_ActionTypes);
	
	var _foodApi = __webpack_require__(/*! ../api/foodApi */ 269);
	
	var _foodApi2 = _interopRequireDefault(_foodApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function getAllSuccess(foods) {
	    return { type: ActionTypes.GET_ALL_FOODS, foods: foods };
	}
	
	function addFoodSuccess(food) {
	    return { type: ActionTypes.ADD_FOOD, food: food };
	}
	
	function editFoodSuccess(food) {
	    return { type: ActionTypes.EDIT_FOOD, food: food };
	}
	
	function deleteFoodSuccess(id) {
	    return { type: ActionTypes.DELETE_FOOD, id: id };
	}
	
	exports.default = {
	    addFood: function addFood(food) {
	        return function (dispatch) {
	            _foodApi2.default.save(food.id, food.name, food.type, food.calories, food.proteins, food.carbs, food.fats).then(function (savedFood) {
	                food.id ? dispatch(editFoodSuccess(savedFood)) : dispatch(addFoodSuccess(savedFood));
	            });
	        };
	    },
	    delete: function _delete(id) {
	        return function (dispatch) {
	            _foodApi2.default.delete(id).then(function () {
	                return dispatch(deleteFoodSuccess(id));
	            });
	        };
	    },
	    getAll: function getAll() {
	        return function (dispatch) {
	            return _foodApi2.default.getAll().then(function (foods) {
	                dispatch(getAllSuccess(foods));
	            });
	        };
	    }
	};

/***/ },

/***/ 268:
/*!**************************************!*\
  !*** ./app/constants/ActionTypes.js ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ADD_FOOD = exports.ADD_FOOD = "ADD_FOOD";
	var EDIT_FOOD = exports.EDIT_FOOD = "EDIT_FOOD";
	var DELETE_FOOD = exports.DELETE_FOOD = "DELETE_FOOD";
	var GET_ALL_FOODS = exports.GET_ALL_FOODS = "GET_ALL_FOODS";
	
	var ADD_CONSUMATION = exports.ADD_CONSUMATION = "ADD_CONSUMATION";
	var EDIT_CONSUMATION = exports.EDIT_CONSUMATION = "EDIT_CONSUMATION";
	var DELETE_CONSUMATION = exports.DELETE_CONSUMATION = "DELETE_CONSUMATION";
	var GET_ALL_CONSUMATIONS = exports.GET_ALL_CONSUMATIONS = "GET_ALL_CONSUMATIONS";

/***/ },

/***/ 269:
/*!****************************!*\
  !*** ./app/api/foodApi.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _serverRequestApi = __webpack_require__(/*! ./serverRequestApi */ 270);
	
	var _serverRequestApi2 = _interopRequireDefault(_serverRequestApi);
	
	var _CaloriesCountType = __webpack_require__(/*! ../constants/CaloriesCountType */ 272);
	
	var CaloriesCountType = _interopRequireWildcard(_CaloriesCountType);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	    var api = {};
	
	    var remoteCallDelay = 500;
	
	    var foods = _getFoodsFromStorage();
	    var idGenerator = foods.length;
	
	    api.getAll = function () {
	        return new Promise(function (resolve, reject) {
	            _serverRequestApi2.default.get('/foods/getall').then(function (foods) {
	                return resolve(foods);
	            });
	        });
	    };
	
	    api.save = function (id, name, type, calories, proteins, carbs, fats) {
	        return new Promise(function (resolve, reject) {
	            var itemToSave = {
	                id: id || 0,
	                name: name,
	                type: CaloriesCountType.PER_HUNDRED_GRAMS ? 0 : 1,
	                calories: calories * 1,
	                proteins: proteins * 1,
	                carbs: carbs * 1,
	                fats: fats * 1
	            };
	
	            _serverRequestApi2.default.post('/foods/save', itemToSave).then(function (food) {
	                console.log(food);resolve(food);
	            });
	        });
	    };
	
	    api.delete = function (id) {
	        return new Promise(function (resolve, reject) {
	            _serverRequestApi2.default.post('/foods/delete', { id: id }).then(function (res) {
	                return resolve(res);
	            });
	        });
	    };
	
	    function _updateFoodsStorage() {
	        localStorage["foods"] = JSON.stringify(foods);
	    };
	
	    function _getFoodsFromStorage() {
	        return localStorage["foods"] && JSON.parse(localStorage["foods"]) || [];
	    };
	
	    return api;
	}();

/***/ },

/***/ 270:
/*!*************************************!*\
  !*** ./app/api/serverRequestApi.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jquery = __webpack_require__(/*! jquery */ 271);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	    var api = {};
	
	    api.get = function (relativeUrl) {
	        return new Promise(function (resolve, reject) {
	            _jquery2.default.ajax({
	                type: 'GET',
	                url: window.location.origin + relativeUrl,
	                success: function success(data, textStatus) {
	                    resolve(JSON.parse(data));
	                },
	                error: function error(xhr, textStatus, errorThrown) {
	                    throw errorThrown;
	                }
	            });
	        });
	    };
	
	    api.post = function (relativeUrl, data) {
	        return new Promise(function (resolve, reject) {
	
	            _jquery2.default.ajax({
	                type: 'POST',
	                data: data,
	                url: window.location.origin + relativeUrl,
	                success: function success(data, textStatus) {
	                    resolve(JSON.parse(data));
	                },
	                error: function error(xhr, textStatus, errorThrown) {
	                    throw errorThrown;
	                }
	            });
	        });
	    };
	
	    return api;
	}();

/***/ },

/***/ 272:
/*!********************************************!*\
  !*** ./app/constants/CaloriesCountType.js ***!
  \********************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PER_HUNDRED_GRAMS = exports.PER_HUNDRED_GRAMS = "Per hundred grams";
	var PER_ITEM = exports.PER_ITEM = "Per item";

/***/ },

/***/ 273:
/*!***********************************************!*\
  !*** ./app/components/foods/FoodsPageView.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	    return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	            "h3",
	            { className: "centered" },
	            "Foods macronutient information"
	        ),
	        _react2.default.createElement(
	            "div",
	            { className: "table-responsive" },
	            _react2.default.createElement(
	                "table",
	                { className: "table table-striped" },
	                _react2.default.createElement(
	                    "thead",
	                    null,
	                    _react2.default.createElement(
	                        "tr",
	                        null,
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "Name"
	                        ),
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "Type"
	                        ),
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "Calories"
	                        ),
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "Proteins"
	                        ),
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "Carbs"
	                        ),
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "Fats"
	                        ),
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "Edit"
	                        ),
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "Delete"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "tbody",
	                    null,
	                    props.foods.map(function (food) {
	                        return _react2.default.createElement(
	                            "tr",
	                            { key: food.id },
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                food.name
	                            ),
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                food.type
	                            ),
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                food.calories
	                            ),
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                food.proteins
	                            ),
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                food.carbs
	                            ),
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                food.fats
	                            ),
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                _react2.default.createElement("input", { type: "button", className: "btn btn-primary", value: "Edit", "data-food-id": food.id, onClick: props.handleOnClick })
	                            ),
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                _react2.default.createElement("input", { type: "button", className: "btn btn-primary", value: "Delete", "data-food-id": food.id, onClick: props.handleOnClick })
	                            )
	                        );
	                    })
	                )
	            )
	        )
	    );
	};

/***/ },

/***/ 274:
/*!************************************************!*\
  !*** ./app/components/foods/ManageFoodPage.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
	var _redux = __webpack_require__(/*! redux */ 240);
	
	var _foodsActions = __webpack_require__(/*! ../../actions/foodsActions */ 267);
	
	var _foodsActions2 = _interopRequireDefault(_foodsActions);
	
	var _CaloriesCountType = __webpack_require__(/*! ../../constants/CaloriesCountType */ 272);
	
	var CaloriesCountType = _interopRequireWildcard(_CaloriesCountType);
	
	var _ManageFoodsPageView = __webpack_require__(/*! ./ManageFoodsPageView */ 275);
	
	var _ManageFoodsPageView2 = _interopRequireDefault(_ManageFoodsPageView);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ManageFoodPage = function (_React$Component) {
	    _inherits(ManageFoodPage, _React$Component);
	
	    function ManageFoodPage(props, context) {
	        _classCallCheck(this, ManageFoodPage);
	
	        var _this = _possibleConstructorReturn(this, (ManageFoodPage.__proto__ || Object.getPrototypeOf(ManageFoodPage)).call(this, props, context));
	
	        _this.state = { food: Object.assign({}, _this.props.food) };
	
	        _this.handleOnChange = _this.handleOnChange.bind(_this);
	        _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
	        return _this;
	    }
	
	    // Invoked after mapStateToProps func is called
	
	
	    _createClass(ManageFoodPage, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.food.id !== nextProps.food.id) {
	                this.setState({ food: nextProps.food });
	            }
	        }
	    }, {
	        key: 'handleOnChange',
	        value: function handleOnChange(event) {
	            var food = Object.assign({}, this.state.food);
	            food[event.target.attributes['data-id'].value] = event.target.value;
	
	            this.setState({ food: food });
	        }
	    }, {
	        key: 'handleOnSubmit',
	        value: function handleOnSubmit() {
	            if (this.fieldsAreValid(this.state.food)) {
	                this.props.actions.addFood(this.state.food);
	                this.props.history.push('/foods');
	            } else {
	                this.setState({ error: "Fields \"Name\" and \"Calories\" are required!" });
	            }
	        }
	    }, {
	        key: 'fieldsAreValid',
	        value: function fieldsAreValid(food) {
	            return food.name && food.calories;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_ManageFoodsPageView2.default, { food: this.state.food, error: this.state.error, handleOnChange: this.handleOnChange, handleOnSubmit: this.handleOnSubmit });
	        }
	    }]);
	
	    return ManageFoodPage;
	}(_react2.default.Component);
	
	function mapStateToProps(state, ownProps) {
	    var foodId = ownProps.match.params.id * 1;
	
	    var foodToMapOnProps = {
	        name: "",
	        calories: "",
	        proteins: "",
	        carbs: "",
	        fats: "",
	        type: CaloriesCountType.PER_HUNDRED_GRAMS
	    };
	
	    foodId && state.foodsReducer.length && (foodToMapOnProps = state.foodsReducer.find(function (food) {
	        return food.id === foodId;
	    }));
	
	    return {
	        food: foodToMapOnProps
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(_foodsActions2.default, dispatch)
	    };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManageFoodPage);

/***/ },

/***/ 275:
/*!*****************************************************!*\
  !*** ./app/components/foods/ManageFoodsPageView.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CaloriesCountType = __webpack_require__(/*! ../../constants/CaloriesCountType */ 272);
	
	var CaloriesCountType = _interopRequireWildcard(_CaloriesCountType);
	
	var _InputFormGroup = __webpack_require__(/*! ../HtmlHelpers/InputFormGroup */ 276);
	
	var _InputFormGroup2 = _interopRequireDefault(_InputFormGroup);
	
	var _ButtonFormGroup = __webpack_require__(/*! ../HtmlHelpers/ButtonFormGroup */ 277);
	
	var _ButtonFormGroup2 = _interopRequireDefault(_ButtonFormGroup);
	
	var _SelectFormGroup = __webpack_require__(/*! ../HtmlHelpers/SelectFormGroup */ 278);
	
	var _SelectFormGroup2 = _interopRequireDefault(_SelectFormGroup);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'h3',
	            { className: 'centered' },
	            'Add new food'
	        ),
	        _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	                'div',
	                { className: 'col-md-6 col-md-offset-3' },
	                props.error && _react2.default.createElement(
	                    'div',
	                    { className: 'alert alert-danger' },
	                    props.error
	                ),
	                _react2.default.createElement(_InputFormGroup2.default, { type: 'text', id: 'name', labelName: 'Name', value: props.food.name, handleOnChange: props.handleOnChange }),
	                _react2.default.createElement(_InputFormGroup2.default, { type: 'number', id: 'calories', labelName: 'Calories', value: props.food.calories, handleOnChange: props.handleOnChange }),
	                _react2.default.createElement(_InputFormGroup2.default, { type: 'number', id: 'fats', labelName: 'Fats', value: props.food.fats, handleOnChange: props.handleOnChange }),
	                _react2.default.createElement(_InputFormGroup2.default, { type: 'number', id: 'proteins', labelName: 'Proteins', value: props.food.proteins, handleOnChange: props.handleOnChange }),
	                _react2.default.createElement(_InputFormGroup2.default, { type: 'number', id: 'carbs', labelName: 'Carbs', value: props.food.carbs, handleOnChange: props.handleOnChange }),
	                _react2.default.createElement(_SelectFormGroup2.default, {
	                    id: 'type',
	                    labelName: 'Type:',
	                    options: Object.values(CaloriesCountType).map(function (type) {
	                        return { name: type, value: type };
	                    }),
	                    handleOnChange: props.handleOnChange }),
	                _react2.default.createElement(_ButtonFormGroup2.default, { value: 'Add', handleOnSubmit: props.handleOnSubmit })
	            )
	        )
	    );
	};

/***/ },

/***/ 276:
/*!******************************************************!*\
  !*** ./app/components/HtmlHelpers/InputFormGroup.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	    return _react2.default.createElement(
	        "div",
	        { className: "form-group" },
	        _react2.default.createElement(
	            "label",
	            { htmlFor: props.id },
	            props.labelName,
	            ":"
	        ),
	        _react2.default.createElement("input", { type: props.type, className: "form-control", value: props.value, "data-id": props.id, onChange: props.handleOnChange })
	    );
	};

/***/ },

/***/ 277:
/*!*******************************************************!*\
  !*** ./app/components/HtmlHelpers/ButtonFormGroup.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	    return _react2.default.createElement(
	        "div",
	        { className: "form-group" },
	        _react2.default.createElement("input", { type: "button", value: props.value, className: "form-control btn btn-primary", onClick: props.handleOnSubmit })
	    );
	};

/***/ },

/***/ 278:
/*!*******************************************************!*\
  !*** ./app/components/HtmlHelpers/SelectFormGroup.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	    return _react2.default.createElement(
	        "div",
	        { className: "form-group" },
	        _react2.default.createElement(
	            "label",
	            { htmlFor: props.id },
	            props.labelText
	        ),
	        _react2.default.createElement(
	            "select",
	            { className: "form-control", "data-id": props.id, onChange: props.handleOnChange },
	            props.options.map(function (option) {
	                return _react2.default.createElement(
	                    "option",
	                    { key: option.value, value: option.value },
	                    option.name
	                );
	            })
	        )
	    );
	};

/***/ },

/***/ 279:
/*!*******************************************!*\
  !*** ./app/components/error/ErrorPage.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	    return _react2.default.createElement(
	        "div",
	        { className: "error-text" },
	        "The page cannot be found!"
	    );
	};

/***/ },

/***/ 280:
/*!*************************************************************!*\
  !*** ./app/components/consumation/ManageConsumationPage.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
	var _redux = __webpack_require__(/*! redux */ 240);
	
	var _consumationActions = __webpack_require__(/*! ../../actions/consumationActions */ 281);
	
	var _consumationActions2 = _interopRequireDefault(_consumationActions);
	
	var _CaloriesCountType = __webpack_require__(/*! ../../constants/CaloriesCountType */ 272);
	
	var CaloriesCountType = _interopRequireWildcard(_CaloriesCountType);
	
	var _ManageConsumationPageView = __webpack_require__(/*! ./ManageConsumationPageView */ 284);
	
	var _ManageConsumationPageView2 = _interopRequireDefault(_ManageConsumationPageView);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ManageConsumationPage = function (_React$Component) {
	    _inherits(ManageConsumationPage, _React$Component);
	
	    function ManageConsumationPage(props, context) {
	        _classCallCheck(this, ManageConsumationPage);
	
	        var _this = _possibleConstructorReturn(this, (ManageConsumationPage.__proto__ || Object.getPrototypeOf(ManageConsumationPage)).call(this, props, context));
	
	        _this.state = {
	            consumation: Object.assign({}, _this.props.consumation)
	        };
	
	        _this.handleOnChange = _this.handleOnChange.bind(_this);
	        _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
	        _this.handleOnFoodSelectChange = _this.handleOnFoodSelectChange.bind(_this);
	        return _this;
	    }
	
	    // Invoked after mapStateToProps func is called
	
	
	    _createClass(ManageConsumationPage, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.consumation.id !== nextProps.consumation.id) {
	                this.setState({ consumation: nextProps.consumation });
	            }
	        }
	    }, {
	        key: 'handleOnChange',
	        value: function handleOnChange(event) {
	            var consumation = Object.assign({}, this.state.consumation);
	            consumation[event.target.attributes['data-id'].value] = event.target.value;
	
	            this.setState({ consumation: consumation });
	        }
	    }, {
	        key: 'handleOnFoodSelectChange',
	        value: function handleOnFoodSelectChange(event) {
	            var consumation = Object.assign({}, this.state.consumation);
	            consumation.food = Object.assign({}, this.props.foods.find(function (food) {
	                return food.id == event.target.value * 1;
	            }));
	
	            this.setState({ consumation: consumation, selectedFoodType: consumation.food.type });
	        }
	    }, {
	        key: 'handleOnSubmit',
	        value: function handleOnSubmit() {
	            this.props.actions.saveConsumation(this.state.consumation);
	            this.props.history.push('/consumations');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_ManageConsumationPageView2.default, {
	                foods: this.props.foods,
	                consumation: this.state.consumation,
	                selectedType: this.state.selectedFoodType,
	                handleOnChange: this.handleOnChange,
	                handleOnSubmit: this.handleOnSubmit,
	                handleOnFoodSelectChange: this.handleOnFoodSelectChange });
	        }
	    }]);
	
	    return ManageConsumationPage;
	}(_react2.default.Component);
	
	function mapStateToProps(state, ownProps) {
	    var consumationId = ownProps.match.params.id * 1;
	    var todayDate = new Date();
	
	    var consumationToMapOnProps = {
	        date: todayDate,
	        food: state.foodsReducer[0],
	        quantity: 0
	    };
	
	    consumationId && state.consumationReducer.length && (consumationToMapOnProps = state.consumationReducer.find(function (consumation) {
	        return consumation.id === consumationId;
	    }));
	
	    return {
	        consumation: consumationToMapOnProps,
	        foods: state.foodsReducer,
	        selectedFoodType: consumationToMapOnProps.food && consumationToMapOnProps.food.type
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(_consumationActions2.default, dispatch)
	    };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManageConsumationPage);

/***/ },

/***/ 281:
/*!*******************************************!*\
  !*** ./app/actions/consumationActions.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getAllSuccess = getAllSuccess;
	exports.addSuccess = addSuccess;
	exports.editSuccess = editSuccess;
	exports.deleteSuccess = deleteSuccess;
	
	var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ 268);
	
	var ActionTypes = _interopRequireWildcard(_ActionTypes);
	
	var _consumationApi = __webpack_require__(/*! ../api/consumationApi */ 282);
	
	var _consumationApi2 = _interopRequireDefault(_consumationApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function getAllSuccess(consumations) {
	    return { type: ActionTypes.GET_ALL_CONSUMATIONS, consumations: consumations };
	}
	
	function addSuccess(consumation) {
	    return { type: ActionTypes.ADD_CONSUMATION, consumation: consumation };
	}
	
	function editSuccess(consumation) {
	    return { type: ActionTypes.EDIT_CONSUMATION, consumation: consumation };
	}
	
	function deleteSuccess(id) {
	    return { type: ActionTypes.DELETE_CONSUMATION, id: id };
	}
	
	exports.default = {
	    saveConsumation: function saveConsumation(consumation) {
	        return function (dispatch) {
	            _consumationApi2.default.save(consumation.id, consumation.date, consumation.food, consumation.quantity).then(function (response) {
	                response.isEditCommand ? dispatch(editSuccess(response.consumation)) : dispatch(addSuccess(response.consumation));
	            });
	        };
	    },
	    delete: function _delete(id) {
	        return function (dispatch) {
	            _consumationApi2.default.delete(id).then(function () {
	                return dispatch(deleteSuccess(id));
	            });
	        };
	    },
	    getAll: function getAll() {
	        return function (dispatch) {
	            return _consumationApi2.default.getAll().then(function (consumations) {
	                dispatch(getAllSuccess(consumations));
	            });
	        };
	    }
	};

/***/ },

/***/ 282:
/*!***********************************!*\
  !*** ./app/api/consumationApi.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dateFormatter = __webpack_require__(/*! ../utils/dateFormatter */ 283);
	
	var _dateFormatter2 = _interopRequireDefault(_dateFormatter);
	
	var _CaloriesCountType = __webpack_require__(/*! ../constants/CaloriesCountType */ 272);
	
	var CaloriesCountType = _interopRequireWildcard(_CaloriesCountType);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function () {
	    var api = {};
	
	    var remoteCallDelay = 500;
	
	    var consumation = _getConsumationFromStorage();
	    var idGenerator = consumation.length;
	
	    api.getAll = function () {
	        return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	                resolve([].concat(_toConsumableArray(consumation)));
	            }, remoteCallDelay);
	        });
	    };
	
	    api.save = function (id, date, food, quantity) {
	        return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	                var cosumationToSave = _isAddCommand(id) && _getFoodConsumation(food.id);
	                var isEditCommand = id || !!cosumationToSave;
	
	                cosumationToSave ? cosumationToSave = _increaseQuantity(cosumationToSave) : cosumationToSave = _addOrUpdate(id, date, food, quantity);
	
	                _updateConsumationStorage();
	                resolve({ consumation: cosumationToSave, isEditCommand: isEditCommand });
	            }, remoteCallDelay);
	        });
	
	        function _isAddCommand(id) {
	            return !id;
	        }
	
	        function _increaseQuantity(consum) {
	            var consumToUpdate = Object.assign({}, consum);
	            consumToUpdate.quantity += quantity * 1;
	            _calculateMacronutrients(consumToUpdate);
	            consumation[consumToUpdate.id - 1] = consumToUpdate;
	
	            return consumToUpdate;
	        }
	
	        function _addOrUpdate(id, date, food, quantity) {
	            var itemToSave = {
	                id: id || ++idGenerator,
	                date: _dateFormatter2.default.formatDate(date),
	                food: food,
	                quantity: quantity * 1
	            };
	
	            _calculateMacronutrients(itemToSave);
	
	            id ? consumation[id - 1] = itemToSave : consumation.push(itemToSave);
	
	            return itemToSave;
	        }
	
	        function _calculateMacronutrients(consumation) {
	            if (consumation.food.type === CaloriesCountType.PER_HUNDRED_GRAMS) {
	                Object.assign(consumation, {
	                    proteins: consumation.food.proteins * consumation.quantity / 100,
	                    carbs: consumation.food.carbs * consumation.quantity / 100,
	                    fats: consumation.food.fats * consumation.quantity / 100,
	                    calories: consumation.food.calories * consumation.quantity / 100
	                });
	            } else if (consumation.food.type === CaloriesCountType.PER_ITEM) {
	                Object.assign(consumation, {
	                    proteins: consumation.food.proteins * consumation.quantity,
	                    carbs: consumation.food.carbs * consumation.quantity,
	                    fats: consumation.food.fats * consumation.quantity,
	                    calories: consumation.food.calories * consumation.quantity
	                });
	            } else {
	                throw 'unsupported type';
	            }
	        }
	    };
	
	    api.delete = function (id) {
	        return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	                consumation = consumation.filter(function (consumation) {
	                    return consumation.id !== id;
	                });
	                _updateConsumationStorage();
	
	                resolve();
	            }, remoteCallDelay);
	        });
	    };
	
	    function _updateConsumationStorage() {
	        localStorage["consumation"] = JSON.stringify(consumation);
	    };
	
	    function _getConsumationFromStorage() {
	        return localStorage["consumation"] && JSON.parse(localStorage["consumation"]) || [];
	    };
	
	    function _getFoodConsumation(id) {
	        return consumation.find(function (consum) {
	            return consum.food.id === id;
	        });
	    }
	
	    return api;
	}();

/***/ },

/***/ 283:
/*!************************************!*\
  !*** ./app/utils/dateFormatter.js ***!
  \************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    var api = {};
	
	    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	    api.formatDate = function (date) {
	        if (monthNames.find(function (month) {
	            return date.toString().indexOf(month) >= 0;
	        })) {
	            return date;
	        }
	
	        var day = date.getDate();
	        var monthIndex = date.getMonth();
	        var year = date.getFullYear();
	
	        return day + ' ' + monthNames[monthIndex] + ' ' + year;
	    };
	
	    return api;
	}();

/***/ },

/***/ 284:
/*!*****************************************************************!*\
  !*** ./app/components/consumation/ManageConsumationPageView.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CaloriesCountType = __webpack_require__(/*! ../../constants/CaloriesCountType */ 272);
	
	var CaloriesCountType = _interopRequireWildcard(_CaloriesCountType);
	
	var _InputFormGroup = __webpack_require__(/*! ../HtmlHelpers/InputFormGroup */ 276);
	
	var _InputFormGroup2 = _interopRequireDefault(_InputFormGroup);
	
	var _ButtonFormGroup = __webpack_require__(/*! ../HtmlHelpers/ButtonFormGroup */ 277);
	
	var _ButtonFormGroup2 = _interopRequireDefault(_ButtonFormGroup);
	
	var _SelectFormGroup = __webpack_require__(/*! ../HtmlHelpers/SelectFormGroup */ 278);
	
	var _SelectFormGroup2 = _interopRequireDefault(_SelectFormGroup);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'h3',
	            { className: 'centered' },
	            'Add food quantity for today'
	        ),
	        _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	                'div',
	                { className: 'col-md-6 col-md-offset-3' },
	                _react2.default.createElement(_SelectFormGroup2.default, { id: 'foods-type-select', labelName: 'Food:',
	                    options: props.foods.map(function (food) {
	                        return { name: food.name, value: food.id };
	                    }),
	                    handleOnChange: props.handleOnFoodSelectChange }),
	                _react2.default.createElement(_InputFormGroup2.default, { type: 'number', id: 'quantity', value: props.consumation.quantity,
	                    labelName: props.selectedType === CaloriesCountType.PER_HUNDRED_GRAMS ? "Quantity in grams" : "Items number",
	                    handleOnChange: props.handleOnChange }),
	                _react2.default.createElement(_ButtonFormGroup2.default, { value: 'Add', handleOnSubmit: props.handleOnSubmit })
	            )
	        )
	    );
	};

/***/ },

/***/ 285:
/*!*******************************************************!*\
  !*** ./app/components/consumation/ConsumationPage.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 231);
	
	var _redux = __webpack_require__(/*! redux */ 240);
	
	var _underscore = __webpack_require__(/*! underscore */ 286);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _consumationActions = __webpack_require__(/*! ../../actions/consumationActions */ 281);
	
	var _consumationActions2 = _interopRequireDefault(_consumationActions);
	
	var _ConsumationPageView = __webpack_require__(/*! ./ConsumationPageView */ 287);
	
	var _ConsumationPageView2 = _interopRequireDefault(_ConsumationPageView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ConsumationPage = function (_React$Component) {
	    _inherits(ConsumationPage, _React$Component);
	
	    function ConsumationPage(props) {
	        _classCallCheck(this, ConsumationPage);
	
	        var _this = _possibleConstructorReturn(this, (ConsumationPage.__proto__ || Object.getPrototypeOf(ConsumationPage)).call(this, props));
	
	        _this.handleOnClick = _this.handleOnClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(ConsumationPage, [{
	        key: 'handleOnClick',
	        value: function handleOnClick(event) {
	            event.target.value === "Edit" && this.props.history.push('manage-consumation/' + event.target.attributes['data-consumation-id'].value);
	            event.target.value === "Delete" && this.props.actions.delete(event.target.attributes['data-consumation-id'].value * 1);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_ConsumationPageView2.default, { consumationsInfo: _formatConsumationData(this.props.consumations), handleOnClick: this.handleOnClick });
	        }
	    }]);
	
	    return ConsumationPage;
	}(_react2.default.Component);
	
	function mapStateToProps(state, ownProps) {
	    return {
	        consumations: state.consumationReducer
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(_consumationActions2.default, dispatch)
	    };
	}
	
	function _formatConsumationData(consumations) {
	    var groupedByDateConsumationsObj = _underscore2.default.groupBy(consumations, 'date');
	    var groupedByDateConsumationsArr = [];
	    var i = 0;
	
	    for (var date in groupedByDateConsumationsObj) {
	        groupedByDateConsumationsArr[i++] = { date: date, consumations: groupedByDateConsumationsObj[date] };
	    }
	
	    return _calculateTotalMacronutrients(groupedByDateConsumationsArr);
	}
	
	function _calculateTotalMacronutrients(consumationsByDay) {
	    return consumationsByDay.map(function (consum) {
	        consum.totalProteins;
	
	        consum.totalProteins = _calculateTotalMacroPerItem(consum.consumations, 'proteins');
	        consum.totalCarbs = _calculateTotalMacroPerItem(consum.consumations, 'carbs');
	        consum.totalFats = _calculateTotalMacroPerItem(consum.consumations, 'fats');
	        consum.totalCalories = _calculateTotalMacroPerItem(consum.consumations, 'calories');
	        var totalCalculatedCalories = consum.totalProteins * 4 + consum.totalCarbs * 4 + consum.totalFats * 9;
	        consum.percentProteins = consum.totalProteins * 4 / totalCalculatedCalories * 100 || 0;
	        consum.percentCarbs = consum.totalCarbs * 4 / totalCalculatedCalories * 100 || 0;
	        consum.percentFats = consum.totalFats * 9 / totalCalculatedCalories * 100 || 0;
	        return consum;
	    });
	}
	
	function _calculateTotalMacroPerItem(consumations, consumationPropName) {
	    var macroQuantity = 0;
	
	    consumations.forEach(function (x) {
	        macroQuantity += x[consumationPropName];
	    });
	    return macroQuantity || 0;
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ConsumationPage);

/***/ },

/***/ 287:
/*!***********************************************************!*\
  !*** ./app/components/consumation/ConsumationPageView.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CaloriesCountType = __webpack_require__(/*! ../../constants/CaloriesCountType */ 272);
	
	var CaloriesCountType = _interopRequireWildcard(_CaloriesCountType);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'h3',
	            { className: 'centered' },
	            'Consumations information'
	        ),
	        props.consumationsInfo.map(function (consumationByDate) {
	            return _react2.default.createElement(
	                'div',
	                { key: consumationByDate.date },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'Date: ',
	                    consumationByDate.date
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'table-responsive' },
	                    _react2.default.createElement(
	                        'table',
	                        { className: 'table table-striped' },
	                        _react2.default.createElement(
	                            'thead',
	                            null,
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Food'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Quantity'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Proteins'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Carbs'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Fats'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Calories'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'tbody',
	                            null,
	                            consumationByDate.consumations.map(function (consumation) {
	                                return _react2.default.createElement(
	                                    'tr',
	                                    { key: consumation.id },
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        consumation.food.name
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        consumation.quantity,
	                                        consumation.food.type === CaloriesCountType.PER_HUNDRED_GRAMS ? " gr." : " item(s)"
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        consumation.proteins
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        consumation.carbs
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        consumation.fats
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        consumation.calories
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        _react2.default.createElement('input', { type: 'button', className: 'btn btn-primary', value: 'Edit', 'data-consumation-id': consumation.id, onClick: props.handleOnClick })
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        _react2.default.createElement('input', { type: 'button', className: 'btn btn-primary', value: 'Delete', 'data-consumation-id': consumation.id, onClick: props.handleOnClick })
	                                    )
	                                );
	                            })
	                        ),
	                        _react2.default.createElement(
	                            'tfoot',
	                            null,
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Total:'
	                                ),
	                                _react2.default.createElement('th', null),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    consumationByDate.totalProteins.toFixed(2),
	                                    '(',
	                                    consumationByDate.percentProteins.toFixed(1),
	                                    '%)'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    consumationByDate.totalCarbs.toFixed(2),
	                                    '(',
	                                    consumationByDate.percentCarbs.toFixed(1),
	                                    '%)'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    consumationByDate.totalFats.toFixed(2),
	                                    '(',
	                                    consumationByDate.percentFats.toFixed(1),
	                                    '%)'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    consumationByDate.totalCalories.toFixed(2)
	                                ),
	                                _react2.default.createElement('th', null),
	                                _react2.default.createElement('th', null)
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement('hr', null)
	            );
	        })
	    );
	};

/***/ },

/***/ 288:
/*!**************************************!*\
  !*** ./app/components/Navigation.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 186);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Navigation = function (_React$Component) {
	    _inherits(Navigation, _React$Component);
	
	    function Navigation() {
	        _classCallCheck(this, Navigation);
	
	        return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
	    }
	
	    _createClass(Navigation, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'container-fluid' },
	                _react2.default.createElement(
	                    'nav',
	                    null,
	                    _react2.default.createElement(
	                        _reactRouterDom.Link,
	                        { to: '/calculator' },
	                        'Home'
	                    ),
	                    " | ",
	                    _react2.default.createElement(
	                        _reactRouterDom.Link,
	                        { to: '/calculator/foods' },
	                        'Foods'
	                    ),
	                    " | ",
	                    _react2.default.createElement(
	                        _reactRouterDom.Link,
	                        { to: '/calculator/manage-food' },
	                        'Add new food'
	                    ),
	                    " | ",
	                    _react2.default.createElement(
	                        _reactRouterDom.Link,
	                        { to: '/calculator/consumations' },
	                        'Daily consumation'
	                    ),
	                    " | ",
	                    _react2.default.createElement(
	                        _reactRouterDom.Link,
	                        { to: '/calculator/manage-consumation' },
	                        'Add daily consumation'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Navigation;
	}(_react2.default.Component);
	
	exports.default = Navigation;

/***/ },

/***/ 289:
/*!**********************************!*\
  !*** ./app/components/Footer.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	    return _react2.default.createElement(
	        "div",
	        { className: "footer" },
	        _react2.default.createElement(
	            "span",
	            null,
	            "Powered by:"
	        ),
	        _react2.default.createElement("img", { className: "technology-logo", src: "../../content/images/react.png" }),
	        _react2.default.createElement("img", { className: "technology-logo", src: "../../content/images/redux.png" }),
	        _react2.default.createElement("img", { className: "technology-logo", src: "../../content/images/bootstrap.svg" })
	    );
	};

/***/ },

/***/ 290:
/*!**************************************!*\
  !*** ./app/registerServiceWorker.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = register;
	exports.unregister = unregister;
	// In production, we register a service worker to serve assets from local cache.
	
	// This lets the app load faster on subsequent visits in production, and gives
	// it offline capabilities. However, it also means that developers (and users)
	// will only see deployed updates on the "N+1" visit to a page, since previously
	// cached resources are updated in the background.
	
	// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
	// This link also includes instructions on opting out of this behavior.
	
	var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
	// [::1] is the IPv6 localhost address.
	window.location.hostname === '[::1]' ||
	// 127.0.0.1/8 is considered localhost for IPv4.
	window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
	
	function register() {
	  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
	    // The URL constructor is available in all browsers that support SW.
	    var publicUrl = new URL(process.env.PUBLIC_URL, window.location);
	    if (publicUrl.origin !== window.location.origin) {
	      // Our service worker won't work if PUBLIC_URL is on a different origin
	      // from what our page is served on. This might happen if a CDN is used to
	      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
	      return;
	    }
	
	    window.addEventListener('load', function () {
	      var swUrl = process.env.PUBLIC_URL + '/service-worker.js';
	
	      if (!isLocalhost) {
	        // Is not local host. Just register service worker
	        registerValidSW(swUrl);
	      } else {
	        // This is running on localhost. Lets check if a service worker still exists or not.
	        checkValidServiceWorker(swUrl);
	      }
	    });
	  }
	}
	
	function registerValidSW(swUrl) {
	  navigator.serviceWorker.register(swUrl).then(function (registration) {
	    registration.onupdatefound = function () {
	      var installingWorker = registration.installing;
	      installingWorker.onstatechange = function () {
	        if (installingWorker.state === 'installed') {
	          if (navigator.serviceWorker.controller) {
	            // At this point, the old content will have been purged and
	            // the fresh content will have been added to the cache.
	            // It's the perfect time to display a "New content is
	            // available; please refresh." message in your web app.
	            console.log('New content is available; please refresh.');
	          } else {
	            // At this point, everything has been precached.
	            // It's the perfect time to display a
	            // "Content is cached for offline use." message.
	            console.log('Content is cached for offline use.');
	          }
	        }
	      };
	    };
	  }).catch(function (error) {
	    console.error('Error during service worker registration:', error);
	  });
	}
	
	function checkValidServiceWorker(swUrl) {
	  // Check if the service worker can be found. If it can't reload the page.
	  fetch(swUrl).then(function (response) {
	    // Ensure service worker exists, and that we really are getting a JS file.
	    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
	      // No service worker found. Probably a different app. Reload the page.
	      navigator.serviceWorker.ready.then(function (registration) {
	        registration.unregister().then(function () {
	          window.location.reload();
	        });
	      });
	    } else {
	      // Service worker found. Proceed as normal.
	      registerValidSW(swUrl);
	    }
	  }).catch(function () {
	    console.log('No internet connection found. App is running in offline mode.');
	  });
	}
	
	function unregister() {
	  if ('serviceWorker' in navigator) {
	    navigator.serviceWorker.ready.then(function (registration) {
	      registration.unregister();
	    });
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },

/***/ 291:
/*!****************************************!*\
  !*** ./~/underscore/underscore-min.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)}; true?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"=="function"&&__webpack_require__(/*! !webpack amd options */ 292)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return m}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}).call(this);
	//# sourceMappingURL=underscore-min.map

/***/ },

/***/ 292:
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },

/***/ 293:
/*!*************************************!*\
  !*** ./app/store/configureStore.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(/*! redux */ 240);
	
	var _rootReducer = __webpack_require__(/*! ../reducers/rootReducer */ 294);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 297);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxImmutableStateInvariant = __webpack_require__(/*! redux-immutable-state-invariant */ 298);
	
	var _reduxImmutableStateInvariant2 = _interopRequireDefault(_reduxImmutableStateInvariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configureStore(initialState) {
	    return (0, _redux.createStore)(_rootReducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxImmutableStateInvariant2.default)()));
	}
	/*
	Redux middleware that spits an error on you when you try to mutate your state 
	either inside a dispatch or between dispatches. For development use only!
	*/

/***/ },

/***/ 294:
/*!*************************************!*\
  !*** ./app/reducers/rootReducer.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 240);
	
	var _foodsReducer = __webpack_require__(/*! ./foodsReducer */ 295);
	
	var _foodsReducer2 = _interopRequireDefault(_foodsReducer);
	
	var _consumationReducer = __webpack_require__(/*! ./consumationReducer */ 296);
	
	var _consumationReducer2 = _interopRequireDefault(_consumationReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _redux.combineReducers)({ foodsReducer: _foodsReducer2.default, consumationReducer: _consumationReducer2.default });

/***/ },

/***/ 295:
/*!**************************************!*\
  !*** ./app/reducers/foodsReducer.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = foodsReducer;
	
	var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ 268);
	
	var ActionTypes = _interopRequireWildcard(_ActionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function foodsReducer() {
	    var foodsState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case ActionTypes.ADD_FOOD:
	            return [].concat(_toConsumableArray(foodsState), [Object.assign({}, action.food)]);
	        case ActionTypes.EDIT_FOOD:
	            return [].concat(_toConsumableArray(foodsState.filter(function (food) {
	                return food.id !== action.food.id;
	            })), [Object.assign({}, action.food)]);
	        case ActionTypes.DELETE_FOOD:
	            return foodsState.filter(function (food) {
	                return food.id !== action.id;
	            });
	        case ActionTypes.GET_ALL_FOODS:
	            return action.foods;
	        default:
	            return foodsState;
	    }
	}

/***/ },

/***/ 296:
/*!********************************************!*\
  !*** ./app/reducers/consumationReducer.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = consumationReducer;
	
	var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ 268);
	
	var ActionTypes = _interopRequireWildcard(_ActionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function consumationReducer() {
	    var consumationState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case ActionTypes.ADD_CONSUMATION:
	            return [].concat(_toConsumableArray(consumationState), [Object.assign({}, action.consumation)]);
	        case ActionTypes.EDIT_CONSUMATION:
	            return [].concat(_toConsumableArray(consumationState.filter(function (consumation) {
	                return consumation.id !== action.consumation.id;
	            })), [Object.assign({}, action.consumation)]);
	        case ActionTypes.DELETE_CONSUMATION:
	            return consumationState.filter(function (consumation) {
	                return consumation.id !== action.id;
	            });
	        case ActionTypes.GET_ALL_CONSUMATIONS:
	            return action.consumations;
	        default:
	            return consumationState;
	    }
	}

/***/ }

});
//# sourceMappingURL=main.js.map
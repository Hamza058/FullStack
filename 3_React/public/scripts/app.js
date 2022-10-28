"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var root = document.getElementById("root");

var ES6Person = /*#__PURE__*/function () {
  function ES6Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Misafir";
    var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getFullYear();
    var month = arguments.length > 2 ? arguments[2] : undefined;
    var day = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, ES6Person);

    this.name = name;
    this.year = year;
    this.day = day;
    this.month = month;
    console.log(this.name, this.year);
  }

  _createClass(ES6Person, [{
    key: "yasHesapla",
    value: function yasHesapla() {
      var hesap = new Date().getFullYear() - this.year;
      return hesap == 0 || hesap < 0 ? "Ya\u015F\u0131n\u0131z: ".concat(hesap, " d\xFCnyaya go\u015Fgeldiniz") : "Ya\u015F\u0131n\u0131z: ".concat(hesap);
    }
  }, {
    key: "dogumGunu",
    value: function dogumGunu() {
      var month = new Date().getMonth() - this.month + 1;
      var day = new Date().getDate() - this.day;
      return month <= 0 ? "Do\u011Fum g\xFCn\xFCn\xFCz ".concat(-1 * month, " ay ").concat(-1 * day, " g\xFCn sonra") : "Do\u011Fum g\xFCn\xFCn\xFCz Ge\xE7mi\u015F";
    }
  }]);

  return ES6Person;
}();

var Student = /*#__PURE__*/function (_ES6Person) {
  _inherits(Student, _ES6Person);

  var _super = _createSuper(Student);

  function Student(name, year, studentNumber) {
    var _this;

    _classCallCheck(this, Student);

    _this = _super.call(this, name, year);
    _this.studentNumber = studentNumber;
    return _this;
  }

  _createClass(Student, [{
    key: "greeting",
    value: function greeting(text) {
      return "".concat(text, " Benim ad\u0131m ").concat(this.name, " ya\u015F\u0131m ").concat(this.yasHesapla(this.year));
    }
  }]);

  return Student;
}(ES6Person);

var es6p = new ES6Person("Hamza", 1234, 12, 30);
console.log(es6p, es6p.dogumGunu());
var std = new Student("Ali", 1993, 21);
console.log(std.greeting("Sa"));

var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  var _super2 = _createSuper(TodoApp);

  function TodoApp(props) {
    var _this2;

    _classCallCheck(this, TodoApp);

    _this2 = _super2.call(this, props);
    _this2.clearItems = _this2.clearItems.bind(_assertThisInitialized(_this2));
    /* state aracılığıla */

    _this2.addItem = _this2.addItem.bind(_assertThisInitialized(_this2));
    _this2.deleteItem = _this2.deleteItem.bind(_assertThisInitialized(_this2));
    _this2.state = {
      items: ["item1", "item2", "item3"]
      /* props aracılığıla */

    };
    return _this2;
  }

  _createClass(TodoApp, [{
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (!item) {
        return "boş değer ekleyemezsiniz";
      } else if (this.state.items.includes(item)) {
        return "aynı elemanı ekleyemezsiniz";
      }

      this.setState(function (prevState) {
        return {
          items: prevState.items.concat(item)
        };
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        });
        return {
          items: arr
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var app = {
        title: "Todo Application BackEnd",
        description: "Lorem, ipsum 2."
      };
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
        title: app.title,
        description: app.description
      }), /*#__PURE__*/React.createElement(TodoList, {
        deleteItem: this.deleteItem,
        items: this.state.items,
        clearItems: this.clearItems
      }), /*#__PURE__*/React.createElement(Action, {
        addItem: this.addItem
      }));
    }
  }]);

  return TodoApp;
}(React.Component);

var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);

  var _super3 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super3.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("div", null, this.props.description));
    }
  }]);

  return Header;
}(React.Component);

var TodoList = /*#__PURE__*/function (_React$Component3) {
  _inherits(TodoList, _React$Component3);

  var _super4 = _createSuper(TodoList);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _super4.apply(this, arguments);
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, this.props.items.map(function (item, index) {
        return /*#__PURE__*/React.createElement(TodoItem, {
          deleteItem: _this3.props.deleteItem,
          key: index,
          item: item
        });
      })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.clearItems
      }, "Clear Items")));
    }
  }]);

  return TodoList;
}(React.Component);

var TodoItem = /*#__PURE__*/function (_React$Component4) {
  _inherits(TodoItem, _React$Component4);

  var _super5 = _createSuper(TodoItem);

  function TodoItem(props) {
    var _this4;

    _classCallCheck(this, TodoItem);

    _this4 = _super5.call(this, props);
    _this4.deleteItem = _this4.deleteItem.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(TodoItem, [{
    key: "deleteItem",
    value: function deleteItem() {
      console.log("delete");
      this.props.deleteItem(this.props.item);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", null, this.props.item, /*#__PURE__*/React.createElement("button", {
        onClick: this.deleteItem
      }, "X"));
    }
  }]);

  return TodoItem;
}(React.Component);

var Action = /*#__PURE__*/function (_React$Component5) {
  _inherits(Action, _React$Component5);

  var _super6 = _createSuper(Action);

  function Action(props) {
    var _this5;

    _classCallCheck(this, Action);

    _this5 = _super6.call(this, props);
    _this5.onFormSubmit = _this5.onFormSubmit.bind(_assertThisInitialized(_this5));
    _this5.state = {
      err: ''
    };
    return _this5;
  }

  _createClass(Action, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.txtItem.value.trim();
      var items = [];
      item.split(' ').forEach(element);

      function element(ite) {
        items.push(ite);
      }

      var errr = this.props.addItem(item);
      this.setState({
        err: errr
      });
      e.target.elements.txtItem.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.err && /*#__PURE__*/React.createElement("p", {
        style: {
          color: "red"
        }
      }, this.state.err), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "txtItem",
        id: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Add Item")));
    }
  }]);

  return Action;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(TodoApp, null), root);

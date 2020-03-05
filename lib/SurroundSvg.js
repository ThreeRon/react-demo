"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SurroundSvg = /*#__PURE__*/function (_Component) {
  _inherits(SurroundSvg, _Component);

  function SurroundSvg() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SurroundSvg);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SurroundSvg)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getPath", function (cur) {
      // 这里在通过 圆心(x0, y0) r ,拼接好路径数据
      var _this$centerXY = _this.centerXY,
          x0 = _this$centerXY.x0,
          y0 = _this$centerXY.y0;
      var r = _this.props.radius;
      var str = 'M';
      var isLargeArc = cur.relayPer > 50 ? 1 : 0;
      var startX = cur.start.x * r + x0;
      var startY = cur.start.y * r + y0;
      var endX = cur.end.x * r + x0;
      var endY = cur.end.y * r + y0;
      str += " ".concat(startX, " ").concat(startY, " ") + "A" + " ".concat(r, " ").concat(r, " ") + "0" + " ".concat(isLargeArc, " ") + "1" + " ".concat(endX, " ").concat(endY);
      return {
        d: str,
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY
      };
    });

    return _this;
  }

  _createClass(SurroundSvg, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          strokeWidth = _this$props.strokeWidth,
          _onClick = _this$props.onClick;
      return _react["default"].createElement("svg", {
        width: width,
        height: height,
        viewBox: "0 0 ".concat(width, " ").concat(height),
        style: {
          display: 'block',
          margin: '0 auto'
        }
      }, _react["default"].createElement("g", null, this.arcList.map(function (p, index) {
        var _this2$getPath = _this2.getPath(p),
            d = _this2$getPath.d,
            rest = _objectWithoutProperties(_this2$getPath, ["d"]);

        return _react["default"].createElement("path", {
          key: "".concat(index),
          d: d,
          stroke: p.source.bgColor,
          strokeWidth: strokeWidth,
          fill: "none",
          onClick: function onClick(e) {
            _onClick(p, rest, e);
          },
          style: {
            cursor: 'pointer'
          }
        });
      })));
    }
  }, {
    key: "centerXY",
    get: function get() {
      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height;
      return {
        x0: width / 2,
        y0: height / 2
      };
    }
  }, {
    key: "arcList",
    get: function get() {
      var data = this.props.data; // 这里按照 圆心点为(0,0), r 为 1 来处理

      var newList = [];
      data.forEach(function (item, index) {
        var obj = {};
        var per = item.percent; // 保留真实占比,后面需要判断是否是大小弧

        obj.relayPer = per;

        if (index !== 0) {
          per += newList[index - 1].per;
        } // 因为是拼接，所以本次的终点要在之前的基础上，所要要累加占比


        obj.per = per;
        var deg = per / 100 * Math.PI * 2;
        obj.start = {};
        obj.end = {};

        if (index === 0) {
          obj.start.x = Math.cos(0);
          obj.start.y = Math.sin(0);
        } else {
          obj.start = newList[index - 1].end;
        }

        obj.end.x = Math.cos(deg);
        obj.end.y = Math.sin(deg);
        newList.push(_objectSpread({}, obj, {
          deg: deg,
          source: item
        }));
      });
      return newList;
    }
  }]);

  return SurroundSvg;
}(_react.Component);

exports["default"] = SurroundSvg;
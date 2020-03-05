"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SurroundSvg = _interopRequireDefault(require("./SurroundSvg"));

var _SurroundMenu = _interopRequireDefault(require("./SurroundMenu.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SurroundMenu = /*#__PURE__*/function (_Component) {
  _inherits(SurroundMenu, _Component);

  function SurroundMenu(props) {
    var _this;

    _classCallCheck(this, SurroundMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SurroundMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClickMenu", function (_ref, _1, e) {
      var source = _ref.source;
      e.stopPropagation();
      var showLimitMenu = _this.state.showLimitMenu;
      var show = showLimitMenu;
      if (source.menuValue === 'more-XXX' && !showLimitMenu) show = true;else show = false;

      _this.setState({
        showLimitMenu: show
      });

      var onClick = _this.props.onClick;
      onClick(source);
    });

    _this.state = {
      showLimitMenu: false
    };
    return _this;
  }

  _createClass(SurroundMenu, [{
    key: "calcPathData",
    value: function calcPathData(surroundData) {
      var _this$props = this.props,
          spaceColor = _this$props.spaceColor,
          defaultColor = _this$props.defaultColor,
          spaceSize = _this$props.spaceSize;
      var list = [];
      var size = surroundData.length;
      var menuPercent = (100 - size * spaceSize) / size;
      surroundData.forEach(function (i) {
        list.push(_objectSpread({
          percent: menuPercent,
          bgColor: defaultColor
        }, i));
        list.push({
          percent: spaceSize,
          bgColor: spaceColor
        });
      });
      return list;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var showLimitMenu = this.state.showLimitMenu;
      var _this$props2 = this.props,
          limit = _this$props2.limit,
          radius = _this$props2.radius,
          strokeWidth = _this$props2.strokeWidth,
          defaultColor = _this$props2.defaultColor,
          style = _this$props2.style;
      var perAngle = 360 / this.menuSize;
      var startAngle = perAngle / 2;
      var centerCircleRadius = radius - strokeWidth / 2;
      var _this$menuData = this.menuData,
          surroundData = _this$menuData.surroundData,
          limitData = _this$menuData.limitData;
      var width = 2 * radius;
      var height = width;

      var popMenu = showLimitMenu && _react["default"].createElement("div", {
        className: _SurroundMenu["default"].limitWrapper
      }, _react["default"].createElement("div", null, limitData.map(function (i) {
        return _react["default"].createElement("div", {
          style: {
            background: i.bgColor || defaultColor
          },
          key: i.menuValue,
          className: _SurroundMenu["default"].limitText,
          onClick: function onClick(e) {
            return _this2.onClickMenu({
              source: i
            }, null, e);
          }
        }, i.menuName);
      })));

      return _react["default"].createElement("div", {
        className: _SurroundMenu["default"].root,
        style: _objectSpread({}, style, {
          width: width,
          height: height
        }),
        onClick: function onClick() {
          return _this2.setState({
            showLimitMenu: false
          });
        }
      }, _react["default"].createElement("div", {
        className: _SurroundMenu["default"].bgWrapper
      }, _react["default"].createElement(_SurroundSvg["default"], {
        data: this.calcPathData(surroundData),
        limit: limit,
        width: width,
        height: height,
        radius: centerCircleRadius,
        strokeWidth: strokeWidth,
        onClick: this.onClickMenu
      })), _react["default"].createElement("div", {
        className: _SurroundMenu["default"].textWrapper
      }, surroundData.map(function (i, index) {
        var angle = startAngle + perAngle * index;
        return _react["default"].createElement("span", {
          key: "".concat(index),
          className: _SurroundMenu["default"].menuText,
          style: {
            transform: "rotateZ(".concat(angle, "deg) translateX(").concat(centerCircleRadius, "px)") // 先旋转，再平移

          },
          onClick: function onClick(e) {
            return _this2.onClickMenu({
              source: i
            }, null, e);
          }
        }, _react["default"].createElement("span", {
          style: {
            display: 'block',
            transform: "rotateZ(".concat(-angle + 90, "deg)") // 画布逆时针90度，所以这里要顺时针90度进行抵消

          }
        }, i.menuName, i.menuValue === 'more-XXX' && popMenu));
      })));
    }
  }, {
    key: "menuSize",
    get: function get() {
      var _this$props3 = this.props,
          data = _this$props3.data,
          limit = _this$props3.limit;
      return data.length > limit ? limit : data.length;
    }
  }, {
    key: "menuData",
    get: function get() {
      var _this$props4 = this.props,
          data = _this$props4.data,
          limit = _this$props4.limit,
          limitPosition = _this$props4.limitPosition,
          limitText = _this$props4.limitText;

      if (data.length <= limit) {
        return {
          surroundData: data,
          limitData: []
        };
      }

      var surroundData = data.slice(0, limit - 1);
      var limitData = data.slice(limit - 1, data.length);
      var limitOperator = {
        menuName: limitText,
        menuValue: 'more-XXX'
      };

      if (limitPosition) {
        surroundData.splice(limitPosition, 0, limitOperator);
        return {
          surroundData: surroundData,
          limitData: limitData
        };
      }

      return {
        limitData: limitData,
        surroundData: surroundData.concat(limitOperator)
      };
    }
    /**
     * 点击菜单
     */

  }]);

  return SurroundMenu;
}(_react.Component);

exports["default"] = SurroundMenu;
SurroundMenu.propTypes = {
  /** 数据 */
  data: _propTypes["default"].array,

  /** 菜单环形现象最多菜单数，超出limit则伸缩 */
  limit: _propTypes["default"].number,

  /** 超出limit的伸缩菜单位置 */
  limitPosition: _propTypes["default"].number,

  /** 超出limit部分统一的文本 */
  limitText: _propTypes["default"].string,

  /** 内环的半径 */
  radius: _propTypes["default"].number,

  /** 环形图的粗度 */
  strokeWidth: _propTypes["default"].number,

  /** 环形间的间距颜色 */
  spaceColor: _propTypes["default"].string,

  /** 环形间是否要分割 */
  spaceSize: _propTypes["default"].number,

  /** 环形的默认颜色，当没有设置单个环块的颜色时有效 */
  defaultColor: _propTypes["default"].string,

  /** 点击某个环块时触发事件 */
  onClick: _propTypes["default"].func,

  /** 根元素样式表 */
  style: _propTypes["default"].object
};
SurroundMenu.defaultProps = {
  data: [],
  limit: 4,
  limitPosition: undefined,
  limitText: '更多',
  radius: 250,
  strokeWidth: 100,
  spaceColor: '#fff',
  spaceSize: 0.1,
  defaultColor: 'rgba(0, 0, 0, .3)',
  onClick: function onClick() {},
  style: {}
};
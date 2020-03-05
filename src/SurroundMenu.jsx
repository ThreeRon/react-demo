import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SurroundSvg from './SurroundSvg';
import styles from './SurroundMenu.less';

export default class SurroundMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLimitMenu: false,
    };
  }

  get menuSize() {
    const { data, limit } = this.props;
    return data.length > limit ? limit : data.length;
  }

  get menuData() {
    const { data, limit, limitPosition, limitText } = this.props;
    if (data.length <= limit) {
      return { surroundData: data, limitData: [] };
    }

    const surroundData = data.slice(0, limit - 1);
    const limitData = data.slice(limit - 1, data.length);
    const limitOperator = { menuName: limitText, menuValue: 'more-XXX' };

    if (limitPosition) {
      surroundData.splice(limitPosition, 0, limitOperator);
      return {
        surroundData,
        limitData,
      };
    }

    return { limitData, surroundData: surroundData.concat(limitOperator) };
  }

  /**
   * 点击菜单
   */
  onClickMenu = ({ source }, _1, e) => {
    e.stopPropagation();
    const { showLimitMenu } = this.state;
    let show = showLimitMenu;
    if (source.menuValue === 'more-XXX' && !showLimitMenu) show = true;
    else show = false;
    this.setState({ showLimitMenu: show });

    const { onClick } = this.props;
    onClick(source);
  };

  calcPathData(surroundData) {
    const { spaceColor, defaultColor, spaceSize } = this.props;
    const list = [];
    const size = surroundData.length;
    const menuPercent = (100 - size * spaceSize) / size;
    surroundData.forEach(i => {
      list.push({ percent: menuPercent, bgColor: defaultColor, ...i });
      list.push({ percent: spaceSize, bgColor: spaceColor });
    });
    return list;
  }

  render() {
    const { showLimitMenu } = this.state;
    const { limit, radius, strokeWidth, defaultColor, style } = this.props;

    const perAngle = 360 / this.menuSize;
    const startAngle = perAngle / 2;
    const centerCircleRadius = radius - strokeWidth / 2;
    const { surroundData, limitData } = this.menuData;
    const width = 2 * radius;
    const height = width;

    const popMenu = showLimitMenu && (
      <div className={styles.limitWrapper}>
        <div>
          {limitData.map(i => {
            return (
              <div
                style={{ background: i.bgColor || defaultColor }}
                key={i.menuValue}
                className={styles.limitText}
                onClick={e => this.onClickMenu({ source: i }, null, e)}
              >
                {i.menuName}
              </div>
            );
          })}
        </div>
      </div>
    );

    return (
      <div
        className={styles.root}
        style={{ ...style, width, height }}
        onClick={() => this.setState({ showLimitMenu: false })}
      >
        {/* 背景 */}
        <div className={styles.bgWrapper}>
          <SurroundSvg
            data={this.calcPathData(surroundData)}
            limit={limit}
            width={width}
            height={height}
            radius={centerCircleRadius}
            strokeWidth={strokeWidth}
            onClick={this.onClickMenu}
          />
        </div>

        {/* 菜单数据 */}
        <div className={styles.textWrapper}>
          {surroundData.map((i, index) => {
            const angle = startAngle + perAngle * index;
            return (
              <span
                key={`${index}`}
                className={styles.menuText}
                style={{
                  transform: `rotateZ(${angle}deg) translateX(${centerCircleRadius}px)`, // 先旋转，再平移
                }}
                onClick={e => this.onClickMenu({ source: i }, null, e)}
              >
                <span
                  style={{
                    display: 'block',
                    transform: `rotateZ(${-angle + 90}deg)`, // 画布逆时针90度，所以这里要顺时针90度进行抵消
                  }}
                >
                  {i.menuName}
                  {i.menuValue === 'more-XXX' && popMenu}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

SurroundMenu.propTypes = {
  /** 数据 */
  data: PropTypes.array,
  /** 菜单环形现象最多菜单数，超出limit则伸缩 */
  limit: PropTypes.number,
  /** 超出limit的伸缩菜单位置 */
  limitPosition: PropTypes.number,
  /** 超出limit部分统一的文本 */
  limitText: PropTypes.string,
  /** 内环的半径 */
  radius: PropTypes.number,
  /** 环形图的粗度 */
  strokeWidth: PropTypes.number,
  /** 环形间的间距颜色 */
  spaceColor: PropTypes.string,
  /** 环形间是否要分割 */
  spaceSize: PropTypes.number,
  /** 环形的默认颜色，当没有设置单个环块的颜色时有效 */
  defaultColor: PropTypes.string,
  /** 点击某个环块时触发事件 */
  onClick: PropTypes.func,
  /** 根元素样式表 */
  style: PropTypes.object,
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
  onClick: () => {},
  style: {},
};

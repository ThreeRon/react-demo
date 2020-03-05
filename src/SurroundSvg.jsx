import React, { Component } from 'react';

export default class SurroundSvg extends Component {
  get centerXY() {
    const { width, height } = this.props;
    return { x0: width / 2, y0: height / 2 };
  }

  get arcList() {
    const { data } = this.props;
    // 这里按照 圆心点为(0,0), r 为 1 来处理
    const arcList = [];
    data.forEach((item, index) => {
      const { percent } = item;
      const prevArcObj = arcList[index - 1] || {};
      const percentAddPrev =
        index !== 0 ? prevArcObj.percentAddPrev + percent : percent;
      const deg = (percentAddPrev / 100) * Math.PI * 2;

      const arcObj = {
        percent,
        percentAddPrev,
        deg,
        start:
          index === 0
            ? {
                x: Math.cos(0),
                y: Math.sin(0),
              }
            : prevArcObj.end,
        end: {
          x: Math.cos(deg),
          y: Math.sin(deg),
        },
      };

      arcList.push({ ...arcObj, source: item });
    });
    return arcList;
  }

  getPath = cur => {
    // 这里在通过 圆心(x0, y0) r ,拼接好路径数据
    const { x0, y0 } = this.centerXY;
    const { radius: r } = this.props;
    // 大小弧判断
    const isLargeArc = cur.percent > 50 ? 1 : 0;
    const startX = cur.start.x * r + x0;
    const startY = cur.start.y * r + y0;
    const endX = cur.end.x * r + x0;
    const endY = cur.end.y * r + y0;
    const path = `M ${startX} ${startY} A  ${r} ${r} 0 ${isLargeArc} 1 ${endX} ${endY}`;
    return { d: path, startX, startY, endX, endY };
  };

  render() {
    const { width, height, strokeWidth, onClick } = this.props;
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{
          display: 'block',
          margin: '0 auto',
        }}
      >
        <g>
          {this.arcList.map((p, index) => {
            const { d, ...rest } = this.getPath(p);
            return (
              <path
                key={`${index}`}
                d={d}
                stroke={p.source.bgColor}
                strokeWidth={strokeWidth}
                fill="none"
                onClick={e => {
                  onClick(p, rest, e);
                }}
                style={{ cursor: 'pointer' }}
              />
            );
          })}
        </g>
      </svg>
    );
  }
}

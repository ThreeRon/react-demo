# react-SurroundMenu

**环形菜单组件**

<img style="width:350px;height:300px" src="https://raw.githubusercontent.com/ThreeRon/react-surroundMenu/master/example/demo-01.jpg"   />

## Installation

```javascript
npm install @threeron/react-surround-menu
```

## Usage

```javascript
import SurroundMenu from 'react-surround-menu';
```

```javascript
const menuData = [
  {
    menuName: <span>菜单一</span>,
    menuValue: '1',
    bgColor: 'rgba(0, 0, 0, 0.2)',
  },
  {
    menuName: <span>菜单二</span>,
    menuValue: '2',
    bgColor: 'rgba(0, 0, 0, 0.3)',
  },
  {
    menuName: <span>菜单三</span>,
    menuValue: '3',
    bgColor: 'rgba(0, 0, 0, 0.4)',
  },
  {
    menuName: <span>菜单四</span>,
    menuValue: '4',
    bgColor: 'rgba(0, 0, 0, 0.6)',
  },
  {
    menuName: <span>菜单五</span>,
    menuValue: '5',
    bgColor: 'rgba(0, 0, 0, 0.6)',
  },
  {
    menuName: <span>菜单六</span>,
    menuValue: '6',
    bgColor: 'rgba(0, 0, 0, 0.7)',
  },
  {
    menuName: <span>菜单七</span>,
    menuValue: '7',
    bgColor: 'rgba(0, 0, 0, 0.8)',
  },
];

<SurroundMenu
  style={{ margin: 'auto' }}
  data={menuData}
  limit={6}
  radius={200}
  strokeWidth={100}
  limitPosition={1}
  spaceColor="transparent"
  onClick={e => console.log('点击', e)}
/>;
```

## Props

| 参数名称      | 说明                                                    | 类型                                       | 默认值            |
| ------------- | ------------------------------------------------------- | ------------------------------------------ | ----------------- |
| data          | 数据                                                    | array[{menuName, menuValue, bgColor, ...}] | []                |
| limit         | 菜单环形现象最多菜单数，超出 limit 则伸缩               | number                                     | 4                 |
| limitPosition | 超出 limit 的伸缩菜单位置                               | number                                     |                   |
| limitText     | 超出 limit 部分统一的文本                               | string                                     | 更多              |
| radius        | 内环的半径                                              | number                                     | 250               |
| strokeWidth   | 环形图的宽                                              | number                                     | 100               |
| spaceColor    | 环形间的间距颜色                                        | string                                     | #fff              |
| spaceSize     | 环形间分割的宽                                          | number                                     | 0.1               |
| defaultColor  | 环形的默认颜色，当没有设置单个环块 bgColor 的颜色时有效 | string                                     | rgba(0, 0, 0, .3) |
| onClick       | 点击某个环块时触发事件                                  | func                                       | () =>{}           |
| style         | 根元素样式表                                            | object                                     | {}                |

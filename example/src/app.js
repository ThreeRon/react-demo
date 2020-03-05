import React from "react";
import { render } from "react-dom";
import SurroundMenu from "../../src";

const menuData = [
  { menuName: <span>菜单一</span>, menuValue: "1", bgColor: 'rgba(0, 0, 0, 0.2)' },
  { menuName: <span>菜单二</span>, menuValue: "2", bgColor: 'rgba(0, 0, 0, 0.3)' },
  { menuName: <span>菜单三</span>, menuValue: "3", bgColor: 'rgba(0, 0, 0, 0.4)' },
  { menuName: <span>菜单四</span>, menuValue: "4", bgColor: 'rgba(0, 0, 0, 0.6)' },
  { menuName: <span>菜单五</span>, menuValue: "5", bgColor: 'rgba(0, 0, 0, 0.6)' },
  { menuName: <span>菜单六</span>, menuValue: "6", bgColor: 'rgba(0, 0, 0, 0.7)' },
  { menuName: <span>菜单七</span>, menuValue: "7", bgColor: 'rgba(0, 0, 0, 0.8)' },
]


const App = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>环形菜单</h3>
      <SurroundMenu
        style={{ margin: "auto" }}
        data={menuData}
        limit={6}
        radius={200}
        strokeWidth={100}
        limitPosition={1}
        spaceColor="transparent"
        onClick={e => console.log('点击', e)}
      />
    </div>
  );
};
render(<App />, document.getElementById("root"));
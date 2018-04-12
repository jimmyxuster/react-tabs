import React, { Component } from 'react';
import Tab from './Tab';
import './style.scss';
import TabPane from "./TabPane";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }
  render() {
    return (
      <div className="App">
          <Tab defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
              <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
              <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
              <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
          </Tab>
      </div>
    );
  }
}

export default App;

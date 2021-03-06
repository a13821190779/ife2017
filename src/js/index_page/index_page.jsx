import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from "../components/home/home.jsx";

import LazyBundle from "../util/lazybundle.jsx";//按需加载中间件

require("babel-polyfill");//如果使用了es6/es7的最新的API则加上这句话，以兼容老版本浏览器





class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/ife/" exact component={Home}></Route>
            {/*有趣的鼠标hover*/}
            <Route path="/ife/suspension" render={(props) => {
              return <LazyBundle {...props} component={System.import("../components/suspension/suspension.jsx")}></LazyBundle>
            }}></Route>

            {/*vue1*/}
            <Route path="/ife/dataBind1" render={(props) => {
              return <LazyBundle {...props} component={System.import("../components/dataBind1/dataBind1.jsx")}></LazyBundle>
            }}></Route>

            {/*vue2*/}
            <Route path="/ife/dataBind2" render={(props) => {
              return <LazyBundle {...props} component={System.import("../components/dataBind2/dataBind2.jsx")}></LazyBundle>
            }}></Route>

            {/*饼状loading图*/}
            <Route path="/ife/pieLoading" render={(props) => {
              return <LazyBundle {...props} component={System.import("../components/pieLoading/pieLoading.jsx")}></LazyBundle>
            }}></Route>

            {/*WebGL1*/}
            <Route path="/ife/webgl1" render={(props) => {
              return <LazyBundle {...props} component={System.import("../components/webgl1/webgl1.jsx")}></LazyBundle>
            }}></Route>

            {/*WebGL2*/}
            <Route path="/ife/webgl2" render={(props) => {
              return <LazyBundle {...props} component={System.import("../components/webgl2/webgl2.jsx")}></LazyBundle>
            }}></Route>

            {/*WebGL2*/}
            <Route path="/ife/md" render={(props) => {
              return <LazyBundle {...props} component={System.import("../components/md/md.jsx")}></LazyBundle>
            }}></Route>


          </div>
        </Router>
      </div>
    );
  }
}

export default IndexPage;

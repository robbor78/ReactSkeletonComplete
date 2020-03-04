import React, { Component } from 'react';
import { Route, NavLink, HashRouter, Redirect } from 'react-router-dom'
import Search from './components/Search.js';
import Tab2 from './components/Tab2.js';
import Counter from './components/Counter.js';
import { connect } from 'react-redux';

class Main extends Component {
  render() {

    const styleList = {
      // listStyleType: 'none',
      // margin: 0,
      // padding: 0,
      // overflow: 'hidden',
      // backgroundColor: '#000000'
    };

    const styleItem = {
      // float: 'left',
      // color: 'white',
      // backgroundColor: '#000000'
    };

    return (
      <HashRouter>
        <ul style={styleList}>
          <li style={styleItem}><NavLink exact to="/Search">Search</NavLink></li>
          <li style={styleItem}><NavLink to="/tab2">Tab2</NavLink></li>
          <li style={styleItem}><NavLink to="/Counter">Counter {this.props.count}</NavLink></li>
        </ul>
        <div>
          <Route exact path="/Search" component={Search} />
          <Route path="/tab2" component={Tab2} />
          <Route path="/Counter" component={Counter} />

          {/*default route*/}
          <Redirect exact from="/" to="Counter" />
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.count };
}

const mapDispatchToProps = {};

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ConnectedMain;
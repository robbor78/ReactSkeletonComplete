import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { onClick as onClickAction } from '../store/actions/Actions.js'

// const Tab3 = (props) => {

//   const [count, setCount] = useState(0);

//   console.log(props);

//   return (
//     <>
//       <p>Tab3 content {props.count}</p>
//       <button onClick={() => setCount(count + 1)}>Click</button>
//     </>
//   );

// }

class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick();
  }

  render() {
    return (
      <>
        <p>Tab3 content {this.props.count}</p>
        <button onClick={this.onClick}>Click</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToActions = (dispatch, ownProps) => {
  return { onClick: () => dispatch(onClickAction()) };
};

const ConnectedTab3 = connect(mapStateToProps, mapDispatchToActions)(Tab3);

export default ConnectedTab3;
import React, { Component } from 'react';
import { onCallApi as onCallApiAction } from '../store/actions/Actions.js';
import { connect } from 'react-redux';

//const Tab1 = (props) => <p>Tab1 content</p>;

class Search extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('onClick', this._input.value);
    this.props.onCallApi(this._input.value);
  }

  render() {
    console.log('Tab1', this.props)
    const button = !this.props.search.isSearching ? <button onClick={this.onClick}>Click to call API</button> : '';
    return (
      <>
        <p>Tab1 content</p>
        <input placeholder="search text" ref={(e) => this._input = e} />
        {button}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return { search: state.search };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onCallApi: (text) => dispatch(onCallApiAction(text)) };
};

const ConnectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search);

export default ConnectedSearch;
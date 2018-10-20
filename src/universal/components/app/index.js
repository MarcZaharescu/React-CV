import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from "../home";

export class App extends React.Component {


  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <input
        type="button"
        className="button"
        value={1}
      />

    );
  }
}
App.propTypes = {
  //  label: PropTypes.string.isRequired,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}


function mapStateToProps(state) {
  return {
    //TODO
  };
}

export default App;

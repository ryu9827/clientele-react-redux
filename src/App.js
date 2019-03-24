import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from './store/store'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, button, privacy, contactUs} = store.getState();
    return (
      <div className="App">
        <header className="App-header">
        <h1>Blockchainlab.nz</h1>
          <h1 className="App-title">{header}</h1>
        </header>
        <h4>{privacy}</h4>
        <h4>{contactUs}</h4>
        <CardList buttonText={button} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    header: state.header,
    button: state.button,
    privacy: state.privacy,
    contactUs:state.contactUs
  }
}

export default connect(mapStateToProps)(App);

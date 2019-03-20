import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import CardList from './CardList';
import audit_data from './audits.json';

import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types';
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';
import english from './languages/english.json';
import chinese from './languages/chinese.json';
import spanish from './languages/spanish.json';
import russian from './languages/russian.json';

setTranslations({english, chinese, spanish, russian});
setDefaultLanguage('english');

setLanguageCookie();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audits: audit_data
    }
  }

  handleSetLanguage = (key) => () => {
    setLanguage(key);
  }  

  render() {
    const audits = this.state.audits;
    const { t } = this.props; //don't try to change the const name from 't' to anything else!
    const buttonText = t('button')
    const privacy = t('privacy');
    const contactUs = t('contactUs');
    return (
      <div className="App">
        <header className="App-header">
        <h1>Blockchainlab.nz</h1>
          <h1 className="App-title">{t('header')}</h1>
          {/* <p>Total Audits: {audits.length}</p> */}
          <ReactTooltip />
        </header>
        <h4>{privacy}</h4>
        <h4>{contactUs}</h4>
        <CardList audits={audits} buttonText={buttonText} />
      </div>
    );
  }
}

App.propTypes = {
  text: PropTypes.func.isRequired,
};

export default translate(App);

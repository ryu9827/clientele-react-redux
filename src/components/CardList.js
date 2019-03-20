import React, { Component } from 'react';
import AuditCard from './AuditCard';
import PropTypes from 'prop-types';
import {
  setLanguage,
  translate,
} from 'react-switch-lang';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audits: this.props.audits,
    }
  }

  handleSetLanguage = (key) => () => {
    setLanguage(key);
  }  

  render() {
    return (
      <div className="audit-container">
        Languages: 
          <button onClick={this.handleSetLanguage('english')}>English</button>{`  `}
          <button onClick={this.handleSetLanguage('russian')}>русский</button>{`  `}
          <button onClick={this.handleSetLanguage('spanish')}>Spanish</button>{`  `}
          <button onClick={this.handleSetLanguage('chinese')}>简体中文</button>{`  `}
          <div className="audit-list">
          {this.state.audits.map((audit) => <AuditCard key={audit.name} {...audit} buttonText={this.props.buttonText}/>)}
        </div>
      </div>
    );
  }
}

export default translate(CardList);

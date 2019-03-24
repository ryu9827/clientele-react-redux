import React, { Component } from 'react';
import AuditCard from './AuditCard';
import action from '../store/actionCreator';
import PropTypes from 'prop-types';
import C from '../store/Action_Constant';
import audit_data from '../audits.json';
import { connect } from "react-redux";
import store from '../store/store';

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (language) => {
    console.log('click')
    store.dispatch({type: language})
  }

  render() {
    return (
      <div className="audit-container">
        Languages: 
          <button onClick={()=>this.handleClick(C.ENGLISH)}>English</button>{`  `}
          <button onClick={()=>this.handleClick(C.RUSSIAN)}>русский</button>{`  `}
          <button onClick={()=>this.handleClick(C.SPANISH)}>Spanish</button>{`  `}
          <button onClick={()=>this.handleClick(C.CHINESE)}>简体中文</button>{`  `}
          <div className="audit-list">
          {audit_data.map((audit) => <AuditCard key={audit.name} {...audit}/>)}
        </div>
      </div>
    );
  }
}

export default connect(null, action)(CardList);

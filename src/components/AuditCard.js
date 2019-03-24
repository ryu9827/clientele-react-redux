import React, { Component } from 'react';
import '../AuditCard.css'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import store from '../store/store';

function Description(props){
  return (
    <div>
      <p>{props.description}</p>
      <Button 
        variant="contained"
        size="small"
        color="primary"
        href={props.report} 
        target="_blank"
      >{props.buttonText}</Button>
    </div>
  )
}

function AuditCard(props) {
  const { button } = store.getState();
  return(
     <Card className="audit-card">
     <CardActionArea href={props.website} target="_blank">
        <CardMedia
          component="img"
          className="audit-card-media"
          image={props.logo}
          title={props.name}
        />
      </CardActionArea>
        <CardContent>
          <h2>{props.name}</h2>
          {props.description && 
          <Description description={props.description} report={props.report} buttonText={button}></Description>}
        </CardContent>
    </Card>
  );
}

export default AuditCard;

import React from 'react';
import { withRouter } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import { Button,Card } from 'react-bootstrap';
import './friends.styles.scss';

const Friends = ({ title, imageUrl, size, history, linkUrl, match }) => (
  
  <CardDeck>
   
  <Card>
    <Card.Body>
      <Card.Title></Card.Title>
      <div
    className={`${size} friends`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
  <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    </div>
      <Card.Text className='names' >
      {title.toUpperCase()}
      </Card.Text>
    </Card.Body>
  </Card >
  {'\n'}
</CardDeck>
);

export default withRouter(Friends);

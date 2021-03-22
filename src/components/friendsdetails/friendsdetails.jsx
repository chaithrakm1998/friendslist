import React from 'react';
import { withRouter } from 'react-router-dom';
import './friendsdetails.styles.scss'
import { Button,Card, } from 'react-bootstrap';
const Friends = ({ title, imageUrl, size, history, linkUrl, match }) => (
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
     <Card style={{ width: '90rem' }}>
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  );
  
  export default withRouter(Friends);
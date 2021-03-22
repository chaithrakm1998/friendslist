import React from 'react';
import { withRouter } from 'react-router-dom';


const Friends = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} directory-friends`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
     
    </div>
  </div>
);

export default withRouter(Friends);

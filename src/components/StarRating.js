import React from 'react';

function Stars (props) {
  const starNumber = [];
  for (let i = 1; i <= props.rating; i++) {
    starNumber.push(<span key={i} className="glyphicon glyphicon-star" />);
  }
  return (
    <p>{starNumber}</p>
  );
}

export default Stars;

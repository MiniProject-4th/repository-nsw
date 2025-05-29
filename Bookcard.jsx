import React from 'react';

const BookCard = ({ title, author, category }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{category}</p>
    </div>
  );
};

export default BookCard;

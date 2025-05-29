// src/components/BookDetail.jsx
import React from 'react';

const BookDetail = ({ book }) => {
  if (!book) return <div> 도서 정보가 없습니다.</div>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '24px', borderRadius: '8px' }}>
      <h2>{book.title}</h2>
      <p><strong>저자:</strong> {book.author}</p>
      <p><strong>카테고리:</strong> {book.category}</p>
      <p><strong>출판일:</strong> {book.publishedAt}</p>
      <p><strong>수정일:</strong> {book.updatedAt}</p>

      {book.coverImageUrl ? (
        <img
          src={book.coverImageUrl}
          alt="도서 표지"
          style={{ maxWidth: '200px', marginTop: '20px', borderRadius: '4px' }}
        />
      ) : (
        <p>표지 이미지 없음</p>
      )}
    </div>
  );
};

export default BookDetail;

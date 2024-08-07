import React from 'react';
import '../styles/BookList.css';

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1', publicationDate: '2023-01-01' },
  { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2', publicationDate: '2023-02-01' },
  { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Genre 3', publicationDate: '2023-03-01' }
];

const BookList = () => {
  return (
    <div className="book-list">
      <div className="book-header">
        <div className="header-item">Title</div>
        <div className="header-item">Author</div>
        <div className="header-item">Genre</div>
        <div className="header-item">Publication Date</div>
        <div className="header-item">Actions</div>
      </div>
      <ul className="book-items">
        {books.map(book => (
          <li key={book.id} className="book-item">
            <div className="book-details">
              <span>{book.title}</span>
              <span>{book.author}</span>
              <span>{book.genre}</span>
              <span>{book.publicationDate}</span>
            </div>
            <div className="book-actions">
              <button>EDIT</button>
              <button>DELETE</button>
              <button>VIEW</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

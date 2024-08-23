import React from "react";
import { IBook } from "../types";
import { useState, useEffect } from "react";
import "../styles/EditBookForm.css";

type Props = {
  book: IBook;
  onSubmitClickHnd: (data: IBook) => void;
  onBackBtnClickHnd: () => void;
};
const EditBookDetails = (props: Props) => {
  const { book, onSubmitClickHnd, onBackBtnClickHnd } = props;
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);
  const [publicationDate, setPublicationDate] = useState(book.publicationDate);
  const [description, setDescription] = useState(book.description);

  useEffect(() => {
    setTitle(book.title);
    setAuthor(book.author);
    setGenre(book.genre);
    setPublicationDate(book.publicationDate);
    setDescription(book.description);
  }, [book]);

  const onTitleChangeHnd = (e: any) => {
    setTitle(e.target.value);
  };

  const onAuthorChangeHnd = (e: any) => {
    setAuthor(e.target.value);
  };

  const onGenreChangeHnd = (e: any) => {
    setGenre(e.target.value);
  };

  const onPublicationDateChangeHnd = (e: any) => {
    setPublicationDate(e.target.value);
  };

  const onDescriptionChangeHnd = (e: any) => {
    setDescription(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedBook: IBook = {
      id: book.id,
      title: title,
      author: author,
      genre: genre,
      publicationDate: publicationDate,
      description: description,
    };
    onSubmitClickHnd(updatedBook);
  };

  return (
    <div className="form-container">
      <h1>Edit Book Form</h1>
      <form className="book-form" onSubmit={onSubmitBtnClickHnd}>
        <div className="form-item">
          <label>Title: </label>
          <input type="text" id="title" name="title" required value={title} onChange={onTitleChangeHnd} />
        </div>
        <div className="form-item">
          <label>Author: </label>
          <input type="text" id="author" name="author" required value={author} onChange={onAuthorChangeHnd} />
        </div>
        <div className="form-item">
          <label>Genre: </label>
          <input type="text" id="genre" name="genre" required value={genre} onChange={onGenreChangeHnd} />
        </div>
        <div className="form-item">
          <label>Publication Date: </label>
          <input type="date" id="publicationDate" name="publicationDate" required value={publicationDate} onChange={onPublicationDateChangeHnd} />
        </div>
        <div className="form-item">
          <label>Description: </label>
          <textarea id="description" name="description" required value={description} onChange={onDescriptionChangeHnd}></textarea>
        </div>
        <div className="form-button">
          <button type="button" onClick={onBackBtnClickHnd}>
            Back
          </button>
          <button type="submit">Edit Book</button>
        </div>
      </form>
    </div>
  );
};

export default EditBookDetails;

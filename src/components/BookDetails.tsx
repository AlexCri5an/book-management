import React from "react";
import { IBook } from "../types";
import "../styles/BookDetails.css";

type Props = {
    book: IBook;
};

const BookDetails = (props: Props) => {
    return (
        <div>
            <h1>Book Details</h1>
            <p>Title: {props.book.title}</p>
            <p>Author: {props.book.author}</p>
            <p>Genre: {props.book.genre}</p>
            <p>Publication Date: {props.book.publicationDate}</p>
            <p>Description: {props.book.description}</p>
        </div>

    );
};

export default BookDetails;

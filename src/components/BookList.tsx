import "../styles/BookList.css";
import { IBook } from "../types";
import "../styles/BookDetails.css";

type Props = {
  list: IBook[];
  onDeleteClickHnd: (data: IBook) => void;
  onViewClickHnd: (data: IBook) => void;
  onEditClickHnd: (data: IBook) => void;
};

const BookList = (props: Props) => {
  const { list, onDeleteClickHnd, onViewClickHnd, onEditClickHnd } = props;

  return (
    <div className="book-list">
      <table>
        <thead>
          <tr className="book-header">
            <th className="header-item">Title</th>
            <th className="header-item">Author</th>
            <th className="header-item">Genre</th>
            <th className="header-item">Publication Date</th>
            <th className="header-item">Actions</th>
          </tr>
        </thead>
        <tbody className="book-items">
          {list.map((book) => (
            <tr key={book.id} className="book-item">
              <td className="book-title">{book.title}</td>
              <td className="book-author">{book.author}</td>
              <td className="book-genre">{book.genre}</td>
              <td className="book-publication-data">{book.publicationDate}</td>
              <td className="book-actions">
                <button onClick={() => onEditClickHnd(book)}>EDIT</button>
                <button onClick={() => onDeleteClickHnd(book)}>DELETE</button>
                <button onClick={() => onViewClickHnd(book)}>VIEW</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;

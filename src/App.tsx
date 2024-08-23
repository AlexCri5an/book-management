
import Header from './components/Header';
import BookList from './components/BookList';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css';
import { useState, useEffect } from 'react';
import { IBook } from './types';
import AddBookForm from './components/BookForm';
import BookDetails from './components/BookDetails';
import EditBookDetails from './components/EditBookForm';

function App() {
  const [bookList, setBookList] = useState([] as IBook[]);

  const addBook = (data: IBook) => {
    _setBookList([...bookList, data]);
    setIsFormVisible(false);
    alert("Book added successfully!");
  }
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const [isEditVisible, setIsEditVisible] = useState(false);

  useEffect(() => {
    const listIsString = window.localStorage.getItem("BookList");
    if (listIsString) {
      _setBookList(JSON.parse(listIsString));
    }
  }, []);

  const viewDetails = (data: IBook) => {
    setSelectedBook(data);
  }
  const closeDetails = () => {
    setSelectedBook(null);
  }

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  }
  const handleBackButtonClick = () => {
    setIsFormVisible(false);
    setIsEditVisible(false);
    setSelectedBook(null);
  }
  const deleteBook = (data: IBook) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this book?");
    if (isConfirmed) {
      const updatedBookList = bookList.filter(book => book.id !== data.id);
      _setBookList(updatedBookList);
      alert("Book deleted successfully!");
    }
    
  }
  const editDetails = (data: IBook) => {
    setIsEditVisible(true);
    setSelectedBook(data);
  }

  const handleEditSubmit = (data: IBook) => {
    const isConfirmed = window.confirm("Are you sure you want to save these changes?");
    if (isConfirmed) {
      const updatedBookList = bookList.map(book => book.id === data.id ? data : book);
      _setBookList(updatedBookList);
      setIsEditVisible(false);
      setSelectedBook(null);
    }
  }

  const _setBookList = (list: IBook[]) => {
    setBookList(list);
    window.localStorage.setItem("BookList", JSON.stringify(list));
  }
  return (
    <div className="App">
      <header>
        <Header toggleForm={toggleForm} />
      </header>
      <main>
        {isFormVisible ? (
          <AddBookForm onSubmitClickHnd={addBook} onBackBtnClickHnd={handleBackButtonClick} />
        ) : isEditVisible && selectedBook ? (
          <EditBookDetails book={selectedBook} onSubmitClickHnd={handleEditSubmit} onBackBtnClickHnd={handleBackButtonClick} />
        ) : selectedBook ? (
          <div className="book-details">
            <BookDetails book={selectedBook} />
            <button onClick={closeDetails}>Close</button>
          </div>
        ) : (
          <BookList list={bookList} onDeleteClickHnd={deleteBook} onViewClickHnd={viewDetails} onEditClickHnd={editDetails} />
        )}
      </main>
      <Footer />
      <Sidebar />
    </div>

  );
}

export default App;

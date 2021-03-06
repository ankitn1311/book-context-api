import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("books");
    return localData ? setBooks(JSON.parse(localData)) : [];
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (title, author) => {
    const newBook = { id: uuidv4(), title, author };
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => id !== book.id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

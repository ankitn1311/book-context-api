import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

function BookDetails({ books }) {
    const { deleteBook } = useContext(BookContext);
    return (
        <div>
            {books.map(book => {
                return (
                    <li key={book.id}
                        onClick={() => deleteBook(book.id)}>
                        <div className="title">{book.title}</div>
                        <div className="author">{book.author}</div>
                    </li>
                )
            })}
        </div>
    )
}

export default BookDetails

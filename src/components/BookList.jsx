import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

function BookList() {
    const { books } = useContext(BookContext);
    return (
        <div id="booklist">
            <ul>
                <BookDetails books={books} />
            </ul>
        </div>
    )
}

export default BookList

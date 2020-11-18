import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return books.length > 0 ? (
        <nav>
            <h1>My Book App</h1>
            <h5>{books.length > 1 ? 'books' : 'book'} to read</h5>
        </nav>
    ) : (
            <nav>
                <h1>My Book App</h1>
                <div>
                    <p style={{ textAlign: 'center' }}>No books to read ... just enjoy :)</p>
                </div>
            </nav>
        )
}

export default Navbar;
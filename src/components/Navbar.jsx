import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <nav>
            <h1>My Book App</h1>
            <h5>There are {books.length} books</h5>
        </nav>
    )
}

export default Navbar;
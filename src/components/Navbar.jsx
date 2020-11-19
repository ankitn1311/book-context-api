import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { Typography } from '@material-ui/core';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <nav>
            <Typography gutterBottom variant="h3" component="h3" align="center">
                My Book App
                </Typography>
            {
                books.length > 0 ?
                    (<h3 style={{ textAlign: 'center' }}>{books.length} {books.length > 1 ? 'books' : 'book'} to read</h3>) :
                    (<h3 style={{ textAlign: 'center' }}>No books to read ... just enjoy :)</h3>)
            }
        </nav>
    )
}

export default Navbar;
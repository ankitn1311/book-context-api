import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';

function NewBook() {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="book name" value={title} required />
                <input type="text" onChange={(e) => setAuthor(e.target.value)} placeholder="author" value={author} required />
                <input type="submit" value="add book" />
            </form>
        </div>
    )
}

export default NewBook

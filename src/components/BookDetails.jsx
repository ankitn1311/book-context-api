import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { Delete as DeleteIcon } from '@material-ui/icons';

function BookDetails({ books }) {
    const { deleteBook } = useContext(BookContext);
    return (
        <div>
            {books.map(book => {
                return (
                    <ListItem key={book.id}>
                        <ListItemText primary={book.title} secondary={book.author} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteBook(book.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })}
        </div >
    )
}

export default BookDetails

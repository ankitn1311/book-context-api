import { List, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));

function BookList() {
    const classes = useStyles();
    const { books } = useContext(BookContext);
    return (
        <div id="booklist">
            <List className={classes.root}>
                <BookDetails books={books} />
            </List>
        </div>
    )
}

export default BookList

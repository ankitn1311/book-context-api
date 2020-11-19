import { Button, TextField, Grid } from '@material-ui/core';
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
                <Grid container spacing={1} direction="column" alignContent="center">
                    <Grid item>
                        <TextField onChange={(e) => setTitle(e.target.value)} value={title} id="outlined-basic" label="Book Title" variant="outlined" required />
                    </Grid>
                    <Grid item>
                        <TextField onChange={(e) => setAuthor(e.target.value)} value={author} id="outlined-basic" label="Book Author" variant="outlined" required />
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary">
                            Add Book
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default NewBook

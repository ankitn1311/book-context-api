import React from 'react'

function BookDetails({ books }) {
    return (
        <div>
            {books.map(book => {
                return (
                    <li key={book.id}>
                        <div className="title">{book.title}</div>
                        <div className="author">{book.author}</div>
                    </li>
                )
            })}
        </div>
    )
}

export default BookDetails

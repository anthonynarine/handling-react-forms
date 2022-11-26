import React, { useState } from 'react';
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";


function App() {
    const [books, setBooks] = useState([]);

    const editBookById = (id, title) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title};
            }
            return book;
        });
        setBooks(updatedBooks);
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updateBooks = [
            ...books,
            {id: Math.round(Math.random() * 999), title,
        },
      ];
        setBooks(updateBooks);
    };


    return(
        <div className='app'>
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook} />
        </div>
    )
};

export default App;
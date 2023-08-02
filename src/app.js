import 'bulma/css/bulma.css';
import React from 'react';

import BookCreate from './component/BookCreate';
import BookList from './component/BookList';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import Books from './context/books';
const App = () => {
    const { fetchbook } = useContext(Books)

    useEffect(() => {
        fetchbook();
    }, []);



    return (
        <div className='app'>

            <h1>Movie Cart</h1>
            <BookList />
            <BookCreate />
        </div>
    )
}
export default App;

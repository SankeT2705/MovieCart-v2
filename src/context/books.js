import { createContext, useState } from "react";
import axios from 'axios';
const Books = createContext();
function Provider({ children }) {
    const [Book, setBook] = useState([]);
    const fetchbook = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBook(response.data);
    }


    const editebyid = async (id, newtitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newtitle });


        const updatebook = Book.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book;
        });
        setBook(updatebook);
    }


    const deletebyId = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        const updatebook = Book.filter((book) => {
            return book.id != id;
        });
        setBook(updatebook);
    }


    const createBook = async (book) => {
        const response = await axios.post('http://localhost:3001/books', {
            "title": book
        });
        console.log(response)
        const updatebook = [...Book, response.data];
        setBook(updatebook);
    }
    const valuetoShare = {
        Book,
        fetchbook,
        editebyid,
        deletebyId,
        createBook

    }
    return <Books.Provider value={valuetoShare}>
        {children}
    </Books.Provider>
}

export { Provider };
export default Books;
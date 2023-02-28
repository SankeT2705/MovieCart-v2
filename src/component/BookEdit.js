import { useState, useContext } from "react";
import Books from "../context/books";
const BookEdit = ({ book, onSubmit }) => {
    const { editebyid } = useContext(Books)
    const [title, settitle] = useState(book.title);
    const handleedit = (event) => {
        settitle(event.target.value)
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editebyid(book.id, title)
    }
    return (
        <div>
            <form onSubmit={handlesubmit} className="book-edit" >
                <label>TITLE</label>
                <input className="input" value={title} onChange={handleedit} />
                <button className="button is-primary">save</button>

            </form>
        </div>
    )
}
export default BookEdit;
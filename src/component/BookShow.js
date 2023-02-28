import { useState } from "react";
import BookEdit from "./BookEdit";
import { useContext } from "react";
import Books from "../context/books";
const BookShow = ({ book }) => {
    const { deletebyId } = useContext(Books)
    const [edit, setedit] = useState(false);

    const handledelete = () => {
        deletebyId(book.id)
    }
    let content = <h3>{book.title}</h3>
    const handleedit = () => {
        setedit(!edit)
    }
    const handlesubmit = () => {
        setedit(false)
    }

    if (edit) {
        content = <BookEdit book={book} onSubmit={handlesubmit} />;
    }
    return (
        <div className="book-show">
            <img alt="background" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div> {content}</div>
            <div className="actions">
                <input type="button" value="edit" className="edit" onClick={handleedit} />
                <input type="button" value="delete" className="delete" onClick={handledelete} />
            </div>
        </div>
    )
}
export default BookShow;
import BookShow from "./BookShow";
import { useContext } from "react";
import Books from "../context/books";
const BookList = () => {
    const { Book } = useContext(Books);
    const renderbooks = Book.map((book) => {
        return <BookShow key={book.id} book={book} />
    });

    return <div className="book-list">{renderbooks}</div>
}
export default BookList;
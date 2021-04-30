import React, {useContext} from 'react';
import { FaRegCommentAlt, FaRegHeart } from 'react-icons/fa';
import { BookContext } from '../../../../Context/BookContext';


const BookDetails = ({book}) => {
const { dispatch , toggleModal} = useContext(BookContext);

return (
    <div className='book-card-container' key={book.id} onClick={() =>toggleModal()}>
    <div className='book-card-title'>
        <div>
            <img src={book.image} alt='poster'/>
        </div>
        <div>
            <h2>{book.title}</h2>
        </div>
    </div>
    <div className='book-card-content'>
        <img key={book.id} src={book.image} alt="comic" />
    </div>
    <ul className='book-card-toolbar'>
        <li>
            <FaRegHeart/>
            <span>123</span>
        </li>
        <li>
            <FaRegCommentAlt/>
            <span>20</span>
        </li>
    </ul>
    <div onClick={() => dispatch({type : 'REMOVE_BOOK', id : book.id})}> x</div>
</div>
);

}

export default BookDetails;
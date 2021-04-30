import React, { useContext } from 'react';
import './bookcard.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaRegCommentAlt, FaRegHeart } from 'react-icons/fa';
import { ThemeContext } from '../../../../Context/ThemeContext';
import { BookContext } from '../../../../Context/BookContext';
import { BookModal } from '../../../Modals';
import BookDetails from './BookDetails';

const Posts = ({ postsToRender }) => {

    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { books } = useContext(BookContext);
      
    return books.length ? (

        <>
            <section className='book-gallery-grid' style={{background:theme.ui, color:theme.syntax}}>
                {books.map((book) => {
                    return ( <BookDetails  book={book} key={book.id}/>)
                })}
            </section>
            <BookModal/>
        </>

    ) : (
        <div>
            No books available
        </div>
    )
};
export default Posts;
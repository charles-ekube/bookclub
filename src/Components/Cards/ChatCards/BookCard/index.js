import React, {useState} from 'react';
import './bookcard.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BookModal } from '../../../Modals';

const Posts = ({ postsToRender }) => {

        const [showModal, setShowModal] = useState(false);
        const toogleModal = () => {
            setShowModal(prev => !prev);
        }


    return (

        <>
            <section className='book-gallery-grid'>
                {postsToRender.map((post, index) => (
                    <div className='book-card-container' key={index} onClick={toogleModal}>
                        <div className='book-card-title'>
                            <div>
                                <img src={post.image} alt='poster'/>
                            </div>
                            <div>
                                <h2>{post.title}</h2>
                                <p>{post.text}</p>
                            </div>
                        </div>
                        <div className='book-card-content'>
                            <img key={post.id} src={post.image} alt="comic" />
                        </div>
                        <ul className='book-card-toolbar'>
                            <li>d</li>
                            <li>d</li>
                            <li>d</li>
                            <li>d</li>
                        </ul>
                    </div>
                ))}
            </section>
    <BookModal showModal={showModal} setShowModal={setShowModal}/>
            
        </>

    );
};
export default Posts;
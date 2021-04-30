import React, {useReducer, createContext, useState, useEffect} from 'react';
import { bookReducer } from '../Reducers/BookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    const [showModal, setShowModal] = useState(false);
     
    const toggleModal = () => {
        setShowModal(prev => !prev);
    }
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    },[books]);

    return (
        <BookContext.Provider value={{books, dispatch, showModal, setShowModal, toggleModal}}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;

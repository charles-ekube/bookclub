import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BookContext } from '../../../Context/BookContext';


const BookUpload = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const handleUpload = (e) => {
        e.preventDefault();
        dispatch({type : 'ADD_BOOK', book : {
            title,
            image
        }});
        setTitle('');
        setImage('');
    }

    return (

        <section className='form-container'>
            <Form onSubmit={handleUpload}>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        name="title"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Button
                    type="submit"
                    variant="primary"
                    // disabled={data.isSubmitting}
                    className="login-btn"
                >
                    Upload
                </Button>
            </Form>
        </section>
    )

}

export default BookUpload;
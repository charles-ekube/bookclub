import React, { useRef, useContext } from 'react';
import './modal.css';
import Avatar from '../../images/batgirl.png';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { FaAngleDoubleRight} from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import { BookContext } from '../../Context/BookContext';


export const BookModal = () => {
    const {showModal, setShowModal} = useContext(BookContext)
    const ModalRef = useRef();
    const CloseModal = e => {
        if (ModalRef.current === e.target) {
            setShowModal(false);
        }
    }


    return (
        <>
            {showModal ? (
                <section className='book-modal-container' ref={ModalRef} onClick={CloseModal}>
                    <div className='book-modal-content' showModal={showModal}>
                        <div className='book-modal-header'>
                            <div className='book-modal-user-avatar'>
                                <img src={Avatar} alt='poster' />
                            </div>
                            <ul>
                                <li>the Name</li>
                                <li>time and date</li>
                            </ul>
                            <div className='book-modal-img'>
                                <img src={Avatar} alt='poster' />
                            </div>
                        </div>
                        <article className='book-modal-text'>
                            <p>
                                loremcjnscjscnsjncsjcnscjnscjnscns
                                djcndcjndcjndcjndcjndcdjncdjcndcjn
                                dcjndcjndcjdncjdncdcjndcndjcndcjdn
                                dcjndcjndcjdncjdcdcjndcjndcdjncdcj
                            </p>
                            <div>
                                <Accordion className="comment-accordion-container">
                                    <Card className="comment-card" style={{ border: 'none', background: 'inherit' }}>
                                        <Card.Header className="comment-card-header">
                                            <Accordion.Toggle as={Card.Header} eventKey='0' style={{ border: 'none', background: 'inherit', paddingLeft: '0', cursor: 'pointer' }}>
                                                Comments
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey='0' style={{height:'100%'}}>
                                            <Card.Body >
                                                <section>
                                                    <div className="comment-message">
                                                        <span>
                                                            loremcjnscjscnsjncsjcnscjnscjnscns
                                                            djcndcjndcjndcjndcjndcdjncdjcndcjn
                                                            dcjndcjndcjdncjdncdcjndcndjcndcjdn
                                                            dcjndcjndcjdncjdcdcjndcjndcdjncdcj
                                                        </span>
                                                    </div>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <InputGroup className="mb-3">
                                                            <Form.Control 
                                                            placeholder="comments" 
                                                            aria-label="comments"
                                                            aria-describedby="basic-addon2"
                                                            />
                                                            <InputGroup.Append>
                                                                <Button className="send-btn">
                                                                    <i style={{transform:'rotateY(-45deg)'}}>
                                                                        <FaAngleDoubleRight/>
                                                                    </i>
                                                                </Button>
                                                            </InputGroup.Append>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </section>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </article>
                    </div>
                </section>) : null}
        </>
    )
}
import React, { useRef } from 'react';
import './modal.css';
import Avatar from '../../images/batgirl.png';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const BookModal = ({ showModal, setShowModal }) => {

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
                            <div className='book-modal-text-header'>

                            </div>
                            <div className='book-modal-description'>
                                <p>
                                    loremcjnscjscnsjncsjcnscjnscjnscnsjcsjncs
                                    djcndcjndcjndcjndcjndcdjncdjcndcjndcnjdcdj
                                    dcjndcjndcjdncjdncdcjndcndjcndcjdncjdncjdncdjcn
                                    dcjndcjndcjdncjdcdcjndcjndcdjncdcjndcjndcn
                                    dcjndcjdncdjcndjcndcjndcjdcndcjndcjndc
                                    dcjndcjdncdjcndcjndcjndcjdncdjcndjcndcjncdj
                                    cjdndcjndcjndcjdndcjdncjdcndjcdddcsjnsjsjss
                               </p>
                            </div>
                            <div>
                                <Accordion>
                                    <Card style={{ border: 'none', background: 'inherit' }}>
                                        <Card.Header style={{ border: 'none', background: 'inherit', paddingLeft: '0' }}>
                                            <Accordion.Toggle as={Card.Header} eventKey='0' style={{ border: 'none', background: 'inherit', paddingLeft: '0', cursor: 'pointer' }}>
                                                Comments
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey='0'>
                                            <Card.Body >
                                                Hello
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
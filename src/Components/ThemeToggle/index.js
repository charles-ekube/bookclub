import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form'
import { ThemeContext } from '../../Context/ThemeContext';

export const ThemeToggle = () => {
    const {handleToggle} = useContext(ThemeContext);
    return (
        <>
            <Form.Check 
                type="switch"
                id="custom-switch"
                label="Dark Mode"
                onClick={handleToggle}
            />
        </>
    )
}
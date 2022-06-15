import React from 'react';
import {
    Button,
    Form
} from 'react-bootstrap';
import HomepageNavbar from '../components/Navbars/HomepageNavbar';

const Signup  = () => {
    const signupHandler = (event)=> {
        event.preventDefault();
        console.log("Submitted");

    }

    return (
        <>
            <HomepageNavbar />
            <Form className="w-50 mx-auto my-5 shadow-lg p-5 rounded-3 formContainer" onSubmit={signupHandler}>
            <h1 className='text-center '>Sign up</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" autoComplete="new-password"/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" autoComplete="new-password"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm your password</Form.Label>
                <Form.Control type="password" placeholder="Password" autoComplete="new-password"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="You are agreeing to these terms and conditons" />
            </Form.Group>

            <Button className="primaryButton" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}

export default Signup;
import React  from "react";
import {
    useState,
} from 'react';
import {
    Button,
    Form
} from 'react-bootstrap'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const loginHandler = (event) => {
        event.preventDefault();
        console.log({
            email: email,
            password: password,
            isChecked: isChecked
        })

        console.log("Submitted")
        setEmail("");
        setPassword("");
    }
    return (
        <Form className="w-50 mx-auto my-5 shadow-lg p-5 rounded-3 formContainer" onSubmit={loginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    autoComplete="new-password" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                    type="checkbox" 
                    label="Keep me logged in." 
                    checked={isChecked}
                    onChange={(e)=> setIsChecked(!isChecked)}/>
            </Form.Group>
            <Button className="primaryButton" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Login;
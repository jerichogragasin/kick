import React, { useEffect }  from "react";
import {
    useState,
} from 'react';
import {
    Button,
    Form, 
    Alert
} from 'react-bootstrap'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const initialState = {
        emailErrMsg : "",
        passwordErrMsg : ""
    }

    const [errMsg, setErrMsg] = useState(initialState);
    // Parsing Object to make it accessible in the browser;
    const errors = JSON.parse(JSON.stringify(errMsg));

    const validateForm = (email, password) => {
        if(email === ""){
            errors.emailErrMsg = "Email Field is empty."
        } else {
            errors.emailErrMsg = ""
        }
        
        if(password === ""){    
            errors.passwordErrMsg = "Password Field is empty."
        } else {
            errors.passwordErrMsg = ""
        }

        return setErrMsg(errors);
    }

    const loginHandler = (event) => {
        event.preventDefault();
        validateForm(email, password);
    }

    return (
        <Form className="w-50 mx-auto my-5 shadow-lg p-5 rounded-3 formContainer" onSubmit={loginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                {
                    errMsg.emailErrMsg.length > 0 &&  <Alert variant="danger">{errMsg.emailErrMsg}</Alert>
                }
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
                {
                    errMsg.passwordErrMsg.length > 0 &&  <Alert variant="danger">{errMsg.passwordErrMsg}</Alert>
                }
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
import {
    Nav
} from 'react-bootstrap';
import '../../App.css';

const Footer = () => {
    return (
        <>
            <div className="row footer container-fluid">
                <div className="col-md-4"></div>
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <p className='text-center text d-block my-auto'>&copy; All rights reserved</p>
                </div>
                <div className="col-md-4 d-block my-auto">
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link className="footer-links" href="#">Github</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="footer-links" eventKey="">Facebook</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="footer-links" eventKey="">Stack Overflow</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </>
    )
}

export default Footer;
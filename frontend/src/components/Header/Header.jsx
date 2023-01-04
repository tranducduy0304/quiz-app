import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link , useNavigate} from 'react-router-dom';

const Header = (props) => {
    const navigation = useNavigate();

    const handleOnClickLogin =() => {
        navigation("/login");
    };

    const handleOnClickSignup =() => {
        navigation("/signup");
    };

    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink className='nav-link active' to="/">Home</NavLink>
                <NavLink className='nav-link active' to="/user">User</NavLink>
                <NavLink className='nav-link active' to="/admin">Admin</NavLink>
            </Nav>
            <Nav>
                <button className='btn-login' onClick={() => handleOnClickLogin()}>Log in</button>
                <button className='btn-signup' onClick={() => handleOnClickSignup()}> 
                    <Link to="/sign-up" className='nav-link link-signup'>Sign up</Link>
                </button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Header;
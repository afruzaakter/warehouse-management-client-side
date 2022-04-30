
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/Brazzers-logo.png';
// import auth from '../../firebase.init';
// import { signOut } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
//     const [user] = useAuthState(auth);
//     const handleSignOut = () => {
//         signOut(auth);
//     }

    return (
        <div >
            <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">

                        <img className='w-50' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='header'>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/Home">HOME</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/services">SERVICES</NavLink>
                            {/* <Nav.Link  href="home#services">Services</Nav.Link> */}

                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/blogs">BLOGS</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/login">LOGIN</NavLink>
                            {/* {
                                // user ?
                                    <button >Sign Out</button> :
                                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/login" >LOGIN</NavLink>
                            } */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
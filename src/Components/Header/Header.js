
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logobd.jpg';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div >
            <Navbar collapseOnSelect expand="lg" fixed="top" className='navbar-style' >
                <Container>
                    <Navbar.Brand className='d-flex align-items-center ' href="#home">

                        <img className=' w-25 rounded-circle' src={logo} alt="" />
                        <h4 className='ms-2'>Dress Up</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='header'>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/Home">HOME</NavLink>


                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} as={Link} to="/inventoryItems">INVENTORY ITEMS</NavLink>

                            {
                                user && <>
                                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} as={Link} to="/manageitems">Manage Items</NavLink>
                                </>
                            }

                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/blogs">BLOGS</NavLink>

                            {
                                user ?
                                    <button className=' ms-3 signoutStyle' onClick={handleSignOut}>SIGN OUT</button> :
                                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/login" >LOGIN</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
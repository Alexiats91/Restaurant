//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Styles
import {HeaderStyle} from './styled';
import {MyContainer} from "../../GlobalStyle";
import {Link} from "react-router-dom";
import SwitchTheme from "./SwitchTheme";

const Header = ({ links, switchTheme }) => {
	const navLinks = links.map((el, key) => {
		return <Nav.Link as={Link} key={key} className="nav-link" to={el.link}>{el.text}</Nav.Link>
	});
	return (
		<HeaderStyle>
			<SwitchTheme switchTheme={switchTheme}/>
			<Navbar  expand="xl">
				<MyContainer className="myContainer">
					<Navbar.Brand as={Link}  className="navbar-brand" to="/">expice</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto navbar-nav">
							{ navLinks }
						</Nav>
						<div className="user-cabinet">
							<div className="user-icon">
								<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M25.6066 19.3934C23.9729 17.7596 22.0283 16.5502 19.9066 15.8181C22.179 14.253 23.6719 11.6337 23.6719 8.67188C23.6719 3.89021 19.7817 0 15 0C10.2183 0 6.32812 3.89021 6.32812 8.67188C6.32812 11.6337 7.82103 14.253 10.0935 15.8181C7.9718 16.5502 6.02719 17.7596 4.39342 19.3934C1.56029 22.2265 0 25.9934 0 30H2.34375C2.34375 23.0213 8.02131 17.3438 15 17.3438C21.9787 17.3438 27.6562 23.0213 27.6562 30H30C30 25.9934 28.4397 22.2265 25.6066 19.3934ZM15 15C11.5107 15 8.67188 12.1613 8.67188 8.67188C8.67188 5.1825 11.5107 2.34375 15 2.34375C18.4893 2.34375 21.3281 5.1825 21.3281 8.67188C21.3281 12.1613 18.4893 15 15 15Z" fill="#2E266F"/>
								</svg>
							</div>
							<NavDropdown className="dropdown" title="User" id="basic-nav-dropdown">
								<NavDropdown.Item as={Link} to="/cabinet/profile">Profile</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/cabinet/portfolio">Portfolio</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/">Exit</NavDropdown.Item>
							</NavDropdown>
						</div>
					</Navbar.Collapse>
				</MyContainer>
			</Navbar>
		</HeaderStyle>
	)
};

export default Header;
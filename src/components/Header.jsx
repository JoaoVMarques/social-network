import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as HomeIcon} from '../images/homeIcon.svg';
import {ReactComponent as ProfileIcon} from '../images/profile.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header(props) {
  const { pageName } = props;
  return (
    <Navbar bg="light" className='sticky-top border-bottom'>
      <Container>
        <Navbar.Brand><h4 className='mb-0'>{pageName}</h4></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">
            <HomeIcon className='icon selected' />
          </Nav.Link>
          <Nav.Link href="/home">
            <ProfileIcon className='icon' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  pageName: PropTypes.string,
}.isRequired;

export default Header;

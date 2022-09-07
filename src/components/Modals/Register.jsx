import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import FormRegister from '../FormRegister';

function Register(props) {
  const { show, setShow } = props;
  const handleClose = () => setShow(false);
  return(
    <Modal show={ show } onHide={ handleClose }>
      <Modal.Header closeButton>
        <Modal.Title>Registrar-se</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormRegister handleClose={ handleClose } />
      </Modal.Body>
    </Modal>
  );
}

Register.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
}.isRequired;

export default Register;

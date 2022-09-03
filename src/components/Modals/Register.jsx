import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import FormRegister from '../FormRegister';

function Register(props) {
  const { show, setShow } = props;
  const handleClose = () => setShow(false);
  console.log(show);
  return(
    <Modal show={ show } onHide={ handleClose }>
      <Modal.Header closeButton>
        <Modal.Title>Registrar-se</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormRegister />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" className="btn btn-success" onClick={ handleClose }>
          Cadastrar-se
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

Register.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
}.isRequired;

export default Register;

import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

function CreatePost(props) {
  const { verifyPublishButton } = props;
  return(
    <Form>
      <div className="form-group">
        <textarea

          className="form-control notresize"
          id="postTextArea"
          onChange={ verifyPublishButton }
          rows="3"
          placeholder='Aconteceu algo hoje?'
        />
      </div>
    </Form>
  );
}

CreatePost.propTypes = {
  verifyPublishButton: PropTypes.func
}.isRequired;

export default CreatePost;

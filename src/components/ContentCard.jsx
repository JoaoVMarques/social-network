import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function ContentCard(props) {
  const { contentObject } = props;
  const { content, user } = contentObject;
  return (
    <Card style={ { width: '60rem' } } className="mx-auto mb-2">
      <Card.Body>
        <Card.Title>
          <h6> { user } <span>· 2h</span></h6>
        </Card.Title>
        <Card.Text>
          { content }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

ContentCard.propTypes = {
  contentObject: PropTypes.shape({
    content: PropTypes.string,
    user: PropTypes.string,
  }),
};

export default ContentCard;

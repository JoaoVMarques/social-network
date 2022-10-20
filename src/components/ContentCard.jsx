import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';

function ContentCard(props) {
  const { contentObject } = props;
  const { content, username } = contentObject;
  return (
    <Col sm={ 9 } xs={ 12 } className="mx-auto">
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>
            <h6> { username } <span>· 2h</span></h6>
          </Card.Title>
          <Card.Text>
            { content }
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

ContentCard.propTypes = {
  contentObject: PropTypes.shape({
    content: PropTypes.string,
    username: PropTypes.string,
  }),
};

export default ContentCard;

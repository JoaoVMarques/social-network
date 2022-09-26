import React from 'react';
import contents from '../data/content';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ContentCard from './ContentCard';
import CreatePost from './CreatePost';
import { useState } from 'react';

function MainContent() {
  const marginNumber = 3;
  const [ publishButton, setPublishButton ] = useState(false);
  const [ marginBottom, setMarginBottom ] = useState(marginNumber);

  function verifyPublishButton({ target }) {
    const { value } = target;
    if(value) {
      setPublishButton(true);
      setMarginBottom(1);
    } else {
      setPublishButton(false);
      setMarginBottom(marginNumber);
    }
  }

  return(
    <div className="p-5">
      <Container>
        <Row className={ `mb-${marginBottom}` }>
          <Col sm={ 9 } xs={ 12 } className="mx-auto">
            <CreatePost verifyPublishButton={ verifyPublishButton } />
          </Col>
        </Row>
        {
          publishButton && 
          (
            <Row className="mb-2">
              <Col sm={ 9 } xs={ 12 } className="mx-auto d-flex flex-row-reverse">
                <Button variant="primary">Publicar</Button>
              </Col>
            </Row>
          )
        }
        <Row>
          {contents.map((content) => 
            (
              <ContentCard
                key={ content.id }
                contentObject={ content }
              />
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default MainContent;

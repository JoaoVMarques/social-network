import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ContentCard from './ContentCard';
import CreatePost from './CreatePost';
import { useState } from 'react';
import DataContext from '../hooks/context/DataContext';

function MainContent() {
  const marginNumber = 3;
  const { usersContents, publishContent } = useContext(DataContext);
  const [ publishText, setPublishText ] = useState('');
  const [ publishButton, setPublishButton ] = useState(false);
  const [ marginBottom, setMarginBottom ] = useState(marginNumber);

  function verifyPublishButton({ target }) {
    const { value } = target;
    if(value) {
      setMarginBottom(1);
    } else {
      setMarginBottom(marginNumber);
    }
    setPublishButton(value);
    setPublishText(value);
  }

  async function createPost() {
    publishContent(publishText);
    setPublishText('');
  }

  return(
    <div className="p-5">
      <Container>
        <Row className={ `mb-${marginBottom}` }>
          <Col sm={ 9 } xs={ 12 } className="mx-auto">
            <CreatePost
              verifyPublishButton={ verifyPublishButton } 
              publishText={ publishText }
            />
          </Col>
        </Row>
        {
          publishButton && 
          (
            <Row className="mb-2">
              <Col sm={ 9 } xs={ 12 } className="mx-auto d-flex flex-row-reverse">
                <Button
                  variant="primary" 
                  onClick={ createPost }
                >Publicar
                </Button>
              </Col>
            </Row>
          )
        }
        <Row>
          {usersContents.map((content) => 
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

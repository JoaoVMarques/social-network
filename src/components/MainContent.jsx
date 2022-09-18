import React from 'react';
import contents from '../data/content';
import { Container, Row } from 'react-bootstrap';
import ContentCard from './ContentCard';

function MainContent() {
  return(
    <div className='p-5'>
      <Container>
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

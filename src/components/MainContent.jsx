import React from 'react';
import contents from '../data/content';
import ContentCard from './ContentCard';

function MainContent() {
  return(
    <div className='p-5'>
      {contents.map((content) => 
        (
          <ContentCard
            key={ content.id }
            contentObject={ content }
          />
        ))}
    </div>
  );
}

export default MainContent;

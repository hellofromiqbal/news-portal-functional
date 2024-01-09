import React from 'react';
import Card from 'react-bootstrap/Card';

const ArticleCard = ({ article }) => {
  return (
    <Card.Link href={article.url} target='_blank' className='card text-decoration-none shadow'>
      <Card.Img className='cardImage' variant="top" src={article.urlToImage} />
      <Card.Body className='cardBody'>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
      </Card.Body>
    </Card.Link>
  )
}

export default ArticleCard;

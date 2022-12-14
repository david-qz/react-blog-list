import React from 'react';
import './BlogCard.css';

export default function BlogCard({ title, author: { name }, subtitle, text, image }) {
  return (
    <div className="blog-card">
      <div className="details">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className='author'>{name}</div>
        <div className="text">{text}</div>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}

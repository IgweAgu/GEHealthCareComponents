import React from 'react';

function LargeCard({ title, subtitle, content, footer, imageUrl }) {
  return (
    <div className="large-card">
    <div className="large-card-logo"></div>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="large-card-text">
        <h2>{title}</h2>
        {subtitle && <h4>{subtitle}</h4>}
        <p>{content}</p>
        <div className="large-card-footer">
        {footer && <div>{footer}</div>}
        </div>
      </div>
    </div>
  );
}

export default LargeCard;

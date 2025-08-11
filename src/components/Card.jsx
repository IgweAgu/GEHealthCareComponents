import React, { useState } from "react";

export default function Card({ title, body }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card">
      <div className="card-title">{title}</div>
         <div className="card-body"><p>{body}</p></div>
        </div>
  );
}

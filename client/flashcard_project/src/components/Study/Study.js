import React from 'react';
import Card from "../Card/Card";

function Study(props) {
  const { cards } = props;

  return (
    <div>
      <h3>Question List</h3>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Card card={card} showAnswer={true} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Study;


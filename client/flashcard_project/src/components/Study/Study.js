import React from 'react';
import Card from "../Card/Card";

function Study(props) {
  const { cards, data } = props;

  return (
    <div>
      <h3>Question List</h3>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Card card={card} showAnswer={true} data={data}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Study;


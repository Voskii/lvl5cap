import React from 'react';
import Card from "../Card/Card";

function Study(props) {
  const { cards, data } = props;

  return (
    <div>
      <h3 className='list'>Question List</h3>
      <ul className='study-list'>
        <Card card={cards} showAnswer={true} data={data} />
      </ul>
    </div>
  );
}

export default Study;
// import React from 'react';
// import Card from "../Card/Card";

// function Study(props) {
//   const { cards, data } = props;

//   return (
//     <div>
//       <h3 className='list'>Question List</h3>
//       <ul className='study-list'>
//         {cards.map((card) => (
//           <li key={card.id}>
//             <Card card={card} showAnswer={true} data={data}/>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Study;

import React from 'react';
import Card from "../Card/Card";

function Study(props) {
  const { cards, data } = props;

  return (
    <div>
      <h3 className='list'>Question List</h3>
      <ul className='study-list'>
        <Card className = "card-component-study" card={cards} showAnswer={true} data={data} />
      </ul>
    </div>
  );
}

export default Study;
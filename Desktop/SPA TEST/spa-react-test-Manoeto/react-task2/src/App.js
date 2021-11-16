
import React from 'react';



const people = () => {
  const people = [
    { id: 1, name: 'chris' },
    { id: 2, name: 'nick' }
  ];
  const people1 = [
    { 
      name: 'chris',
      pets: [
        { name: 'bella', type: 'dog' },
        { name: 'cocoa', type: 'dog' }
      ]
    },
    { 
      name: 'nick',
      pets: [
        { name: 'hilo', type: 'cat' },
        { name: 'polly', type: 'cat' }
      ]
    }
  ];



  return (
    <ul>
      { people1.map( (id) => <li key = { id.name }>{ id }</li>) }
    </ul>
  );
}

export default people;
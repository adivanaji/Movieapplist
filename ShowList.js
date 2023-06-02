import React from 'react';

const ShowList = ({ shows, onShowClick }) => {
  return (
    <ul>
      {shows.map(show => (
        <li key={show.show.id}>
          <h3>{show.show.name}</h3>
          
          <button onClick={() => onShowClick(show)}>Show Summary</button>
        </li>
      ))}
    </ul>
  );
};

export default ShowList;

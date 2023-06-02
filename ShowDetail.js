import React from 'react';

const ShowDetail = ({ selectedShow, onBackClick }) => {
  return (
    <div>
      <button onClick={onBackClick}>Back</button>
      <h2>{selectedShow.show.name}</h2>

      <h3>ID:    {selectedShow.show.id}</h3>

      <p>Genres:   {selectedShow.show.genres}</p>
      <p>{selectedShow.show.summary}</p>
    </div>
  );
};

export default ShowDetail;

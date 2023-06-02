import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('Error fetching shows:', error);
      });
  }, []);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const handleBackClick = () => {
    setSelectedShow(null);
  };

  return (
    <div className="App">
      {selectedShow ? (
        <ShowDetail selectedShow={selectedShow} onBackClick={handleBackClick} />
      ) : (
        <ShowList shows={shows} onShowClick={handleShowClick} />
      )}
    </div>
  );
}

export default App;

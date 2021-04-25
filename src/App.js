import React, { useState } from "react";
import "./App.css";
import initialiSongs from './data/songs.json';

function App() {

  const [searchText, setSearchText] = useState('');

  const [songs] = useState(initialiSongs);

  const searchSongs = (userSearchText) => {
    setSearchText(userSearchText);
  }
  const toggleDescription = (index) => {
    console.log('in toggleDescriptiong')
  }

  return (
    <div className="App">
      <h1>Song Database</h1>
      <div>
        <input type="text" onChange={((e) => searchSongs(e
          .target.value))} />

      </div>
      <p>There are {songs.length} songs.</p>
      <ul>
        {songs.map((song, index) => {
          return (
            <>
              {(song.author.toLowerCase().includes(searchText.toLowerCase()) ||
                song.name.toLowerCase().includes(searchText.toLowerCase())) && (
                <li> <span onClick={() => toggleDescription(index)}>{song.author} - {song.name}
                </span>
                  
                  {song.showDescripition && (
                  <ul>
                    <li>{song.description}</li>
                  </ul>
                )}
                </li>
              )} 
              
            </>
          )
        })}
      </ul>
    </div>
  );
}

export default App;

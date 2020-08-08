import React, {useState} from 'react';
import './App.css';
import Movie from "./CONTEXT/Movie";
import UserContext from "./CONTEXT/userContext";

function App() {

  const [currentUser, setCurrentUser] = useState({name: 'Eduardo'})
  return (
    <UserContext.Provider value={currentUser}>
      <div className="App">
        <Movie/>
      </div>
    </UserContext.Provider>
  );
}

export default App;

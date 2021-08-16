import React from 'react';
import estilo from "./estilo.css"; 
import { useEffect, useState } from 'react';
import api from "./components/services/api";

function App(){

  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/juninhokaponne")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  return(
    <div className="container">
      <img src={user?.avatar_url} onClick="irHome()"></img>
      <div className="info-user">
      <p>Usuário:     <a href="https://github.com/juninhokaponne" target="_blank" className="name">{user?.name}</a></p>
      <p>Localização: <a href="#" target="_blank" className="local">{user?.location}</a></p>
      <p>Biografia:   <a href="#" target="_blank"className="bio">{user?.bio}</a></p>
    </div>
    </div>
  )
}

export default App;




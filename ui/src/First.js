import axios from "axios";
import React, {useState, useEffect, useRef} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page from './Page';
import "./First.css"

import App from './App';


function First() {

  const [notes, setNotes] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  
  const inputInfo = useRef(null);
  const inputTitle = useRef(null);
  const inputId = useRef(null);


  useEffect(() => {
    axios.get(
      'http://localhost:9090/api/notes',
      {
        withCredentials: false
      }
    ).then(response => {
      console.log(response.data);
      setNotes(response.data);
    });
  }, [isUpdate]);

  const addNote = () => {
    axios.post('http://localhost:9090/api/note/add',
    {
      title: inputTitle.current.value,
      info: inputInfo.current.value
    },
    {
      withCredentials: false
    }).then(() => {
      setIsUpdate(!isUpdate);
    });
  }
  const delNote = (id) => {
    axios.delete(
      `http://localhost:9090/api/note/`+id,
    ).then(() => {
      console.log(inputId);
      setIsUpdate(!isUpdate);
    });        
  }
  
  return (
    <div class="container">
        <div className="header">
        <a href="/App"><div class="col s">Запросы</div></a>
        <a href="/Page"><div class="col s">Главная</div></a>
        </div>
        <Router>
  <Routes>
  <Route path="/Page" element={<Page/>} />
      <Route path="/App" element={<App/>} />


  </Routes>
</Router>
</div>


  );
}

export default First;


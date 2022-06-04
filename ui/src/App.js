import axios from "axios";
import React, {useState, useEffect, useRef} from "react";
import './App.css';

function App() {

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
    <header>
        <div class="header_block">
            <a href="#popap"><div class="header_col">Добавить <div class="header_col_dec"></div></div></a>
        </div>

    </header>
    <div className="popap" id="popap">
    <div className="popap_content">
    <a href="#popap_close"><div className="Close">Закрыть</div></a>
    <div className="Title">Добавление</div>
    <input ref={inputTitle} type="text" placeholder="Название"/>
    <input ref={inputInfo} type="text" placeholder="Текст"/>
    <button onClick={() => addNote()}>Добавить</button>
    </div>
    </div>
        <main>
                {!!notes && notes.map((note, index) => (
                  <div class="main_block" key={index}>
                  <div class="for_img">{note.id}</div>
                  <div class="text1">{note.title}</div>
                  <div class="text2">{note.info}</div>
                  <button onClick={() => delNote(note.id)}>Удалить</button>
                  
                  </div>     
                  ))}
        </main>

</div>

  );
}

export default App;

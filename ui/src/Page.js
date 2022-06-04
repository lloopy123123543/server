import axios from "axios";
import './Page.css';
import React, {useState, useEffect, useRef} from "react";


function Page() {

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
        <div className="mains">
            <div className="block block1">
                <div className="top_text">Добро пожаловать на сайт</div>
                <div className="bottom_text">Красиво Минималистично Эксцентрично Логично Не логично</div>
            </div>
            <div className="block block2">
                <div className="logo"></div>
            </div>
        </div>
        <div className="sub">
            <div className="register">
                <div className="title">Оставить заявку</div>
                <div className="register_block">
                    <div className="in_text">Имя</div>
                    <input ref={inputTitle} type="text" placeholder="Название"/>
                    <div className="in_text">Сообщение</div>
                    <input ref={inputInfo} type="text" placeholder="Текст"/>
                    <button onClick={() => addNote()}>Добавить</button>
                </div>
            </div>
        </div>

</div>

  );
}

export default Page;

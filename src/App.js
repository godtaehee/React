import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const list = [...Array(100).keys()];

  return (
    <div className="App">
      <div className="navs">
        네브바
      </div>


      {
        list.map((value, idx) => {
          value+=1;
          return (
            <div className="list">
              <h3>
                {
                  value
                }
              </h3>
              <h3>{idx}</h3>
              <p>2dnjf 18dlfqkftod</p>
              <hr/>
            </div>
          )
        }) 
      }




    </div>
  );
}

function Modal() {
  return (

    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;

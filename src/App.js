import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let cnt = 1;
  const [a,b] = useState(1);
  const [title,fun] = useState(['남자 코드추천', '여자코트추천', '강남역삼']);
  const [modal, modalf] = useState(false);

  function ff() {
    const newarr = [...title];
    newarr.sort();
    fun(newarr);
  }


  return (
    <div className="App">
      <div className="navs">
        네브바
      </div>

      <button type='button' onClick= {

          ff
      }>버튼 </button>

      <div className="title"
      onClick = {

        () => {
          modalf(!modal);
        }

      }>
        클릭 ㄱ
      </div>

      <div className="list">
        <h3 className="title">{title} <span onClick={
          () => {
            b(a+1);
          }
        }>😂</span> {a} </h3>
        <p>김태희입니다.</p>
      </div>

         {
           modal === true 
           ? <Modal></Modal> 
           : null
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

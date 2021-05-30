import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [title, titleFunc] = useState(['강남역 맛집', '역삼역 맛집', '잠실 맛집']);
  const [content, contentFunc] = useState(['강남역은 쩐다.', '역삼역이 더 쩐다.', '잠실 석촌호수 가 더쩐다.']);
  const [isModal, isModalFunc] = useState(false);
  const [tmp, tmpFunc] = useState("");
  return (
    <div className="App">
      {
          title.map(function(val, idx) {
            console.log('gd');
          return <List props={{title,content,idx, isModal, isModalFunc, tmp, tmpFunc}}></List>
          })
      }

      <div className="title">
          {tmp[0]}
        <div className="content"> 
          {tmp[1]}
        </div>
      </div>


    </div>
  );
}

function List(obj) {

  console.log(obj.props.isModal);

  return (
    <div className="list">
      <div className="title" onClick={
        () => {
          obj.props.isModalFunc(true)
          obj.props.tmpFunc([obj.props.title[obj.props.idx], obj.props.content[obj.props.idx]])

        }
      }>
        {obj.props.title[obj.props.idx]}
        안녕
      
      </div>
      {obj.props.content[obj.props.idx]}
    </div>
    
  )

}

export default App;

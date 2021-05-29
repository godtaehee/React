import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {



  const titleArr = ["AlbalogClient", "AlbalogServer", "AndroidStudioProjects", "Applications", "CLionProjects", "Canvas3dSphere", "Desktop", "Documents", "Downloads", "IdeaProjects", "Library", "Linux", "Movies", "Music", "New", "Unity", "Project", "PhpstormProjects", "Pictures", "Postman", "Project", "Projects", "Public", "PycharmProjects", "Python3", "RiderProjects", "Stardy", "UnityProject", "WebProject", "WebstormProjects", "alba", "arsd", "arsd-1", "bank-front", "eclipse", "eclipse-workspace", "firstNode", "git", "git-exer", "github", "go", "intellij-soapui-workspace.xml", "jetbrains", "just", "ko.javascript.info", "lecture-react", "nananana", "newlec", "onlytest", "other", "reac", "react", "reactReal", "real", "rm", "secondNode", "soapui-settings.xml", "test", "yoon"];

  const listArr = [...Array(titleArr.length).fill(0)];

  const [title, titleFunc] = useState(titleArr);
  const [list, listFunc] = useState(listArr);
  
  return (
    <div className="App">
      <div className="navs">
        네브바
      </div>


    {
      titleArr.map((val, idx) => {
        return (
          <div className="title">
            <h3>{val} <span onClick={
              () => {
                const newArr = [...list];
                console.log(newArr);
                newArr[idx] +=1;
                listFunc(newArr);
              }
            }>😂</span></h3> {list[idx]}
            <p>본문입니다.</p>
          </div>
        )
      })
    }

    {
      list
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

import logo from './logo.svg';
import './App.css';

//JSX문법(JS안에서 HTML처럼 코딩) class => cclassName <자바스크립트 문법과 겹치기 때문에 리액트에서 코드작성시 필수>
function App() {

  let 변수 = "앱.js";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{변수}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          리엑트 홈페이지로
        </a>
      </header>
    </div>
  );
}

export default App;

//node_modules : npm으로 설치한 라이브러리들
//public : 변하지 않는 파일들 모음
//src : 레액트/css 코드짜는 곳
//package.json : 리액트 프로젝트 설정파일
//src/App/js : 리액트  프로젝트 시작파일
//src
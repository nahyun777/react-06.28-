import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import PageVite from './pages/PageVite/PageVite'
import PageReact from './pages/PageReact/PageReact'

//실행중인 리액트 종료(ctrl + c)
//npm install react-router-dom 설치
//App 컴포넌트를 <BrowserRouter> 태그로 감싼다
//페이지가 바뀌면 바꿀 부분을 <Routes>태그로 감싼다
//<Route>태그의 path 와 element를 설정해서 테스트
//a태그를 Link태그로 교체해서  to=에다가 이동할 경로를 저장

export default function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <div>
        {/*  ==> <PageReact/> */}
        <Link to="/">
          <img src={viteLogo} className="logo" alt="Vite logo" />

        </Link>
        {/*  ==> <PageReact/> */}
        <Link to="React">
          <img src={reactLogo} className="logo react" alt="React logo" />


        </Link>
      </div>

      <Routes>
        <Route path="/" element={<PageVite />}></Route>
        <Route path="/React" element={<PageReact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}


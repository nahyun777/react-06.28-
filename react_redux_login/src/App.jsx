// .css -> module.css(일반 css는 html에서도 사용가능하지만 중복문제가 있어서 module.css로)

import { Link, Navigate, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import Login from './pages/Login/Login'
import Status from './pages/Status/Status'


export default function App() {
  return (
    <div className={styles.App}>

      <Link to='/login'>로그인</Link>
      <br />
      <Link to='/status'>Status</Link>


      <Routes>
        <Route path='/' element={<Navigate to='./login' replace />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/Status' element={<Status />}></Route>
      </Routes>
    </ div>
  )
}

// 라이브러리 설치
// npm install react-router-dom @reduxjs/toolkit react-redux
// 페이지 이동 : <BrowserRouter> 감싼다
// Context API : <GlobalState> 같은 ContextAPI를 위한 컴포넌트로 App을 감싼다
// Redx : <Provider> 로 App 컴포넌트를 감싼다
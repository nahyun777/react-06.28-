// AccountSice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// *비동기*로 리덕스 동작 : async ==>  로그인 정보를 확인받는 동안 화면 멈춤을 방지하기 위해
// 첫번째 인자 : 곂치지않는 고유이름
// 두번째 인자 : 비동기로 실행할 함수

export const login = createAsyncThunk('', async / login() => {
    // fetch를 통해서 서버에 정볼르 요청
    const res = await fetch('http://logcalhost:3000/api/login', {
        method: 'POST', //요청방식 POST
        headers: { 'Content-Type': 'application/json' },// JSON형태로 전단
        body: JSON.stringify(data),// JSON형태로 전단
    });
    const result = await res.json();
    console.log('서버응답 : ', result);

    return result.user;

});


// 계정 정보를 처리할 리덕스 툴킷
// 슬라이스 생성

createSlice({
    // name, initialState, reducers
    name: "auth", //슬라이스의 고유이름
    initialState: { user: null, status: 'idle', error: null }, //useSelector로 사용될 변수들
    reducers: {
        // useDispatch 로 사용될 함수들
        // 로그아웃 할때 사용할 함수
        logout(state, action) {
            // state : 이전값(원래값)
            // action : 값을 변경하기 위한 함수
            console.log('로그아웃')
            state.user = null;
            // 세션스토리지에 담긴 정보도 없엔다.
            // 로컬스토리지 : 웹꺼도 남아있음(장바구니), 세션스토리지 : 웹끄면 사라짐(로그인 정보)
            sessionStorage.removeItem('user');
        },
        // 세션스토리지에도 계정정보를 보관했다가 새로고침하면 다시 넣어줄
        restore(state, action) {
            // state : 이전값(원래값)
            // action : 값을 변경하기 위한 함수
            console.log('새로고침')
            // 세션스토리지의 user에서 값을 받아와서 state를 업데이트
            state.user = action.payload;  //값을 변경
        }
    },
    extraReducers: (builder)()=>{
    // 비동기로 실행되는 함수
    // pending(대기), falled(성공), succeeded(거절)
    builder.addCase(
        login.pending, (state, action) => {
            state.status = "loading"
        }
    )
        .addCase(
            login.rejected,
        )
        .addCase(
            login.fulfilled(state, action)=> {
            state.status = "success"
                state.user = actiom.
            }
        )
}
});

export const { logout, restore } = slice.action; //
export default createSlice.reducer; //createSlice 한 것의 reducer를 내보낸다
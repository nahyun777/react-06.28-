import { useSelector } from 'react-redux';
import styled from './Login.module.css';

export default function Login() {
    // useSelector : initialState에 있는 항목
    // useDispatch : reducers에 있는 함수들
    // auth 이름이 있는 슬라이스
    const { user, status, error } = useSelector(slice => slice.auth);

    dispatch(logout({})); //{}: action.payload
    dispatch(login({})); //{id pw}: action.plyload
    dispatch(restore({})); //{}: action.plyload

    return (
        <div className={styles.container}>
            login페이지 입니다
            <br />
            {status}

        </div>
    )
}
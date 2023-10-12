"use client"
import React from 'react'
import '../style/Login.scss'
import { useRouter } from 'next/navigation'

function Login() {
    const router = useRouter();
    const nav = ()=>{
        router.push('./pages/join')
    }
    return (
        <>
            <div className='home'>
                <img src='../imges/main.png' className='m-log' />
                <div className='login'>
                    <form>
                        <p><input type='text' name='id' placeholder='아이디를 입력하세요' autocomplete='off' /></p>
                        <p><input type='password' name='pw' placeholder='비밀번호를 입력하세요' /></p>
                        <p><input type='submit' value='로그인' className='submit' /></p>
                        <button onClick={nav}> 회 원 가 입</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
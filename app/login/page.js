"use client"
import React, {useState} from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import "./login.css"

export default function Login() {
    const [pwState, setPwState] =  useState(true)

    const handlePwState = () => {
        setPwState(!pwState);
    };

  return (
    <main className='login-page'>
        <div className='login-form-cont'>
            <h1>Login</h1><p className=''>Enter your the correct username and password</p>
            <form className='login-form' action="">
                <div className='input-cont'>
                    <input type="text" placeholder='Username' className='text-[1rem]' />

                </div>
                <div className='input-cont input-pw'>
                    <input type={pwState ? "text" : "password"} placeholder='Username' className='text-[1rem]' />
                    <div onClick={handlePwState}>{pwState ? <AiOutlineEye /> :<AiOutlineEyeInvisible/>}</div>
                </div>
            </form>
        </div>
    </main>
  )
}



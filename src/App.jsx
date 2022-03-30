import { useState, useEffect } from 'react'

import './App.css'

const LoginCard = ({ time }) => {

  const [ sildeIn, SetSildeIn ] = useState(false)

  const [ sign, setSign ] = useState(false)

  useEffect(()=> setTimeout(() => {
    SetSildeIn(true)
  }, time), [])

  return (
    <div className={`
      logn-card
      ${sildeIn ? 'block' : 'hidden'}
      ${sildeIn && 'md:animate-slide-in-right-y50 animate-slide-in-right block'}
    `}>
      <div className={`slide-container
        ${sign ? 'md:translate-x-full md:translate-y-0 translate-y-full' : 'md:translate-x-0 md:translate-y-0 translate-y-0'}
      `}>
        <form className={`slide-container-form transition-all duration-500
          ${sign ? 'logn-show z-20 opacity-1' : 'z-0 opacity-0'}
        `}>
            <h1 className='logn-h1'>创建你的账户</h1>
            <span>邮箱可选</span>
            <input className='slide-ct-form-input' type="text" placeholder="Name" />
            <input className='slide-ct-form-input' type="email" placeholder="Email" />
            <input className='slide-ct-form-input' type="password" placeholder="Password" />
            <div className='form-btn'>注册</div>
        </form>
        <form className='slide-container-form z-10'>
          <h1 className='logn-h1'>Sign UP</h1>
          <span>请输入您的账户</span>
          <input className='slide-ct-form-input' type="username" placeholder="Username" />
          <input className='slide-ct-form-input' type="password" placeholder="Password" />
          <a href="#">忘记密码?</a>
          <div className='form-btn'>登录</div>
        </form>
      </div>
      <div className={`slide-container z-20
        ${sign ? 'md:translate-x-0 md:translate-y-0 translate-y-0' : 'md:translate-x-full md:translate-y-0 translate-y-full'}
      `}>
        <div className={`slide-box-container
          ${sign ? 'md:translate-x-1/2 md:translate-y-0 translate-y-1/2' : 'md:translate-x-0 md:translate-y-0 translate-y-0'}
        `}>
          <div className={`slide-box
            ${sign ? 'md:translate-x-0 md:translate-y-0 translate-y-0' : 'md:-translate-x-1/3 md:translate-y-0 -translate-y-1/3'}
          `}>
              <h1 className='logn-h1'>Welcome Back!</h1>
              <p className='my-8'>
                  已有账户请点击下方按钮
              </p>
              <button className="transparency-btn" onClick={()=>setSign(false)}>去登录</button>
          </div>
          <div className={`slide-box
            ${sign ? 'md:translate-x-1/3 md:translate-y-0 translate-y-1/3' : 'md:translate-x-0 md:translate-y-0 translate-y-0' }
          `}>
              <h1 className='logn-h1'>Hello, Friend!</h1>
              <p className='my-8'>如没有账户点击下方按钮注册</p>
              <button className="transparency-btn" onClick={()=>setSign(true)}>去注册</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginCard
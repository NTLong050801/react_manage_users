import React, { useState  } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/images/work6.jpg'
import { redirect } from "react-router-dom";
function Login(props) {
   const [email,setEmail] = useState('')
   const [password,setPass] = useState('')
   const [msg , setMsg] = useState('')
   const dispatch = useDispatch();
    const clickLogin = (event) => {
        event.preventDefault();
        if(!email || !password ){
            setMsg("Vui lòng điền đầy đủ tài khoản hoặc mật khẩu !!")
        }
        if(email === "admin@gmail.com" && password === "admin"){
            dispatch({ type: 'LOGIN_SUCCESS' });
        }else{
            
            setMsg("Tài khoản hoặc mật khẩu không chính xác")
        }

    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
      
    }
    const changePass = (e) => {
        setPass(e.target.value)
    }
    return (
        <div className='container login ' >
            <h3 className='text-danger' >Đăng nhập</h3>
            <div id="emailHelp" class="form-text text-danger">{msg}</div>
            <form className='col-6'  onSubmit={(event) => clickLogin(event)}>
                <div class="mb-3 " >
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input required value={email} onChange={(e) =>changeEmail(e)} type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input required  value={password} onChange={(e) =>changePass(e)} type="password" class="form-control border border-primary" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
            <img className='img-fluid img_logo border border-danger ' src={logo}  alt="..."></img>

        </div>
    )
}
export default Login;

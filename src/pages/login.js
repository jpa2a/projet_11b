
import { useRef } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth/userSlice";
import { useNavigate } from "react-router-dom";
import { profileUser } from "../redux/auth/profileSlice";
//import { useDispatch } from "react-redux";
//import { postLogin } from "../actions/login.action";

export function Login(){
// const setToken = useSelector((state) => state.token);
//  console.log(setToken)
//  const dispatch = useDispatch();
  const form = useRef();
  const {loading, error} = useSelector((state) => state.user)
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const postForm = async (e) => {
    e.preventDefault();
    
   // console.log(form.current[0].value)
   // console.log(form.current[1].value)
    const checked = {
      bool: form.current[2].checked,
    }
    const userLogin = {
      email: form.current[0].value,
      password: form.current[1].value,
    }
    
    dispatch(loginUser(userLogin)).then((result) => {
      if(result.payload){
          if (checked.bool === true){
            localStorage.setItem('token', result.payload)
           // console.log(checked)
          }
          else{
           localStorage.removeItem('token')
          }
          
        
         dispatch(profileUser(result.payload)).then((resultat) => {
          if(resultat.payload){
          //  console.log(resultat.payload)
              dispatch({
              type: "profile/edit",
              payload: resultat.payload,
              }) 
          }
        }) 
 
        navigate('/profile');
      }
    })
  /*   axios.post("http://localhost:3001/api/v1/user/login", userLogin).then((res) => {
                console.log(res.data)
                console.log(res.data.status)
                console.log(res.data.body.token)
                
                if (res.data.status === 200) { */
                 // dispatch(setToken(res.data.body.token))
                    //localStorage.setItem("token", res.data.body.token);
                /*     dispatch({
                      type: "token/addToken",
                      payload: res.data.body.token,
                   }) */
     /*              }
          
           })   */

  }


    return <>
      <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Log In</h1>
        <form ref={form} onSubmit={(e) => postForm(e)}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
           {/* <Link to='/user' className="sign-in-button">Sign In</Link> */}
           <button className="sign-in-button">{loading ? 'Loading' : 'Log In'}</button>
           {error && (<div className="errorLogin">{error}</div>)}
        </form>
      </section>
    </main>
    </>
    
  }
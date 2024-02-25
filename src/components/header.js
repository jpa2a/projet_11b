// import { useState } from 'react';
import {  Link } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';

export function Header(){
  const dispatch = useDispatch();  
  const token = useSelector((state) => state.user.token)
  const user = (useSelector((state) => state.profile.firstName))

/*   const user = (useSelector((state) => state.profile.firstName)) +` `+ (useSelector((state) => state.profile.lastName))
 */ // console.log(token)

 /*  function getToken(){
    let token = localStorage.getItem('token');
    
    return token;
} */
   const logOut = () =>{

    localStorage.removeItem('token')
  dispatch({
    type: "user/logOut",
  })
   dispatch({
    type: "profile/logOut",
  }) 
} 
//  () => dispatch({ type: "all/logOut", })
//  const [token, setToken] = useState(getToken());

    return <>
       <nav className="main-nav">
       <Link to='/' className="main-nav-logo"><img
          className="main-nav-logo-image"
          src="./images/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1></Link>
        <div>
      {token ? (
        <>
        <Link to='/profile' className="main-nav-item"><i className="fa fa-user-circle"></i> {user}</Link>
        <Link to='/' className="main-nav-item" onClick={logOut}> Log out</Link>
        </>
      ):
        (<>
        <Link to='/login' className="main-nav-item"><i className="fa fa-user-circle"></i> Login</Link>
        </>)}
        </div>
        
      
    </nav>
    </>
  }
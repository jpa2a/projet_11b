import {  Link } from 'react-router-dom';

export function Header(){
    

    return <>
       <nav className="main-nav">
       <Link to='/' className="main-nav-logo"><img
          className="main-nav-logo-image"
          src="./images/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1></Link>
      
      <div>
        <Link to='/login' className="main-nav-item"><i className="fa fa-user-circle"></i> Login</Link>
        <Link to='/signup' className="main-nav-item"> Sign In</Link>
      </div>
    </nav>
    </>
  }
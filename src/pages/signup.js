
import { useRef } from "react";
// import { useDispatch } from "react-redux";


export function Signup(){

  const form = useRef();
 // const dispatch = useDispatch();
    
  const postForm = async (e) => {
    e.preventDefault();
    console.log(form.current[0].value)
    console.log(form.current[1].value)

    const userLogin = {
      email: form.current[0].value,
      password: form.current[1].value,

    }
    //dispatch(postLogin(userLogin))
  }


    return <>
    <main className="main bg-dark">
  <section className="sign-in-content sig">
    <h1>Sign In</h1>
    <form ref={form} onSubmit={(e) => postForm(e)}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="firstName">First name</label>
        <input type="text" id="firstName" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="username">username</label>
        <input type="text" id="username" />
      </div>
       {/* <Link to='/user' className="sign-in-button">Sign In</Link> */}
       <button className="sign-in-button">Sign In</button>
    </form>
  </section>
</main>
    </>
    
  }

 
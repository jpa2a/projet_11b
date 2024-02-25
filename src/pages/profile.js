
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from 'react';
import axios from "axios";

export function Profile(){
  const token = useSelector((state) => state.user.token)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useRef();
  const [edit, setEdit] = useState(false);
 
 
  useEffect(() => {
    if (!token){
      navigate('/');
    }
   
})
/* 
  dispatch(profileUser(token)).then((result) => {
    if(result.payload){
    // console.log(result.payload.email)
      dispatch({
      type: "profile/edit",
      payload: result.payload,
    }) 
    }
    else{
     navigate('/');
    }
  })
   */
 /*  dispatch(profileUser(token)).then((result) => {
    if(!result.payload){
      navigate('/');
    }
    
  }) */

  
/* 
  if(token){
    const request = axios.post("http://localhost:3001/api/v1/user/profile", null,{ headers: {"Authorization": "Bearer " + token },})
    .then((res) => {
      console.log(res.data.body);
    })
  
  }
  else{
    navigate('/');
  }
 */


function toggleEdit() {
  
    setEdit(!edit)
 
  
}

const postForm = async (e) => {
  e.preventDefault();
  
  //console.log(form.current[0].value)
 
 
  const userName = {
    userName: form.current[0].value,
  }
    axios.put("http://localhost:3001/api/v1/user/profile", userName,{ headers: {"Authorization": "Bearer " + token },});

   dispatch({
    type: "profile/editUsername",
    payload: form.current[0].value,
  })  
  toggleEdit()
}



  //console.log(edit)
  const profileUserName = useSelector((state) => state.profile.userName)
  const profilefirstName = useSelector((state) => state.profile.firstName)
  const profilelastName = useSelector((state) => state.profile.lastName)
  //console.log(profileUserName)
    return <>
       <main className="main bg-dark">

     {edit ? <div className="header form">
        <form ref={form} onSubmit={(e) => postForm(e)}>
        <h1>Edit user info<br /></h1>
        
        <div className="formLine"><label htmlFor="username">User name: </label><input id="username" className="editInput" type="text" defaultValue={profileUserName}></input></div>
        <div className="formLine"><label htmlFor="firstname">First name: </label><input id="firstname" className="editInput disabled" type="text" Value={profilefirstName} disabled></input></div>
        <div className="formLine"><label htmlFor="lastname">Last name: </label><input id="lastname" className="editInput disabled" type="text" Value={profilelastName} disabled></input></div>
        <button className="edit-button">Save</button>
        <button className="edit-button" onClick={toggleEdit}>Cancel</button>
        </form>
      </div> 
      : <div className="header">
        <h1>Welcome back<br />{profileUserName} !</h1>
        <button className="edit-button" onClick={toggleEdit}>Edit Name</button>
      </div>}
      
      
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    </>
  }
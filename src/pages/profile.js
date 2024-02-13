
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../redux/auth/profileSlice";

export function Profile(){
  const token = useSelector((state) => state.user.token)
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const profileUserName = useSelector((state) => state.profile.userName)
  console.log(profileUserName)
    return <>
       <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{profileUserName}</h1>
        <button className="edit-button">Edit Name</button>
      </div>
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
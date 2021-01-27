// // import "../App.css";
// import { useState } from "react";
// import Axios from "axios";
// import { Redirect } from "react-router-dom";

// function Home() {
 
  
//   const [userEmail, setUserEmail] = useState('')
//   const [userPassword_digest, setPassword] = useState('')
//   const [loginStatus, setLoginStatus] = useState('')
  

//   const login = () => {
//     Axios
//       .post("http://localhost:3001/login", {
//         email: userEmail,
//         password_digest: userPassword_digest
//         })
//       .then((response) => {
//         if(response.data.message){
//           setLoginStatus(response.data.message)
//         } else{
//           setLoginStatus(response.data[0].username)
//         }  
//     });
//   };

 



//   return (
//     <div className="Home">
            

//             <div className="login">
//                 <h1>LogIn</h1>
//                 <input type="text" placeholder="Email..." onChange={(event) => {
//                   setUserEmail(event.target.value);
//                 }}/>
//                 <input type="password" placeholder="Password..." onChange={(event) => {
//                   setPassword(event.target.value);
//                 }}/>
//                 <button onClick={login}>Login</button>
//             </div>
//     </div>
      
//   )   
// }
// export default Home

import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://assets.website-files.com/5ef5c908f55bc9b2c48a5cc2/5efe1297f8ace8f6314b5749_Employee-Database-Management-System.jpeg"
              alt=""
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
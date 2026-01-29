import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  let [ld, setLd] = useState({ email: "email", password: "1235" });
  let ng=useNavigate();

 async function loginHandler(){
    console.log(" login data : "+JSON.stringify(ld) )

     try {
    let res = await fetch("http://40.0.49.6:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ld),
    });

    let data = await res.text();

    if (res.ok) {
      // ✅ STORE SESSION
      localStorage.setItem("email",ld.email);
      localStorage.setItem("password",ld.password);
      // sessionStorage.setItem("isLogin", "true");
      // sessionStorage.setItem("email", ld.email);

      alert("Login success ✅");
      ng("/admin");

     
    } else {
      alert("Invalid credentials ❌");
    }

    console.log("API response:", data);

  } catch (e) {
    alert("Login failed ❌");
    console.error(e);
  }
  }
  return (
    <>
      <div>
        <h3>login</h3>
        <br />
        <br />
        <input type="text" placeholder="email" onChange={(e)=>{setLd({...ld,email:e.target.value})}} />
        <br />
        <input type="text" placeholder="password" onChange={(e)=>{setLd({...ld,password:e.target.value})}} />
        <br />
        <br />
        <button onClick={loginHandler}>login</button>
        <br />
        <Link to="/s"> create account </Link>
        <br />
        <h4>email : {ld.email}</h4>
        <h4>password :{ld.password}</h4>
      </div>
    </>
  );
}

export default Login;

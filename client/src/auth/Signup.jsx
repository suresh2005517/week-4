import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  let [n, setN] = useState("test");
  let [e, setE] = useState("test@gmail.com");
  let [p, setP] = useState("password");

  async function submitHandler() {
    let objData = {
      name: n,
      email: e,
      password: p,
    };

    console.log("object:", JSON.stringify(objData, null, 2));

    try {
      let res = await fetch("http://40.0.49.6:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objData),
      });

      let dataText = await res.text();
      console.log("res =", dataText);

      // ✅ POP ALERT AFTER SUCCESS
      if (res.ok) {
        alert("Signup successful ✅");

        // optional: clear form
        setN("");
        setE("");
        setP("");
      } else {
        alert("Signup failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  }

  return (
    <>
      <div>
        <h3>Create Account</h3>

        <input
          type="text"
          placeholder="name"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="email"
          value={e}
          onChange={(e) => setE(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="password"
          value={p}
          onChange={(e) => setP(e.target.value)}
        />
        <br />
        <br />

        <button onClick={submitHandler}>Submit</button>

        <br />
             <Link to="/l"> already have account </Link>
        <br />

        <div>name : {n}</div>
        <div>email : {e}</div>
        <div>password : {p}</div>
      </div>
    </>
  );
}

export default Signup;

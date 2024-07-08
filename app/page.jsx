"use client"

import { useState } from "react";
import "./page.css";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleLogin(){
    const req = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d44527eb32ca046e372b474227cbd335').then(res =>{
      return res.json()
    }).then(data => {
      console.log(data)
    })
  }


  return (
    <main>
      <div className="container">
        <h1>Login</h1>
        <form action="/">
          <input type="email" name="email"  placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" name="password"  placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={() => handleLogin()}>Login</button>
        </form>
      </div>
    </main>
  );
}

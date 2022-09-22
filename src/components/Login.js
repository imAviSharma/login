import React, { useState, useEffect } from 'react'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return (
        <div className="login">
            <form>
                <input type="text" value={username} placeholder="Enter your username" required onChange={e=>setUsername(e.target.value)}/>
                <input type="password" value={password} placeholder="Enter your password" required onChange={e=>setPassword(e.target.value)}/>
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login
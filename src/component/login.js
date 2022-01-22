import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar_comp from "./navbar";

export default function Login() {
    const [user, setUser] = useState("");
    const [Password, setPassword] = useState("")
    const history = useHistory();
    const submit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3000/login?name=${user}&&password=${Password}`)
            .then((res) => {
                if (res.data.length >= 1) {
                    localStorage.setItem('login', JSON.stringify(res.data));
                    history.push('/list')
                    console.log(res.data);
                    return;
                } else
                {
                    console.log("invaild email or password");
                }
            })
            .catch(() => {
                console.log("invaild email or password");
            });
    }
    return (
        <>
            <Navbar_comp />
            <div>
                <form onSubmit={submit}>
                    <input type="text" placeholder="enter the name"
                        onChange={(e) => { setUser(e.target.value) }} />
                    <br></br>
                    <input type="password" placeholder="password"
                        onChange={(e) => { setPassword(e.target.value) }} />
                    <br></br>
                    <br></br>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

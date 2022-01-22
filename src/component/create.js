import axios from "axios";
import { Redirect } from 'react-router-dom'
import { useState } from "react/cjs/react.development";
import Navbar_comp from "./navbar";



const Create = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [adress, setAdress] = useState("")
    const saveUser = (e) => {
        e.preventDefault();
        console.log({ name, adress });
        let data = { name, adress }
        axios.post("http://localhost:3000/restaurant", data)

            .then(() => {
                console.log("data successful insert")



            })
            .catch(() => {
                console.log('Data not insert');
            })
            
    }
    <Redirect to="/login"/>
    return (
        <>
            <Navbar_comp />
            <div>
                <h1>post</h1>
                <form onSubmit={saveUser}>
                    {/* <input type="text" value={id} onChange={(e) => { setId(e.target.value) }} name="id" /> */}
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" />
                    <input type="text" value={adress} onChange={(e) => { setAdress(e.target.value) }} name="city" />
                    <button type="submit">save the data</button>
                </form>

            </div>
        </>
    );
}
export default Create;
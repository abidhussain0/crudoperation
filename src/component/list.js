import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar_comp from "./navbar";

function List() {
    const [user, setUser] = useState([]);
    const getUse = () => {
        axios.get(`http://localhost:3000/restaurant`)
            .then((res) => {
                setUser(res.data);
                console.log(res.data);
            })
            .catch(() => {
                console.log('Data not found!');
            });
    }
    useEffect(() => {
        getUse();
    }, [])
    const deleteItem = (id) => {
        axios.delete(`http://localhost:3000/restaurant/${id}`)
            .then((res) => {
                console.log('Data  Delete');
                getUse();
            })
            .catch(() => {
                console.log('Data not Delete');
            });
    }
    const editItem = (id) => {
        const data = {

        }
        axios.put(`http://localhost:3000/restaurant/${id}`, data)
            .then((res) => {
                console.log('Data  edit');
                getUse();
            })
            .catch(() => {
                console.log('Dat not edit');
            });
    }
    
    return (
        <>
            <Navbar_comp />
            <div>
                <h1>List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((curEle) => (
                            <tr key={curEle.id}>
                                <td>{curEle.id}</td>
                                <td>{curEle.name}</td>
                                <td>{curEle.adress}</td>
                                <td ><button onClick={() => deleteItem(curEle.id)}>Delete</button></td>
                                <td ><Link to={`/update/${curEle.id}`}>update</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
export default List;
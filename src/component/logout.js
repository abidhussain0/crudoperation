import React from 'react'
import { Redirect } from 'react-router-dom'
import Navbar_comp from './navbar';

export default function Logout() {
    localStorage.clear();
    return (
    <>
    <Navbar_comp/>
    <Redirect to="/login"/>
    </>
    )
}

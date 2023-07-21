import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pfImage from '../../assets/logo8-removebg-preview.png'

import Dropdown from "../Home/Dropdown";
export default function Navbar({ onModalClick, onModaleClick }) {

    let usuario = useSelector(state => state.index.user);
    
    useEffect(()=> {
    },[usuario])


    return (
        <nav className="bg-semidark place-content-center items-center py-2">
        <div className="flex items-center justify-between">
        <Link to='/home'>
        <img className="flex items-center pl-4 "
            src='http://codes.unidepix.com/img/hi.png'
            alt="logo hitalent"
            width='140px'
        />
        </Link>
        {
            usuario.username ? <Dropdown /> :
            (
            <div>
                <button onClick={onModalClick} className="m-4 font-semibold">Ingreso</button>
                <button  onClick={onModaleClick} className="m-2 bg-transparent hover:bg-semilight  font-semibold hover:text-black py-2 px-4 border border-dark hover:border-semilight rounded p-0">Registro</button>
            </div>
            )
        }
            
        </div>
        </nav>
    )
}
import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import { disableExpoCliLogging } from "expo/build/logs/Logs";


export default function Acount(){
    const [login, setLogin] = useState(null);
    
    useEffect(()=> {
        firebase.auth().onAuthStateChanged((user)=>{
            !user ? setLogin(false) : setLogin(true);
        });
    }, []);

    if(login === null) return <Loading isVisible={true} text="Cargando..."/>
    return login ? <UserLogged/> : <UserGuest/>;
}
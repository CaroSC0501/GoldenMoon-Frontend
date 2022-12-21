
import { useEffect } from "react";
import logo from "../../assets/img/GoldenMoon.jpg";
import { isAuth } from "../../util/Util";
import { TopMenu } from "../menu/TopMenu";
import "./Header.css";

export const Header = ()=>{
    useEffect(() =>{}, []);
    return (
        <div>
            <div className='flex' style={{backgroundColor: "#1C2833"}}>
            <img className='logo flex' src={logo} alt="logo" />
            <h1 className='bloque' style={{fontStyle: "Homer Simpson"}}>
                Tu experiencia<br/>
                Golden Moon
            </h1>
            </div>
            {isAuth() ? <TopMenu /> : ""}
        </div>
    );
};

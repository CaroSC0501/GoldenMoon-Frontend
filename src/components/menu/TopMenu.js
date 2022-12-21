
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TopMenu.css";
import { API_URL, isAuth } from "../../util/Util";

export const TopMenu = () => {
  const [categories, setCategories] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getCategoriesAsync();
  }, []);

  const getCategoriesAsync = async () => {
    let response = await fetch("http://localhost:8080/api/category");
    response = await response.json();
    setCategories(response);
  };

  const items = [
    "Inicio",
    "Categorías",
    "Más vistas",
    "Registrar pelicula",
    "Mis calificados",
    "Mi cuenta",
    "Cerrar sesión"
  ];

const subMenu = ()=>(    
<div className="navbar">
  <Link to="/">Inicio</Link>
  <Link to="/category">Categorias</Link>
  <Link to="/movieRegister">Registrar Pelicula</Link>
  <Link to="/movies">Peliculas</Link>
  <Link to="/">Mis calificados</Link>
  <Link to="/">Mi cuenta </Link>
  <Link to="/">Cerrar sesión </Link>
</div>
)
return subMenu()
}

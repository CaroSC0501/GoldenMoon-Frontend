import { Link, useNavigate } from "react-router-dom";

export const Category=()=>{
    return (

    <div class="tab">
      <button class="tablinks" onclick="openCity(event, 'Terror')">Terror</button>
      <button class="tablinks" onclick="openCity(event, 'Acción')">Acción</button>
      <button class="tablinks" onclick="openCity(event, 'Fantasia')">Fantasia</button>
    </div>
     
    )
}
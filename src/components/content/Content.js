import "./Content.css";

import { Card } from "../card/Card";
import { useEffect, useState } from "react";
import { API_URL } from "../../util/Util";

export const Content = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //getMovies();
    getMoviesAsync();
  }, []);

  const getMovies = () => {
    console.log(1);
    fetch("http://localhost:8080/api/movie")
      .then((response) => response.json())
      .then((response) => {
        console.log(`2`, 2);
        //console.log(response);
        setMovies(response);
      });
    console.log(`3`, 3);
  };

  const getMoviesAsync = async () => {
    let response = await fetch("http://localhost:8080/api/movie");
    response = await response.json();
    setMovies(response);
  };

  return (
    <div className="row">
        <Card 
          //key={idx}
          name={"Maleficio"}
          description= {"Tres amigos que desmontan mitos sobrenaturales<br/> viven un extraño incidente durante la visita a una secta. Ahora, la superviviente <br/> debe salvar a su hija de una maldición."}
          staffList={"Ken-Yan Tsai (Ruo-nan)<br/>Kao Yin-Hsuan<br/>Sean Lin<br/>Ching-Yu Wen"}
          image = {"https://es.web.img2.acsta.net/r_1920_1080/pictures/22/06/10/22/14/4741385.jpg"}
        />

        <Card
          //key={idx}
          name={"La Huerfana: El Origen"}
          description= {"La trágica pérdida de su hijo aún no nacido ha dejado destrozados a Kate y John,<br/> lo que está pesando en su matrimonio y la frágil psique de Kate,<br/> que no para de tener pesadillas y se siente perseguida por los fantasmas de su pasado.<br/> En un esfuerzo por recuperar cierta normalidad en sus vidas, la pareja decide adoptar un niño.<br/> En el orfanato local, tanto John como Kate se sienten extrañamente atraídos por una niña llamada Esther."}
          staffList={"Vera Farmiga Kate Coleman<br/>Peter Sarsgaard John Coleman<br/>Isabelle Fuhrman Esther<br/>Jimmy Bennett Daniel Coleman<br/>CCH Pounder Hermana Abigail<br/>Aryana Engineer Max Coleman<br/>Margo Martindale Dr. Browning<br/>Karel Roden Dr. Varava"}
          image = {"https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic3.abc.es%2Fmedia%2Fpeliculas%2F000%2F027%2F248%2Fla-huerfana-1.jpg&nuevoancho=150&medio=abc"}
        />

        <Card
          //key={idx}
          name={"Black Adam"}
          description= {"Casi 5.000 años después de haber sido dotado de los poderes omnipotentes<br/> de los antiguos dioses, Black Adam es liberado de su tumba terrenal,<br/> listo para desatar su forma única de justicia en el mundo moderno."}
          staffList={"Ken-Yan Tsai (Ruo-nan)<br/>Kao Yin-Hsuan<br/>Sean Lin<br/>Ching-Yu Wen"}
          image = {"https://dam.smashmexico.com.mx/wp-content/uploads/2022/06/black-adam-pelicula-primer-poster-oficial-720px.jpg"}
        />

        <Card
          //key={idx}
          name={"Asesino Sin Memoria"}
          description= {"Tres amigos que desmontan mitos sobrenaturales<br/> viven un extraño incidente durante la visita a una secta. Ahora, la superviviente <br/> debe salvar a su hija de una maldición."}
          staffList={"Dwayne Johnson<br/>Henry cavill<br/>Sarah Shahi<br/>Noah Centineo<br/>Quitessa Swindell<br/>Pierce Brosnan<br/>Adis Hodge"}
          image = {"https://media.filmelier.com/tit/KnIisI/poster/asesino-sin-memoria_pG7SOf4.jpeg"}
        />

        <Card
          //key={idx}
          name={"Pinocchio"}
          description= {"Tres amigos que desmontan mitos sobrenaturales<br/> viven un extraño incidente durante la visita a una secta. Ahora, la superviviente <br/> debe salvar a su hija de una maldición."}
          staffList={"Ken-Yan Tsai (Ruo-nan)<br/>Kao Yin-Hsuan<br/>Sean Lin<br/>Ching-Yu Wen"}
          image = {"https://es.web.img3.acsta.net/c_310_420/pictures/22/08/30/13/02/2562155.jpg"}
        />

        <Card
          //key={idx}
          name={"Cazadores de sombras"}
          description= {"Clary Fray vive en Nueva York y su vida transcurre con aparente normalidad entre la exigente<br/> personalidad de su madre Jocelyn y sus clases de arte. Pero todo cambia de un plumazo cuando,<br/> a la salida del club nocturno de moda Pandemonium, Clary hace de tripas corazón e<br/> intenta impedir un asesinato. Sin embargo, ni su amigo, el sarcástico Simon Lewis,<br/> ni ninguno de los presentes en la discoteca han visto lo que ella. ¿Acaso se está volviendo loca?"}
          staffList={"Ken-Yan Tsai (Ruo-nan)<br/>Kao Yin-Hsuan<br/>Sean Lin<br/>Ching-Yu Wen"}
          image = {"https://es.web.img2.acsta.net/c_310_420/pictures/210/255/21025564_20130808120201803.jpg"}
        />

    </div>
  );
};

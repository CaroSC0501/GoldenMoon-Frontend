import Toast from "react-bootstrap/Toast";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import { API_URL, getToken } from "../../util/Util";
import Swal from "sweetalert2";

export const Movie = ({ id, name, description, image, staffList }) => {
  const params = useParams();
  const [movieId, setMovieId] = useState("");
  const [movie, setMovie] = useState({});
  const [score, setScore] = useState([]);
  const [scoreSelected, setScoreSelected] = useState("");
  const [scoreId, setScoreId] = useState("");

  useEffect(() => {
    //getMovies();
    setMovieId(params.id);
    getMovie();
    setScoreData();
    checkScore();
  }, [scoreSelected]);

  const getMovie = async () => {
    let response = await fetch(API_URL + "movie/" + params.id);
    response = await response.json();
    setMovie(response);
  };

  const checkScore = async () => {
    const requestData = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: getToken(),
      },
    };
    let response = await fetch(
      API_URL + "score/check/" + params.id,
      requestData
    );
    response = await response.json();
    //const response = { id: "6399cfadc9e9a77c999e8306", score: 6 };
    if (response.id != null && response.score != null) {
      setScoreSelected(response.score);
      setScoreId(response.id);
    }
  };

  const sendScoreApi = async (score) => {
    let method = "post";
    if (scoreSelected != "") {
      method = "put";
    }

    const scoreDTO = {
      score: score,
      movieId: movieId,
    };

    const requestData = {
      method,
      body: JSON.stringify(scoreDTO),
      headers: {
        "Content-type": "application/json",
        Authorization: getToken(),
      },
    };

    let response = await fetch(API_URL + "score/" + scoreId, requestData);
    response = await response.json();
    if (response.status == true) {
      Swal.fire({
        title: "",
        text: response.message,
        icon: "success",
        confirmButtonText: "ok",
      });
    } else {
      Swal.fire({
        title: "",
        text: response.message,
        icon: "warning",
        confirmButtonText: "Reintentar",
      });
    }
  };

  const setScoreData = () => {
    const scores = [];
    for (let index = 1; index <= 10; index++) {
      scores.push(index);
    }
    setScore(scores);
  };

  const sendScore = async (event) => {
    const { value } = event.target;
    await sendScoreApi(value);
  };

 return (
    <div className="movie-container">
      <iframe
        id="myVideo"
        width="560"
        height="520"
        src="https://www.youtube.com/embed/RZq-5A8Zo-o"
        title={movie.name}
        frameBorder="0"   
        allowFullScreen
      ></iframe>

      <div className="main-container">
        <div className="content">
          <h1>Maleficio</h1>
          <p>Tres amigos que desmontan mitos sobrenaturales viven un extraño incidente durante la visita a una secta. Ahora, la superviviente debe salvar a su hija de una maldición.</p>
          <div className="staff-list">
            {movie.staffList && movie.staffList.length > 0
              ? movie.staffList.map((staff, idx) => (
                  <p key={idx}>
                    {staff.name} {staff.lastName} ({staff.rol})
                  </p>
                ))
              : "Ken-Yan Tsai (Ruo-nan) Kao Yin-Hsuan Sean Lin Ching-Yu Wen"}
          </div>

          <div className="rate">
            <p>Calificar pelicula</p>
            <select value={scoreSelected} onChange={sendScore}>
              <option>Sin calificar</option>
              {score.map((element, idx) => (
                <option key={idx}>{element}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>


);
};

import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { MovieId } from "../../types";
import "./MovieDetail.scss";

interface MovieDetailProps {
  idMovie: string | undefined;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ idMovie }): ReactElement => {
  const [movieToRender, setMovieToRender] = useState<MovieId | undefined>();
  const [isLoading, setLoading] = useState(false);

  const movieById = async () => {
    try {
      const info = await axios.get(
        `http://localhost:3000/api/movies/${idMovie}`
      );
      setMovieToRender(info.data);
      setLoading(false);
    } catch (error) {
      console.error("wrong petition", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    movieById();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="wrapper-detail">
          <img src={movieToRender?.poster_path} alt="" />
          <body className="wrapper-text">
            <h1>Movie: {movieToRender?.title}</h1>
            <h1>
              Genres:
              {movieToRender?.genres.map((item) => {
                return <h3>{item.name}</h3>;
              })}
            </h1>
            <h1>{`Original Language: ${movieToRender?.original_language}`}</h1>
            <h1>Overview:</h1>
            <span>{movieToRender?.overview}</span>
            <h1>⭐{movieToRender?.vote_average}</h1>
          </body>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;

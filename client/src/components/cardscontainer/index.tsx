import "./CardsContainer.scss";
import { useState, useEffect } from "react";
import type { Movies } from "../../types";
import axios from "axios";
import Card from "../card";
import { Link } from "react-router-dom";

interface PropsContainerCards {
  paginatorNumber: number;
}

const CardsContainer = ({ paginatorNumber }: PropsContainerCards) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<null | Movies[]>(null);

  const getMovies = async (): Promise<void> => {
    try {
      const info = await axios.get(
        `http://localhost:3000/api/movies?page=${paginatorNumber}`
      );
      setData(info.data);
      setLoading(false);
    } catch (error) {
      console.error("wrong petition", error);
    }
  };

  useEffect(() => {
    setLoading(!isLoading);
    getMovies();
  }, [paginatorNumber]);

  return (
    <div>
      <div className="wrapper-cards">
        {isLoading ? (
          <h1>We're loading our movies information...</h1>
        ) : (
          data?.map((item) => (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <Card
                backdrop_path={item.backdrop_path}
                release_date={item.release_date}
                title={item.title}
                id={item.id}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CardsContainer;

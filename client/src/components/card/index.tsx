import "./Card.scss";
import { ReactElement } from "react";

interface CardProps {
  title: string;
  release_date: string;
  backdrop_path: string;
  id: number;
}

const Card = ({
  title,
  release_date,
  backdrop_path,
  id,
}: CardProps): ReactElement => {
  return (
    <div className="title-card-movie" key={id}>
      <div className="card-wrapper" key={id * 2}>
        <img src={backdrop_path} alt="Image problems" className="image-card" />
        <main className="info-card">
          <div>
            <h1>{title}</h1>
            <h1>{release_date}</h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Card;

import { useParams } from "react-router-dom";
import MovieDetail from "../../components/moviedetail";
import { MainLayout } from "../../layouts/mainlayout";

const MovieByIdView = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <MovieDetail idMovie={id} />
    </MainLayout>
  );
};

export default MovieByIdView;

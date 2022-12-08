import { ReactElement, useState } from "react";
import CardsContainer from "../../components/cardscontainer";
import Paginator from "../../components/paginator";
import { MainLayout } from "../../layouts/mainlayout";

const HomeView: React.FC = (): ReactElement => {
  const [paginator, setPaginator] = useState<number>(1);

  return (
    <MainLayout>
      <Paginator paginatorNumber={paginator} setNumber={setPaginator} />
      <CardsContainer paginatorNumber={paginator} />
    </MainLayout>
  );
};

export default HomeView;

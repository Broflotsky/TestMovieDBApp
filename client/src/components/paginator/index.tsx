import { Dispatch, ReactElement, SetStateAction } from "react";
import "./Paginator.scss";

interface PaginatorProps {
  paginatorNumber: number;
  setNumber: Dispatch<SetStateAction<number>>;
}

const Paginator = ({
  paginatorNumber,
  setNumber,
}: PaginatorProps): ReactElement => {
  function AddPaginatorNumber() {
    setNumber(paginatorNumber + 1);
  }
  function RemovePaginatorNumber() {
    paginatorNumber >= 2 ? setNumber(paginatorNumber - 1) : setNumber(1);
  }
  return (
    <div className="paginator">
      {paginatorNumber > 1 && (
        <button onClick={() => RemovePaginatorNumber()}>{"Previous"}</button>
      )}
      <button onClick={() => AddPaginatorNumber()}>{"Next"}</button>
    </div>
  );
};

export default Paginator;

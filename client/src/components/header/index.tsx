import "./Header.scss";
import TheMoviesDBLogo from "../../assets/thedb.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
        <h1>
          Ivan <br /> Movies App
        </h1>
      </Link>
      <div>
        <h2>All our info is provided from:</h2>
        <img src={TheMoviesDBLogo} alt="" width={"75px"} height={"75px"} />
      </div>
    </div>
  );
};

export default Header;

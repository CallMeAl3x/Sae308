import { Link } from "react-router-dom";

const Logo = () => {

  return (
    <div className="flex justify-center p-6 lg:absolute top-4 left-16">
      <Link to="/" className="flex items-center relative Link">
      <img
        src="./logo.svg"
        alt=""
        className=" lg:w-32 lg:h-32 w-12 h-12 z-50"
        />
        </Link>
    </div>
  );
};

export default Logo;

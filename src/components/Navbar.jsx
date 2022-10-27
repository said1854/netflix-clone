import { Link } from "react-router-dom";

const Nabvar = () => {
  return (
    <div className="flex fixed justify-between p-4 z-[100] opacity-70 bg-black/80 w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          SAIDFLIX
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="text-white pr-4"> Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nabvar;

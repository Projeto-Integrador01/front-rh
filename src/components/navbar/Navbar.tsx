import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full text-white flex justify-center py-4 bg-[rgb(0,105,92)]">
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold text-white">
          Home
        </Link>

        <div className="flex gap-4">
          <Link to="/sobre" className="text-white hover:text-gray-300">
            Sobre Nós
          </Link>
          <Link to="/colaboradores" className="hover:underline">
            Colaboradores
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

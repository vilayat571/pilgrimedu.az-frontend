import { Link } from 'react-router-dom'
import pilgrim_logo from "../../assets/images/pilgrim_logo.png";

const Logo = () => {
  return (
    <Link
          to="/"
          className="w-full justify-center items-center h-auto flex"
          role="logo"
        >
          <img
            className="w-auto"
            src={pilgrim_logo}
            alt="the logo of Pilgrim MMC"
          />
        </Link>

  )
}

export default Logo

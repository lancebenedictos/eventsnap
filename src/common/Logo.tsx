import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
type props = {
  withText?: boolean;
};
function Logo({ withText = false }: props) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <>
        <img src={logo} className={` w-8`} />
        {withText && <h4 className="text-cta text-xl">EventSnap</h4>}
      </>
    </Link>
  );
}

export default Logo;

import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="logo" className="w-28 lg:w-32 cursor-pointer" />
    </div>
  );
};

export default Navbar;

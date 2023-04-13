import Buttons from "../Buttons/Buttons";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <Buttons />
    </header>
  );
};

export default Header;

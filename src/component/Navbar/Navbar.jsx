import lwsImg from "../../assets/lws-logo-en.svg";
const Navbar = () => {
  return (
    <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)]">
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* <!-- Logo --> */}
          <a href="/">
            <img className="h-[40px]" src={lwsImg} alt="Lws" />
          </a>
          {/* Logo Ends  */}
          <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
            Get Admission
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

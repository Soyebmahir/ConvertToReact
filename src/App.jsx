import "./App.css";
import Footer from "./component/Footer/Footer";
import HeroSection from "./component/HeroSection/HeroSection";
import Navbar from "./component/Navbar/Navbar";
import StudentInfo from "./component/StudentInfo/StudentInfo";

function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <StudentInfo></StudentInfo>
      <Footer></Footer>
    </div>
  );
}

export default App;

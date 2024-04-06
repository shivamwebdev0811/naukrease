import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

function App() {
  return (
    
    <div>
    <div className="fixed w-full z-10">
    <Navbar/>
    </div>
     
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;


import './App.css';
import AllRoutes from './routes/AllRoutes';
import Header from "./components/Header/Header"
import Footer from './components/Footer';
// import Navbar1 from "./components/Navbar1"

export const BASEURL = "https://red-elated-capybara.cyclic.app/auth"

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Navbar1/> */}
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
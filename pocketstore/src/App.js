import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Footer from "./components/Footer";
import Navbar1 from "./components/Navbar1";

export const BASEURL = "https://black-mussel-fez.cyclic.app/user";

function App() {
  console.log(window.location.pathname);
  return (
    <div className="App">
      {window.location.pathname === "/login" ? (
        <></>
      ) : window.location.pathname === "/signup" ? (
        <></>
      ) : (
      <Navbar1 />
      )}
   
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

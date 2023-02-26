
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Header from "./components/Header/Header"

export const BASEURL = "https://red-elated-capybara.cyclic.app/auth"

function App() {
  console.log(window.location.pathname);
  return (
    <div className="App">
      {window.location.pathname==="/login"?<></>:window.location.pathname==="/signup"?<></>:<Header/>}
      <AllRoutes />
    </div>
  );
}

export default App;
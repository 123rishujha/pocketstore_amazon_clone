import './App.css';
import AllRoutes from './routes/AllRoutes';

// import Header from "./components/Header/Header"
export const BASEURL = "https://red-elated-capybara.cyclic.app/auth"
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <AllRoutes />
    </div>
  );
}

export default App;

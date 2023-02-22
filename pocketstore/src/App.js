import './App.css';
import AllRoutes from './routes/AllRoutes';
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes />
    </div>
  );
}

export default App;

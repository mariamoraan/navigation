import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Menu from "./molecules/Menu/Menu";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="questions" element={<Questions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

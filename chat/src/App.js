import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./component/welcome/welcome";
import Chat from "./component/Chat/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;

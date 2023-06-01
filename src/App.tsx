import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import WalletPage from './pages/Wallet';
//
function App() {
  return (
    <Router basename={"/" }>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/wallet" element={<WalletPage />}></Route>
        </Routes>
    </Router>
  );
}
//
export default App;
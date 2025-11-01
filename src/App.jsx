import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Header from './pages/SignIn/Header'; 
import SignIn from './pages/SignIn/SignIn';
import LogIn from './pages/LogIn/LoginForm';
import About from './pages/About/About'; // Import About component
import Contact from './pages/Contact/Contact'; // Import Contact component
import Home from './pages/Home/Home'; // Import Home component

const App = () => {
  return (
    <Router>
      <TopBar />
      <Header />
      <hr className="my-6 border-t border-gray-300" />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/about" element={<About />} /> {/* Route for About page */}
          <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
          <Route path="/home" element={<Home />} /> {/* Route for Home page */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
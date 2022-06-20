import React from 'react';
import Navbar from './components/Navbar';
import Single from './components/Single';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Settings from './pages/Settings';
import Write from './pages/Write';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const user = false;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/posts" exact element={<Posts />}></Route>
          <Route
            path="/login"
            exact
            element={user ? <Home /> : <Login />}
          ></Route>
          <Route
            path="/register"
            exact
            element={user ? <Home /> : <Register />}
          ></Route>
          <Route path="/post/:id" exact element={<Single />}></Route>
          <Route
            path="/write"
            exact
            element={user ? <Write /> : <Login />}
          ></Route>
          <Route
            path="/settings"
            exact
            element={user ? <Settings /> : <Login />}
          ></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

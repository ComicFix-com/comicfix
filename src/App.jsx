import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './components/ProjectPage';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/project/:id" component={ProjectPage} />
            <Route path="/user/:id" component={UserProfile} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
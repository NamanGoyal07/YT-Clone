import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import SearchPage from './SearchPage.js';
import RecommendedVideos from './RecommendedVideos.js';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/*<h2>Let's build a Youtube Clone</h2>*/}
      {/* Header Components */}
      {/* Sidebar Components */}
      {/* Recommended Components */}

      <Router>
      <Header />
        <Switch>
        <Route path="/search/:searchTerm">
            <div className="app__page">
                {/* Sidebar Components */}
                <Sidebar />

                <SearchPage />
                {/* Search Page Components */}
            </div>
        </Route>

        <Route path="/">
            {/* <Sidebar /> */}
            <div className="app__page">
              {/* Sidebar Components */}
              <Sidebar />

              <RecommendedVideos />
              {/* Recommended Components */}
            </div>
        </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;


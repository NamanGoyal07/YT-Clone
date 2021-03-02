import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import RecommendedVideos from './RecommendedVideos.js';

function App() {
  return (
    <div className="app">
      {/*<h2>Let's build a Youtube Clone</h2>*/}
      {/* Header Components */}
      {/* Sidebar Components */}
      {/* Recommended Components */}
      <Header />
      {/* <Sidebar /> */}

      <div className="app__page">
        {/* Sidebar Components */}
        <Sidebar />

        <RecommendedVideos />
        {/* Recommended Components */}
      </div>

    </div>
  );
}

export default App;


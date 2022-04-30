import './App.css';
import Header from './components/header';
import FollowSuggestion from './components/follow_suggestion';
import Recent from './components/recent';
import Sidebar from './components/sidebar';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="in-row">
        <Sidebar />
        <Main />
        <div className="in-column">
          <Recent />
          <FollowSuggestion />
        </div>
      </div>
    </div>
  );
}

export default App;

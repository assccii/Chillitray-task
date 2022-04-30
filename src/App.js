import './App.css';
import Header from './components/header';
import FollowSuggestion from './components/follow_suggestion';
import Sidebar from './components/sidebar';
import Main from './components/main';

function App() {
  return (
    <div className='in-col'>
      {/* <Header /> */}

      <div className="App">
        <Sidebar />
        <Main />
        <FollowSuggestion />
      </div>
    </div>
  );
}

export default App;

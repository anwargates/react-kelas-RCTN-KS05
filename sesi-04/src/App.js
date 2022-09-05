// import logo from './logo.svg';
import Navbar from './Navbar';
import Header from './Header';
import './App.css';
import NextMeetup from './NextMeetup';
import AboutMeetup from './AboutMeetup';
import Members from './Members';
import PastMeetups from './PastMeetups';

function App() {
  return (  
    <div>
      <Navbar/>
      <Header/>
      <NextMeetup/>
      <AboutMeetup/>
      <Members/>
      <PastMeetups/>
    </div>
  );
}

export default App;

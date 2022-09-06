import Navbar from './components/Navbar';
import Header from './components/Header';
import NextMeetup from './components/NextMeetup';
import AboutMeetup from './components/AboutMeetup';
import Members from './components/Members';
import PastMeetups from './components/PastMeetups';

function App() {
  return (  
    <>
      <Navbar/>
      <Header/>
      <NextMeetup/>
      <AboutMeetup/>
      <Members/>
      <PastMeetups/>
    </>
  );
}

export default App;

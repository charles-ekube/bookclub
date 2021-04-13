import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GalleryPage from './GalleryPage';
import NavBar from './NavBar';
import Footer from './Footer';
// import Login from './Login';
// import SignUp from './Signup';

// import Support from './Support';


function App() {
  return (
    <>
            <Router>
            <NavBar/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                    <GalleryPage/>
              </React.Fragment>
            )}/>
            {/* <Route path="/LearnableHomePage" component={LearnableHomePage}/>
            <Route path="/SoftwareDevelopersPage" component={SoftwareDevelopersPage}/>
            <Route path="/ProductDesignPage" component={ProductDesignPage}/>
            <Route path="/ApplyPage" component={ApplyPage}/>
            <Route path="/JournalPage" component={JournalPage}/>
            <Route path="/FaqPage" component={FaqPage}/> */}
            <Footer/>
        </Router>

      
      {/* <Search/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Upload/> */}
      {/* <Support/>   */}
      {/*  */}
      
    </>
  );
}

export default App;

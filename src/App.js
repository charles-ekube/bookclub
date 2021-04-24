import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import GalleryPage from './GalleryPage';
import { AuthContextProvider } from './Context/AuthContext';
import GalleryPage from './Pages/App/BookGallery';
import { Login } from './Pages/Auth';



function App({isAuthenticated}) {
  return (
    <>
            {/* <Router>
            <NavBar/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                    <GalleryPage/>
              </React.Fragment>
            )}/>
            <Route path='/Login' component={Login} />
            {/* <Route path="/LearnableHomePage" component={LearnableHomePage}/>
            <Route path="/SoftwareDevelopersPage" component={SoftwareDevelopersPage}/>
            <Route path="/ProductDesignPage" component={ProductDesignPage}/>
            <Route path="/ApplyPage" component={ApplyPage}/>
            <Route path="/JournalPage" component={JournalPage}/>
            <Route path="/FaqPage" component={FaqPage}/> */}
            {/* <Footer/> */}
        {/* </Router> */} 
      
      {/* <Search/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Upload/> */}
      {/* <Support/>   */}
      {/*  */}
      
            <AuthContextProvider>
              <div>
                {isAuthenticated ? <Login/> : <GalleryPage/>}
              </div>
            </AuthContextProvider>


    </>
  );
}

export default App;

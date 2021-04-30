import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import GalleryPage from './GalleryPage';
import { AuthContextProvider } from './Context/AuthContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import GalleryPage from './Pages/App/BookGallery';
import BookUpload from './Pages/App/BookUpload';
import { Login, SignUp } from './Pages/Auth';



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
      
      <ThemeContextProvider>
      <AuthContextProvider>
      <BrowserRouter>
            <Switch>
            <Route exact path="/" render={props => (
              <React.Fragment>
                    <GalleryPage/>
              </React.Fragment>
            )}/>
            <Route exact path='/Login' component={Login} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/Upload' component={BookUpload} />
            
                </Switch>
        </BrowserRouter>
            {/* <AuthContextProvider>
              <div>
                {!isAuthenticated ? <Login/> : <GalleryPage/>}
              </div>
            </AuthContextProvider> */}
</AuthContextProvider>
</ThemeContextProvider>
    </>
  );
}

export default App;

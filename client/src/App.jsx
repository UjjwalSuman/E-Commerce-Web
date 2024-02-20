import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Contactus } from './components/Contactus'
import { Profile } from './pages/Profile'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Header } from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Home from './pages/Home'
import { Footer } from './components/Footer'



const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/search' element={<Search />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

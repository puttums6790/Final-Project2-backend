import React from 'react'
import { Router, Route } from 'react-router-dom'
import Auth from './auth/Auth';
import Callback from './auth/Callback'
import Landing from './components/landing/landing'
import Footer from './components/footer/footer'
import LoginPage from './components/login-page/logPage'
import GuestNavbar from './components/navbar/guestNav'
import UserNavbar from './components/navbar/nav'
import ProfilePage from './components/profile-page/pPage'
import RegistrationPage from './components/registration-page/regPage'
import SearchPage from './components/search-page/searchPage'
import SubmissionPage from './components/submit-page/subPage'
import history from './auth/history'

const auth = new Auth();

const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export default () => {
    return (
        <Router history={history}>
            <div>
                
                <Route path="/" render={() => auth.isAuthenticated() ? <UserNavbar auth={auth} /> : <GuestNavbar auth={auth} />} />

                <Route exact path="/"
                    render={() => <div>
                        <Landing />
                        <Footer />
                    </div>} />

                <Route exact path="/callback"
                    render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} />
                    }} />

                <Route exact path="/login"
                    render={() => <div>
                        <LoginPage />
                    </div>} />

                <Route exact path="/register"
                    render={() => <div>
                        <RegistrationPage />
                    </div>} />

                <Route exact path="/submit"
                    render={() => <div>
                        <SubmissionPage />
                        <Footer />
                    </div>} />

                <Route exact path="/search"
                    render={() => <div>
                        <SearchPage />
                        <Footer />
                    </div>} />

                <Route exact path="/profile"
                    render={() => <div>
                        <ProfilePage />
                        <Footer />
                    </div>} />
            </div>
        </Router>
    )
}
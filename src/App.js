import { connect } from 'react-redux';
import {useEffect } from "react";
import './App.css';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import PhoneBook from './pages/phone-book/phone-book';
import AddPhoneBook from './pages/add-phone-book/add-phone-book';
import AddEntry from './pages/add-entry/add-entry';
import { fetchPhonebooks } from './redux/phonebook/phonebook.actions';
import { fetchEntries } from './redux/entries/entries.actions';
import NotificationsContainer from "./components/NotificationContainer/NotificationContainer";
import Navbar from './components/NavBar/Navbar';

const App = ({getPhonebooks,getEntries}) => {
  const location = useLocation();

  useEffect(() => {    
    getEntries();
    getPhonebooks();    
  }, []);

  return (
    <>
      <Navbar />
      <NotificationsContainer />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={PhoneBook} />
        <Route exact path="/add-entry" component={AddEntry} />
        <Route exact path="/add-phone-book" component={AddPhoneBook} />
      </Switch>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  getPhonebooks: () => dispatch(fetchPhonebooks()),
  getEntries: () => dispatch(fetchEntries())
});

export default connect(null, mapDispatchToProps)(App);

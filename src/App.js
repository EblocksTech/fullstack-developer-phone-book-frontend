import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import PhoneBook from './pages/phone-book/phone-book';
import AddPhoneBook from './pages/add-phone-book/add-phone-book';
import AddEntry from './pages/add-entry/add-entry';

const App = () => {
  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={PhoneBook} />
      <Route exact path="/add-entry" component={AddEntry} />
      <Route exact path="/add-phone-book" component={AddPhoneBook} />
    </Switch>
  );
}

export default App;

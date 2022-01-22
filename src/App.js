
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './component/home';
import Create from './component/create';
import List from './component/list';
import Search from './component/search';
import UpDate from './component/update';
import Logout from './component/logout';
import Login from './component/login';
import Protected from './component/protected';

function App() {
  return (
    <div className="App">

      <Router>
    <Protected exact path="/" component={Home}/>
        {/* <Route path="/list">
          <List />
        </Route> */}
        <Protected exact path="/list" component={List}/>
        {/* <Route path="/search">
          <Search />
        </Route> */}
        <Protected  path="/search" component={Search}/>
        {/* <Route path="/create">
          <Create />
        </Route> */}
        <Protected exact path="/create" component={Create}/>
        <Route path="/logout">
          <Logout />
        </Route>
        {/* <Route path="/update/:id"
        render={props=>(
          <UpDate {...props}/>
        )}
        >
        </Route> */}
        <Protected  path="/update/:id" component={UpDate}/>

        <Route path="/login"
        render={props=>(
          <Login {...props}/>
        )}
        >
        </Route>

        {/* <Route exact path="/">
          <Home />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;

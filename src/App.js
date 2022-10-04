import Navbar from "./navbar";
import Home from "./home";
import NewBlog from "./create";
import BlogDets from "./blogDets";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'





function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/create">
              <NewBlog></NewBlog>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDets></BlogDets>
            </Route>

          </Switch>

        
        
        
      </div>
      
    </div>
    </Router>

  );
}

export default App;

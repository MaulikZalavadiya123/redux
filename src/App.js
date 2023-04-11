import { HashRouter,Routes, Route, Link } from 'react-router-dom';
import Myapi from './api';
import Mydashboard from './dashboard';
import Myuser from './user';
import Myproduct from './product';

function App() {
  return (
    <HashRouter>
      <div className="container mt-3 mb-4">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="text-danger"> React and Redux </h2>
          </div>
          <div className="col-lg-8">
            <Link to="/" className="btn btn-primary m-3"> Dashboard </Link>
            <Link to="/user" className="btn btn-info m-3"> Manage User </Link>
            <Link to="/product" className="btn btn-success m-3"> Manage Product </Link>
            <Link to="/api" className="btn btn-danger m-3">Manage  Api </Link>
          </div>
        </div>
      </div>

    <Routes>
      <Route exact path="/" element={ <Mydashboard/> } />
      <Route exact path="/user" element={ <Myuser/> } />
      <Route exact path="/product" element={ <Myproduct/> } />
      <Route exact path="/api" element={ <Myapi/> } />
    </Routes>

    </HashRouter>
  );
}

export default App;
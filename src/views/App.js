import './App.scss';
import {
  BrowserRouter,
  NavLink,
  Routes, Route
} from 'react-router-dom';
import ManageUser from '../components/ManageUser';
import Detail from '../components/Detail';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const clickSearch = (e) => {
  e.preventDefault();
    toast.info("No have evnet")
}
function App() {
  return (
    <BrowserRouter>
      <div classNameName="App">
        <header classNameName="App-header">
          <nav className=" navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className=" container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <a className="navbar-brand" href="/#">Navbar</a> */}
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link " activeClassName='active' aria-current="page" to="/#">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName='active ' to="/detail">Detail</NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink className="nav-link " activeClassName='active' to ="/avc">Disabled</NavLink>
                  </li> */}
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit" onClick={(e) =>clickSearch(e)}>Search</button>
                </form>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path='/#' element={<ManageUser />} exact />
        <Route path='/detail' element={<Detail />} exact />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;

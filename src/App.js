import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import Spots from "./Pages/Spots/Spots";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Login/Login";
import Details from "./Pages/Details/Details";
import Register from "./Pages/Register/Register";
import UserBlog from "./Pages/AddUserBlog/UserBlog";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import ManageBlogs from "./Pages/ManageBlogs/ManageBlogs";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home></Home>
          </Route>
          <Route path="/spots">
            <Spots></Spots>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/blogDetails/:blogId">
            <Details></Details>
          </Route>
          <Route path="/userBlog">
            <UserBlog></UserBlog>
          </Route>
          <Route path="/manageBlogs">
            <ManageBlogs></ManageBlogs>
          </Route>
          <Route path="/admin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

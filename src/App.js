import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/Login";
import { Layout } from "antd";
import HeaderBar from "./components/header/HeaderBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./pages/project/Project";
import { AddProject } from "./pages/addProject/AddProject";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const { Footer, Content } = Layout;

function App() {
  const token = localStorage.getItem("accessToken");
  /*if(token){
   store.dispatch(loginSuccess(JSON.parse(token)))
  }*/

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Layout>
            <HeaderBar />
            <Switch>
              <Content>
                <PrivateRoute exact path="/projects" component={Project} />
                <PrivateRoute
                  exact
                  path="/add-project"
                  component={AddProject}
                />
                <PublicRoute exact path="/" component={Login} />
              </Content>
            </Switch>
            <Footer>Footer</Footer>
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

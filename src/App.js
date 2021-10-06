import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/Login";
import { Layout } from "antd";
import HeaderBar from "./components/header/HeaderBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Project from "./pages/pages/Project";
import { AddProject } from "./pages/addProject/AddProject";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
        <HeaderBar />
        <Switch>
        <Content> 
       <Route exact path='/projects' component={Project} />
       <Route exact path='/add-project' component={AddProject} />
        </Content>
        </Switch>
        <Footer>Footer</Footer>
      </Layout>
      </Router>
    </div>
  );
}

export default App;

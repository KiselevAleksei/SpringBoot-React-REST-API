import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListPersonComponent from "./components/ListPersonComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreatePersonComponent from "./components/CreatePersonComponent";
import ViewPersonComponent from "./components/ViewPersonComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListPersonComponent}></Route>
                        <Route path="/persons" component={ListPersonComponent}></Route>
                        <Route path="/add-person/:id" component={CreatePersonComponent}></Route>
                        <Route path = "/view-person/:id" component={ViewPersonComponent}></Route>
                        {/* <Route path = "/update-employee/:id" component = {UpdatePersonComponent}></Route> */}

                    </Switch>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;

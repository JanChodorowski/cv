import "./style.css";
import { h, render } from "preact";
import App from "./App";


// render((
//   // <Router history={history}>
//   //   <Switch>
//   //     <Redirect exact from='/' to='/home'/>
//   //     <Route path="/" component={App} />
//   //   </Switch>
//   // </Router>
//   <div>co jest kurwa</div>
// ), document.getElementById("root"))

render(<App />, document.body);

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

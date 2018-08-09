import React, { Component } from "react";
import User from "../requests/user";
import Session from "../requests/session";
const { Consumer, Provider } = React.createContext({});

const initialState = {
  loading: true,
  user: null
};

export class Authenticator extends Component {
  constructor(props) {
    super(props);

    this.reload = this.reload.bind(this);
    this.signOut = this.signOut.bind(this);

    // We pass method "reload" in the state to allow consumers
    // of this provider to call it from props.
    // When doing this, you must bind because it acts as a callback.
    this.state = {
      ...initialState,
      reload: this.reload,
      signOut: this.signOut
    };
  }

  signOut() {
    return Session.destroy().then(() => this.reload());
  }

  reload() {
    this.setState({ loading: true });

    return User.current().then(data => {
      if (data.status !== 401) {
        this.setState({ loading: false, user: data });
      } else {
        this.setState({ loading: false, user: null });
      }
    });
  }

  componentDidMount() {
    this.reload();
  }

  render() {
    // To access the "children" React elements of component,
    // use the "children" prop.
    // For example,
    // <Authenticator><div /><a /><p /></Authenticator>
    // Authenticator above has three children meaning that the
    // "children" prop would have 3 React elements.
    const { children } = this.props;

    // console.log(children);

    // To render the child react elements, put them in JSX
    // inside braces like array as shown below.
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export const Authenticate = Consumer;

// <Authenticator>
//    <Router>
//       <NavBar />
//    </Router>
// </Authenticator>

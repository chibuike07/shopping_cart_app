import React from "react";

class Profile extends React.Component {
  state = {
    token: []
  };
  paramsId = () => {
    //function for the search params
    let target = this.props.match.params.profile; // getting the value of the params
    let sessionStorageData = JSON.parse(sessionStorage.getItem("userObject")); //getting the user token that is in the session storage
    if (target.includes(sessionStorageData.username)) {
      //check if the search params matches the the users username
      console.log("yes");
      this.setState({ token: sessionStorageData }); //setting the token to the state
    } else {
      console.log("no"); // todo if not found
      return "hello world";
    }
  };
  componentDidMount() {
    this.paramsId();
  }
  render() {
    const post =
      this.state.token && this.state.token ? ( //if token exist then return the needfull
        <div>
          <div>
            <h3>{this.state.token.username}</h3>
          </div>
          <div>
            <p>{this.state.token.phone}</p>
          </div>
        </div>
      ) : (
        <div>hello world...</div>
      );
    return <div>{post}</div>; //return the post that renders what matches the conditions
  }
}

export default Profile;

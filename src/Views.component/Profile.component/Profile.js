import React, { useState, useEffect } from "react";
const Profile = ({ match }) => {
  const [token, setId] = useState([]); //set the login user token to the state
  const paramsId = () => {
    //function for the search params
    let target = match.params.profile; // getting the value of the params
    let sessionStorageData = JSON.parse(sessionStorage.getItem("userObject")); //getting the user token that is in the session storage
    if (target.includes(sessionStorageData.username)) {
      //check if the search params matches the the users username
      console.log("yes");
      setId(() => sessionStorageData); //setting the token to the state
    } else {
      console.log("no"); // todo if not found
      return "hello world";
    }
  };
  useEffect(() => {
    //getting the users token and awaits for the user search params on component did mount
    paramsId(); //returning the callback in the component did mount
  });
  const post = token ? ( //if token exist then return the needfull
    <div>
      <div>
        <h3>{token.username}</h3>
      </div>
      <div>
        <p>{token.phone}</p>
      </div>
    </div>
  ) : (
    <div>hello world...</div>
  );
  return <div>{post}</div>; //return the post that renders what matches the conditions
};
export default Profile;

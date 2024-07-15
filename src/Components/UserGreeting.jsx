function UserGreeting(props) {
  const loggedonMessage = (
    <h2 className="loggedon-message">Welcome, {props.username}</h2>
  );
  const loggedoffMessage = <h2 className="loggedoff-message">Welcome!</h2>;

  return props.isLoggedIn ? loggedonMessage : loggedoffMessage;
}

export default UserGreeting;

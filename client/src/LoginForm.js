import './App.css';

function LoginForm() {
  return (
    <div className="App">
      <div className="user-form">
  <form action="/" method="post">
    <h2>Log in</h2>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="Your Username"
        required="required"
      />
    </div>
    <div className="form-group">
      <input
        type="password"
        className="form-control"
        name="password"
        placeholder="Your Password"
        required="required"
      />
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary btn-lg">
        Log In
      </button>
    </div>
  </form>
  <div className="alternate">
    New User? <a href="#">Register here</a>
  </div>
  <br />
</div>

    </div>
  );
}

export default LoginForm;

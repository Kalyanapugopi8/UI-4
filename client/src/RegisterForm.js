import './App.css';

function RegisterForm() {
  return (
    <div className="App">
      <div className="user-form">
        <form action="/" method="post">
          <h2>Sign Up</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="johndoe16"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Your Secret Code"
              required="required"
            />
          </div>
          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" required="required" /> I accept the Terms of Use and Privacy Policy
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
        <div className="alternate">
          Existing User? <a href="#">Login here</a>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
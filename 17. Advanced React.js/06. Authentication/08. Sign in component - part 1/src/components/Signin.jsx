const Signin = () => {

/**
Challenge:
* 1) Import the 'useActionState' hook
* 2) Call the hook at the top level of the component, destructuring three values:
			 - 'error' (state for error handling)
			 - 'submitAction' (the form action function)
			 - 'isPending' (loading state boolean)
* 3) Pass two arguments to useActionState:
			- First argument: an async arrow function with 2 parameters
			- Second argument: initial state value of null
* 4) Inside the async function, extract the email and password into variables
* 5) Add the 'sumbmitAction' to your form's action prop
*/
  return (
    <>
      <h1 className="landing-header">Paper Like A Boss</h1>
      <div className="sign-form-container">
        <form
          //action=
          aria-label="Sign in form"
          aria-describedby="form-description"
        >
          <div id="form-description" className="sr-only">
            Use this form to sign in to your account. Enter your email and
            password.
          </div>

          <h2 className="form-title">Sign in</h2>
          <p>
            Don't have an account yet?{' '}
            {/*<Link className="form-link">*/}
              Sign up
           {/*</Link>*/}
          </p>

          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder=""
            required
            aria-required="true"
            //aria-invalid=
            //aria-describedby=
            //disabled=
          />

          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            placeholder=""
            required
            aria-required="true"
            //aria-invalid=
            //aria-describedby=
            //disabled=
          />

          <button
            type="submit"
            className="form-button"
            //className=
            //aria-busy=
          >
            Sign In
            {/*'Signing in...' when pending*/}
          </button>
          
          {/* Error message */}
        </form>
      </div>
    </>
  );
};

export default Signin;
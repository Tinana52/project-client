

const Login = () => {
    return (
        <div className="app">
            <h2>Login Page</h2>
            <form className="form">
                <label htmlFor="username">Username:</label>
                <input type={'text'} id="username" className="textInputs"></input> <br></br>
                <label htmlFor="password">Password:</label>
                <input type={'password'} id="password" className="textInputs"></input> <br></br>
                <button className="authButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;
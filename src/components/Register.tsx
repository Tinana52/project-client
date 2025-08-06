const Register = () => {
    return (
        <div className="app">
            <h2>Registration Page</h2>
            <form className="">
                <label htmlFor="first">First Name:</label>
                <input type={'text'} id="first" className="textInputs"></input> <br></br>
                <label htmlFor="last">Last Name:</label>
                <input type={'text'} id="last" className="textInputs"></input> <br></br>
                <label htmlFor="address">Street Address:</label>
                <input type={'text'} id="address" className="textInputs"></input> <br></br>
                <label htmlFor="email">Email Address:</label>
                <input type={'email'} id="email" className="textInputs"></input> <br></br>
                <label htmlFor="username">Username:</label>
                <input type={'text'} id="username" className="textInputs"></input> <br></br>
                <label htmlFor="password">Password:</label>
                <input type={'password'} id="password" className="textInputs"></input> <br></br>
                <label htmlFor="role">Role:</label>
                <select name="role" id="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select> <br></br>
                <button className="authButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register;
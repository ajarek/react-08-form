class Form extends React.Component {
  state = {
    inputValuePassword: '',
    inputValueEmail: '',
    users: []
  };
  
  render() {
    
    const readValue = (e) => {
        const newUser={
            email: this.state.inputValueEmail,
            password: this.state.inputValuePassword
        }
       this.state.users= [newUser, ...this.state.users]
         this.setState({users : this.state.users});
            this.setState({inputValuePassword: ''});
            this.setState({inputValueEmail: ''});
    };
    const InputPassword = (e) => {
      this.setState({ inputValuePassword: e.target.value });
      
    };
    const InputEmail = (e) => {
        this.setState({ inputValueEmail: e.target.value });
      };

    return (
      <div className="container-lg mt-4">
        <h4>Sign up</h4>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
          onChange={InputEmail}
          value={this.state.inputValueEmail}
           type="email"
            className="form-control"
             id="email" 
         />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={InputPassword}
            value={this.state.inputValuePassword}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button
          onClick={readValue}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
       <ul className="list-group mt-4">{this.state.users.length>0?this.state.users.map((user,index)=><li key={index} className="list-group-item fs-4 text-success"><span className="text-warning">email:</span> {user.email} <span className="text-warning">password:</span> {user.password}</li>):null}</ul>
        
       
        
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));

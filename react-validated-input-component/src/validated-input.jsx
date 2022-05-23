import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const input = this.state.password;
    let pswIsValid = false;
    let errorMessage = '';

    if (input.length === 0) {
      errorMessage = 'A password is required';
    } else if (input.length < 8) {
      errorMessage = 'Your password is too short';
    } else if (!/\d/.test(input)) {
      errorMessage = 'Your password must contain at least a digit';
    } else if (!/[A-Z]/.test(input)) {
      errorMessage = 'Your password must contain at least a capital letter';
    } else if (!/[!@#$%^%*()]/.test(input)) {
      errorMessage = 'Your password must contain at least a special character';
    } else {
      pswIsValid = true;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Password
          </label>
            <div className='psw-container'>
                <input name='password' type="password" value={this.state.password} onChange={this.handleChange} />
                <i className= {pswIsValid ? 'ph-check-bold check' : 'ph-x-bold error'}></i>

            </div>
            <p className='error-message'>{errorMessage}</p>
        </form>
      </div>
    );
  }
}

export default ValidatedInput;

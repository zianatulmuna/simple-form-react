import React from 'react';
import { createRoot } from 'react-dom/client';

class FormApp extends React.Component {
  constructor(props) {
    super(props);
 
    // inisialisasi state
    this.state = {
      name: '',
      email: '',
      gender: 'Man'
    };

    // binding this context to event handler
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value
      };
    });
  }
 
  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }
 
  onGenderChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        gender: event.target.value
      };
    });
  }

  onSubmitEventHandler(event) {
    // menghentikan aksi default dari tombol submit
    event.preventDefault();
  
    const message = `
      Name: ${this.state.name}
      Email: ${this.state.email}
      Gender: ${this.state.gender}
    `;
  
    alert(message);
  }

  render() {
    return (
      <div className='container w-50'>
        <div className='card shadow-lg p-5 my-5'>
            <h1 className='mb-4 text-center'> Register Form</h1>
            <form onSubmit={this.onSubmitEventHandler}>
            <label htmlFor="name" className="form-label">Name: </label>
            <input id="name" type="text" className='form-control' value={this.state.name} onChange={this.onNameChangeEventHandler} />
            <br />
            <label htmlFor="email" className="form-label">Email: </label>
            <input id="email" type="text" className='form-control' value={this.state.email} onChange={this.onEmailChangeEventHandler} />
            <br />
            <label htmlFor="gender" className="form-label">Gender: </label>
            <select id="gender" className='form-select' value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
            </select>
            <br />
            <button type="submit" className='btn btn-success mt-4'>submit</button>
            </form>
        </div>
      </div>
    );
  }
}
 
const root = createRoot(document.getElementById('root'));
root.render(<FormApp />);



import React, {Component} from "react";
// add https://www.npmjs.com/package/react-google-recaptcha-v3
// https://developers.google.com/recaptcha/docs/v3

class ContactForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contactFirstName: '',
        contactLastName: '',
        contactEmail: '',
        contactMessage: ''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      alert('Form was submitted: ' + this.state.contactFirstName + this.state.contactLastName +
      this.state.contactEmail + this.state.contactMessage);
      event.preventDefault();
    }

    handleClear(event) {
      this.setState({
        contactFirstName: '',
        contactLastName: '',
        contactEmail: '',
        contactMessage: ''
      });
    }
  
    render() {
      return (
        <form id="fmContactMe" onSubmit={this.handleSubmit}>
          <h3>Send Me a Message</h3><br/>
          <h4><strong><center>***This form is under construction and is currently not functional***</center></strong></h4>
          <div id="contactWrapper">
            <div className="inputItem">
              <label htmlFor="contactFirstName">First Name: </label>
              <input type="text" 
                    placeholder="E.g. John" 
                    id="contactFirstName" 
                    name="contactFirstName" 
                    value={this.state.contactFirstName} 
                    onChange={this.handleInputChange}/>
            </div>
            <div className="inputItem">
              <label htmlFor="contactLastName">Last Name: </label>
              <input type="text" 
                    placeholder="E.g. Doe" 
                    id="contactLastName" 
                    name="contactLastName"
                    value={this.state.contactLastName} 
                    onChange={this.handleInputChange}/>
            </div>
            <div className="inputItem">
              <label htmlFor="contactEmail">Email: </label>
              <input type="text" 
                    placeholder="E.g. john.doe@email.com" 
                    id="contactEmail" 
                    name="contactEmail"
                    value={this.state.contactEmail} 
                    onChange={this.handleInputChange}/>
            </div>
            <div className="inputItem">
              <label htmlFor="contactMessage">Message: </label>
              <textarea 
                    placeholder="E.g. Hello World" 
                    id="contactMessage" 
                    name="contactMessage"
                    value={this.state.contactMessage} 
                    onChange={this.handleInputChange}>
              </textarea>
            </div>
            <div className="buttonPair">
              <button className="clear" type="reset" onClick={this.handleClear}>Clear</button>
              <button type="submit" name="submit">Submit</button>
            </div>
          </div>
        </form>
      );
    }
  }

export default ContactForm;
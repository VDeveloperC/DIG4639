import React from 'react';
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '',
                      invalid:true,
                       valid:false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
        
    
      handleSubmit(event) {
        if(/[^a-zA-Z]/.test(this.state.value)){
            this.setState({invalid: false});
          }else {
            this.setState({invalid: true});
            this.setState({valid: true});

          }
        event.preventDefault();
      }
    
      render() {
        return (
            <div>
            {(!this.state.valid)?
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            {(!this.state.invalid)  ? <div style ={{color: "red"}}>Error the User Used Non-Ascii Characters!</div> : null}
          </form>  :
          <span> Hello User! Your Name is {this.state.value}.</span>
          }
        </div>
        );      
      }
    }
 export default NameForm;
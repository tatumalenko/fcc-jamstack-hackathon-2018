import React from 'react';

class InputField extends React.Component {
  render() {
    return (
      <div className="container">
        <label>{this.props.label}</label>
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={e => this.props.handleChange(e)}
        />
      </div>
    );
  }
}

export default InputField;

import axios from "axios";
import React, { Component } from "react";
import validator from "validator";

class InputField extends Component {
  state = {
    url: "",
    link: "",
    data: [],
  };

  handleChange = (e) => {
    this.setState({
      url: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const validURL = validator.isURL(this.state.url, {
      require_protocol: true,
    });
    if (!validURL) {
      alert("Ensure the URL is correct");
    } else {
      try {
        const { data } = await axios.post("/links", { url: this.state.url });
        this.setState({ link: `${data.url}` });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <input
              type="text"
              name="url"
              placeholder="Enter url"
              onChange={this.handleChange}
            />
            <input type="submit" value="shorter" />
          </fieldset>
          <fieldset>
            <span id="result">{this.state.link}</span>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default InputField;

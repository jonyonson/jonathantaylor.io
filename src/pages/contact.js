import React, { Component } from 'react';
import SEO from '../components/seo';
import { IoIosWarning } from 'react-icons/io';
import '../styles/pages/contact.scss';

class Contact extends Component {
  state = {
    error: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
  };
  render() {
    return (
      <React.Fragment>
        <SEO title="Contact Me" />

        <p className="contact-intro">
          Say hi, hire me, tell me a joke, suggest a TV show, compliment me,
          roast me or toast me.
        </p>

        <form
          className="form"
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          // onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name">Name</label>
          <input id="name" type="text" />

          <label htmlFor="email">Email</label>
          <input id="email" type="text" />

          <label htmlFor="message">Message</label>
          <textarea id="message" type="text" rows="8" />
          <button type="submit">Send Message</button>

          {this.state.error && (
            <div className="contact-error">
              <IoIosWarning className="contact-error-icon" />
              <div>{this.state.error}</div>
            </div>
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default Contact;

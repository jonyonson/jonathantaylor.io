import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { IoIosWarning } from 'react-icons/io';
import '../styles/pages/contact.scss';

class Contact extends Component {
  state = {
    error: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      error:
        "This form isn't functional just yet.  Try hitting me up on Twitter.",
    });
  };
  render() {
    return (
      <Layout>
        <SEO title="Contact Me" />
        <p className="contact-intro">
          Say hi, hire me, tell me a joke, suggest a TV show, compliment me,
          roast me or toast me.
        </p>
        <form className="form" onSubmit={this.handleSubmit}>
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
      </Layout>
    );
  }
}

export default Contact;

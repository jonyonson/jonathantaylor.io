import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/pages/contact.scss';

class Contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact Me" />
        <p className="contact-intro">
          Say hi, hire me, tell me a joke, suggest a TV show, say hello,
          compliment me, roast me or toast me.
        </p>
        <form className="form">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" />
          <label htmlFor="message">Message</label>
          <textArea id="message" type="text" />
          <button type="submit">Submit</button>
        </form>
      </Layout>
    );
  }
}

export default Contact;

import React from 'react';
import SEO from '../components/seo';
import '../styles/pages/contact.scss';
import { navigate } from 'gatsby';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => console.log(error));
  };

  return (
    <>
      <SEO title="Contact Me" />
      <p className="contact-intro">
        Say hi, hire me, tell me a joke, suggest a TV show, compliment me, roast
        me or toast me.
      </p>
      <form
        className="form"
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />

        <label>Message</label>
        <textarea name="message" type="text" rows="8" onChange={handleChange} />

        <button type="submit">Send Message</button>
      </form>
    </>
  );
}

export default Contact;

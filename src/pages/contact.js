import React, { Component } from 'react';
import SEO from '../components/seo';
import { IoIosWarning } from 'react-icons/io';
import '../styles/pages/contact.scss';
import { navigate } from 'gatsby';

// class Contact extends Component {
//   state = {
//     error: null,
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const form = e.target;
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <SEO title="Contact Me" />

//         <p className="contact-intro">
//           Say hi, hire me, tell me a joke, suggest a TV show, compliment me,
//           roast me or toast me.
//         </p>

//         <form
//           className="form"
//           name="contact"
//           method="post"
//           action="/thanks/"
//           data-netlify="true"
//           data-netlify-honeypot="bot-field"
//           // onSubmit={this.handleSubmit}
//         >
//           <input type="hidden" name="bot-field" />
//           <input type="hidden" name="form-name" value="contact" />

//           <label htmlFor="name">Name</label>
//           <input id="name" type="text" />

//           <label htmlFor="email">Email</label>
//           <input id="email" type="text" />

//           <label htmlFor="message">Message</label>
//           <textarea id="message" type="text" rows="8" />
//           <button type="submit">Send Message</button>

//           {this.state.error && (
//             <div className="contact-error">
//               <IoIosWarning className="contact-error-icon" />
//               <div>{this.state.error}</div>
//             </div>
//           )}
//         </form>
//       </React.Fragment>
//     );
//   }
// }
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
    <React.Fragment>
      <SEO title="Contact Me" />

      <p className="contact-intro">
        Say hi, hire me, tell me a joke, suggest a TV show, compliment me, roast
        me or toast me.
      </p>

      <form
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
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </React.Fragment>
  );
}

export default Contact;

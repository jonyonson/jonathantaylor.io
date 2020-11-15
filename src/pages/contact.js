import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

// Components
import SEO from '../components/seo';
import Container from '../components/container';

// import './contact.scss';
import theme, { widths } from '../theme';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': form.getAttribute('name'), ...state }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => console.log(error));
  };

  return (
    <StyledContainer>
      <Container>
        <SEO title="Contact Me" />
        <h2>Contact Me</h2>
        <p className="contact-intro">
          Need to get in touch? You can find me on{' '}
          <a href="https://twitter.com/jonyonson">Twitter</a> or{' '}
          <a href="https://www.linkedin.com/in/jonathan-craig-taylor/">
            LinkedIn
          </a>{' '}
          or drop me a note below.
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
          <textarea
            name="message"
            type="text"
            rows="8"
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </Container>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  .contact-intro {
    margin-top: 1.5rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .form label {
    text-transform: uppercase;
    margin-bottom: 5px;
    letter-spacing: 1px;
  }

  .form input,
  .form textarea,
  .form button {
    padding: 5px;
    margin-bottom: 1.5rem;
    border: 1px solid $black-olive;
  }

  .form button {
    cursor: pointer;
    background: ${theme.light.primary};
    color: white;
    border: 2px solid transparent;
    align-self: center;
    margin-top: 20px;
    font-weight: 700;
    transition: all 0.2s ease;
    padding: 5px 20px;

    &:hover {
      background: ${theme.light.primaryDarken};
      transition: all 0.2s ease;
    }

    @media (max-width: ${widths.mobile}) {
      align-self: unset;
    }
  }
`;

export default Contact;

// const StyledText = styled.p`
//   margin-top: 1.5rem;
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   margin-bottom: 3rem;

//   label {
//     text-transform: uppercase;
//     margin-bottom: 5px;
//     letter-spacing: 1px;
//   }

//   input,
//   textarea,
//   button {
//     padding: 5px;
//     margin-bottom: 1.5rem;
//     /* border: 1px solid $black-olive; */
//     border: 1px solid black;
//   }

//   button {
//     cursor: pointer;
//     background: $primary-color;
//     color: white;
//     border: 2px solid transparent;
//     align-self: center;
//     margin-top: 20px;
//     font-weight: 700;
//     transition: all 0.2s ease;
//     padding: 5px 20px;

//     &:hover {
//       background: $primary-lighten;
//       transition: all 0.2s ease;
//     }

//     @media (max-width: 576px) {
//       align-self: unset;
//     }
//   }
// `;

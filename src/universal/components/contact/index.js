import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { validateField } from "../../utils/validation";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      validname: false,
      validemail: false,
      validsubject: false,
      validmessage: false,
      nameFocused: false,
      emailFocused: false,
      subjectFocused: false,
      messageFocused: false,
      formValid: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    const name = field.target.name;
    const value = field.target.value;
    this.setState({ [name]: value });
    this.setState({[`${name}Focused`]: true});

    const validatedField = validateField({name, value, valid: false });
    this.setState({[`valid${validatedField.name}`]:  validatedField.valid})
    this.handleValidation();
  }

  handleValidation() {
   const isFormValid = this.state.validname && this.state.validemail && this.state.validmessage && this.state.validsubject;
    isFormValid
      ? this.setState({ formValid: true })
      : this.setState({ formValid: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/mail", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      })
    });
  }
  render() {
    const { contactDetails } = this.props;

    return (
      <section id="contact">
        <div className="section-row">
          <div className="contact__wrapper">
            <div className="contact__wrapper-header">
              <div className="contact__wrapper_header-svg">
                <FontAwesomeIcon icon="envelope" size={`4x`} />
              </div>
              <div className="contact__wrapper_header-text">
                <p>
                  {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit.`}
                </p>
              </div>
            </div>
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset className="contact__form__fieldset">
                <div className="contact__form__field-wrapper">
                  <label className="contact__form__field-label" for="name">
                    Name <span class="required">*</span>
                  </label>
                  <input
                    value={this.state.name}
                    onChange={event => this.handleInput(event)}
                    className={"contact__form__field-input " + (this.state.nameFocused ? (this.state.validname  ? "valid" : "invalid"): "valid" )}
                    type="text"
                    size="35"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="contact__form__field-wrapper">
                  <label className="contact__form__field-label" for="email">
                    Email <span class="required">*</span>
                  </label>
                  <input
                    value={this.state.email}
                    onChange={event => this.handleInput(event)}
                    className={"contact__form__field-input " +  (this.state.emailFocused ? ( this.state.validemail   ? "valid" : "invalid"): "valid")}
                    type="text"
                    size="35"
                    id="email"
                    name="email"
                  />
                </div>

                <div className="contact__form__field-wrapper">
                  <label className="contact__form__field-label" for="subject">
                    Subject
                  </label>
                  <input
                    value={this.state.subject}
                    onChange={event => this.handleInput(event)}
                    className={"contact__form__field-input " +  (this.state.subjectFocused ? (this.state.validsubject   ? "valid" : "invalid"): "valid")}
                    type="text"
                    size="35"
                    id="subject"
                    name="subject"
                  />
                </div>

                <div className="contact__form__field-wrapper">
                  <label className="contact__form__field-label" for="message">
                    Message <span class="required">*</span>
                  </label>
                  <textarea
                    value={this.state.message}
                    onChange={event => this.handleInput(event)}
                    className={"contact__form__field-input " +  (this.state.messageFocused ? (this.state.validmessage  ? "valid" : "invalid"): "valid")}
                    cols="50"
                    rows="15"
                    id="message"
                    name="message"
                  />
                </div>

                <div className="contact__form__field-wrapper">
                  <button
                    disabled={!this.state.formValid}
                    onClick={this.handleSubmit}
                    className="contact__form__submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  contactDetails: PropTypes.array.isRequired
};

export default Contact;

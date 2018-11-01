import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("subject:", this.state.subject);
    console.log("message:", this.state.message);
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
                  <label
                    className="contact__form__field-label"
                    for="contactname"
                  >
                    Name <span class="required">*</span>
                  </label>
                  <input
                    value={this.state.name}
                    onChange={ev => this.setState({ name: ev.target.value })}
                    className="contact__form__field-input"
                    type="text"
                    size="35"
                    id="contactName"
                    name="contactName"
                  />
                </div>

                <div className="contact__form__field-wrapper">
                  <label
                    className="contact__form__field-label"
                    for="contactEmail"
                  >
                    Email <span class="required">*</span>
                  </label>
                  <input
                    value={this.state.email}
                    onChange={ev => this.setState({ email: ev.target.value })}
                    className="contact__form__field-input"
                    type="text"
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                  />
                </div>

                <div className="contact__form__field-wrapper">
                  <label
                    className="contact__form__field-label"
                    for="contactSubject"
                  >
                    Subject
                  </label>
                  <input
                    value={this.state.subject}
                    onChange={ev => this.setState({ subject: ev.target.value })}
                    className="contact__form__field-input"
                    type="text"
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                  />
                </div>

                <div className="contact__form__field-wrapper">
                  <label
                    className="contact__form__field-label"
                    for="contactMessage"
                  >
                    Message <span class="required">*</span>
                  </label>
                  <textarea
                    value={this.state.message}
                    onChange={ev => this.setState({ message: ev.target.value })}
                    className="contact__form__field-input"
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                  />
                </div>

                <div className="contact__form__field-wrapper">
                  <button
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

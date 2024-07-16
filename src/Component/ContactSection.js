import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required('First name is required'),
    lname: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    PhoneNo: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
    Message: Yup.string().required('Message is required'),
  });
  
  const handleSubmitEvent = async (values, { resetForm }) => {
    console.log("values == ", values);

    try {
      const result = await emailjs.send(
      'service_2e0fi0x', // Replace with your EmailJS service ID
        'template_z7veupc', // Replace with your EmailJS template ID
        {
          from_name: `${values.fname} ${values.lname}`,
          from_email: values.email,
          phone: values.PhoneNo,
          message: values.Message,
        },
       'gMEu9ggcZOu83QltD' // Replace with your EmailJS user ID
      );
      console.log("Email successfully sent!", result);
      toast.success("Thank you for contacting us!");
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send the message. Please try again later.");
    }
  };

  return (
    <>
      <section className="contact-section" id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 order-2 order-md-1">
              <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
                <div className="section-header">
                  <h2 className="section-title">Drop Us a Message</h2>
                  <p>
                    Feel free to reach out to me for any inquiries or collaborations.
                  </p>
                </div>

                <div className="tj-contact-form">
                  <Formik
                    initialValues={{
                      fname: "",
                      lname: "",
                      email: "",
                      PhoneNo: "",
                      Message: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmitEvent}
                  >
                    <Form action="index.html">
                      <div className="row gx-3">
                        <div className="col-sm-6">
                          <div className="form_group">
                            <Field
                              type="text"
                              name="fname"
                              id="fname"
                              placeholder="First name"
                              autoComplete="off"
                            />
                            <ErrorMessage name='fname'/>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form_group">
                            <Field
                              type="text"
                              name="lname"
                              id="lname"
                              placeholder="Last name"
                              autoComplete="off"
                            />
                            <ErrorMessage name='lname'/>

                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form_group">
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email address"
                              autoComplete="off"
                            />
                            <ErrorMessage name='email'/>

                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form_group">
                            <Field
                              type="tel"
                              name="PhoneNo"
                              id="phone"
                              placeholder="Phone number"
                              autoComplete="off"
                            />
                            <ErrorMessage name='PhoneNo'/>

                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form_group">
                            <Field as="textarea" name="Message" id="message" placeholder="Message"></Field>
                            <ErrorMessage name='Message'/>

                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form_btn">
                            <button type="submit" className="btn tj-btn-primary">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                  <ToastContainer />
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
              <div className="contact-info-list">
                <ul className="ul-reset">
                  <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".4s">
                    <div className="icon-box">
                      <i className="flaticon-phone-call"></i>
                    </div>
                    <div className="text-box">
                      <p>Phone</p>
                      <Link to="tel:0123456789">+91 99784  20331</Link>
                    </div>
                  </li>
                  <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".5s">
                    <div className="icon-box">
                      <i className="flaticon-mail-inbox-app"></i>
                    </div>
                    <div className="text-box">
                      <p>Email</p>
                      <Link to="mailto:dhameliyamiral@gmail.com">dhameliyamiral@gmail.com</Link>
                    </div>
                  </li>
                  <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".6s">
                    <div className="icon-box">
                      <i className="flaticon-location"></i>
                    </div>
                    <div className="text-box">
                      <p>Address</p>
                      <Link to="#">Mota Varachha , <br />Surat</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
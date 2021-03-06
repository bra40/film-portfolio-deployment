import React, { useState, useEffect } from "react";
import "./form.scss";
import DatePicker from "./DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

// EMAIL.JS
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
const SERVICE_ID = "gmail";
const TEMPLATE_ID = "hire_template";
const USER_ID = "CN0RNMNddtaLSaAyj";


const initialValues = {
  name:"",
  email:"",
  company:"",
  budget:"",
  message:"",
  start:"",
  end:"",
  question:""
};

const validate = (values) => {

  let errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please Enter Your Email";
  }

  return errors;
};

function FormCont({closeModal}) {

  const [val, setVal] = useState(false);

  const onSubmit = (values, actions) => {

  const newStart = values.start;
  const newFormattedStart =
  (newStart.getMonth() + 1) + "-" + 
  newStart.getDate() + "-" +
  newStart.getFullYear();

  const newEnd = values.end;
  const newFormattedEnd =
  (newEnd.getMonth() + 1) + "-" + 
  newEnd.getDate() + "-" +
  newEnd.getFullYear();
  const updatedValues = { ...values, start: newFormattedStart,  end: newFormattedEnd }

  SendEmail(updatedValues);
  actions.setSubmitting(false)   
  };

  function SendEmail(object) {

    emailjs.send(SERVICE_ID, TEMPLATE_ID, object,USER_ID )

    .then((result) => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully'
      })
      setVal(true)
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      })
      setVal(true)
    })
  }

  //wait for email to send to close modal
  useEffect(() => {
    if (val)
    {
      setTimeout(() => {
        closeModal();
      }, 1500)  
    }
  }, [val, closeModal]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => onSubmit(values, actions, closeModal)}
      validate={validate}
    >
      {(formik) => { return (
        <Form>
          <div className="form-container">

            <div className="inputContainer name">
              <label className="form-name label">Name</label>
              <Field className="form-name input"
                placeholder="Johnny Doe"
                name="name"
                type="text"
                required
              />
            </div>
            
            <div className="inputContainer email">
              <label className="form-email label">Email</label>
              <Field className="form-email input"
                placeholder="AvantFilms@example.com"
                name="email"
                type="email"
                required
              />
            </div>
            <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>

            <div className="inputContainer company">
              <label className="form-company label">Company</label>
              <Field className="form-company input"
                placeholder="Avant Film Collection"
                name="company"
                type="text"
                required
              />
            </div>

            <div className="inputContainer budget">
              <label className='form-budget label'>Budget</label>
              <Field className='form-budget input'
              placeholder='$5,000 - $8,000'
              
                  name='budget'
                  type='text'
                  required
              />
            </div>

            <div className="inputContainer start">
              <label className='form-start label' >Start Date</label>
              <DatePicker name="start"  className='form-start input' required/>
            </div>

            <div className="inputContainer end">
              <label className='form-end label' >End Date</label>
              <DatePicker name="end"  className='form-start input' required/>
            </div>

            <div className="inputContainer message">
              <label className='form-message label' >Message</label>
              <Field  className='form-message input'
                  as="textarea" 
                  placeholder='Hey! It would be great working with you on our next project...'
                  name='message'
                  required
              />
            </div>

            <div className="inputContainer question">
              <label className='form-question label'>How'd You Hear Of Me?</label>
              <Field  className='form-question input' 
                  as="select"
                  name='question' 
                  type='text'
                  required
              >
                <option value="We've Chatted In Person">We've Chatted In Person</option>
                <option value="By Working Together Before">Working Together Before</option>
                <option value="Through A Recommendation">Through A Recommendation</option>
                <option value="Discovered On The Web">Discovered On The Web</option>
                <option value="Found On Social Media">Found On Social Media</option>
              </Field>
            </div>

            <div className="buttonContainer">
              <button
                className="form-button"
                // id="form-button"
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      );}}
    </Formik>
  );
}

export default FormCont;
import './App.css';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';



function App() {

  let [firstName, setfirstname] = useState([]);
  let [contact, setcontact] = useState([]);
  let [email, setemail] = useState([]);
  let [adhar, setadhar] = useState([]);
  let [main, setmain] = useState([]);

  let SignupSchema = yup.object().shape({
    firstName: yup.string().required("enter firstname...!"),
    contact: yup.number().required("enter contact...!"),
    email: yup.string().email().required("enter valid email....!"),
    adhar: yup.number().required("enter valid adhar...!"),
  });


  let Submit = () => {
    let obj = {
      firstName: firstName,
      contact: contact,
      email: email,
      adhar: adhar
    }

    setmain([...main,obj]);
  }
  return (
    <>
      <div className='App'>
        <h1>
          SignUp Page
        </h1>
        <Formik
          initialValues={{
            firstName: '',
            contact: '',
            email: '',
            adhar: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
            firstName = values.firstName;
            contact = values.contact;
            email = values.email;
            adhar = values.adhar;

            // firstName = values.firstName(" ");
            // contact = values.contact(" ");
            // email = values.email(" ");
            // adhar = values.adhar(" ");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              FIRSTNAME:
              <Field name="firstName" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              CONTACT:
              <Field name="contact" />
              {errors.contact && touched.contact ? (
                <div>{errors.contact}</div>
              ) : null}
              EMAIL:
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : null}
              ADHAR NO:
              <Field name="adhar" />   
              {errors.adhar && touched.adhar ? (
              <div>{errors.adhar}</div>
              ) : null}
              <button type="submit" onClick={Submit}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <table align="center" border="1px solid black">
          <tr>
            <td>FIRSTNAME</td>
            <td>CONTACT</td>
            <td>EMAIL</td>
            <td>ADHAR NO</td>
          </tr>
          {
            main.map((item) => {
              return (
                <tr>
                  <td>{item.firstName}</td>
                  <td>{item.contact}</td>
                  <td>{item.email}</td>
                  <td>{item.adhar}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>
  );
}
export default App;

import { Formik } from "formik";

import * as Yup from "yup";
import Vform from "./Vform";


function Register() {
  


  const regex = /^(?=.*[a-z])(?=.*[@#$%^&+=]).*$/;
  const ErrorSchema = Yup.object().shape({
    Name: Yup.string()

      .max(10, 'Must be 10 character or less')
      .required("*Name is required"),

    LastName: Yup.string()
    .max(10, 'Must be 10 character or less')
      .required("*LastName is required"),


      UserName: Yup.string()
      .max(10, 'Must be 10 character or less')
      .required("*UserName is required"),


      Email: Yup.string()
      .email('Email is invalid')
      .required("*Email is required"),

      Password: Yup.string()
      .matches(regex, 'This field should contain atleast one symbol.')
      .required("*Password is required"),

       ConfirmPassword: Yup.string().required("*ConfirmPassword is required").when("Password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("Password")],
          "Both password need to be the same"
         

        )
      })
      


  });

  return (

    <div >


      <Formik
        initialValues={{

          Name: "",
          LastName: "",
          UserName: "",
          Email: "",
          Password: "",
          ConfirmPassword: "",
         
        }}
        
        onSubmit={(value, { resetForm }) => {
          console.log("Values:", value);
          resetForm();
        }}
        validationSchema={ErrorSchema}
        component={Vform}

      />
    </div>


  );


}
export default Register;

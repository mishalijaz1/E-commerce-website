import { Formik } from "formik";

import * as Yup from "yup";
import Vsignin from "./Vsignin";


function Signin() {
  


  const regex = /^(?=.*[a-z])(?=.*[@#$%^&+=]).*$/;
  const ErrorSchema = Yup.object().shape({
   
  

      UserName: Yup.string()
      .max(10, 'Must be 10 character or less')
      .required("*UserName is required"),



      Password: Yup.string()
      .matches(regex, 'This field should contain atleast one symbol.')
      .required("*Password is required"),

   
         



  });

  return (

    <div >


      <Formik
        initialValues={{

        
          UserName: "",
          Password: "",
         
         
        }}
        
        onSubmit={(value, { resetForm }) => {
          console.log("Values:", value);
          resetForm();
        }}
        validationSchema={ErrorSchema}
        component={Vsignin}

      />
    </div>


  );


}
export default Signin;

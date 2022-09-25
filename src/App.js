import React, { useState } from "react";
import "./App.css";
import CardDisplay from "./components/CardDisplay/CardDisplay";
import Form from "./components/Form/Form";
import Success from "./components/Success/Success";

import { useFormik } from "formik";
import { formSchema } from "./schemas/formSchema.js";

function App() {
  const [success, setSuccess] = useState(false);

  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    setSuccess(!success);
    actions.resetForm();
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: "",
      },
      validationSchema: formSchema,
      onSubmit,
    });

  const onContinue = () => {
    setSuccess(!success);
  };

  return (
    <div className="App">
      <div className="App-container">
        <CardDisplay
          name={values.name ? values.name : "Jane Appleseed"}
          number={values.number ? values.number : "0000 0000 0000 0000"}
          month={values.month ? values.month : "00"}
          year={values.year ? values.year : "00"}
          cvc={values.cvc ? values.cvc : "000"}
        />
        {!success ? (
          <Form
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Success onContinue={onContinue} />
        )}
      </div>
    </div>
  );
}

export default App;

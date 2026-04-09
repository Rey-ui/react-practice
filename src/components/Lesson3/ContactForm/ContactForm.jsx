import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ handleAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };
  const handleSubmit = (values, actions) => {
    console.log(initialValues);
    console.log(values);
    console.log(actions);
    handleAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={contactSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          <span>Number</span>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

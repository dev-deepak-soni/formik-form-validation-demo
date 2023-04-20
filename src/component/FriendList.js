import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const FriendList = () => (
  <Formik
    initialValues={{ name: '', email: '' }}
    validate={validate}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ errors, touched, isSubmitting }) => (
      <Form>
        <div>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        {isSubmitting && <div>Submitting...</div>}
        {errors.submit && <div>{errors.submit}</div>}
      </Form>
    )}
  </Formik>
);

export default FriendList
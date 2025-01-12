import { Field, Form, Formik } from 'formik'


const SearchBar = () => {
    const onSabmit = values => {
        console.log(values)

    }
    const initialValues = {
        query: ''
    }

  return (
      <div>
          <Formik initialValues={initialValues} onSabmit={onSabmit}>
              <Form>
                  <Field />
                  <button type='submit'>Search</button>
              </Form>
          </Formik>
      
    </div>
  )
}

export default SearchBar

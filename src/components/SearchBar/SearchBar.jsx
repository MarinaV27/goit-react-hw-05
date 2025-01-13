import { Field, Form, Formik } from 'formik'


const SearchBar = ({handleChangeQuery, query}) => {
    const onSabmit = values => {
        handleChangeQuery(values.query)
    }
    const initialValues = {
        query,
    }

  return (
      <div>
          <Formik initialValues={initialValues} onSabmit={onSabmit}>
              <Form>
                  <Field name="query"/>
                  <button type='submit'>Search</button>
              </Form>
          </Formik>
      
    </div>
  )
}

export default SearchBar

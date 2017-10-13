import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, InputGroup, InputGroupAddon, Input as ReactstrapInput } from 'reactstrap';

const Input = ({ input, ...rest }) =>
  <ReactstrapInput {...rest} {...input}/>


class SearchMovieForm extends Component {
  render() {
    return (
      <Form>
        <InputGroup className='mt-5 mb-4'>
          <InputGroupAddon>
            <span className='search-icon'>🔍</span>
          </InputGroupAddon>
          <Input placeholder='Enter movie' />
        </InputGroup>
      </Form>
    )
  }
} 

SearchMovieForm = reduxForm({
  form: 'contact'
})(SearchMovieForm)

export default SearchMovieForm;

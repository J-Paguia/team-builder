import React from 'react'

function Form(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <label className='form-label'>
        {" "}
        First Name &nbsp;
        <input
          onChange={props.onInputChange}
          value={props.formValues.fname}
          name='fname'
          type='text'
        />
      </label>
      <br />

      <label className='form-label'>
        {" "}
        Last Name &nbsp;
        <input
          onChange={props.onInputChange} 
          value={props.formValues.lname}
          name='lname'
          type='text'
        />
      </label>
      <br />

      <label className='form-label'>
        {" "}
        Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          onChange={props.onInputChange}
          value={props.formValues.email}
          name='email'
          type='text'
        />
      </label>
      <br />

      <label className='form-label'>
        {" "}
        Role  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          onChange={props.onInputChange}
          value={props.formValues.role}
          name='role'
          type='text'
        />
      </label>
      <br /><br />

      <input type='submit' />
    </form>
  );
}

export default Form
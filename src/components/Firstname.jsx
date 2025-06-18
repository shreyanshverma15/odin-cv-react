import { useState } from 'react'

export default function Firstname() {
  const [firstname, setFirstname] = useState('');
  const [firstnameInputshow, setFirstnameInputshow] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setFirstname(e.target.firstName.value);
    setFirstnameInputshow(false);
  }

  function handleEdit() {
    setFirstnameInputshow(true);
    setFirstname(firstname);
  }

  if(firstnameInputshow) {
    return (
      <>
        <form onSubmit = {handleSubmit}>
          <label>
            First Name : 
            <input type="text" name="firstName" value={firstname} onChange = {e => setFirstname(e.target.value)}/>
          </label>
          <button type="button" onClick = {handleEdit}>Edit</button>
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
  else {
    return (
      <>
        <form onSubmit = {handleSubmit}>
          <p>First Name : {firstname}</p>
          <button type="button" onClick={handleEdit}>Edit</button>
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}


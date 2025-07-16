import { useState } from 'react';

export default function Email() {
  const [email, setEmail] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setEmail(e.target.email.value);
    setInputVisible(false);
  }

  function handleEdit() {
    setInputVisible(true);
  }

  if (inputVisible) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Email: {email}</p>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="submit">Submit</button>
    </form>
  );
}

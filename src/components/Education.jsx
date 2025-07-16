import { useState } from 'react';

export default function Education() {
  const [education, setEducation] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setEducation(e.target.education.value);
    setInputVisible(false);
  }

  function handleEdit() {
    setInputVisible(true);
  }

  if (inputVisible) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Education:
          <textarea
            name="education"
            value={education}
            onChange={e => setEducation(e.target.value)}
            rows={4}
          />
        </label>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Education: {education}</p>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="submit">Submit</button>
    </form>
  );
}

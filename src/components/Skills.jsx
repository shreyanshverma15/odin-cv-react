import { useState } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setSkills(e.target.skills.value);
    setInputVisible(false);
  }

  function handleEdit() {
    setInputVisible(true);
  }

  if (inputVisible) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Skills (comma‑separated):
          <input
            type="text"
            name="skills"
            value={skills}
            onChange={e => setSkills(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Skills: {skills}</p>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="submit">Submit</button>
    </form>
  );
}

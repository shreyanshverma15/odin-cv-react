import { useState } from 'react';

export default function Experience() {
  const [experience, setExperience] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setExperience(e.target.experience.value);
    setInputVisible(false);
  }

  function handleEdit() {
    setInputVisible(true);
  }

  if (inputVisible) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Work Experience:
          <textarea
            name="experience"
            value={experience}
            onChange={e => setExperience(e.target.value)}
            rows={6}
          />
        </label>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Work Experience: {experience}</p>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="submit">Submit</button>
    </form>
  );
}

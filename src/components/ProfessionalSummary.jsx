import { useState } from 'react';

export default function ProfessionalSummary() {
  const [summary, setSummary] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setSummary(e.target.summary.value);
    setInputVisible(false);
  }

  function handleEdit() {
    setInputVisible(true);
  }

  if (inputVisible) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Professional Summary:
          <textarea
            name="summary"
            value={summary}
            onChange={e => setSummary(e.target.value)}
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
      <p>Professional Summary: {summary}</p>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="submit">Submit</button>
    </form>
  );
}

import { useState } from 'react';

export default function GitHub() {
  const [url, setUrl] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setUrl(e.target.github.value);
    setInputVisible(false);
  }

  function handleEdit() {
    setInputVisible(true);
  }

  if (inputVisible) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          GitHub URL:
          <input
            type="url"
            name="github"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://github.com/yourusername"
          />
        </label>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>GitHub: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="submit">Submit</button>
    </form>
  );
}

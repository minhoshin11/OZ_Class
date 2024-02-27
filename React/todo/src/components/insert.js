import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';

const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      alert('할 일을 입력해주세요.');
      return;
    }
    onInsertTodo(text);
    setText('');
    onInsertToggle();
  };

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="입력해주세요"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default Insert;
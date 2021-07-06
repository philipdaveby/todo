import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const constructTodo = e => {
    e.preventDefault();

    props.addTodo({
      title,
      content,
      done: false,
      key: props.todoKey,
    });
    setTitle('');
    setContent('');
  };

  return (
      <form aria-label="form" className="main__form__todo" onSubmit={ constructTodo }>
        <label className="main__form__label">
          Title
          <input type="text" name="Title" placeholder="Enter a title.." className="main__form__text-input" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label className="main__form__label">
          Description
          <input type="text" name="Description" placeholder="Enter a description.." className="main__form__text-input" value={content} onChange={e => setContent(e.target.value)} />
        </label>
        <input type="submit" id="input__submit" value="Add" />
      </form>
  );
};

InputField.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default InputField;

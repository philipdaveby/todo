import React from 'react';

const TodoCard = props => (
    <div>
      <h3 className="main__todo__card__h3">{ props.cardTitle }</h3>
      <p className="main__todo__card__p">{ props.cardContent }</p>
      <button type="button" className="form__remove-button" onClick={e => {
        e.stopPropagation();
        props.removeCard(props.cardKey);
      }}>Remove</button>
    </div>
);

export default TodoCard;

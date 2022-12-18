import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Api } from 'services/api';
import { addContact } from 'redux/userSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setAge(value);
  };

  const onSubmitForm = async e => {
    e.preventDefault();
    const status = await Api();
    const newUser = { name, age, id: nanoid(), status };
    dispatch(addContact(newUser));

    setName('');
    setAge('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label>
        Name
        <input
          value={name}
          type="text"
          name="name"
          onChange={onChangeHandler}
        />
      </label>
      <label>
        Age
        <input
          value={age}
          type="number"
          name="age"
          onChange={onChangeHandler}
        />
      </label>
      <button>Add contact</button>
    </form>
  );
};

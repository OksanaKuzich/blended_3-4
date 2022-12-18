import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Api } from 'services/api';
import { addContact } from 'redux/userSlice';
import { FormStyle, FormLabel, FormInput, ButtonAdd } from './Form.styled';

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
    <FormStyle onSubmit={onSubmitForm}>
      <FormLabel>
        Name
        <FormInput
          value={name}
          type="text"
          name="name"
          onChange={onChangeHandler}
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </FormLabel>
      <FormLabel>
        Age
        <FormInput
          value={age}
          type="number"
          name="age"
          onChange={onChangeHandler}
          required
          min="0"
          max="150"
        />
      </FormLabel>
      <ButtonAdd>Add contact</ButtonAdd>
    </FormStyle>
  );
};

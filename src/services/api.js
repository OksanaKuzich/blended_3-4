import axios from 'axios';

export const Api = async () => {
  const result = await axios('https://yesno.wtf/api');
  return result.data.answer;
};

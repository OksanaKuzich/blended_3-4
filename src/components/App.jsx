import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage';
import { AddContactPage } from '../pages/AddContactPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add" element={<AddContactPage />} />
      </Route>
    </Routes>
  );
};

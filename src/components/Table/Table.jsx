import { getUsers } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { deleteContact, toggleStatus } from 'redux/userSlice';
import {
  TableStyled,
  TableTh,
  TableTd,
  ButtonDelete,
  Status,
  NoResults,
} from './Table.styled';

export const Table = () => {
  const arrayUsers = useSelector(getUsers);
  const dispatch = useDispatch();

  return arrayUsers.length > 0 ? (
    <TableStyled>
      <thead>
        <tr>
          <TableTh>№</TableTh>
          <TableTh>Avatar</TableTh>
          <TableTh>Name</TableTh>
          <TableTh>Age</TableTh>
          <TableTh>Status</TableTh>
          <TableTh>Options</TableTh>
        </tr>
      </thead>
      <tbody>
        {arrayUsers.map((user, index) => {
          return (
            <tr key={user.id}>
              <TableTd>{index + 1}</TableTd>
              <TableTd>
                <Avatar name={user.name} size={40} round={true} />
              </TableTd>
              <TableTd>{user.name}</TableTd>
              <TableTd>{user.age}</TableTd>
              <TableTd>
                <Status
                  onClick={() => {
                    dispatch(toggleStatus(user.id));
                  }}
                  status={user.status}
                >
                  {user.status === 'no' ? 'offline' : 'online'}
                </Status>
              </TableTd>
              <TableTd>
                <ButtonDelete
                  onClick={() => {
                    dispatch(deleteContact(user.id));
                  }}
                >
                  Delete
                </ButtonDelete>
              </TableTd>
            </tr>
          );
        })}
      </tbody>
    </TableStyled>
  ) : (
    <NoResults>Please, enter your contacts...</NoResults>
  );
};

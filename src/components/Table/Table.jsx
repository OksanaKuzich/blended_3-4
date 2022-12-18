import { getUser } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { deleteContact, toggleStatus } from 'redux/userSlice';
import {
  TableStyled,
  TableTh,
  TableTd,
  ButtonDelete,
  Status,
} from './Table.styled';

export const Table = () => {
  const array = useSelector(getUser);
  const dispatch = useDispatch();

  return (
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
        {array.map((cont, index) => {
          return (
            <tr key={cont.id}>
              <TableTd>{index + 1}</TableTd>
              <TableTd>
                <Avatar name={cont.name} size={40} round={true} />
              </TableTd>
              <TableTd>{cont.name}</TableTd>
              <TableTd>{cont.age}</TableTd>
              <TableTd>
                <Status
                  onClick={() => {
                    dispatch(toggleStatus(cont.id));
                  }}
                  status={cont.status}
                >
                  {cont.status === 'no' ? 'offline' : 'online'}
                </Status>
              </TableTd>
              <TableTd>
                <ButtonDelete
                  onClick={() => {
                    dispatch(deleteContact(cont.id));
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
  );
};

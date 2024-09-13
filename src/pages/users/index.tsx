import { Grid } from '@mui/material'
import TableComponent from '../../components/tables/TableComponent'
import { usersMock } from '../../mocks/users';
import { useEffect, useState } from 'react';
import { getTableHeaders } from '../../components/tables/getTableHeaders';
import { ITableHeader } from '../../components/tables/interface';
import InfoIcon from '@mui/icons-material/Info';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Users = () => {
  const [columnHeaders, setColumnHeaders] = useState<Array<ITableHeader>>([] as Array<ITableHeader>);
  const {
    id,
    reportsTo,
    firstName,
    lastName,
    otherName,
    ...data
  } = usersMock[0];

  const rowData = {
    name: `${usersMock[0].firstName} ${usersMock[0].lastName} ${usersMock[0].otherName}`,
    ...data,
    action: {
      label: "options",
      options: [
        { value: "deactivate", label: "Deactivate", icon: <InfoIcon fontSize='small' /> },
        { value: "update", label: "Update", icon: <ModeEditIcon fontSize='small' /> }
      ]
    },
  };

  useEffect(() => {
    setColumnHeaders(getTableHeaders(rowData))
  }, []);

  const users = usersMock.map((user, index) => {
    const {
      reportsTo,
      firstName,
      lastName,
      otherName,
      ...data
    } = usersMock[index];

    return (
      {
        name: `${user.firstName} ${user.lastName} ${user.otherName}`,
        ...data
      }
    )
  })
  return (
    <Grid xs={12} container>
      {columnHeaders.length > 0 && <TableComponent rows={users} columnHeaders={columnHeaders} />}
    </Grid>
  )
}

export default Users
import { useEffect, useState } from 'react'
import InfoIcon from '@mui/icons-material/Info';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ITableHeader } from '../../components/tables/interface';
import { requestMock } from '../../mocks/request';
import { IFormData } from '../assets/interface';
import { getTableHeaders } from '../../components/tables/getTableHeaders';
import { IRequest } from './interface';
import { crudStates } from '../../utils/constants';


const RequestUtills = () => {
    const endPoint = 'posts';
    const header = { plural: 'Requests', singular: 'Request' };
    const [columnHeaders, setColumnHeaders] = useState<Array<ITableHeader>>([] as Array<ITableHeader>);

    const {
        id,
        user,
        description,
        ...data
    } = requestMock[0];

    const rowData = {
        ...data,
        action: {
            label: "options",
            options: [
                { value: crudStates.delete, label: "Delete", icon: <InfoIcon fontSize='small' color='error' /> },
                { value: crudStates.update, label: "Update", icon: <ModeEditIcon fontSize='small' color='info' /> },
                { value: crudStates.read, label: "View Details", icon: <RemoveRedEyeIcon fontSize='small' color='inherit' /> }
            ]
        },
    };

    const formFields: Array<IFormData<IRequest>> = [
        {
            value: "reason",
            label: 'Reason',
            type: "input"
        },
        {
            value: "quantity",
            label: 'Quantity',
            type: "input"
        },
        {
            value: "date",
            label: 'Request Date',
            type: "date"
        },
        {
            value: "description",
            label: 'Description',
            type: "textarea"
        }
    ]


    useEffect(() => {
        setColumnHeaders(getTableHeaders(rowData))
    }, []);
    return (
        { endPoint, header, columnHeaders, formFields }
    )
}

export default RequestUtills
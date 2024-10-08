import React, { useEffect, useState } from 'react'
import { ITableHeader } from '../../../../components/tables/interface';
import { requestMock } from '../../../../mocks/request';
import InfoIcon from '@mui/icons-material/Info';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { getTableHeaders } from '../../../../components/tables/getTableHeaders';
import { IFormData } from '../../interface';
import { IRequest } from '../interface';

const RequestUtills = () => {
    const endPoint = 'posts';
    const header = { plural: 'Requests', singular: 'Request' };
    const [columnHeaders, setColumnHeaders] = useState<Array<ITableHeader>>([] as Array<ITableHeader>);

    const {
        id,
        particulars,
        ...data
    } = requestMock[0];

    const rowData = {
        ...data,
        action: {
            label: "options",
            options: [
                { value: "dispose", label: "Dispose", icon: <InfoIcon fontSize='small' color='error' /> },
                { value: "update", label: "Update", icon: <ModeEditIcon fontSize='small' color='info' /> },
                { value: "read", label: "View Details", icon: <RemoveRedEyeIcon fontSize='small' color='inherit' /> }
            ]
        },
    };

    const formFields: Array<IFormData<IRequest>> = [
        {
            value: "officerName",
            label: 'Officer Name',
            type: "input"
        },
        {
            value: "title",
            label: 'Title',
            type: "select",
            options: [
                { label: "Desktop Computer", value: "desktopComputer" },
                { label: "Laptop", value: "laptop" },
                { label: "Scanner", value: "scanner" },
                { label: "Printer", value: "printer" },
                { label: "Monitor", value: "monitor" },
                { label: "Accesories ( Mouse, Keyboard, etc )", value: "accesories" },
                { label: "Components ( RAM, SSD/HDD, etc )", value: "component" },
                { label: "Receipt Printer", value: "receiptPrinter" },
                { label: "Consumables", value: "consumables" },
                { label: "Office Equipment ( Desk, Chairs, etc)", value: "officeEquipment" },
            ]
        },
        {
            value: "department",
            label: 'Department',
            type: "input"
        },
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
            value: "destination",
            label: 'Destination',
            type: "select",
            options: [
                { label: "In Use", value: "use" },
                { label: "In Store", value: "store" },
                { label: "In Repair", value: "repair" },
                { label: "Disposed/Decommisioned", value: "disposed" },
            ]
        },
        {
            value: "expectedReturnDate",
            label: 'Expected Return Date',
            type: "date"
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
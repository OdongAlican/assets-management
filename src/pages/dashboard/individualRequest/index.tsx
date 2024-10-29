import { useContext, useEffect, useState } from 'react'
import RowContext from '../../../context/row/RowContext';
import { RequestContext } from '../../../context/request/RequestContext';
import { fetchRowsService } from '../../../core/apis/globalService';
import { GridRowsProp } from '@mui/x-data-grid';
import { requestMock } from '../../../mocks/request';
import TableComponent from '../../../components/tables/TableComponent';
import IndividualRequestUtill from './utill';

const PersonalRequest = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const { endPoint, columnHeaders, header, handleRequest } = IndividualRequestUtill();
    const { setRows, rows } = useContext(RowContext);
    const { requestTableData } = useContext(RequestContext);

    const fetchResources = async () => {
        setLoading(true);
        try {
            const response = await fetchRowsService({ page: 1, size: 10, endPoint }) as unknown as GridRowsProp;
            setRows([...response]);
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => { fetchResources() }, []);
    useEffect(() => { if (rows.length > 0) { handleRequest(requestMock) } }, [rows])

    return (
        <TableComponent
            endPoint={endPoint}
            loading={loading}
            count={100}
            header={header}
            rows={requestTableData}
            columnHeaders={columnHeaders}
            paginationMode='client'
        />
    )
}

export default PersonalRequest
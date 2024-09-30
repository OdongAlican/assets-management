import { useContext, useEffect, useState } from 'react'
import RowContext from '../../context/row/RowContext';
import { fetchRowsService } from '../../core/apis/globalService';
import { GridRowsProp } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import TableComponent from '../../components/tables/TableComponent';
import AssetUtills from './utils';
import { assetsMock } from '../../mocks/assets';

const AssetsManagement = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setRows, rows } = useContext(RowContext);
    const { columnHeaders, endPoint, header } = AssetUtills();

    const fetchResources = async () => {
        setLoading(true)
        try {
            const response = await fetchRowsService({ page: 1, size: 10, endPoint }) as unknown as GridRowsProp;
            console.log(response, "response!!")
            setRows([...assetsMock]);
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchResources()
    }, []);

    return (
        <>
            {rows?.length > 0 && <Grid xs={12} container>
                {columnHeaders.length > 0 &&
                    <TableComponent
                        endPoint={endPoint}
                        loading={loading}
                        count={100}
                        exportData
                        createAction
                        importData
                        header={header}
                        rows={rows}
                        columnHeaders={columnHeaders}
                    />
                }
            </Grid>}
        </>
    )
}

export default AssetsManagement
import React, {
    useContext,
    useEffect,
    useState
} from "react";
import { useNavigate } from "react-router";
import RowContext from "../../../context/row/RowContext";
import { fetchRowsService } from "../../../core/apis/globalService";
import { GridRowsProp } from "@mui/x-data-grid";
import { crudStates } from "../../../utils/constants";
import { Grid } from "@mui/material";
import { officeEquipmentMock } from "../../../mocks/officeEquipment";
import OfficeEquipmentUtills from "./utills";
import TableComponent from "../../../components/tables/TableComponent";
import { ROUTES } from "../../../core/routes/routes";

const OfficeEquipment = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { columnHeaders, header, endPoint, handleOpen } = OfficeEquipmentUtills();
    const { setRows, rows } = useContext(RowContext);

    const fetchResources = async () => {
        setLoading(true)
        try {
            const response = await fetchRowsService(
                {
                    page: 1,
                    size: 10,
                    endPoint
                }
            ) as unknown as GridRowsProp;

            console.log(response, "response!!");
            setRows([...officeEquipmentMock]);

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => { fetchResources() }, []);

    const handleOptionClicked = (option: string | number, moduleID?: string | number) => {
        if (option === crudStates.update) {
            navigate(`${ROUTES.UPDATE_OFFICE_EQUIPMENT}/${moduleID}`)
        }
        if (option === crudStates.dispose) {
            handleOpen()
        }
    }

    return (
        <React.Fragment>
            {rows?.length > 0 &&
                <Grid xs={12} container>
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
                            onCreationHandler={() => navigate(ROUTES.CREATE_OFFICE_EQUIPMENT)}
                            handleOptionClicked={handleOptionClicked}
                            paginationMode='client'
                        />
                    }
                </Grid>}
        </React.Fragment>
    )
}

export default OfficeEquipment;
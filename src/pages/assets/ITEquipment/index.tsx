import { Grid } from "@mui/material"
import ModalComponent from "../../../components/modal"
import Dispose from "../Dispose"
import TableComponent from "../../../components/tables/TableComponent"
import ITEquipmentUtills from "./utills"
import { useNavigate } from "react-router"
import { useContext, useEffect, useState } from "react"
import { fetchRowsService } from "../../../core/apis/globalService"
import RowContext from "../../../context/row/RowContext"
import { GridRowsProp } from "@mui/x-data-grid"
import { assetsMock } from "../../../mocks/assets"
import { crudStates } from "../../../utils/constants"
import { ROUTES } from "../../../core/routes/routes"

const ITEquipment = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { setRows, rows } = useContext(RowContext);

    const {
        open,
        handleClose,
        handleOpen,
        endPoint,
        header,
        columnHeaders
    } = ITEquipmentUtills();

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
            
            setRows([...assetsMock]);
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => { fetchResources() }, []);

    const handleOptionClicked = (option: string | number, moduleID?: string | number) => {
        if (option === crudStates.update) {
            navigate(`${ROUTES.UPDATE_ASSET}/${moduleID}`)
        }
        if (option === crudStates.dispose) {
            handleOpen()
        }
    }

    return (
        <>
            {
                <ModalComponent width={"40%"} title='Dispose Asset' open={open} handleClose={handleClose}>
                    <Dispose
                        sendingRequest={loading}
                        handleClose={handleClose}
                        buttonText='Confirm'
                    />
                </ModalComponent>
            }
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
                            onCreationHandler={() => navigate(ROUTES.CREATE_ASSET)}
                            handleOptionClicked={handleOptionClicked}
                            paginationMode='client'
                        />
                    }
                </Grid>}
        </>
    )
}

export default ITEquipment
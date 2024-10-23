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
import { crudStates } from "../../../utils/constants"
import { ROUTES } from "../../../core/routes/routes"
import { itEquipmentMock } from "../../../mocks/itEquipment"
import { IITEquipment } from "./interface"

const ITEquipment = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [currentAsset, setCurrentAsset] = useState<IITEquipment>({} as IITEquipment);
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

            setRows([...itEquipmentMock]);
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => { fetchResources() }, []);

    const determineCurrentAsset = (id: number) => {
        const item = itEquipmentMock.find(item => item.id === id);
        setCurrentAsset(item as IITEquipment)
    }

    const handleOptionClicked = (option: string | number, moduleID?: string | number) => {
        switch (option) {
            case crudStates.update:
                navigate(`${ROUTES.UPDATE_ITEQUIPMENT}/${moduleID}`);
                break;
            case crudStates.dispose:
                determineCurrentAsset(moduleID as number)
                handleOpen();
                break;
            case crudStates.read:
                navigate(`${ROUTES.LIST_ASSETS}/${moduleID}`);
                break;
            default:
                break;
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
                        asset={currentAsset}
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
                            onCreationHandler={() => navigate(ROUTES.CREATE_ITEQUIPMENT)}
                            handleOptionClicked={handleOptionClicked}
                            paginationMode='client'
                        />
                    }
                </Grid>}
        </>
    )
}

export default ITEquipment;
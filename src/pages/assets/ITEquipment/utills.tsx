import { useEffect, useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ITableHeader } from "../../../components/tables/interface";
import { getTableHeaders } from "../../../components/tables/getTableHeaders";
import { IFormData } from "../interface";
import { IITEquipment } from "./interface";
import { assetStatus } from "../../../utils/constants";
import { itEquipmentMock } from "../../../mocks/itEquipment";

const ITEquipmentUtills = () => {
    const endPoint = 'posts';
    const header = { plural: 'IT Equipment', singular: 'IT Equipment' };
    const [open, setOpen] = useState<boolean>(false);
    const [columnHeaders, setColumnHeaders] = useState<Array<ITableHeader>>([] as Array<ITableHeader>);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const categories = {
        desktopComputer: "desktopComputer",
        laptop: "laptop",
        scanner: "scanner",
        printer: "printer",
        monitor: "monitor",
        accesories: "accesories",
        component: "component",
        receiptPrinter: "receiptPrinter",
        consumables: "consumables",
        officeEquipment: "officeEquipment",
    }

    const {
        id,
        model,
        ram,
        cpuSpeed,
        hardDiskSize,
        ipAddress,
        macAddress,
        image,
        interfaceType,
        purchaseCost,
        detailNetBookValue,
        dateReceipt,
        supplier,
        unitOfMeasure,
        assetDepreciationRate,
        assetSubCategory_id,
        desc,
        netValueB,
        costOfTheAsset,
        hostname,
        ...data
    } = itEquipmentMock[0];

    const rowData = {
        image: itEquipmentMock[0].image,
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


    useEffect(() => {
        setColumnHeaders(getTableHeaders(rowData))
    }, []);


    const formFields: Array<IFormData<IITEquipment>> = [
        {
            value: "category",
            label: 'Category',
            type: "select",
            options: [
                { label: "Desktop Computer", value: categories.desktopComputer },
                { label: "Laptop", value: categories.laptop },
                { label: "Scanner", value: categories.scanner },
                { label: "Printer", value: categories.printer },
                { label: "Monitor", value: categories.monitor },
                { label: "Accesories ( Mouse, Keyboard, etc )", value: categories.accesories },
                { label: "Components ( RAM, SSD/HDD, etc )", value: categories.component },
                { label: "Receipt Printer", value: categories.receiptPrinter },
            ]
        },
        {
            value: "assetName",
            label: 'Asset Name',
            type: "input"
        },
        {
            value: "engravedNumber",
            label: 'Engraved number',
            type: "input"
        },
        {
            value: "model",
            label: 'Model',
            type: "input"
        },
        {
            value: "serialNumber",
            label: 'Serial Number',
            type: "input"
        },
        {
            value: "assetStatus",
            label: 'Status',
            type: "select",
            options: [
                { label: "In Use", value: assetStatus.use },
                { label: "In Store", value: assetStatus.store },
                { label: "In Repair", value: assetStatus.repair },
                { label: "Disposed/Decommisioned", value: assetStatus.repair },
            ]
        },
        {
            value: "netValueB",
            label: 'Net Value',
            type: "input"
        },
        {
            value: "assetDepreciationRate",
            label: 'Depreciation Rate',
            type: "input"
        },
        {
            value: "user_id",
            label: 'Assigned To',
            type: "input"
        },
        {
            value: "location",
            label: 'Location',
            type: "autocomplete",
            options: [
                { label: "USB", value: "usb" },
                { label: "LCD", value: "lcd" },
                { label: "LED", value: "led" },
            ]
        },
        {
            value: "purchaseCost",
            label: 'Purchase Cost',
            type: "input",
        }
    ]

    const computerFields: Array<IFormData<IITEquipment>> = [
        {
            value: "ram",
            label: 'RAM',
            type: "input"
        },
        {
            value: "cpuSpeed",
            label: 'CPU Speed',
            type: "input"
        },
        {
            value: "hardDiskSize",
            label: 'Hard Disk Size',
            type: "input"
        },
        {
            value: "ipAddress",
            label: 'IP Address',
            type: "input"
        },
        {
            value: "interfaceType",
            label: 'Interface Type',
            type: "select",
            options: [
                { label: "USB", value: "usb" },
                { label: "LCD", value: "lcd" },
                { label: "LED", value: "led" },
            ]
        },
    ]

    return (
        {
            open,
            setOpen,
            handleClose,
            handleOpen,
            endPoint,
            header,
            columnHeaders,
            formFields,
            computerFields,
            categories
        }
    )
}

export default ITEquipmentUtills
import { SelectChangeEvent } from "@mui/material";
import { Control, FieldError, FormState, UseFormRegister } from "react-hook-form";

export interface IITEquipment {
    id?: string | number;
    name: string;
    category: string;
    engravedNumber: string;
    model: string;
    serialNo: string;
    ram?: string | null;
    cpuSpeed?: string | null;
    hardDiskSize?: string | null;
    ipAddress?: string | null;
    macAddress?: string | null;
    interfaceType?: string | null;
    location?: string | null;
    status?: string | null;
    purchaseCost?: string | null;
    verificationDate?: string | null;
    deploymentDate?: string | null;
    costOfAsset?: number | null;
    netValue?: string | null;
    depreciationRate?: string | null;
    assignedTo?: string | null
}

export interface IITEquipmentForm {
    formState: FormState<IITEquipment> & {
        errors: {
            name?: FieldError;
            category?: FieldError;
            engravedNumber?: FieldError;
            model?: FieldError;
            serialNo?: FieldError;
            ram?: FieldError;
            cpuSpeed?: FieldError;
            hardDiskSize?: FieldError;
            ipAddress?: FieldError;
            macAddress?: FieldError;
            interfaceType?: FieldError;
            location?: FieldError;
            status?: FieldError;
            purchaseCost?: FieldError;
            verificationDate?: FieldError;
            deploymentDate?: FieldError;
            costOfAsset?: FieldError;
            netValue?: FieldError;
            depreciationRate?: FieldError;
            assignedTo?: FieldError
        };
    };
    control: Control<IITEquipment>;
    register: UseFormRegister<IITEquipment>;
    buttonText: string;
    sendingRequest: boolean;
    option?: string | undefined;
    handleChange?: (event: SelectChangeEvent) => void;
}
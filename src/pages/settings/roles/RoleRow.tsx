import { Box, Typography } from "@mui/material";
import { IModule, IRoleRow } from "../interface";
import CheckboxComponent from "../../../components/forms/CheckBox";
import RoleUtills from "./utills";
import { ChangeEvent, useEffect } from "react";
import { crudStates } from "../../../utils/constants";
import { permissionsMock } from "../../../mocks/settings";

const RoleRow = ({ role, module }: IRoleRow) => {
    const { determineCrudStates, mainCheckedState, filterPermissions } = RoleUtills();

    const moduleNameFxn = (module: IModule) => module.name.toLocaleLowerCase().split(" ").join("_");

    useEffect(() => {
        determineCrudStates(role.permissions, moduleNameFxn(module))
    }, []);

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const verb = event.target.name;
        const permission = filterPermissions(verb, permissionsMock, moduleNameFxn(module));
        console.log(verb, role, module, permission, "request information!!!");
    }

    return (
        <Box
            display="grid"
            sx={{ width: "100%", alignItems: "center" }}
            gridTemplateColumns="6fr 1fr 1fr 1fr 1fr"
            gap={4}
            px={3}
            py={0.5}
        >
            <Typography variant="body2">{module.name}</Typography>
            <CheckboxComponent name={crudStates.create} handleChangeEvent={handleChange} checked={mainCheckedState.create} />
            <CheckboxComponent name={crudStates.read} handleChangeEvent={handleChange} checked={mainCheckedState.read} />
            <CheckboxComponent name={crudStates.update} handleChangeEvent={handleChange} checked={mainCheckedState.update} />
            <CheckboxComponent name={crudStates.delete} handleChangeEvent={handleChange} checked={mainCheckedState.delete} />
        </Box>
    )
}

export default RoleRow;
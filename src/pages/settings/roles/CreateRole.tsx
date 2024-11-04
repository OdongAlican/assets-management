import { useEffect } from 'react'
import { ICreateRole, IRole } from '../interface';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { roleSchema } from './schema';
import { Grid } from '@mui/material';
import RoleForm from './RoleForm';

const CreateRole = ({ handleClose, sendingRequest }: ICreateRole) => {
    const defaultUser: IRole = {} as IRole;

    const {
        control,
        handleSubmit,
        formState,
        register,
        reset
    } = useForm<IRole>({
        mode: 'onChange',
        resolver: yupResolver(roleSchema),
    });

    useEffect(() => {
        reset({ ...defaultUser });
    }, [reset]);

    const onSubmit = (formData: IRole) => {
        console.log(formData, "form data!!!!!");
    };

    return (
        <Grid container xs={12}>
            <Grid item xs={12}>
                <form
                    style={{ width: "100%" }}
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <RoleForm
                        handleClose={handleClose}
                        buttonText="Submit"
                        formState={formState}
                        control={control}
                        sendingRequest={sendingRequest}
                        register={register}
                    />
                </form>
            </Grid>
        </Grid>
    );
}

export default CreateRole
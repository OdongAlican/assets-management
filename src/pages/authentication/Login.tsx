import {
    Box,
    Grid,
} from '@mui/material';
import {
    useForm
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthenticationImage from "../../statics/images/logo.1b6cf8fbdaaee75f39fd.bmp";
import { schema } from './schema';
import { ILogin } from './interface';
import { useEffect, useState } from 'react';
import LoginForm from './forms';
import TypographyComponent from '../../components/headers/TypographyComponent';

const Login = () => {
    const [loggingIn, setLoggingIn] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const defaultUser: ILogin = { email: "", password: "" };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); };

    const {
        control,
        handleSubmit,
        formState,
        register,
        reset
    } = useForm<ILogin>({
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    useEffect(() => { reset({ ...defaultUser }) }, []);

    const onSubmit = (formData: ILogin) => {

        setLoggingIn(true);
        console.log(formData, "form data!!!!!")
    };

    return (
        <Grid container xs={10} md={6} item>
            <Grid item xs={12} md={6} >
                <Box component="img" src={AuthenticationImage} alt='Login Image' height={500} width={"100%"} />
            </Grid>
            <Grid item xs={12} md={6} spacing={6} p={4}
                sx={(theme) => ({
                    bgcolor: theme.palette.background.paper,
                })}
            >
                <Box>
                    <TypographyComponent text='Assets Management Tool' fontSize={"18px"} fontWeight={600}/>
                    <TypographyComponent text='Sign In to your account' fontSize={"17px"} fontWeight={500}/>
                </Box>
                <form
                    style={{ width: "100%" }}
                    autoComplete="false"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <LoginForm
                        buttonText="Log In"
                        register={register}
                        formState={formState}
                        control={control}
                        showPassword={showPassword}
                        loggingIn={loggingIn}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                    />
                </form>
            </Grid>
        </Grid>
    )
}

export default Login
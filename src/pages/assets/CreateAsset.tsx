import { useForm } from "react-hook-form";
import { IAsset } from "./interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Card, Container, Grid, SelectChangeEvent, Typography } from "@mui/material";
import AssetForm from "./AssetForm";
import { assetSchema } from "./subroutes/request/schema";

const CreateAsset = () => {
    const [sendingRequest, setSendingRequest] = useState<boolean>(false);
    const [option, setOption] = useState<string | undefined>('');

    const defaultUser: IAsset = {} as IAsset;

    const {
        control,
        handleSubmit,
        formState,
        register,
        reset
    } = useForm<IAsset>({
        mode: 'onChange',
        resolver: yupResolver(assetSchema),
    });

    useEffect(() => {
        reset({ ...defaultUser });
    }, [reset]);

    const onSubmit = (formData: IAsset) => {
        setSendingRequest(true);
        console.log(formData, "form data!!!!!");
    };

    const handleChange = (event: SelectChangeEvent) => {
        setOption(event.target.value as string);
    };

    return (
        <Card sx={{ p: 4}}>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Typography sx={{ my: 4, fontWeight: 600 }}>Create an Asset</Typography>
                    <form
                        style={{ width: "100%" }}
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <AssetForm
                            option={option}
                            handleChange={handleChange}
                            buttonText="Submit"
                            formState={formState}
                            control={control}
                            sendingRequest={sendingRequest}
                            register={register}
                        />
                    </form>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CreateAsset
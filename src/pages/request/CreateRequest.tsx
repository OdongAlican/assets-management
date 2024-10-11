import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Grid, Typography } from "@mui/material";
import RequestForm from "./RequestForm";
import { IRequest } from "./interface";
import { requestSchema } from "./schema";

const CreateRequest = () => {
    const [sendingRequest, setSendingRequest] = useState<boolean>(false);
    const defaultRequest: IRequest = {} as IRequest;

    const {
        control,
        handleSubmit,
        formState,
        register,
        reset
    } = useForm<IRequest>({
        mode: 'onChange',
        resolver: yupResolver(requestSchema),
    });

    useEffect(() => {
        reset({ ...defaultRequest });
    }, [reset]);

    const onSubmit = (formData: IRequest) => {
        setSendingRequest(true);
        console.log(formData, "form data!!!!!");
    };

    return (
        <Card sx={{ p: 4 }}>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Typography sx={{ mb: 4, fontWeight: 600, textTransform: "uppercase", fontSize: '17px' }}>Create a Request</Typography>
                    <form
                        style={{ width: "100%" }}
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <RequestForm
                            formState={formState}
                            control={control}
                            register={register}
                            sendingRequest={sendingRequest}
                            buttonText="Request Asset"
                        />
                    </form>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CreateRequest;
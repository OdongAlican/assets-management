import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, Grid, Typography } from '@mui/material';
import RequestForm from './RequestForm';
import { requestMock } from '../../mocks/request';
import { IRequest } from './interface';
import { requestSchema } from './schema';

const UpdateRequest = () => {
    const [sendingRequest, setSendingRequest] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();
    const [defaultRequest, setDefaultRequest] = useState<IRequest>(requestMock[0]);

    useEffect(() => {
        setDefaultRequest(() => {
            return requestMock.find(asset => asset?.id === parseInt(id as string)) as IRequest
        })
    }, [id]);

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
    }, [defaultRequest]);

    const onSubmit = (formData: IRequest) => {
        setSendingRequest(true);
        console.log(formData, "form data!!!!!");
        setSendingRequest(false)
    };

    return (
        <Card sx={{ p: 4 }}>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Typography sx={{ mb: 4, fontWeight: 600, textTransform: "uppercase", fontSize: '17px' }}>Update Request</Typography>
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

export default UpdateRequest
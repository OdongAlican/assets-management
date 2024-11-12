import { Grid, Stack } from '@mui/material'
import { useNavigate } from 'react-router';
import { IRequestForm } from '../interface';
import {
    UseFormAutocompleteComponent,
    UseFormDatePicker,
    UseFormInput,
    UseFormSelect,
    UseFormTimePicker
} from '../../../components/forms';
import ButtonComponent from '../../../components/forms/Button';
import { ROUTES } from '../../../core/routes/routes';
import RequestUtills from './utills';

const RequestForm = ({
    register,
    control,
    formState,
    sendingRequest,
    buttonText
}: IRequestForm) => {
    const { formFields } = RequestUtills();
    const navigate = useNavigate();

    return (
        <Grid item container xs={12}>
            <Grid item container spacing={4} xs={12}>
                {
                    formFields.map(formField => {
                        return formField.type === 'input' ? (
                            <Grid item xs={12} md={3}>
                                <UseFormInput
                                    register={register}
                                    control={control}
                                    formState={formState}
                                    value={formField.value}
                                    label={formField.label}
                                />
                            </Grid>
                        ) : formField.type === 'textarea' ? (
                            <Grid item xs={12} md={6}>
                                <UseFormInput
                                    row={6}
                                    multiline={true}
                                    register={register}
                                    control={control}
                                    formState={formState}
                                    value={formField.value}
                                    label={formField.label}
                                />
                            </Grid>
                        ) : formField.type === 'select' ? (
                            <Grid item xs={12} md={3}>
                                <UseFormSelect
                                    options={formField.options}
                                    register={register}
                                    control={control}
                                    formState={formState}
                                    value={formField.value}
                                    label={formField.label} />
                            </Grid>
                        ) : formField.type === 'date' ? (
                            <Grid item xs={12} md={3}>
                                <UseFormDatePicker
                                    register={register}
                                    control={control}
                                    formState={formState}
                                    value={formField.value}
                                    label={formField.label} />
                            </Grid>
                        ) : formField.type === 'time' ? (
                            <Grid item xs={12} md={3}>
                                <UseFormTimePicker
                                    register={register}
                                    control={control}
                                    formState={formState}
                                    value={formField.value}
                                    label={formField.label} />
                            </Grid>
                        ) : formField.type === 'autocomplete' ? (
                            <Grid item xs={12} md={3}>
                                <UseFormAutocompleteComponent
                                    register={register}
                                    control={control}
                                    formState={formState}
                                    value={formField.value}
                                    label={formField.label}
                                    options={formField.options}
                                />
                            </Grid>
                        )
                            : null
                    })
                }
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
                    <Stack direction="row" spacing={3} sx={{ width: "30%" }}>
                        <ButtonComponent
                            handleClick={() => navigate(ROUTES.REQUEST)}
                            buttonColor='error'
                            type='button'
                            sendingRequest={false}
                            buttonText="Back"
                        />
                        <ButtonComponent
                            buttonColor='success'
                            type='submit'
                            sendingRequest={sendingRequest}
                            buttonText={buttonText} />
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default RequestForm
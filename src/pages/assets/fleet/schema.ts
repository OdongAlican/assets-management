import * as yup from 'yup';

export const fleetSchema = yup.object().shape({
    assetName: yup.string().required('Asset Name is required'),
    hostname: yup.string().required('Host Name is required'),
    detailNetBookValue: yup.string().required('Detail Net Book Value is required'),
    engravedNumber: yup.string().required('Engraved Number is required'),
    dateReceipt: yup.string().required('Date Receipt is required'),
    make: yup.string().required('Make is required'),
    supplier: yup.string().required('Supplier is required'),
    unitOfMeasure: yup.string().required('Unit of Measure is required'),
    purchaseCost: yup.string().required('Purchase Cost is required'),
    costOfTheAsset: yup.string().required('Cost of Asset is required'),
    assetCategory_id: yup.string().required('Cost of Asset is required'),
    netValueB: yup.string().required('Net Value is required'),
    registrationNumber: yup.string().nullable().optional(),
    desc: yup.string().nullable().optional(),
    image: yup.string().nullable().optional(),
    assetStatus: yup.string().nullable().optional(),
});

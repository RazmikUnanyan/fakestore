import { IOrganizationRequestModel } from "../interfaces/organization.interface";


export const getOrganizationRequestModel = ({img, values, organization, id}: IOrganizationRequestModel) => ({
    id: id || Math.random(),
    title: values.title,
    image: img,
    licenses: [
        {
            id: organization?.licenses[0].id || Math.random(),
            title: "Tracking",
            inUse: 1200,
            assigned: Number(values.tracking),
        },
        {
            id: organization?.licenses[1].id || Math.random(),
            title: "Protection",
            inUse: 840,
            assigned: Number(values.protection),
        },
    ],

});
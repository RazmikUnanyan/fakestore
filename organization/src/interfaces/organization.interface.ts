export interface IOrganization {
    id: number;
    title: string;
    image: string;
    licenses: ILicense[];
}

export interface ILicense {
    id: number;
    title: string;
    inUse: number;
    assigned: number;
}

export interface IOrganizationRequestModel {
    img: string,
    values: IFormValues,
    organization?: IOrganization,
    id?: number
}

export interface IFormValues {
    title: string,
    tracking: string | number,
    protection: string | number
}
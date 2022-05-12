export interface IUser
{
    passwordHash: string;
    phoneNumber: string;
    id:number;
    userName: string;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    deliveryOptions:string;
    specificDays?:string;
}
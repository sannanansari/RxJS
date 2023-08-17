import { address } from "./address"
import { company } from "./company"

export interface users{
    id: number,
    name: string,
    username: string,
    email: string,
    address: address,
    phone: string,
    website: string,
    company: company
}


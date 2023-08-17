import { geoLocation } from "./geolocation";

export interface address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geoLocation
  }
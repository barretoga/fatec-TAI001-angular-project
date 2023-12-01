export interface IClientAddress {
  street: string,
  number: string,
  complement: string,
  neighborhood: string,
  city: string,
  state: string,
  zip_code: string
}

export interface IClient {
  id?: number,
  name: string,
  email: string,
  phone: string,
  address: IClientAddress
}

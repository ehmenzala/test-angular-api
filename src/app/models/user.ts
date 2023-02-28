interface Company {
  name: string
  catchPhrase: string
  bd: string
}

interface Geo {
  lat: string
  lng: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export default interface User {
  id: number
  name: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

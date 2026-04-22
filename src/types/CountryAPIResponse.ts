export type Root = Root2[]

export interface Root2 {
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  landlocked: boolean
  borders: string[]
  area: number
  maps: Maps
  population: number
  fifa: string
  car: Car
  timezones: string[]
  continents: string[]
  flag: string
  name: Name
  currencies: Currencies
  languages: Languages
  latlng: number[]
  demonyms: Demonyms
  translations: Translations
  gini: Gini
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode: PostalCode
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Car {
  signs: string[]
  side: string
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  nep: Nep
}

export interface Nep {
  official: string
  common: string
}

export interface Currencies {
  NPR: Npr
}

export interface Npr {
  symbol: string
  name: string
}

export interface Languages {
  nep: string
}

export interface Demonyms {
  eng: Eng
  fra: Fra
}

export interface Eng {
  f: string
  m: string
}

export interface Fra {
  f: string
  m: string
}

export interface Translations {
  ara: Ara
  bre: Bre
  ces: Ces
  cym: Cym
  deu: Deu
  est: Est
  fin: Fin
  fra: Fra2
  hrv: Hrv
  hun: Hun
  ind: Ind
  ita: Ita
  jpn: Jpn
  kor: Kor
  nld: Nld
  per: Per
  pol: Pol
  por: Por
  rus: Rus
  slk: Slk
  spa: Spa
  srp: Srp
  swe: Swe
  tur: Tur
  urd: Urd
  zho: Zho
}

export interface Ara {
  official: string
  common: string
}

export interface Bre {
  official: string
  common: string
}

export interface Ces {
  official: string
  common: string
}

export interface Cym {
  official: string
  common: string
}

export interface Deu {
  official: string
  common: string
}

export interface Est {
  official: string
  common: string
}

export interface Fin {
  official: string
  common: string
}

export interface Fra2 {
  official: string
  common: string
}

export interface Hrv {
  official: string
  common: string
}

export interface Hun {
  official: string
  common: string
}

export interface Ind {
  official: string
  common: string
}

export interface Ita {
  official: string
  common: string
}

export interface Jpn {
  official: string
  common: string
}

export interface Kor {
  official: string
  common: string
}

export interface Nld {
  official: string
  common: string
}

export interface Per {
  official: string
  common: string
}

export interface Pol {
  official: string
  common: string
}

export interface Por {
  official: string
  common: string
}

export interface Rus {
  official: string
  common: string
}

export interface Slk {
  official: string
  common: string
}

export interface Spa {
  official: string
  common: string
}

export interface Srp {
  official: string
  common: string
}

export interface Swe {
  official: string
  common: string
}

export interface Tur {
  official: string
  common: string
}

export interface Urd {
  official: string
  common: string
}

export interface Zho {
  official: string
  common: string
}

export interface Gini {
  "2010": number
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface CoatOfArms {
  png: string
  svg: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface PostalCode {
  format: string
  regex: string
}

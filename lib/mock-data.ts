export type InventoryLot = {
  id: string
  origin: string
  category: string
  sku: string
  quantity: number
  unit: string
  warehouse: string
  status: "Stored" | "In Transit" | "Reserved" | "Compliance Hold"
  temp: string
  humidity: string
}

export type Shipment = {
  id: string
  route: string
  carrier: string
  status: "Dispatched" | "In Transit" | "Delivered" | "Delayed"
  eta: string
  security: string
}

export type Partner = {
  name: string
  type: "Grower" | "Distributor" | "Retailer" | "Extractor" | "Transport"
  market: string
  volume: string
}

export const kpis = [
  { label: "Active Warehouses", value: "12", detail: "+3 this quarter" },
  { label: "Inventory Under Management", value: "$48.2M", detail: "Licensed + insured" },
  { label: "On-Time Shipments", value: "98.4%", detail: "Last 30 days" },
  { label: "Compliance Events", value: "0 critical", detail: "Live monitored" },
]

export const inventoryLots: InventoryLot[] = [
  {
    id: "LOT-48311",
    origin: "Salinas Valley",
    category: "Flower",
    sku: "CNX-FLW-01",
    quantity: 1240,
    unit: "lbs",
    warehouse: "Los Angeles Hub",
    status: "Stored",
    temp: "66°F",
    humidity: "58%",
  },
  {
    id: "LOT-48312",
    origin: "Santa Barbara",
    category: "Pre-Rolls",
    sku: "CNX-PRR-08",
    quantity: 18200,
    unit: "units",
    warehouse: "San Bernardino Hub",
    status: "Reserved",
    temp: "67°F",
    humidity: "55%",
  },
  {
    id: "LOT-48313",
    origin: "Oakland",
    category: "Extracts",
    sku: "CNX-EXT-12",
    quantity: 820,
    unit: "cases",
    warehouse: "Sacramento Hub",
    status: "In Transit",
    temp: "64°F",
    humidity: "52%",
  },
  {
    id: "LOT-48314",
    origin: "Monterey",
    category: "Edibles",
    sku: "CNX-EDB-19",
    quantity: 1260,
    unit: "cases",
    warehouse: "Los Angeles Hub",
    status: "Compliance Hold",
    temp: "68°F",
    humidity: "49%",
  },
]

export const shipments: Shipment[] = [
  {
    id: "SHP-10092",
    route: "Los Angeles → San Diego",
    carrier: "CNX Secure Fleet 04",
    status: "In Transit",
    eta: "1h 25m",
    security: "Dual-auth chain of custody",
  },
  {
    id: "SHP-10093",
    route: "Sacramento → San Jose",
    carrier: "CNX Secure Fleet 02",
    status: "Dispatched",
    eta: "3h 05m",
    security: "Vault-sealed transfer",
  },
  {
    id: "SHP-10094",
    route: "San Bernardino → West Hollywood",
    carrier: "CNX Secure Fleet 07",
    status: "Delivered",
    eta: "Completed",
    security: "Tamper verification logged",
  },
  {
    id: "SHP-10095",
    route: "Los Angeles → Palm Springs",
    carrier: "CNX Secure Fleet 09",
    status: "Delayed",
    eta: "Weather hold",
    security: "Escalation protocol active",
  },
]

export const partners: Partner[] = [
  { name: "Pacific Bloom Farms", type: "Grower", market: "Central Coast", volume: "$5.4M / yr" },
  { name: "Terrapoint Extraction", type: "Extractor", market: "Los Angeles", volume: "$3.1M / yr" },
  { name: "Velvet Shelf Collective", type: "Retailer", market: "West Hollywood", volume: "$7.8M / yr" },
  { name: "Highline Distribution", type: "Distributor", market: "Southern California", volume: "$12.6M / yr" },
  { name: "Atlas Secure Transit", type: "Transport", market: "California", volume: "24 routes / day" },
]

export const timeline = [
  {
    title: "Inbound intake completed",
    description: "2 new grower lots received into Los Angeles Hub with live sensor assignment and manifest validation.",
    time: "08:12",
  },
  {
    title: "Compliance check passed",
    description: "Transfer records reconciled with inventory counts and custody logs synced to operator dashboard.",
    time: "09:40",
  },
  {
    title: "Shipment exception detected",
    description: "Palm Springs route moved into delay monitoring after weather event. SLA response initiated automatically.",
    time: "11:03",
  },
  {
    title: "Retail fulfillment released",
    description: "West Hollywood allocation reserved and staged for same-day delivery window.",
    time: "12:18",
  },
]

export const intelligence = [
  {
    title: "Most constrained lane",
    value: "LA → Palm Springs",
    detail: "Delay risk elevated due to route volatility and limited secure transfer windows.",
  },
  {
    title: "Fastest growing category",
    value: "Pre-Rolls",
    detail: "+18.7% order velocity over 30 days across Southern California accounts.",
  },
  {
    title: "Best storage margin",
    value: "Extracts",
    detail: "Highest blended storage + handling contribution across current inventory mix.",
  },
]

export interface Space {
  id: number;
  name: string;
  type: string;
  capacity: number;
  location: string;
  pricePerHour: number;
  available: boolean;
}

export interface Reservation {
  id: number;
  spaceId: number;
  name: string;
  hours: number;
  total: number;
}
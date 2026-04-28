/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { Space, Reservation } from "../types";
import { spaInfo } from "../data/spaces";

interface AppContextType {
  spaces: Space[];
  reservations: Reservation[];
  filterType: string;
  filterAvailable: string;

  setFilterType: (type: string) => void;
  setFilterAvailable: (value: string) => void;

  reserveSpace: (spaceId: number, hours: number) => void;
  cancelReservation: (id: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: any) => {
  const [spaces, setSpaces] = useState<Space[]>(spaInfo);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [filterType, setFilterType] = useState<string>("");
  const [filterAvailable, setFilterAvailable] = useState<string>("");

  const reserveSpace = (spaceId: number, hours: number) => {
    const space = spaces.find(s => s.id == spaceId); 
    if (!space) return; 

    const newReservation: Reservation = {
      id: Date.now(),
      spaceId,
      name: space.name,
      hours,
      total: hours * space.pricePerHour,
    };

    setReservations([...reservations, newReservation]);
    setSpaces(spaces.map(s =>
      s.id === spaceId ? { ...s, available: false } : s
    ));
  };

  const cancelReservation = (id: number) => {
    const reservation = reservations.find(r => r.id === id);
    if (!reservation) return;

    setReservations(reservations.filter(r => r.id != id));

    setSpaces(spaces.map(s =>
      s.id === reservation.spaceId ? { ...s, available: true } : s
    ));
  };

  return (
    <AppContext.Provider value={{
      spaces,
      reservations,
      filterType,
      filterAvailable,
      setFilterType,
      setFilterAvailable,
      reserveSpace,
      cancelReservation,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("error");
};

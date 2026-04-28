import { useApp } from "../context/AppContext";
import { Summary } from "../components/Summary";

export const ReservationsPage = () => {
  const { reservations, cancelReservation } = useApp();

  return (
    <div>
      <h1>reservaciones</h1>

      {reservations.map((r) => (
        <div key={r.id}>
          <p>{r.name}</p>
          <p>horas por reservar{r.hours}</p>
          <p>total ${r.total}</p>

          <button onClick={() => cancelReservation(r.id)}>
            Cancelar
          </button>
        </div>
      ))}

      <Summary />
    </div>
  );
};
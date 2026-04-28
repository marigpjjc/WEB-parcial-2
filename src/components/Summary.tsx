import {useApp} from "../context/AppContext"

export const Summary = () => {
  const { spaces, reservations } = useApp();

  const totalSpaces = spaces.length;
  const available = spaces.filter((s) => s.available).length;
  const totalIncome = reservations.reduce(
    (acc, r) => acc + r.total,
    0
  );

  return (
    <div>
      <h2>resumen</h2>,
      <p>total espacios {totalSpaces}</p>,
      <p>disponibles {available}</p>,
      <p>reservas activas {reservations.length}</p>,
      <p>ingreso total generado ${totalIncome}</p>,
    </div>
  );
};

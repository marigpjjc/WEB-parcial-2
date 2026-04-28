import { Space } from "../types";
import { useApp } from "../context/AppContext";

export const SpaceCard = ({ space }: { space: Space }) => {
  const { reserveSpace } = useApp();

  return (
    <div style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
      <h3>{space.name}</h3>
      <p>tipo de espacio {space.type}</p>
      <p>capacidad {space.capacity}</p>
      <p>ubicacion {space.location}</p>
      <p>costo ${space.pricePerHour}</p>
      <p>{space.available ? "Disponible" : "No disponible"}</p>

      {space.available && (
        <button onClick={() => reserveSpace(space.id, 2)}>
          reservar (2h)
        </button>
      )}
    </div>
  );
};
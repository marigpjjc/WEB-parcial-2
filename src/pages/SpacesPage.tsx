import { useApp } from "../context/AppContext";
import { SpaceCard } from "../components/SpaceCard";
import { Filters } from "../components/Filters";

export const SpacesPage = () => {
  const { spaces, filterType, filterAvailable } = useApp();

  const filtered = spaces.filter((s) => {
    return (
      (filterType ? s.type === filterType : true) &&
      (filterAvailable
        ? String(s.available) === filterAvailable
        : true)
    );
  });

  return (
    <div>
      <h1>Espacios</h1>
      <Filters />

      {filtered.map((space) => (
        <SpaceCard key={space.id} space={space} />
      ))}
    </div>
  );
};
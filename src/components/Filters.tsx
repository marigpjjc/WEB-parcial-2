import { useApp } from "../context/AppContext";

export const Filters = () => {
  const { setFilterType, setFilterAvailable } = useApp();

  return (
    <div>
      <select onChange={(e) => setFilterType(e.target.value)}>
        <option value="">todos</option>
        <option value="meeting room">sala de reunion</option>
        <option value="private office">oficina privada</option>
      </select>

      <select onChange={(e) => setFilterAvailable(e.target.value)}>
        <option value="">todos</option>
        <option value="true">estan disponbibles</option>
        <option value="false">no estan disponibles</option>
      </select>
    </div>
  );
};
import { useQuery } from "react-query";
import { getLocations } from "../../services/locationService";

const useHome = () => {
  const {
    data: locations,
    isLoading,
    error,
    refetch,
  } = useQuery("home", () => getLocations());

  return { locations, isLoading, error, refetch };
};

export default useHome;

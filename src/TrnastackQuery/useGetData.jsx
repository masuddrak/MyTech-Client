import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetData() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get post"],
    queryFn: async () => {
      const data = await axios(`${import.meta.env.VITE_API_URL}/allpost`);
      return data?.data;
    },
  });
  return { data, isLoading, refetch };
}

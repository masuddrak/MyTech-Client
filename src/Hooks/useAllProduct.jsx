import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
const useAllProduct = () => {
    const { data: products = [],refetch,isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const { data } = await axios("http://localhost:5000/products")
            return data
        }
    })
    return {products,refetch,isLoading}
};

export default useAllProduct;
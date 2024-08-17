import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
const useAllProduct = (selectedPage, perpageItem,searchText) => {
    const { data: products = [],refetch,isLoading} = useQuery({
        queryKey: ["all-producs",selectedPage,perpageItem,searchText],
        queryFn: async () => {
            const { data } = await axios(`http://localhost:5000/products?page=${selectedPage}&size=${perpageItem}&searchText=${searchText}`)
            return data
        }
    })
    return {products,refetch,isLoading}
};

export default useAllProduct;
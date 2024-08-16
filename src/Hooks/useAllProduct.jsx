import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
const useAllProduct = (selectedPage, perpageItem) => {
    const { data: products = [],refetch,isLoading} = useQuery({
        queryKey: ["all-producs",selectedPage,perpageItem],
        queryFn: async () => {
            const { data } = await axios(`http://localhost:5000/products?page=${selectedPage}&size=${perpageItem}`)
            return data
        }
    })
    return {products,refetch,isLoading}
};

export default useAllProduct;
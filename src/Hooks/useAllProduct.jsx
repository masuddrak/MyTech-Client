import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
const useAllProduct = (selectedPage, perpageItem,searchText, maxPrice,
    minPrice,category,brand_name,sortPrice) => {
    const { data: products = [],refetch,isLoading} = useQuery({
        queryKey: ["all-producs",selectedPage,perpageItem,searchText, maxPrice,
            minPrice,category,brand_name,sortPrice],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/products?page=${selectedPage}&size=${perpageItem}&searchText=${searchText}&maxPrice=${maxPrice}&minPrice=${minPrice}&category=${category}&brand_name=${brand_name}&sortPrice=${sortPrice}`);
            return data
        }
    })
    return {products,refetch,isLoading}
};

export default useAllProduct;
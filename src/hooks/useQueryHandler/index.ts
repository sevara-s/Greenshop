import { useAxios } from "../useAxios";
import { useQuery } from "react-query";   

interface UseQueryType {
  pathname: string;
  url: string;
  params?: object;
}

const useQueryHandler = ({ pathname, url, params }: UseQueryType) => {
  const axios = useAxios();

  return useQuery([pathname, params], async () => {
    const { data } = await axios({ url, params });
    return data;
  });
};

export { useQueryHandler };

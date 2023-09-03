import { useQuery } from "@tanstack/react-query";
import { Excercise } from "../entitites/excercises";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Excercise[]>("/v1/exercises");

const useExcercises = (params?: { [key: string]: string }) =>
  useQuery({
    queryKey: ["exercises"],
    queryFn: () => apiClient.getSearch(params),
    staleTime: 1000,
  });

export default useExcercises;

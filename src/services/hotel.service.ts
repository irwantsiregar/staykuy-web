import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";

const hotelServices = {
  getHotels: (params?: string) => instance.get(`${endpoint.HOTEL}?${params}`),
};

export default hotelServices;

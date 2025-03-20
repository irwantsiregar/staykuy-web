import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";

const hotelServices = {
  getSearchHotels: (params?: Record<string, unknown>) =>
    instance.get(endpoint.SEARCH_HOTELS, {
      ...(!!params && { params }),
    }),
  getCities: () => instance.get(endpoint.CITIES),
};

export default hotelServices;

import SearchHotel from "@/components/views/Guest/SearchHotel";
import hotelServices from "@/services/hotel.service";
import { ICities } from "@/types/Hotel";

export type TSearchHotelProps = {
  cities: ICities[];
};

export default function GuestPage({ cities }: TSearchHotelProps) {
  return <SearchHotel cities={cities} />;
}

export async function getServerSideProps() {
  let Cities: ICities[] = [];

  try {
    const response = await hotelServices.getCities();

    Cities = response.data?.data || [];
  } catch {}

  return {
    props: {
      cities: Cities,
    },
  };
}

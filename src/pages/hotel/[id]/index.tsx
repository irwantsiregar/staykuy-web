import HotelDetail from "@/components/views/Guest/HotelDetail";
import hotelServices from "@/services/hotel.service";
import { NextPageContext } from "next";

export default function HotelDetailPage() {
  return <HotelDetail />;
}

export async function getServerSideProps(ctx: NextPageContext) {
  const { query } = ctx;

  try {
    const response = await hotelServices.getSearchHotels(query);
  } catch (error) {}

  return {
    props: {},
  };
}

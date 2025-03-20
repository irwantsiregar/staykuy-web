import Hotel from "@/components/views/Guest/Hotel";
import hotelServices from "@/services/hotel.service";
import { GlobalResponses } from "@/types/Hotel";
import { NextPageContext } from "next";

export type THotelsProps = {
  hotels: GlobalResponses;
};

export default function SearchPage({ hotels }: THotelsProps) {
  console.log(hotels);

  return <Hotel hotels={hotels} />;
}

export async function getServerSideProps(ctx: NextPageContext) {
  let Hotels: GlobalResponses | undefined;

  const { query } = ctx;

  try {
    const response = await hotelServices.getSearchHotels(query);

    Hotels = response.data?.data || null;
  } catch (error) {
    console.error((error as any)?.data?.errorMessage);
  }

  return {
    props: {
      hotels: Hotels,
    },
  };
}

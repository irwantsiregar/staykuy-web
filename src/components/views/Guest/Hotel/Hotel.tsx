import { FILTER_BY_FACILITY } from "@/constants/filter.constans";
import { THotelsProps } from "@/pages/hotel/search";
import type { SliderValue } from "@heroui/react";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Image,
  Slider,
} from "@heroui/react";
import NextImage from "next/image";
import React from "react";
import { FiMapPin } from "react-icons/fi";

function Hotel({ hotels }: THotelsProps) {
  const [valueSlider, setValueSlider] = React.useState<SliderValue>([100, 300]);

  return (
    <div className="h-full w-full overflow-y-hidden lg:w-[75rem] m-auto text-black01">
      <div className="h-auto w-auto py-10 flex flex-col items-center gap-y-16">
        <Card className="w-full" shadow="md">
          <CardBody className="p-6">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-y-4">
              <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-y-1">
                <div className="gap-3 px-8 py-2 lg:border-b-0 lg:border-r-1 border-[#404040]">
                  <p className="text-xs font-normal">
                    Kota/Nama Hotel/Destinasi
                  </p>

                  <p className="text-base font-semibold">Jakarta</p>
                </div>

                <div className="gap-3 px-8 py-2 lg:border-b-0 lg:border-r-1 border-[#404040]">
                  <p className="text-xs font-normal">Tanggal Menginap</p>

                  <p className="text-base font-semibold">
                    12 Mar - 14 Mar 2025
                  </p>
                </div>

                <div className="gap-3 px-8 py-2 lg:border-b-0 lg:border-r-1 border-[#404040]">
                  <p className="text-xs font-normal">Jumlah Tamu dan kamar</p>

                  <p className="text-base font-semibold">2 Tamu 2 Kama</p>
                </div>
              </div>

              <div className="w-full lg:w-auto">
                <Button color="primary" className="w-full text-xs font-bold">
                  Ubah Pencarian
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="w-full flex gap-10">
          {/* SIDE FILTER */}
          <div className="w-[25%]">
            <Card className="w-full shadow-medium">
              <CardBody className="p-6 gap-y-5">
                <p>Filter Pencarian</p>

                <div className="flex flex-col gap-y-4">
                  <div className="star pb-5 border-b-1 border-gray01">
                    <p className="pb-1 text-sm font-normal">Bintang Hotel</p>

                    <CheckboxGroup defaultValue={[]}>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Checkbox value={`${item}`}>
                          <div className="gap-2 flex">
                            {Array.from({ length: item }).map((_) => (
                              <NextImage
                                src="/images/hotels/star.svg"
                                alt="Star"
                                width={18}
                                height={18}
                              />
                            ))}
                          </div>
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </div>

                  <div className="facility pb-5 border-b-1 border-gray01">
                    <p className="pb-1 text-sm font-normal">Fasilitas</p>

                    <CheckboxGroup defaultValue={[]}>
                      {FILTER_BY_FACILITY.map((item) => (
                        <Checkbox value={item.value}>{item.label}</Checkbox>
                      ))}
                    </CheckboxGroup>
                  </div>

                  <div className="price pb-5">
                    <p className="pb-1 text-sm font-normal">Harga</p>

                    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
                      <Slider
                        className="max-w-md"
                        formatOptions={{ style: "currency", currency: "USD" }}
                        maxValue={100000000}
                        minValue={100000}
                        step={10}
                        value={valueSlider}
                        onChange={setValueSlider}
                      />

                      <div className="w-full flex justify-between text-black01 font-normal text-sm px-2">
                        {Array.isArray(valueSlider) &&
                          valueSlider.map((b) => <span>IDR: {b}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* LIST HOTEL */}
          <div className="w-[75%] gap-10">
            <div className="flex items-center gap-x-4">
              <p className="text-xl font-semibold">Hasil Pencarian</p>

              <span className="text-gray01 text-xs">
                {hotels?.total} Hotel Ditemukan
              </span>
            </div>

            <div className="hotel_card w-full py-4 gap-5">
              {hotels?.data?.map((hotel) => (
                <Card
                  isBlurred
                  className="border-none bg-background/60 dark:bg-default-100/50 w-full mb-4"
                  shadow="md"
                >
                  <CardBody className="p-0">
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-5 items-center justify-center">
                      <div className="relative first-letter:col-span-6 md:col-span-4">
                        <Image
                          alt="Image Hotel"
                          className="object-cover"
                          src="https://heroui.com/images/album-cover.png"
                          height={250}
                          width="100%"
                          shadow="md"
                        />
                      </div>

                      <div className="h-full first-line:flex flex-col col-span-6 md:col-span-8">
                        <div className="h-full py-5 pr-5 first-line:flex justify-between items-start">
                          <div className="flex flex-col gap-2.5">
                            <h3 className="font-semibold text-foreground/90 text-base text-black01">
                              {hotel.name}
                            </h3>

                            <div className="gap-2 flex">
                              {Array.from({ length: hotel.star }).map((_) => (
                                <NextImage
                                  src="/images/hotels/star.svg"
                                  alt="Star"
                                  width={18}
                                  height={18}
                                />
                              ))}
                            </div>

                            <div className="gap-2 flex items-center">
                              <FiMapPin className="text-red-600" size={22} />

                              <p className="text-xs text-black01 font-normal text-foreground/80">
                                {hotel.address}
                              </p>
                            </div>

                            <div className="gap-2 flex">
                              {FILTER_BY_FACILITY.map(
                                (item) =>
                                  !!item.iconName && (
                                    <NextImage
                                      src={`/images/hotels/${item.iconName}`}
                                      alt={item.label}
                                      width={24}
                                      height={24}
                                    />
                                  )
                              )}
                            </div>

                            <div className="gap-2 flex">
                              <div className="py-2 p-3 flex items-center bg-[#007ADE80] opacity-70 rounded-large">
                                <span className="text-xs text-white">
                                  Bisa Refund
                                </span>
                              </div>

                              <div className="py-2 p-3 flex items-center bg-[#007ADE80] opacity-70 rounded-large">
                                <span className="text-xs text-white ">
                                  Bisa Reschedule
                                </span>
                              </div>
                            </div>

                            <div className="w-full flex justify-end items-center">
                              <p className="text-[#007ADE] text-xl font-semibold">
                                IDR 9999999
                              </p>

                              <p className="text-black01 text-sm font-normal">
                                /malam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;

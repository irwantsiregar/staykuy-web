import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Tab,
  Tabs,
} from "@heroui/react";
import NextImage from "next/image";
import { FiMapPin } from "react-icons/fi";

let tabs = [
  {
    id: "about_hotel",
    label: "Tentang Hotel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "facility",
    label: "Fasilitas",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "bedroom",
    label: "Kamar",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "review",
    label: "Review",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function HotelDetail() {
  return (
    <div className="h-full w-full overflow-y-hidden lg:w-[75rem] m-auto text-black01">
      <div className="w-auto py-10 px-5 flex flex-col items-center gap-y-16">
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

        {/* DETAIL HOTEL */}
        <div className="w-full h-full flex flex-col gap-y-5">
          <div className="w-auto flex flex-col gap-y-1">
            <div className="flex items-center gap-x-5">
              <h1 className="text-2xl font-semibold text-black01">
                Hilton Garden Inn
              </h1>

              <div className="gap-2 flex">
                {Array.from({ length: 5 }).map((_) => (
                  <NextImage
                    src="/images/hotels/star.svg"
                    alt="Star"
                    width={18}
                    height={18}
                  />
                ))}
              </div>
            </div>

            <div className="gap-2 flex items-center">
              <FiMapPin className="text-red-600" size={22} />

              <p className="text-xs text-black01 font-normal text-foreground/80">
                Jl. Taman Palem Lestari No.1 Blok B13, West Cengkareng,
                Cengkareng, West Jakarta City, Jakarta 11730
              </p>
            </div>
          </div>

          <div className="images_hotel w-full flex flex-col md:flex-row items-center gap-5">
            <div className="w-full md:w-[60%]">
              <Card className="col-span-12 sm:col-span-4 h-[17.4rem]">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://heroui.com/images/card-example-4.jpeg"
                />
              </Card>
            </div>

            <div className="w-full md:w-[40%]">
              <div className="max-w-full gap-4 grid grid-cols-12 grid-rows-2">
                <Card className="col-span-12 md:col-span-6 h-[8.4rem]">
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://heroui.com/images/card-example-4.jpeg"
                  />
                </Card>

                <Card className="col-span-12 md:col-span-6 h-[8.4rem]">
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://heroui.com/images/card-example-4.jpeg"
                  />
                </Card>

                <Card className="col-span-12 md:col-span-6 h-[8.4rem]">
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://heroui.com/images/card-example-4.jpeg"
                  />
                </Card>

                <Card className="col-span-12 md:col-span-6 h-[8.4rem]">
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://heroui.com/images/card-example-4.jpeg"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Dynamic tabs"
              items={tabs}
              variant="underlined"
              color="primary"
              radius="sm"
            >
              {(item) => (
                <Tab key={item.id} title={item.label}>
                  <Card>
                    <CardBody>{item.content}</CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </div>

          {/* Tipe Kamar */}
          <div className="images_hotel gap-4 grid md:grid-flow-col grid-cols-2 md:grid-cols-4">
            <Card isPressable shadow="md" className="col-span-12 md:col-span-1">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt="Image"
                  className="w-full object-cover h-[140px]"
                  radius="lg"
                  shadow="sm"
                  src="https://heroui.com/images/fruit-4.jpeg"
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>Kamar Twinbed</b>

                <p className="text-default-500">
                  24m<sup>2</sup>
                </p>
              </CardFooter>
            </Card>

            <Card
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 w-full col-span-12 md:col-span-11"
              shadow="md"
            >
              <CardBody className="p-0">
                <div className="grid gap-6 md:gap-5 items-center">
                  <div className="h-full first-line:flex flex-col col-span-6 md:col-span-8">
                    <div className="h-full p-5 first-line:flex flex flex-col md:flex-row justify-between items-start">
                      <div className="w-full md:w-auto flex flex-col gap-2.5">
                        <h3 className="font-semibold text-foreground/90 text-base text-black01">
                          Hilton Garden Inn
                        </h3>

                        <div className="gap-2 flex">
                          {Array.from({ length: 5 }).map((_) => (
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
                            Jl. Taman Palem Lestari No.1 Blok B13, West
                            Cengkareng, Cengkareng, West Jakarta City, Jakarta
                            11730
                          </p>
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
                      </div>

                      <div className="w-full md:w-1/2 h-full flex flex-col gap-4 justify-end">
                        <div className="w-full flex justify-end items-center">
                          <p className="text-gray01 text-sm font-normal block">
                            IDR 9999999
                          </p>

                          <p className="text-[#007ADE] text-xl font-semibold">
                            IDR 9999999
                          </p>

                          <p className="text-black01 text-sm font-normal">
                            /malam
                          </p>
                        </div>

                        <div className="flex justify-end">
                          <Button
                            color="primary"
                            className="text-xs font-bold w-auto"
                          >
                            Pilih Kamar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

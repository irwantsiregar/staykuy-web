import React, { ChangeEvent, Fragment, useMemo, useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  CardBody,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Skeleton,
  DatePicker,
} from "@heroui/react";
import { FiMapPin } from "react-icons/fi";
import { TSearchHotelProps } from "@/pages/hotel";
import { DELAY } from "@/constants/limit.constants";
import useDebounce from "@/hooks/useDebounce";
import { CiSearch } from "react-icons/ci";
import { ICities } from "@/types/Hotel";
import { useRouter } from "next/router";

export default function SearchHotel({ cities }: TSearchHotelProps) {
  const [action, setAction] = useState<string | null>(null);
  console.info(action);

  const [searchCity, setSearchCity] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<ICities | null>(null);

  const router = useRouter();

  const debounce = useDebounce();

  const {
    isOpen: isOpenModalSearch,
    onOpen: onOpenModalSearch,
    onOpenChange: onOpenChangeModalSearch,
  } = useDisclosure();

  const citiesMemo = useMemo(() => {
    return cities.filter(
      (city) =>
        city.name.toLocaleLowerCase().includes(searchCity) ||
        city.country.toLocaleLowerCase().includes(searchCity)
    );
  }, [searchCity]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(() => {
      const value = e.target.value;

      setSearchCity(value?.trim()?.toLocaleLowerCase());
    }, DELAY);
  };

  const handleClearSearch = () => setSearchCity("");

  return (
    <div className="h-full w-full bg-[url('/images/hotels/hero-pattern.svg')] bg-cover bg-center bg-no-repeat bg-blend-darken">
      <div className="min-h-full w-auto flex flex-col justify-center items-center  gap-y-16">
        <div className="lg:max-w-[60.2rem]">
          <p className="text-white text-4xl font-semibold">
            Staycation menjadi lebih mudah hanya dengan satu klik dan dapatkan
            banyak promo menarik!
          </p>
        </div>

        <div className="lg:w-[75rem] flex flex-col justify-center items-center bg-white rounded-3xl p-6">
          <Form
            className="w-full gap-6"
            onReset={() => setAction("reset")}
            onSubmit={(e) => {
              e.preventDefault();

              const data = Object.fromEntries(new FormData(e.currentTarget));

              router.push({
                pathname: "/hotel/search",
                query: {
                  city_id: selectedCity?.id,
                  rooms_count: Number(data.rooms_count),
                  date: data.date as string,
                },
              });
            }}
          >
            <div className="w-full flex justify-center items-start gap-x-3">
              <Input
                value={selectedCity?.name}
                onClick={() => {
                  onOpenModalSearch();
                  setSearchCity("");
                }}
                name="city_name"
                labelPlacement="outside"
                errorMessage="Silahkan pilih kota/destinasi"
                placeholder="Pilih nama hotel/destinasi/kota menginap"
                label="Pilih Kota/Nama Hotel/ Destinasi"
                type="text"
                isReadOnly
                isRequired
              />

              <DatePicker
                isRequired
                label="Tanggal Menginap"
                labelPlacement="outside"
                errorMessage="Silahkan pilih tanggal menginap"
                name="date"
              />

              <Input
                name="rooms_count"
                labelPlacement="outside"
                placeholder="Masukkan jumlah tamu dan kamar"
                label="Jumlah tamu dan kamar"
                type="text"
                isRequired
                validate={(value) => {
                  if (!(Number(value) && value.length >= 1)) {
                    return "Silahkan masukkan angka dengan benar";
                  }

                  return null;
                }}
              />

              <Button
                color="primary"
                type="submit"
                className="text-xs font-bold mt-6"
              >
                Cari Hotel
              </Button>
            </div>
          </Form>

          {/* Modal Search */}
          <Modal
            hideCloseButton
            isOpen={isOpenModalSearch}
            placement="center"
            size="xl"
            onOpenChange={onOpenChangeModalSearch}
          >
            <ModalContent>
              {(onClose) => (
                <Fragment>
                  <ModalHeader className="flex flex-col gap-1 text-black01 text-xl mt-2">
                    Mau Nginep dimana ?
                  </ModalHeader>

                  <ModalBody className="-mt-2 gap-y-4">
                    <Card className="w-full" shadow="md" radius="sm">
                      <CardBody className="p-4">
                        <Input
                          isClearable
                          labelPlacement="outside"
                          placeholder="Pilih nama hotel/destinasi/kota menginap"
                          onChange={handleSearch}
                          onClear={handleClearSearch}
                          startContent={<CiSearch />}
                        />
                      </CardBody>
                    </Card>

                    <div className="w-full flex flex-col gap-y-4">
                      {!!searchCity &&
                        citiesMemo.map((city) => (
                          <Card
                            key={city.id}
                            isHoverable
                            shadow="sm"
                            className="w-full hover:cursor-pointer"
                          >
                            <CardBody
                              className="py-2 px-4 flex flex-row items-center gap-2"
                              onClick={() => {
                                setSelectedCity(city);
                                onClose();
                              }}
                            >
                              <FiMapPin className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground text-red-500" />

                              <div className="w-full">
                                <h3 className="font-medium text-md text-black01">
                                  {city.name}
                                </h3>

                                <p className="text-sm text-muted-foreground text-black01 text-opacity-90">
                                  {city.country}
                                </p>
                              </div>
                            </CardBody>
                          </Card>
                        ))}

                      {!citiesMemo.length &&
                        !searchCity &&
                        Array.from({ length: 2 }).map((_, i) => (
                          <Card shadow="sm" key={`${i + 1}`}>
                            <Skeleton className="rounded-lg">
                              <div className="min-h-16 max-h-24 rounded-lg bg-default-300" />
                            </Skeleton>
                          </Card>
                        ))}
                    </div>
                  </ModalBody>

                  <ModalFooter className="mb-2">
                    <Button
                      size="sm"
                      onPress={() => {
                        setSearchCity("");
                        onClose();
                      }}
                      className="text-black01 font-semibold"
                    >
                      Tutup
                    </Button>
                  </ModalFooter>
                </Fragment>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
}

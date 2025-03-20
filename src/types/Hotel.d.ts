interface IHotels {
  name: string;
}

interface ICities {
  id: number;
  name: string;
  country: string;
}

interface GlobalResponses {
  data: Record<string, unknown | any>[];
  page: number | string;
  total: number | string;
  page_size: number | string;
  total_pages: number | string;
}

// {
//   id: 1,
//   name: 'The Ritz-Carlton Jakarta, Pacific Place',
//   description: "Experience luxury redefined at The Ritz-Carlton Jakarta, Pacific Place. Located in the heart of Jakarta's bustling business district, this 5-star hotel offers unparalleled elegance and world-class service.",
//   address: 'Jl. Jend. Sudirman Kav. 52-53, SCBD, Jakarta',
//   latitude: -6.2241,
//   longitude: 106.8089,
//   star: 5,
//   city: [Object],Icities
//   facilities: [Array],
//   images: [Array],string
//   policy: 'Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out are subject to availability. No pets allowed except for service animals. Smoking is only permitted in designated areas.',
//   rooms: [Array]
// },

// Rooms[
//   {
//       "id": 55,
//       "name": "Superior Double Room",
//       "size": 28,
//       "facilities": [
//           "Air Conditioning",
//           "Flat-screen TV",
//           "Private Bathroom",
//           "Free WiFi",
//           "Mini Fridge"
//       ],
//       "images": [
//           "https://ota-gin.onrender.com/static/hotels/rooms/standard/superior-1.jpg",
//           "https://ota-gin.onrender.com/static/hotels/rooms/standard/superior-2.jpg"
//       ],
//       "is_breakfast_included": true,
//       "guest_capacity": 2,
//       "bed_type": "1 Double Bed",
//       "price": 850000,
//       "total_rooms": 10,
//       "available_rooms": 8
//   },
// ]

export type { IHotels, ICities, GlobalResponses };

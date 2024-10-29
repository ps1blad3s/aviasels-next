import { FlightCardProps } from "@/components/flightCard/FlightCard";

export const flightCards: FlightCardProps[] = [
    {
        price: "5 613₽",
        baggagePrice: "11 950 ₽ c багажом 1×10 кг",
        routes: [
            {
                duration: "1ч23м в пути",
                departure: {
                    time: "19:50",
                    city: "Самара",
                    date: "14 ноя, вт",
                    airportCode: "KUF"
                },
                arrival: {
                    time: "21:13",
                    city: "Казань",
                    date: "14 ноя, вт",
                    airportCode: "AUR"
                }
            },
            {
                duration: "1ч23м в пути",
                departure: {
                    time: "19:50",
                    city: "Самара",
                    date: "14 ноя, вт",
                    airportCode: "KUF"
                },
                arrival: {
                    time: "21:13",
                    city: "Казань",
                    date: "14 ноя, вт",
                    airportCode: "AUR"
                }
            }
        ]
    },
    {
        price: "7 245₽",
        baggagePrice: "13 590 ₽ c багажом 1×10 кг",
        routes: [
            {
                duration: "2ч15м в пути",
                departure: {
                    time: "08:30",
                    city: "Москва",
                    date: "15 ноя, ср",
                    airportCode: "SVO"
                },
                arrival: {
                    time: "10:45",
                    city: "Казань",
                    date: "15 ноя, ср",
                    airportCode: "LED"
                }
            }
        ]
    },
    {
        price: "8 990₽",
        baggagePrice: "15 780 ₽ c багажом 1×10 кг",
        routes: [
            {
                duration: "1ч45м в пути",
                departure: {
                    time: "14:20",
                    city: "Екатеринбург",
                    date: "16 ноя, чт",
                    airportCode: "SVX"
                },
                arrival: {
                    time: "16:05",
                    city: "Казань",
                    date: "16 ноя, чт",
                    airportCode: "KZN"
                }
            }
        ]
    }
];

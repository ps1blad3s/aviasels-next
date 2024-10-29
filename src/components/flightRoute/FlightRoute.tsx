
import * as React from 'react';
import { FlightSegment, FlightSegmentProps } from "@/components/flightSegment/FlightSegment";

export type FlightRouteProps = {
    duration: string;
    departure: FlightSegmentProps;
    arrival: FlightSegmentProps;
};

export function FlightRoute({ duration, departure, arrival }: FlightRouteProps) {
    return (
        <section className="flex overflow-hidden flex-wrap gap-6 justify-between items-start py-2 mt-1 w-full text-center">
            <img
                src={'https://img.avs.io/pics/al_square/WZ@avif?rs=fit:120:120'}
                alt=""
                className="object-contain shrink-0 w-7 rounded-full"
            />
            <div className="flex gap-9 justify-between items-start">
                <FlightSegment {...departure} />
                <div className="flex overflow-hidden flex-col min-h-[65px]">
                    <div className="flex overflow-hidden gap-10 justify-between items-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/1e345aa14a984e489cf3a62f18e0e5cd/af640d2964e83b91510de9310c8c7e09dd64477250d2f67ed7a709e48a0f4718?apiKey=1e345aa14a984e489cf3a62f18e0e5cd&"
                            alt=""
                            className="object-contain shrink-0 w-4 aspect-square"
                        />
                        <p>{duration}</p>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/1e345aa14a984e489cf3a62f18e0e5cd/af640d2964e83b91510de9310c8c7e09dd64477250d2f67ed7a709e48a0f4718?apiKey=1e345aa14a984e489cf3a62f18e0e5cd&"
                            alt=""
                            className="object-contain shrink-0 w-4 aspect-square"
                        />
                    </div>
                    <div className="flex mt-2.5 w-full bg-gray-200 min-h-[3px] rounded-full" />
                    <div className="justify-between flex">
                        <p className="text-xs font-semibold text-blue-600">{departure.airportCode}</p>
                        <p className="text-xs font-semibold text-blue-600">{arrival.airportCode}</p>
                    </div>
                </div>
                <FlightSegment {...arrival} isArrival />
            </div>
        </section>
    );
}

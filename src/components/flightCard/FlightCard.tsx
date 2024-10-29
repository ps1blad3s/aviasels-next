import * as React from 'react';
import { FlightRoute, FlightRouteProps } from "@/components/flightRoute/FlightRoute";

export type FlightCardProps = {
    price: string;
    baggagePrice: string;
    routes: FlightRouteProps[];
};

export function FlightCard({ price, baggagePrice, routes }: FlightCardProps) {
    return (
        <article className="flex flex-col justify-between py-4 pr-4 pl-4 mt-5 w-full rounded-3xl">
            <header className="flex overflow-hidden gap-2 justify-between items-center max-w-full text-2xl font-medium text-black">
                <p className="self-stretch my-auto">{price}</p>
                <div className='flex flex-row'>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/1e345aa14a984e489cf3a62f18e0e5cd/f467ecb813d264ed13b2c9c2f876d7cef6c640a00ff461e960b515c015b3ea35?apiKey=1e345aa14a984e489cf3a62f18e0e5cd&"
                    alt=""
                    className="mr-3 object-contain shrink-0 w-11 aspect-square"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/1e345aa14a984e489cf3a62f18e0e5cd/aaa3b8b0d964e7a9e67fe526b18d19cdcc0ac597b8b77ebac62aac4105e8a0cf?apiKey=1e345aa14a984e489cf3a62f18e0e5cd&"
                    alt=""
                    className="object-contain shrink-0 w-11 aspect-square"
                />
                </div>
            </header>
            <div className="flex flex-col mt-1 text-sm font-medium leading-none text-center text-gray-900">
                <p className="px-2 flex py-0.5 w-[max-content] bg-gray-100 rounded-2xl">{baggagePrice}</p>
            </div>
            {routes.map((route, index) => (
                <FlightRoute key={index} {...route} />
            ))}
        </article>
    );
}

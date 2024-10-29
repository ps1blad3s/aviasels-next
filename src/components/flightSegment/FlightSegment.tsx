import React from "react";


export type FlightSegmentProps = {
    time: string;
    city: string;
    date: string;
    airportCode: string;
    isArrival?: boolean;
};

export function FlightSegment({ time, city, date, isArrival }: FlightSegmentProps) {
    return (
        <div
            className={`flex flex-col justify-between ${isArrival ? 'items-end' : 'items-start'} text-sm w-[104px]`}
        >
            <time className="text-2xl font-semibold text-black">{time}</time>
            <p className="line-clamp-1">{city}</p>
            <time dateTime={date}>{date}</time>
        </div>
    );
}
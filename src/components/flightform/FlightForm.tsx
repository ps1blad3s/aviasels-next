"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.scss";

const FlightForm: React.FC = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [flightClass, setFlightClass] = useState("economy");
  const [passengers, setPassengers] = useState<number>(1);

  const flightClassOptions = [
    { value: "economy", label: "Эконом" },
    { value: "business", label: "Бизнес" },
    { value: "first", label: "Первый класс" },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const passengerOptions = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <>
      <div className={styles.headingText}>
        Дешевые билеты на поезда по всей России!
      </div>
      <form onSubmit={handleSubmit} className={styles.flightForm}>
        <div className={styles.inputBlock}>
          <input
            className={styles.fromCity}
            type="text"
            placeholder="Откуда"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          />
        </div>
        <div className={styles.inputBlock}>
          <input
            type="text"
            placeholder="Куда"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          />
        </div>
        <div className={styles.inputBlock}>
          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Когда"
          />
        </div>
        <div className={styles.inputBlock}>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Обратно"
          />
        </div>
        <div className={styles.selectBlock}>
          <select
            className={styles.flightClass}
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
          >
            {flightClassOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            className={styles.passengersBlock}
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
          >
            {passengerOptions.map((value) => (
              <option key={value} value={value}>
                {`${value} пассажир`}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.buttonBlock}>
          <button type="submit">Найти билеты</button>
        </div>
      </form>
    </>
  );
};

export default FlightForm;

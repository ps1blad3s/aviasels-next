import Header from "@/components/header/Header";
import FlightForm from "@/components/flightform/FlightForm";
import styles from "./styles.module.scss";
import { FlightCard } from "@/components/flightCard/FlightCard";
import { flightCards } from "@/data/flights";

const HomePage: React.FC = () => {
  return (
    <>
      <div className={styles.backgroundContainer}>
        <Header />
        <div style={{ padding: "20px" }}>
          <FlightForm />
        </div>
        <div className={styles.container}>
            <div className={styles.headingText}>
                Горячие билеты
            </div>
          {flightCards.map((cardProps, index) => (
            <>
              <div className={styles.flightCard}>
                <FlightCard key={index} {...cardProps} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

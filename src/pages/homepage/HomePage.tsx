import Header from "@/components/header/Header";
import FlightForm from "@/components/flightform/FlightForm";
import styles from "./styles.module.scss";
const HomePage: React.FC = () => {
  return (
    <>
      <div className={styles.backgroundContainer}>
        <Header />

        <div style={{ padding: "20px" }}>
          <FlightForm />
        </div>
      </div>
    </>
  );
};

export default HomePage;

import Logo from "@/components/header/assets/logo-header.svg";
import ProfileIcon from "@/components/header/assets/profile-icon.svg";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerContainerLogo}>
          <div className={styles.headerLogoIcon}>
            <Logo width={40} height={40} />
          </div>
          <div className={styles.headerLogoText}>Fast Travel</div>
        </div>
        <div className={styles.headerContainerProfile}>
          <div className={styles.headerProfileIcon}>
            <ProfileIcon width={20} height={20} />
          </div>
          <div className={styles.headerProfileText}>Профиль</div>
        </div>
      </div>
    </>
  );
};

export default Header;

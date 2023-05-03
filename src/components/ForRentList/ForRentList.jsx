import styles from "./index.module.scss";
import Property from "../Property";

const ForRentList = ({ propertiesForRent }) => {
  return (
    <div className={styles.ForRentList}>
      {propertiesForRent.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </div>
  );
};

export default ForRentList;

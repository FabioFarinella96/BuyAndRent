import styles from "./index.module.scss";
import Property from "../Property";

const ForSaleList = ({ propertiesForSale }) => {
  return (
    <div className={styles.ForSaleList}>
      {propertiesForSale.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </div>
  );
};

export default ForSaleList;

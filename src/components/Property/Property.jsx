import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import DefaultImage from "@/assets/images/house.jpg";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

const Property = ({
  property: { title, coverPhoto, rentFrequency, price, rooms, baths, agency },
}) => {
  return (
    <div className={styles.Property}>
      <Image
        className={styles.image}
        src={coverPhoto ? coverPhoto.url : DefaultImage}
        width={400}
        height={250}
        alt="house"
      />
      <h4 className={styles.title}>
        <GoVerified className={styles.verifiedIcon} />
        {title.length > 30 ? `${title.substring(0, 25)}...` : title}
      </h4>
      <div className={styles.downSection}>
        <p>
          AED {millify(price)}
          {rentFrequency && `/${rentFrequency}`}
        </p>
        <p>
          {rooms} | <FaBed />
        </p>
        <p>
          {baths} | <FaBath />
        </p>
        <p>
          sqft <BsGridFill />
        </p>
        <Image
          className={styles.logo}
          src={agency?.logo?.url}
          width={50}
          height={50}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Property;

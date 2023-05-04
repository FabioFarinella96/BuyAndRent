import { fetchApi, baseUrl } from "@/utils/fetchApi";
import { GoVerified } from "react-icons/go";
import styles from "@/styles/resort.module.scss";
import Image from "next/image";
import { useState } from "react";

// Layout
import Layout from "@/src/layout";

export default function Search({ properties }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setIsOpenPopUp(true);

    setTimeout(() => {
      setIsOpenPopUp(false);
    }, 3000);
  };

  return (
    <>
      <Layout>
        <main className={styles.resort}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.logo}
                src={properties.agency?.logo?.url}
                width={45}
                height={45}
                alt="logo"
              />
              <Image
                className={styles.image}
                src={properties.coverPhoto?.url}
                width={300}
                height={300}
                alt="image"
              />
            </div>
            <h2>
              {properties.location[1]?.name} {properties.location[1]?.name_l1}
            </h2>
            <p>{properties.contactName}</p>
            <p>{properties.agency?.name}</p>
          </div>

          <form onSubmit={onHandleSubmit} className={styles.form}>
            <h2>Contact us</h2>
            <label htmlFor="text">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              type="text"
              required
            />
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className={styles.input}
              required
            />

            <input className={styles.button} type="submit" value="Send" />
            {isOpenPopUp && (
              <div className={styles.popUp}>
                <p>
                  Thank you for your request! <br />
                  We will contact you as soon as possible!
                </p>
                <GoVerified className={styles.icon} />
              </div>
            )}
          </form>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const externalID = "4937770";

  const data = await fetchApi(
    `${baseUrl}/properties/detail?externalID=${externalID}`
  );

  return {
    props: {
      properties: data,
    },
  };
}

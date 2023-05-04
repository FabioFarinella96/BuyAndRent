import { fetchApi, baseUrl } from "@/utils/fetchApi";
import styles from "@/styles/info.module.scss";
import Image from "next/image";
import Link from "next/link";

// Layout
import Layout from "@/src/layout";

export default function Search({ properties }) {
  return (
    <>
      <Layout>
        <main className={styles.Info}>
          <div className={styles.textSection}>
            <h1>{properties.title}</h1>
            <p>{properties.description}</p>
          </div>
          <h3>Available resorts</h3>
          <div className={styles.images}>
            <Link href="/resort">
              <p className={styles.text1}>Build this Resort</p>
            </Link>
            <Image
              className={styles.image}
              src={properties.photos[2]?.url}
              width={300}
              height={300}
              alt="image"
            />
          </div>
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

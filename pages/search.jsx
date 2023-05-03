import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "@/src/components/Property";
import { Flex, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

// Layout
import Layout from "@/src/layout";

export default function Search({ properties }) {
  const router = useRouter();

  return (
    <>
      <Layout>
        <main>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Text fontSize="1.8em" p="4" fontWeight="bold" margin="20px 0">
              Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap" justifyContent="space-around" gap="40px">
              {properties.map((property) => (
                <Property property={property} key={property.id} />
              ))}
            </Flex>
          </Box>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose;

  const locationExternalIDs = "5002";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

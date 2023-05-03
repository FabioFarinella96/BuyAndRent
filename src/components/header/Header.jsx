import styles from "./index.module.scss";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Flex
        p="2"
        borderBottom="1px solid rgb(183, 183, 183) "
        borderColor="gray.100"
      >
        <Box fontSize="3xl" color="blue.400" fontWeight="bold" marginTop="20px">
          <Link className={styles.title} href="/">
            Buy&Rent
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outline"
              color="red.400"
              marginTop="30px"
              marginBottom="20px"
              fontSize="30px"
              border="0"
              cursor="pointer"
            />
            <MenuList border="1px solid grey" padding="10px">
              <Link className={styles.menuItem} href="/" passHref>
                <MenuItem
                  padding="5px 8px"
                  fontSize="20px"
                  color="black"
                  cursor="pointer"
                  border="0"
                  icon={<FcHome />}
                >
                  Home
                </MenuItem>
              </Link>
              <Link
                className={styles.menuItem}
                href="/search?purpose=for-sale"
                passHref
              >
                <MenuItem
                  padding="5px 8px"
                  fontSize="20px"
                  color="black"
                  icon={<FcAbout />}
                  cursor="pointer"
                  border="0"
                >
                  Buy Property
                </MenuItem>
              </Link>
              <Link
                className={styles.menuItem}
                href="/search?purpose=for-rent"
                passHref
              >
                <MenuItem
                  padding="5px 8px"
                  fontSize="20px"
                  color="black"
                  cursor="pointer"
                  border="0"
                  icon={<FiKey />}
                >
                  Rent Property
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </div>
  );
};

export default Header;

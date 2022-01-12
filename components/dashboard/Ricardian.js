import { useState, useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { Text, HStack, Link, Icon, UnorderedList, ListItem } from "@chakra-ui/react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { PDFDownloadLink } from "@react-pdf/renderer"
import RicardianTemplate from "../../legal/formation/llc/series/RicardianTemplate"


export default function Ricardian() {
  const value = useContext(AppContext);
  const { dao } = value.state;
  const [isClient, setIsClient] = useState(false)
  const [ricardianId, setRicardianId] = useState(0)

  useEffect(() => {
    setIsClient(true)
    setRicardianId(dao["ricardian"]["series"])
  }, [])
  
  return (
    <>
      {dao["ricardian"] == null ? (
        "None"
      ) : (
        <UnorderedList>
          <ListItem>
            Name: Ricardian LLC, {dao["ricardian"]["series"]} Series
          </ListItem>
          <ListItem>
            <Text>Common URI: </Text>
            <Link passHref href={dao["ricardian"]["commonURI"]}>
              <Icon as={BsFillArrowUpRightSquareFill} />
            </Link>
          </ListItem>
          <ListItem>
            <Text>Master Operating Agreement: </Text>
            <Link passHref href={dao["ricardian"]["masterOperatingAgreement"]}>
              <Icon as={BsFillArrowUpRightSquareFill} />
            </Link>
          </ListItem>
          {isClient && (
            <PDFDownloadLink
              document={<RicardianTemplate ricardianId={ricardianId} />}
              fileName="FORM"
            >
              {({ loading }) =>
                loading ? (
                  <button>Loading Document...</button>
                ) : (
                  <button>Download</button>
                )
              }
            </PDFDownloadLink>
          )}
        </UnorderedList>
      )}
    </>
  )
}

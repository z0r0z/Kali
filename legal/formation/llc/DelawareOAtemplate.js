import React from "react"
import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer"

Font.register({
  family: "Times-New-Roman",
  fonts: [
    {
      src: "../../../../public/fonts/Times-New-Roman/Times-New-Roman.ttf",
    },
    {
      src: `../../../../public/fonts/Times-New-Roman/Times-New-Roman-Bold.ttf`,
      fontWeight: "bold",
    },
    {
      src: `../../../../public/fonts/Times-New-Roman/Times-New-Roman-Italic.ttf`,
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      src: `../../../../public/fonts/Times-New-Roman/Times-New-Roman-BoldItalic.ttf`,
      fontWeight: "bold",
      fontStyle: "italic",
    },
  ],
})

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 60,
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "Times-Roman",
  },
  heading1: {
    fontSize: 12,
    textAlign: "center",
    textDecoration: "underline",
    textTransform: "capitalize",
    fontFamily: "Times-Roman",
  },
  heading2: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  subheader: {
    fontSize: 12,
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "Times-Roman",
  },
  text: {
    margin: 12,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  numbered_list: {
    margin: 12,
    fontSize: 12,
    textIndent: 30,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  bulleted_list: {
    fontSize: 12,
    marginBottom: 12,
    textIndent: 30,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 10,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
})

const Br = () => "\n"
const Indent = () => "   "

const DelawareLLCtemplate = ({ ricardianId }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.heading1}>DAO LLC OPERATING AGREEMENT</Text>
        <Text style={styles.subheader}>
          SEPARATE SERIES OPERATING AGREEMENT
        </Text>
        <Text style={styles.title}>Richardian LLC, <Br /> {ricardianId} Series</Text>
        <Text style={styles.heading2}>
          {DAO LLC Name} LLC
        </Text>
        <Text style={styles.heading2}>
          A Member-Managed DAO LLC
        </Text>
        <Text style={styles.heading2}>
          DELAWARE LLC OPERATING AGREEMENT
        </Text>
        <Text style={styles.heading3}>
          Designated Blockchain: {Designated Blockchain}
        </Text>
        <Text style={styles.text}>
          THIS OPERATING AGREEMENT** is made and entered into effective {DAO LLC Formation Date}, 
          by and among the parties assigned cryptographic interests in the decentralized autonomous organization 
          described on <Text style={{ textDecoration: "underline" }}>Schedule 1</Text>
          (collectively referred to in this agreement as the "Members")
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  )
}

export default DelawareLLCtemplate

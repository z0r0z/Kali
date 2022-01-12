import React from 'react'
import {Page, Text, Document, StyleSheet, Font} from '@react-pdf/renderer'

// Font.register({
//   family: "Times-New-Roman",
//   fonts: [
//     {
//       src: TimesNewRoman,
//     },
//     {
//       src: `/Times-New-Roman-Bold.ttf`,
//       fontWeight: "bold",
//     },
//     {
//       src: `/Times-New-Roman-Italic.ttf`,
//       fontWeight: "normal",
//       fontStyle: "italic",
//     },
//     {
//       src: `/Times-New-Roman-BoldItalic.ttf`,
//       fontWeight: "bold",
//       fontStyle: "italic",
//     },
//   ],
// })

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "Times-Roman",
  },
  header1: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  text_enumeration: {
    margin: 24,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
})

const RicardianTemplate = ({ series }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header1}>SCHEDULE C</Text>
        <Text style={styles.header1}>SEPARATE SERIES OPERATING AGREEMENT</Text>
        <Text style={styles.title}>
          Richardian LLC, <br />
          {series} Series
        </Text>
        <Text style={styles.text}>
          Delaware Limited Liability Company Agreement
        </Text>
        <Text style={styles.text}>
          0x43B644a01d87025c9046F12eE4cdeC7E04258eBf
        </Text>
        <Text style={styles.text}>
          THIS LIMITED LIABILITY COMPANY AGREEMENT (this “Agreement”) of
          Ricardian LLC, a Delaware limited liability company (the “Company”),
          is effective as of February 1, 2021 (the “Effective Date”), by LexDAO
          LLC, Ricardian Series, a Delaware limited liability company (referred
          to herein as “LexDAO” or the “Member”) as the initial member of the
          Company.
        </Text>
        <Text style={styles.header1}>RECITALS</Text>
        <Text style={styles.text_enumeration}>
          A.     The Company has been organized as a separate Series of the Master
          LLC in accordance with the Delaware Limited Liability Company Act, 6
          Del. C. Section 18-101, et seq. (as amended from time to time, the
          “Act”).
        </Text>
      </Page>
    </Document>
  )
}

export default RicardianTemplate;
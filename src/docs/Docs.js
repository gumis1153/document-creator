import React from 'react';
import ReactDOM from 'react-dom';
import PersonalDataDocs from '../docs/PersonalDataDocs';
import Contract from '../docs/Contract';
import { PDFViewer, Document, StyleSheet, Font } from '@react-pdf/renderer';
import fontSrc from '../fonts/Montserrat-Regular.ttf';
import fontSrcBold from '../fonts/Montserrat-Bold.ttf';

Font.register({
  family: 'Montserrat',
  fonts: [
    { src: fontSrc }, // font-style: normal, font-weight: normal
    { src: fontSrcBold, fontStyle: 'bold', fontWeight: 700 },
  ],
});

// Create styles
const styles = StyleSheet.create({
  //Header
  // @@@@@@@@@@@@@@@@@@@@@
  body: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    fontFamily: 'Montserrat',
  },

  sectionHeader: {
    height: 90,
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10% 10% 5% 10%',
  },

  info: {
    fontSize: 10,
  },

  content: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10% 0 10%',
  },

  clientData: {
    marginBottom: 5,
  },

  infoBig: {
    fontStyle: 'bold',
  },

  logo: {
    fontSize: 24,
    fontStyle: 'bold',
    textTransform: 'uppercase',
    color: '#00366f',
  },

  // @@@@@@@@@@@@@

  sectionText: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    fontSize: 11,
    margin: '15 15 0 15',
  },

  textHeader: {
    textAlign: 'center',
    fontStyle: 'bold',
  },

  checkbox: {
    display: 'flex',
    width: '16pt',
    height: '16pt',
    backgroundColor: 'red',
  },
  space: {
    height: 100,
  },

  sign: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  signText: {
    fontSize: 8,
    lineHeight: '2pt',
  },

  // contractText: {
  //   fontSize: 8,
  // },
});

const AppDocs = () => (
  <PDFViewer width="100%" height="100%">
    <Document title="nazwaDokumentu">
      <PersonalDataDocs styles={styles} />
      <Contract styles={styles} />
    </Document>
  </PDFViewer>
);

export default AppDocs;

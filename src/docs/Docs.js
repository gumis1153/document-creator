import React from 'react';
import ReactDOM from 'react-dom';
import PersonalDataDocs from '../docs/PersonalDataDocs';
import Contract from '../docs/Contract';
import MontageProtocol from '../docs/MontageProtocol';
import { PDFViewer, Document, StyleSheet, Font } from '@react-pdf/renderer';
import fontSrc from '../fonts/Montserrat-Regular.ttf';
import fontSrcBold from '../fonts/Montserrat-Bold.ttf';

Font.register({
  family: 'Montserrat',
  fonts: [{ src: fontSrc }, { src: fontSrcBold, fontStyle: 'bold', fontWeight: 700 }],
});

// Create styles
const styles = StyleSheet.create({
  //Header
  // @@@@@@@@@@@@@@@@@@@@@
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    fontFamily: 'Montserrat',
  },

  sectionHeader: {
    height: 70,
    width: '86%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '6% 7% 0% 7%',
  },

  info: {
    fontSize: 9,
  },

  protocolInfo: {
    fontSize: 11,
    marginTop: '10',
    lineHeight: 2,
  },

  content: {
    width: '86%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 7% 0 7%',
    textAlign: 'justify',
  },

  contentMontage: {
    width: '86%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 7% 0 7%',
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
    fontSize: 10,
    margin: '15 15 0 15',
  },

  textHeader: {
    textAlign: 'center',
    fontStyle: 'bold',
    margin: '0 15 0 15',
  },

  textHeaderProtocol: {
    width: '100%',
    textAlign: 'center',
    fontStyle: 'bold',
    fontSize: 10,
    margin: '0 15 15 15',
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

  signContainer: {
    width: '86%',
    height: 150,
    margin: '6% 7% 0% 7%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontStyle: 'bold',
  },
});

const AppDocs = ({ client }) => {
  console.log(client);
  return (
    <PDFViewer width="100%" height="100%">
      <Document title="nazwaDokumentu">
        <PersonalDataDocs styles={styles} client={client} />
        <Contract styles={styles} client={client} />
        <MontageProtocol styles={styles} />
      </Document>
    </PDFViewer>
  );
};

export default AppDocs;

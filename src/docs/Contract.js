import React from 'react';
import { Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import fontSrc from '../fonts/Montserrat-Regular.ttf';
import fontSrcBold from '../fonts/Montserrat-Bold.ttf';
import checkbox from '../assets/images/checkbox.png';

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
    // margin: '10 5 0 5',
    // padding: '5 10 0 10',
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
  },
});

class PersonalDataDoc extends React.Component {
  state = {
    numPages: null,
    fileObject: { url: 'http://www.example.com/pdf-test/pdf' },
  };

  render() {
    return (
      <Page size="A4" style={styles.body}>
        <View style={styles.sectionHeader}>
          <View style={styles.info}>
            <Text>64-100 Leszno</Text>
            <Text>ul. Chociszewskiego 37a</Text>
            <Text>REGIO: 410087794</Text>
            <Text>NIP: 697-111-81-15</Text>
            <Text style={styles.infoBig}>tel./fax. 65 529 61 09</Text>
            <Text style={styles.infoBig}>Mail: biuro@bramgaz.pl</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.logo}>Bramgaz</Text>
          </View>
        </View>
        <View style={styles.content}></View>
      </Page>
    );
  }
}

export default PersonalDataDoc;

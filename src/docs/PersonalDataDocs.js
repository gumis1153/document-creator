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

const PersonalDataDoc = ({ styles }) => {
  const {
    body,
    sectionHeader,
    info,
    infoBig,
    section,
    logo,
    content,
    sectionText,
    textHeader,
    clientData,
    text,
    conditions,
    space,
    sign,
    signText,
  } = styles;
  return (
    <Page size="A4" style={body}>
      <View style={sectionHeader}>
        <View style={info}>
          <Text>00-000 Leszno</Text>
          <Text>ul. Ulicowa 0/2</Text>
          <Text>REGIO: 098765432</Text>
          <Text>NIP: 000-000-00-00</Text>
          <Text style={infoBig}>tel./fax. 12 345 67 89</Text>
          <Text style={infoBig}>Mail: biuro@biuro.pl</Text>
        </View>
        <View style={section}>
          <Text style={logo}>FajnaFirma</Text>
        </View>
      </View>
      <View style={content}>
        <View style={sectionText}>
          <Text style={textHeader}>Zgoda na przetwarzanie danych osobowych</Text>
        </View>
        <View style={sectionText}>
          <Text style={clientData}>Imię i nazwisko:</Text>
          <Text style={clientData}>Miejscowość:</Text>
          <Text style={clientData}>Ulica:</Text>
          <Text style={clientData}>Telefon:</Text>
        </View>
        <View style={sectionText}>
          <Text style={text}>
            Zostałem zapoznany z informacjami o przetwarzaniu danych osobowych (RODO).
          </Text>
        </View>
        <View style={sectionText}>
          <Text style={text}>Wyrażam zgodę na przetwarzanie danych osobowych w celu:</Text>
        </View>
        <View style={sectionText}>
          <Text style={conditions}>
            <Image src={checkbox} /> zawarcia umowy na świadczenie usług i sprzedaż produktów oraz w
            celu prawidłowych rozliczeń po jej zakończeniu (podstawa prawna art. 6 ust. 1 b RODO),
          </Text>
        </View>
        <View style={sectionText}>
          <Text style={conditions}>
            <Image src={checkbox} /> wykonania ciążących na firmie BRAMGAZ obowiązków prawnych np.
            przyszłe postępowanie uprawnionych organów (podstawa prawna art. 6 ust. 1 c RODO),
          </Text>
        </View>
        <View style={sectionText}>
          <Text style={conditions}>
            <Image src={checkbox} /> na wykonanie wszelkich czynności związanych z wykonaniem
            zleconych usług oraz w celu prawidłowych rozliczeń po ich zrealizowaniu (podstawa prawna
            art. 6 ust. 1 b RODO),
          </Text>
        </View>
        <View style={sectionText}>
          <Text style={conditions}>
            <Image src={checkbox} /> na wykonanie wszelkich czynności związanych z wykonaniem
            zleconych usług oraz w celu prawidłowych rozliczeń po ich zrealizowaniu (podstawa prawna
            art. 6 ust. 1 b RODO),
          </Text>
        </View>
        <View style={sectionText}>
          <Text style={conditions}>
            Zgodnie z art. 7 ust. 3 RODO osoba, której dane dotyczą, ma prawo w dowolnym momencie
            wycofać zgodę.
          </Text>
        </View>
        <View style={space}></View>
        <View style={sign}>
          <Text style={sign}>...............................</Text>
          <View style={sign}>
            <Text style={signText}>Czytelny podpis usługobiorcy</Text>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default PersonalDataDoc;

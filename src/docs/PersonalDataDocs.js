import React from 'react';
import { Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import checkbox from '../assets/images/checkbox.png';
import DocsHeader from '../docs/DocsHeader';

const PersonalDataDoc = ({ styles, client }) => {
  console.log();
  console.log();
  console.log(client.homeNumber);
  const {
    body,
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
      <DocsHeader styles={styles} />
      <View style={content}>
        <View style={sectionText}>
          <Text style={textHeader}>Zgoda na przetwarzanie danych osobowych</Text>
        </View>
        <View style={sectionText}>
          <Text style={clientData}>
            Imię i nazwisko:{` ${client.firstName} ${client.lastName}`}
          </Text>

          <Text style={clientData}>Miejscowość:{` ${client.city}`}</Text>
          <Text style={clientData}>Ulica:{` ${client.street} ${client.homeNumber}`}</Text>
          <Text style={clientData}>Telefon:{` ${client.phone}`}</Text>
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
            <Image src={checkbox} /> wykonania ciążących na firmie FIRMA obowiązków prawnych np.
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

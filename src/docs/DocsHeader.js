import React from 'react';
import { Text, View } from '@react-pdf/renderer';

const DocsHeader = ({ styles }) => {
  const { sectionHeader, info, infoBig, section, logo } = styles;
  return (
    <View style={sectionHeader}>
      <View style={info}>
        <Text>00-000 Miasto</Text>
        <Text>ul. Ulica 22</Text>
        <Text>REGON: 123456789</Text>
        <Text>NIP: 123-456-78-90</Text>
        <Text style={infoBig}>tel./fax. 12 345 67 89</Text>
        <Text style={infoBig}>Mail: biuro@biuro.pl</Text>
      </View>
      <View style={section}>
        <Text style={logo}>Firma</Text>
      </View>
    </View>
  );
};

export default DocsHeader;

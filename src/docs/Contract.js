import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';
import DocsHeader from '../docs/DocsHeader';

const date = new Date();
const fullDate = `${date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`}.${
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth()}`
}.${date.getFullYear()}`;

const Contract = ({ styles }) => {
  const { body, content, sectionText, textHeader, conditions, signText } = styles;
  return (
    <Page size="A4" style={body}>
      <DocsHeader styles={styles} />
      <View style={content}>
        <View style={sectionText}>
          <Text style={textHeader}>Umowa nr .........</Text>
        </View>
        <View style={sectionText}>
          <Text style={(conditions, signText)}>
            zawarta w Miasto dnia {fullDate} pomiedzy: firmą FIRMA w Miasto, przy ul. Ulica 22,
            zwanym dalej “Zleceniobiorcą”, w imieniu, którego działa:
            .............................................
          </Text>
        </View>
        <View style={sectionText}>
          <Text style={(conditions, signText)}>
            a …..................................................,
            …..........................................................ul.
            …................................... zwanym dalej “Zleceniodawcą”, w imieniu którego
            działa ….........................................................następującej treści:
            §1. Zleceniobiorca przyjmuje i zobowiązuje sie wykonać: - dostwę , montaż towarów
            zgodnie z zamówieniem nr ….............................. z dnia …...................
          </Text>
        </View>
      </View>
    </Page>
  );
};

export default Contract;

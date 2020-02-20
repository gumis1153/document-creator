import React from 'react';
import { Page, Text, View } from '@react-pdf/renderer';
import DocsHeader from '../docs/DocsHeader';

const date = new Date();
const fullDate = `${date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`}.${
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth()}`
}.${date.getFullYear()}`;

const Contract = ({ styles, client }) => {
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
        <View style={(sectionText, conditions, signText)}>
          <Text>
            a <Text>{` ${client.firstName} ${client.lastName}`}</Text>,{' '}
            <Text>{` ${client.city} `}</Text>
            ul.
            <Text>{` ${client.street} ${client.homeNumber}`}</Text> zwanym dalej “Zleceniodawcą”, w
            imieniu którego działa
            ….........................................................następującej treści:
          </Text>
          <Text>
            §1. Zleceniobiorca przyjmuje i zobowiązuje sie wykonać: - dostwę , montaż towarów
            zgodnie z zamówieniem nr ….............................. z dnia …................... za
            cenę …........................
            zł,(słownie......................................................................................)
            zł Cena powyższa obejmuje należny podatek od towarów i usług (VAT). W przypadku
            naliczenia 8% podatku VAT “Zleceniodawca” oświadcza, że przedmiot zamówienia zamontowany
            będzie w budynku mieszkalnym jednorodzinnym sklasyfikowanym w PKOB w dziale 11, którego
            powierzchnia użytkowa nie przekracza 300m2, i wraz z garażem stanowi nierozdzielny
            budynek. Jednocześnie “Zleceniodawca” oświadcza, iż na terenie budynku mieszkalnego oraz
            garażu nie jest prowadzona żadna działalność gospodarcza.
          </Text>
          <Text>
            §2. Na poczet ceny określonej w §1 umowy Zleceniodawca w dniu podpisania niniejszej
            umowy wpłaca zadatek w kwocie …...................... zł
            (słownie...........................................................................................................................................)
            złotych. a) co strony niniejszym potwierdzają b) gotówka w kasie Zleceniobiorcy w
            terminie do dnia …............................................ c) polecenie przelewu na
            rachunek Zleceniobiorcy w BANK nr konta 00 0000 0000 0000 0000 0000 0000 w terminie do
            dnia …........................................ Pozostałą część ceny Zleceniodawca
            zapłaci poleceniem przelewu lub gotówką w kasie Zleceniobiorcy{'\n'}- II etap płatności
            w wysokości 60% wartości zamówienia, najpóźniej 1 dzień przed rozpoczęciem robót
            budowlano – montażowych.{'\n'}- III etap płatności w wysokości – pozostała kwota
            wartości zamówienia po zakończeniu robót budowlano -montażowych.{'\n'} §3.
            Zleceniobiorca zastrzega sobie na przedmiocie umowy prawo własności aż do pełnej zapłaty
            ceny kupna.
            {'\n'}
            §4. Realizacja umowy nastapi pod warunkiem udostępnienia frontu robót, najpóźniej do
            dnia ….................................... …....{'\n'}
            §5. W przypadku zwłoki Zleceniobiorcy, Zleceniodawca może naliczyć karę umowną, za każdy
            dzień zwłoki w wysokości 0,04% nie więcej jednak niż 10% wartości przedmiotu umowy.
            {'\n'}
            §6. W przypadku nie udostępnienia frontu robót przez Zleceniodawcę do terminu podanego w
            §4, Zleceniobiorca może bez wyznaczenia dodatkowego terminu od umowy odstąpić i
            otrzymany zadatek zachować.{'\n'}
            §7. Zleceniodawca oświadcza, że został poinformowany o warunkach zabudowy oraz zapoznany
            z danymi technicznymi i eksploatacyjnymi towaru będącego składowymi zleconych robót
            niniejszej umowy.{'\n'}
            §8. Zleceniodawca zobowiązuje się do zbadania wykonanych robót w ciągu 7 dni od jego
            odbioru. W razie stwierdzenia ewentualnych wad lub braków Zleceniodawca niezwłocznie
            powiadomi Zleceniobiorcę, który udzieli odpowiedzi na nią w ciągu 14 dni od jej
            otrzymania.{'\n'}
            §9. W sprawach nieuregulowanych niniejszą umową maja zastosowanie przepisy kodeksu
            cywilnego.{'\n'}
            §10. Zleceniodawca oświadcza, że jest/nie jest płatnikiem podatku od towarów i usług VAT
            i posiada NIP …..........................{'\n'}
            §11. Zleceniobiorca udziela gwarancji 12 miesięcy na wykonane robóty , towar będący
            składowymi umowy, posiada gwarancję określoną w karcie producenta lub na zasadach
            ogólnych warunków gwarancji.{'\n'}
            §12. Zleceniodawca oświadcza, że wyraża zgodę/nie wyraża zgody: - na dokonywanie zdjęć
            wykonanej realizacji będącej przedmiotem niniejszej umowy, - na przetwarznie swoich
            danych osobowych/danych dotyczących firmy (nazwy) przez administratora danych, FIRMA z
            siedzibą w Miasto w celu: - archiwizacji i umieszczania zdjęć i danych
            osobowych/firmowych Zleceniodawcy na listach referencyjnych Zleceniobiorcy, -
            przesyłania a adres Zleceniodawcy materiałów dotyczących oferty handlowej
            Zleceniobiorcy.{'\n'}
            §13. Załączniki do umowy{'\n'}- zamówienie nr ….................... , z dnia
            …............{'\n'}- karta pomiarowa …....................
          </Text>
        </View>
        <View style={sectionText}>
          <Text style={(conditions, signText)}></Text>
        </View>
      </View>
    </Page>
  );
};

export default Contract;

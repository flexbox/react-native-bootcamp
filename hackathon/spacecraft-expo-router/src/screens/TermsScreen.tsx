import { Alert, Image, ScrollView } from "react-native";
import { Appbar, Text } from "react-native-paper";

export const TermsScreen = () => {
  function goBack() {
    // We need to use the screen props `{navigation}` to navigate back
    // it will be introduced in the next lesson `react-navigation`
    Alert.alert("goBack pressed!");
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Terms and Conditions" />
      </Appbar.Header>
      <ScrollView style={{ padding: 32 }}>
        <Text
          style={{ marginBottom: 24 }}
          variant="bodyMedium"
        >
          This Terms of Service, including all supplemental terms as amended
          from time to time, governs your use of the online game, service, or
          web site known as Star Wars: The Old Republic (&quot;TOR&quot; and the
          &quot;TOR Services&quot;) operated by BioWare Austin LLC, its
          subsidiaries and affiliates (collectively, &quot;BioWare&quot;).
          Please read the Supplemental Terms which are contained in links to
          this Terms of Service or at the bottom of this document. Supplemental
          Terms and TOR Privacy Policy and other Terms are an integral part of
          this Terms of Service and incorporated in this document by reference.
          You can find the Terms of Service at the &quot;Terms of Service&quot;
          link at the bottom of the TOR website from which you may also print a
          copy for your records.
        </Text>
        <Text variant="titleMedium">1. Account</Text>
        <Text
          style={{ marginBottom: 24 }}
          variant="bodyMedium"
        >
          A TOR Account (&quot;Account&quot;) may be required to access and use
          TOR Services. If you have questions about Account registration, please
          contact us by visiting http://www.swtor.com/support. To create a TOR
          Account, you must have an email address, and provide truthful and
          accurate information. TOR Accounts are available only to adults, or in
          their discretion, their minor child. If you are a minor, your parent
          or guardian must complete the registration process, in which case he
          or she takes full responsibility for all obligations under this Terms
          of Service. TOR Accounts will not be allowed for minors under thirteen
          (13) years of age, regardless of permission and/or registration by
          such minor&apos;s parent or guardian. You must be eligible to use the
          TOR Service for which you are registering. Some TOR Services may
          require creation of a [&quot;User Name&quot; or &quot;Persona&quot;].
          [User names or Personas] are tied to your Account. You may not use a
          [&quot;User Name&quot; or &quot;Persona&quot;] that is used by someone
          else, is vulgar or offensive, or otherwise violates the Terms of
          Service. You are solely responsible for all activity on your Account.
          Your Account may be terminated if someone else uses it to engage in
          activity that violates the Terms of Service or is otherwise improper
          or illegal. You should not reveal your Account password to others.
          BioWare and LucasArts will not ask you to reveal your password, or
          ever initiate any contact with you asking for your password reminder
          words.
        </Text>
        <Text variant="titleMedium">2. Service</Text>
        <Text
          style={{ marginBottom: 24 }}
          variant="bodyMedium"
        >
          Some TOR Services require payment of a fee. You must have an Account
          and pay the subscription or other fees to participate in these
          activities. Information about subscription and other fees for TOR
          Services is published in the relevant pages at
          http://www.swtor.com/support.
        </Text>
        <Text variant="titleMedium">3. Privacy</Text>
        <Text
          style={{ marginBottom: 24 }}
          variant="bodyMedium"
        >
          Your privacy is important to us. Please read the TOR Privacy Policy
          carefully for information relating to TOR collection and use of
          personal information. You may access the TOR Privacy Policy by
          visiting &quot;Privacy Policy&quot; at
          http://www.swtor.com/legalnotices/privacypolicy. When you connect to
          TOR Service, we may retrieve information from the computer used to log
          onto the TOR Service. The information we collect may include
          information about the computer&apos;s hardware system and any data
          related to the computer&apos;s operation of the TOR Software or use of
          TOR Services. We will not collect any personal information about you,
          however, without your knowledge and consent as stated in our Privacy
          Policy at http://www.swtor.com/legalnotices/privacypolicy.
        </Text>
        <Text variant="titleMedium">4. Content</Text>
        <Text
          style={{ marginBottom: 24 }}
          variant="bodyMedium"
        >
          &quot;Content&quot; on TOR Services may include software, technology,
          text, artwork, music, sound, and other audio visual material, and the
          design and appearance of our websites. Content may be provided by
          third parties, including other users of TOR Services. BioWare and
          LucasArts do not pre-screen all Content and does not endorse, approve,
          or prescreen any Content that you and other users may contribute to
          TOR Services. You bear the entire risk of the completeness, accuracy
          or usefulness of Content found on TOR Services. BioWare and LucasArts
          reserves the right to remove Content that is objectionable to us for
          any reason. The decision to remove Content is in BioWare&apos;s and
          LucasArts&apos; sole and final discretion. To the maximum extent
          permitted by applicable law, BioWare and LucasArts does not assume any
          responsibility or liability for Content that is generated by third
          parties or for the failure or delay in removing any such Content.
        </Text>
        <Image
          source={{
            uri: "https://media.giphy.com/media/krkrHAEodHgzP72rTI/giphy.gif",
          }}
          style={{ height: 250, marginVertical: 32, width: 250 }}
        />

        <Text style={{ marginBottom: 128 }}>May the force be with you</Text>
      </ScrollView>
    </>
  );
};

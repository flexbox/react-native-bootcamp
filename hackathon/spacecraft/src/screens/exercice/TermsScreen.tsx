import React from "react";
import { View, Text, Image } from "react-native";
import { Appbar, Title } from "react-native-paper";

const TermsScreen = () => {
  function goBack() {
    // We need to use the screen props `{navigation}` to navigate back
    // it will be introduced in the next lesson `react-navigation`
    alert("goBack pressed!");
  }

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Terms and Conditions" />
      </Appbar.Header>
      <View style={{ padding: 32 }}>
        <Text>
          This Terms of Service, including all supplemental terms as amended
          from time to time, governs your use of the online game, service, or
          web site known as Star Wars: The Old Republic ("TOR" and the "TOR
          Services") operated by BioWare Austin LLC, its subsidiaries and
          affiliates (collectively, "BioWare"). Please read the Supplemental
          Terms which are contained in links to this Terms of Service or at the
          bottom of this document. Supplemental Terms and TOR Privacy Policy and
          other Terms are an integral part of this Terms of Service and
          incorporated in this document by reference. You can find the Terms of
          Service at the "Terms of Service" link at the bottom of the TOR
          website from which you may also print a copy for your records.
        </Text>
        <Title>1. Account</Title>
        <Text>
          A TOR Account ("Account") may be required to access and use TOR
          Services. If you have questions about Account registration, please
          contact us by visiting http://www.swtor.com/support. To create a TOR
          Account, you must have an email address, and provide truthful and
          accurate information. TOR Accounts are available only to adults, or in
          their discretion, their minor child. If you are a minor, your parent
          or guardian must complete the registration process, in which case he
          or she takes full responsibility for all obligations under this Terms
          of Service. TOR Accounts will not be allowed for minors under thirteen
          (13) years of age, regardless of permission and/or registration by
          such minor's parent or guardian. You must be eligible to use the TOR
          Service for which you are registering. Some TOR Services may require
          creation of a ["User Name" or "Persona"]. [User names or Personas] are
          tied to your Account. You may not use a ["User Name" or "Persona"]
          that is used by someone else, is vulgar or offensive, or otherwise
          violates the Terms of Service. You are solely responsible for all
          activity on your Account. Your Account may be terminated if someone
          else uses it to engage in activity that violates the Terms of Service
          or is otherwise improper or illegal. You should not reveal your
          Account password to others. BioWare and LucasArts will not ask you to
          reveal your password, or ever initiate any contact with you asking for
          your password reminder words.
        </Text>
        <Title>2. Service</Title>
        <Text>
          Some TOR Services require payment of a fee. You must have an Account
          and pay the subscription or other fees to participate in these
          activities. Information about subscription and other fees for TOR
          Services is published in the relevant pages at
          http://www.swtor.com/support.
        </Text>
        <Title>3. Privacy</Title>
        <Text>
          Your privacy is important to us. Please read the TOR Privacy Policy
          carefully for information relating to TOR collection and use of
          personal information. You may access the TOR Privacy Policy by
          visiting “Privacy Policy” at
          http://www.swtor.com/legalnotices/privacypolicy. When you connect to
          TOR Service, we may retrieve information from the computer used to log
          onto the TOR Service. The information we collect may include
          information about the computer's hardware system and any data related
          to the computer's operation of the TOR Software or use of TOR
          Services. We will not collect any personal information about you,
          however, without your knowledge and consent as stated in our Privacy
          Policy at http://www.swtor.com/legalnotices/privacypolicy.
        </Text>
        <Title>4. Content</Title>
        <Text>
          "Content" on TOR Services may include software, technology, text,
          artwork, music, sound, and other audio visual material, and the design
          and appearance of our websites. Content may be provided by third
          parties, including other users of TOR Services. BioWare and LucasArts
          do not pre-screen all Content and does not endorse, approve, or
          prescreen any Content that you and other users may contribute to TOR
          Services. You bear the entire risk of the completeness, accuracy or
          usefulness of Content found on TOR Services. BioWare and LucasArts
          reserves the right to remove Content that is objectionable to us for
          any reason. The decision to remove Content is in BioWare's and
          LucasArts' sole and final discretion. To the maximum extent permitted
          by applicable law, BioWare and LucasArts does not assume any
          responsibility or liability for Content that is generated by third
          parties or for the failure or delay in removing any such Content.
        </Text>
        <Image
          style={{ width: 250, height: 250, marginVertical: 32 }}
          source={{
            uri: "https://media.giphy.com/media/krkrHAEodHgzP72rTI/giphy.gif",
          }}
        />

        <Text style={{ marginBottom: 128 }}>May the force be with you</Text>
      </View>
    </View>
  );
};

export default TermsScreen;

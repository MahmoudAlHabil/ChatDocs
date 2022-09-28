import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { SvgXml } from "react-native-svg";
import Icons from "../../utils/Icons";
import styles from "./styles";
import Button from "../../components/Button";

const Intro1Screen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.WrapperImage}>
        <SvgXml xml={Icons.iconApp}/>
      </View>
      <Text style={styles.text}>
        Chat Arts application helps you for an online consultation to be carried
        out with a general practitioner via video call. You can after the call
        consult all necessary documents and download.
      </Text>
      <View style={styles.bullets}>
        <Text style={styles.blueBullet}>{'\u25CF'}</Text>
        <Text style={styles.grayBullet}>{'\u25CF'}</Text>
      </View>
      <View style={styles.btn}>
        <Button onPress={() => {}} title="Skip" buttonStyle={styles.skip_btn} titleStyle={styles.skip_title} />
        <Button onPress={() => {navigation.navigate('Intro2Screen')}} title="Next" />
      </View>
    </SafeAreaView>
  );
};

export default Intro1Screen;

import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { SvgXml } from "react-native-svg";
import Icons from "../../utils/Icons";
import styles from "./styles";
import Button from "../../components/Button";

const Intro2Screen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.WrapperImage}>
        <SvgXml xml={Icons.iconApp} />
      </View>
      <Text style={styles.text}>
        We are available to help you Every working day from 7 am to 12 am. You
        can confirm your live location and get the hulpfull help from the
        doctor.
      </Text>
      <View style={styles.bullets}>
        <Text style={styles.grayBullet}>{"\u25CF"}</Text>
        <Text style={styles.blueBullet}>{"\u25CF"}</Text>
      </View>
      <View style={styles.btn}>
        <Button
          onPress={() => {navigation.goBack()}}
          title="Skip"
          buttonStyle={styles.skip_btn}
          titleStyle={styles.skip_title}
        />
        <Button onPress={() => {}} title="Next" />
      </View>
    </SafeAreaView>
  );
};

export default Intro2Screen;

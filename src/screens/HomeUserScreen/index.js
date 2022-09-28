import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import Colors from "../../utils/Colors";
import Button from "../../components/Button";
import { SvgXml } from "react-native-svg";
import Icons from "../../utils/Icons";

HomeUserScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const DATA = [
    { id: 1, name: "Mahmoud" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Ali" },
    { id: 4, name: "Mohammed" },
    { id: 5, name: "Maher" },
    { id: 6, name: "Naser" },
    { id: 7, name: "Khaled" },
    { id: 8, name: "mahmoud" },
    { id: 9, name: "mahmoud" },
    { id: 10, name: "mahmoud" },
    { id: 11, name: "mahmoud" },
    { id: 12, name: "mahmoud" },
    { id: 13, name: "mahmoud" },
  ];

  const RenderItem = () => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => setModalVisible(true)}
      >
        <SvgXml xml={Icons.document} />
        <Text style={styles.textFour}>Conclusion - 5/11/2021</Text>
        <Icon2 name="download" size={24} color={Colors.black} />
      </TouchableOpacity>
    );
  };

  const HeaderList = () => {
    return (
      <><View style={styles.header}>
        <View style={styles.wrapperAvater}>
          <Image
            source={{
              uri: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-06.jpg",
            }}
            style={styles.avater} />
          <Text style={styles.textHeader}>Hi, Jan !</Text>
        </View>
        <View>
          <Icon name="bell" size={20} color={Colors.black} />
          <View style={styles.badge}>
            <Text style={styles.textBadge}>1</Text>
          </View>
        </View>
      </View><View style={styles.StartBox}>
          <Text style={styles.textOne}>Let's start</Text>
          <Text style={styles.textTwo}>CONSULTATION</Text>
          <Button title="Start" />
        </View><View style={styles.wrapperViewAllSection}>
          <Text style={styles.textTwo}>Last Documents</Text>
          <View style={styles.viewAllSection}>
            <Text style={styles.textThree}>View all</Text>
            <Icon1 name="arrow-forward-ios" size={20} color={Colors.primary} />
          </View>
        </View></>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.textOne}>Conclusion - 5/11/2021</Text>
          <Button
            buttonStyle={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
            title="Close"
          />
        </View>
      </Modal>

      <FlatList
        ListHeaderComponent={HeaderList}
        data={DATA}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeUserScreen;

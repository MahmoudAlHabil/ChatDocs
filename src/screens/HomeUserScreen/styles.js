import { ScaledSheet } from "react-native-size-matters";
import Colors from "../../utils/Colors";
import Fonts from "../../utils/Fonts";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    top: 50,
    justifyContent: 'center',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
  wrapperAvater: {
    flexDirection: 'row'
  },
  avater: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  textHeader: {
    marginStart: 16,
    fontSize: 26,
    fontFamily: Fonts.Medium,
  },
  badge: {
    backgroundColor: "#F00",
    width: 15,
    height: 15,
    top: -5,
    end: -7,
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBadge: {
    lineHeight: 15,
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.white,
  },
  StartBox: {
    backgroundColor: Colors.secondary,
    marginHorizontal: 16,
    height: 140,
    marginTop: 30,
    borderRadius: 12,
    alignItems: 'center'
  },
  textOne: {
    fontSize: 22,
    letterSpacing: 1,
    lineHeight: 30,
    fontFamily: Fonts.Medium,
    top: 10,
  },
  textTwo: {
    fontSize: 26,
    letterSpacing: 1,
    lineHeight: 30,
    fontFamily: Fonts.Medium,
    top: 10,
    marginBottom: 25,
  },
  wrapperViewAllSection: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  viewAllSection: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textThree: {
    marginEnd: 5,
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.Regular,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#999',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 15,
  },
  textFour: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
    lineHeight: 22,
    flex: 1,
    marginStart: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height: '20%',
    top: '40%',
    alignItems: "center",
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    marginTop: 20,
  },
});

export default styles;

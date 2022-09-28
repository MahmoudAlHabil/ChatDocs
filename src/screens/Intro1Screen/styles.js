import { ScaledSheet } from 'react-native-size-matters';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  WrapperImage: {
    marginTop: 150,
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 29,
    fontFamily: Fonts.Medium,
    marginTop: 80,
    marginHorizontal: 30,
    height: 210,
  },
  bullets: {
    flexDirection: 'row',
    marginTop: 20,
  },
  blueBullet: {
    color: Colors.primary,
    marginHorizontal: 2,
    fontSize: 16,
  },
  grayBullet: {
    color: Colors.gray,
    marginHorizontal: 2,
    fontSize: 16,
  },
  btn: {
    flexDirection: 'row',
    marginTop: 60,
  },
  skip_btn: {
    backgroundColor: Colors.secondary,
    marginRight: -10
  },
  skip_title: {
    color: Colors.primary,
  },
})

export default styles;
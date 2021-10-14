import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardContainer: {
    borderWidth: 3,
    height: 312,
    width: 312,
  },
  line: {
    backgroundColor: '#000',
    height: 306,
    width: 3,
    position: 'absolute',
    transform: [{ translateX: 100 }],
  },
  firstLine: {
    width: 3,
    height: 306,
    transform: [{ translateX: 200 }],
  },
  secondLine: {
    width: 306,
    height: 3,
    transform: [{ translateY: 100 }],
  },
  thirdLine: {
    width: 306,
    height: 3,
    transform: [{ translateY: 200 }],
  },
  buttons: isCentered => ({
    width: 312,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    justifyContent: isCentered ? 'center' : 'space-between',
  }),
});

export default styles;

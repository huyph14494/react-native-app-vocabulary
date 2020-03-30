import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  textEn: {
    color: '#27A744',
    fontSize: 20,
  },
  textVn: {
    color: '#DC3545',
    fontSize: 20,
  },
  groupWord: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DDDDDD',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  groupText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  groupButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  buttonCustom(color = '#DDDDDD') {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color,
      padding: 20,
      marginHorizontal: 10,
      borderRadius: 5,
    };
  },
});

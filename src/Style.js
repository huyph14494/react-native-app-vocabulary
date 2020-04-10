import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    marginHorizontal: 20,
  },
  textEn: {
    color: '#27A744',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textVn: {
    color: '#DC3545',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textColor(color = 'black', fontSize = 15) {
    return {
      color: color,
      fontSize: fontSize,
      fontWeight: 'bold',
    };
  },
  groupWord: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    marginVertical: 20,
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
  buttonCustom(color = '#f0f0f0') {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color,
      padding: 20,
      marginHorizontal: 10,
      borderRadius: 5,
    };
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  groupInputText: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  groupForm: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    marginVertical: 20,
    borderRadius: 10,
    padding: 10,
  },
});

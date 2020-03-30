import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import List from './components/List';
import Style from './Style';

export default class ScreenMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: '1', en: 'One', vn: 'Mot', isMemorized: true},
        {id: '2', en: 'Two', vn: 'Hai', isMemorized: false},
        {id: '3', en: 'Three', vn: 'Ba', isMemorized: false},
        {id: '4', en: 'Four', vn: 'Bon', isMemorized: false},
        {id: '5', en: 'Five', vn: 'Nam', isMemorized: false},
        {id: '6', en: 'Six', vn: 'Sau', isMemorized: true},
        {id: '7', en: 'Seven', vn: 'Bay', isMemorized: false},
        {id: '8', en: 'Eight', vn: 'Tam', isMemorized: true},
        {id: '9', en: 'Nine', vn: 'Chin', isMemorized: false},
        {id: '10', en: 'Ten', vn: 'Muoi', isMemorized: true},
      ],
      shouldShowform: false,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={Style.container}>
          <List words={this.state.words} />
        </View>
      </ScrollView>
    );
  }
}

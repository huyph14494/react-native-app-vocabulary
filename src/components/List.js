import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import Style from './../Style';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: this.props.words,
    };
  }

  onPressMemorizedOrForgot = id => {
    let words = this.state.words.map(word => {
      if (word.id === id) {
        return {...word, isMemorized: !word.isMemorized};
      }
      return word;
    });
    this.setState({words});
  };

  onPressRemove = id => {
    let words = this.state.words.filter(word => !(word.id === id));
    this.setState({words});
  };

  showItems = item => {
    return (
      <View style={Style.groupWord} key={item.id}>
        <View style={Style.groupText}>
          <Text style={Style.textEn}>{item.en}</Text>
          <Text style={Style.textVn}>
            {item.isMemorized ? item.vn : '----'}
          </Text>
        </View>
        <View style={Style.groupButton}>
          <TouchableOpacity
            style={Style.buttonCustom('red')}
            onPress={() => this.onPressMemorizedOrForgot(item.id)}>
            <Text style={Style.textColor('white')}>
              {item.isMemorized ? 'Memorized' : 'Forgot'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.buttonCustom('yellow')}
            onPress={() => this.onPressRemove(item.id)}>
            <Text style={Style.textColor('black')}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.words}
        renderItem={({item}) => this.showItems(item)}
        keyExtractor={item => item.id}
        extraData={this.state.words}
      />
    );
  }
}

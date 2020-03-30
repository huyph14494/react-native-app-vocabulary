import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Style from './../Style';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {this.props.words.map((value, key) => (
          <View style={Style.groupWord} key={key}>
            <View style={Style.groupText}>
              <Text style={Style.textEn}>{value.en}</Text>
              <Text style={Style.textVn}>{value.vn}</Text>
            </View>
            <View style={Style.groupButton}>
              <TouchableOpacity style={Style.buttonCustom('red')}>
                <Text>Memorized</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.buttonCustom('yellow')}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

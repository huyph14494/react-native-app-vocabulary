import React, {Component} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import Style from './../Style';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowform: false,
    };
  }

  onChange = () => {};
  onAddWord = () => {};
  toggleForm = () => {
    this.setState({
      shouldShowform: !this.state.shouldShowform,
    });
  };

  render() {
    if (this.state.shouldShowform) {
      return (
        <View style={Style.groupForm}>
          <View style={Style.groupInputText}>
            <TextInput
              style={Style.inputText}
              onChangeText={text => this.onChange(text)}
              placeholder="English"
            />

            <TextInput
              style={Style.inputText}
              onChangeText={text => this.onChange(text)}
              placeholder="Vietnamese"
            />
          </View>

          <View style={Style.groupButton}>
            <TouchableOpacity
              style={Style.buttonCustom('#28a745')}
              onPress={() => this.onAddWord()}>
              <Text style={Style.textColor('white')}>Add word</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.buttonCustom('red')}
              onPress={() => this.toggleForm()}>
              <Text style={Style.textColor('white')}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={Style.buttonCustom('#28a745')}
          onPress={() => this.toggleForm()}>
          <Text style={Style.textColor('white', 22)}>+</Text>
        </TouchableOpacity>
      );
    }
  }
}

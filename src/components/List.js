import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import Style from './../Style';
import {connect} from 'react-redux';

class List extends Component {
  onPressChangeStatus = id => {
    let words = this.props.words.map(word => {
      if (word.id === id) {
        return {...word, isMemorized: !word.isMemorized};
      }
      return word;
    });
    this.props.dispatch({type: 'ON_SWITCH_STATUS', words});
  };

  onPressRemove = id => {
    let words = this.props.words.filter(word => !(word.id === id));
    this.props.dispatch({type: 'ON_REMOVE_WORD', words});
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
            onPress={() => this.onPressChangeStatus(item.id)}>
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
        scrollEnabled={false}
        data={this.props.words}
        renderItem={({item}) => this.showItems(item)}
        keyExtractor={item => item.id}
        extraData={this.props.words}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    words: state.words,
  };
};

export default connect(mapStateToProps)(List);

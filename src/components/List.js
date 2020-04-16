import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import Style from './../Style';
import {connect} from 'react-redux';
import actioncreators from '../redux/action/actioncreators ';

class List extends Component {
  componentDidMount() {
    this.props.fetchAllWords();
  }

  onPressChangeStatus = word => {
    this.props.onToggleWord(word._id, !word.isMemorized);
  };

  onPressRemove = _id => {
    this.props.onRemoveWord(_id);
  };

  showItems = item => {
    return (
      <View style={Style.groupWord} key={item._id}>
        <View style={Style.groupText}>
          <Text style={Style.textEn}>{item.en}</Text>
          <Text style={Style.textVn}>
            {item.isMemorized ? item.vn : '----'}
          </Text>
        </View>
        <View style={Style.groupButton}>
          <TouchableOpacity
            style={Style.buttonCustom('red')}
            onPress={() => this.onPressChangeStatus(item)}>
            <Text style={Style.textColor('white')}>
              {item.isMemorized ? 'Memorized' : 'Forgot'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.buttonCustom('yellow')}
            onPress={() => this.onPressRemove(item._id)}>
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
        keyExtractor={item => item._id}
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

export default connect(
  mapStateToProps,
  actioncreators,
)(List);

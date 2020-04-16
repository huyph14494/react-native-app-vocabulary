import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './../Style';
import {Picker} from '@react-native-community/picker';
import {connect} from 'react-redux';
import actioncreators from '../redux/action/actioncreators ';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  setSelectedValue = itemValue => {
    this.props.onSetFilterMode(itemValue);
  };

  render() {
    return (
      <View style={Style.groupForm}>
        <Picker
          selectedValue={this.props.filtermode}
          onValueChange={itemValue => this.setSelectedValue(itemValue)}>
          <Picker.Item label="Show All" value="1" />
          <Picker.Item label="Show Forgot" value="2" />
          <Picker.Item label="Show Memorized" value="3" />
        </Picker>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filtermode: state.filtermode,
  };
};

export default connect(
  mapStateToProps,
  actioncreators,
)(Filter);

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: 'image_1',
      dropdownHeight: 40,
    };
  }

  componentDidMount() {}

  render() {
    let preview_images = {
      image_1: require('../assets/image_1.jpg'),
      image_2: require('../assets/image_2.jpg'),
      image_3: require('../assets/image_3.jpg'),
      image_4: require('../assets/image_4.jpg'),
      image_5: require('../assets/image_5.jpg'),
      image_6: require('../assets/image_6.jpg'),
      image_7: require('../assets/image_7.jpg'),
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Post</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}></Image>
            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              <DropDownPicker
                items={[
                  { label: 'Yoga', value: 'image_1' },
                  { label: 'Salad', value: 'image_2' },
                  { label: 'Tasty Meal', value: 'image_3' },
                  { label: 'Golf Practice', value: 'image_4' },
                  { label: 'Cycling', value: 'image_5' },
                  { label: 'travelling', value: 'image_6' },
                  { label: 'Boating', value: 'image_7' },
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{ backgroundColor: 'transparent' }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{ backgroundColor: '#2a2a2a' }}
                labelStyle={{
                  color: 'white',
                }}
                arrowStyle={{
                  color: 'white',
                }}
                onChangeItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
              />
            </View>

            <TextInput
              style={styles.inputFont}
              onChangeText={(caption) => this.setState({ caption })}
              placeholder={'Add a Caption'}
              placeholderTextColor="grey"
            />
          </ScrollView>
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '120%',
    height: '120%',
    resizeMode: 'contain',
    marginTop: -10,
    marginLeft: -30,
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(35),
    fontFamily: 'Futura',
    marginLeft: -30,
    marginTop: -10,
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
  },
});

import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.instaLogo}
          source={require('../images/d.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Icon name="plus-square" style={styles.icons} size={26} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart" style={styles.icons} size={26} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="message-circle" style={styles.icons} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  instaLogo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  iconsContainer: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {width: 30, height: 30, color: 'white'},
});

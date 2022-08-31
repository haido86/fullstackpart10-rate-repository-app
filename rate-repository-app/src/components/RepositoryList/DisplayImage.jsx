import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    borderRadius:4
  },
});

const DisplayImage = ({props}) => {
  return (
    <View >
      <Image
        style={styles.logo}
        source={{uri: `${props}`}}
      />
    </View>
  );
}

export default DisplayImage;
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.secondary,
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <Pressable onPress={()=>{console.log('Click');}}>
    <Text fontWeight="bold" fontSize="heading">Repositories</Text>
    </Pressable>
  </View>
    )
};

export default AppBar;

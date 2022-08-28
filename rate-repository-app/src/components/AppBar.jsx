import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.secondary,
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-around",    
    paddingBottom: 10,
    paddingRight:200
  },
  // ...
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    {/* <Pressable onPress={()=>{console.log('Click');}}>
    <Text fontWeight="bold" fontSize="heading">Repositories</Text>
    </Pressable> */}
    {/* <Pressable onPress={()=>{console.log('Click');}}>
    <Text fontWeight="bold" fontSize="heading">Sign In</Text>
    </Pressable> */}
    <Link to="/">
    <Text fontWeight="bold" fontSize="heading">Repositories</Text>
    </Link>
    <Link to="/signIn">
    <Text fontWeight="bold" fontSize="heading">Sign In</Text>

    </Link>
  
  </View>
    )
};

export default AppBar;

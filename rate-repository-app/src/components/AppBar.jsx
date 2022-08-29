import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.secondary,
  },  
  boxContainer:{
      display: "flex",
      alignItems:"flex-start",
      flexDirection:"row", 
      },
  box: {
      alignItems:"center",
      borderWidth: 1,
      borderColor: "#808080",
      padding: 5, 
      borderRadius:4,    
      margin: 10,    
      },
  },
 
);

const AppBar = () => {
  return (
  <View style={styles.container}>
    {/* <Pressable onPress={()=>{console.log('Click');}}>
    <Text fontWeight="bold" fontSize="heading">Repositories</Text>
    </Pressable> */}
    {/* <Pressable onPress={()=>{console.log('Click');}}>
    <Text fontWeight="bold" fontSize="heading">Sign In</Text>
    </Pressable> */}
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.boxContainer}>
      <View style={styles.box}>
    <Link to="/">
    <Text fontWeight="bold" fontSize="heading" >Repositories</Text>
    </Link>
    </View>
    <View style={styles.box}>
    <Link to="/signIn">
    <Text fontWeight="bold" fontSize="heading" >Sign In</Text>
    </Link>
    </View>
    </View>
    </ScrollView>  
  </View>
    )
};

export default AppBar;

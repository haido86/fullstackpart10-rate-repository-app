import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
  },
  boxContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  box: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#808080',
    padding: 5,
    borderRadius: 4,
    margin: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Link to="/">
              <Text color="textThirdly" fontWeight="bold" fontSize="heading">
                Repositories
              </Text>
            </Link>
          </View>
          <View style={styles.box}>
            <Link to="/signIn">
              <Text color="textThirdly" fontWeight="bold" fontSize="heading">
                Sign In
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;

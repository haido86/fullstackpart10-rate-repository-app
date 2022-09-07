import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link, useNavigate } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient, useQuery } from '@apollo/client';
import { USER } from '../graphql/queries';
import { SIGN_IN } from '../graphql/mutations';

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
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const result = useQuery(USER);
  const user = result.data;

  const signOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  let navigate = useNavigate();

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Link to="/Repositories">
              <Text color="textThirdly" fontWeight="bold" fontSize="heading">
                Repositories
              </Text>
            </Link>
          </View>
          {user && user.me ? (
            <View style={styles.box}>
              <Pressable
                onPress={() => {
                  signOut();
                  navigate('../signIn', { replace: true });
                }}
              >
                <Text color="textThirdly" fontWeight="bold" fontSize="heading">
                  Sign Out
                </Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.box}>
              <Link to="/signIn">
                <Text color="textThirdly" fontWeight="bold" fontSize="heading">
                  Sign In
                </Text>
              </Link>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;

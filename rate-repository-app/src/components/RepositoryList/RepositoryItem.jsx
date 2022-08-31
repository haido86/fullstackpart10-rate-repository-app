import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import DisplayImage from './DisplayImage';
import Table from './Table';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.thirdly,
    padding: 5,
  },
  block: {
    display: 'flex',
    flexDirection: 'row',
  },
  block1: {
    margin: 10,
  },
  block2: {
    margin: 10,
    flex: 3,
    flexDirection: 'column',
    flexGrow: 2,
  },
  textContainer: {
    paddingTop: 10,
  },
  boxContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 10,
  },
  box: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 4,
  },
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => (
  <View style={styles.container}>
    <View style={styles.block}>
      <View style={styles.block1}>
        <DisplayImage props={ownerAvatarUrl} />
      </View>
      <View style={styles.block2}>
        <View>
          <Text fontWeight="bold" fontSize="subheading">
            {fullName}
          </Text>
          <Text style={styles.textContainer} fontSize="subheading">
            {description}
          </Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text color="textThirdly">{language}</Text>
          </View>
        </View>
      </View>
    </View>
    <Table
      stargazersCount={stargazersCount}
      forksCount={forksCount}
      ratingAverage={ratingAverage}
      reviewCount={reviewCount}
    />
  </View>
);

export default RepositoryItem;

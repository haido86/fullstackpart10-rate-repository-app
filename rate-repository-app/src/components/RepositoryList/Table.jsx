import { StyleSheet, View } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  tableContainer: {
    display: 'flex',
    padding: 5,
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColumnRegular: {
    flex: 1,
    height: 25,
    padding: 2,
    textAlign: 'center',
  },
});

const Table = ({ stargazersCount, forksCount, ratingAverage, reviewCount }) => {
  return (
    <View>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={styles.tableColumnRegular}
          >
            {`${
              Math.round((stargazersCount / 1000 + Number.EPSILON) * 10) / 10
            }k`}
          </Text>
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={styles.tableColumnRegular}
          >
            {`${Math.round((forksCount / 1000 + Number.EPSILON) * 10) / 10}k`}
          </Text>
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={styles.tableColumnRegular}
          >
            {ratingAverage}
          </Text>
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={styles.tableColumnRegular}
          >
            {reviewCount}
          </Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableColumnRegular}>Stars</Text>
          <Text style={styles.tableColumnRegular}>Forks</Text>
          <Text style={styles.tableColumnRegular}>Rating</Text>
          <Text style={styles.tableColumnRegular}>Review</Text>
        </View>
      </View>
    </View>
  );
};

export default Table;

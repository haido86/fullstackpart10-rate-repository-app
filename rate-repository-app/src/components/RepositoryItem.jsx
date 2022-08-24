import { Text, View } from "react-native";

const RepositoryItem = ({ 
    fullName,
    description,
    language,
    forksCount, 
    stargazersCount,
    ratingAverage,
    reviewCount
  }) => (
    <View >
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
      <Text>Review: {reviewCount}</Text>
    </View>
  );

  export default RepositoryItem;
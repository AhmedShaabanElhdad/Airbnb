
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import GuestScreen from './screen/GuestScreen';
import PostScreen from './screen/PostScreen';
import SearchSuggestionScreen from './screen/SearchSuggestionScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <PostScreen></PostScreen> */}
      {/* <SearchSuggestionScreen></SearchSuggestionScreen> */}
      <GuestScreen></GuestScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:StatusBar.currentHeight
  },
});





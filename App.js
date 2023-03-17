
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import PostScreen from './screen/PostScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PostScreen></PostScreen>
    
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





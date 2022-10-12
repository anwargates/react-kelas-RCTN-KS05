import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img}
        source={{
          uri: 'https://www.shareicon.net/data/245x256/2016/07/08/117367_logo_512x512.png'
        }} />
      <Text style={styles.txt}>Mari belajar react native</Text>
      <Button
      title='Click Me'
      color="blue"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30
  },
  img: {
    height: 100,
    width: 100
  }
});

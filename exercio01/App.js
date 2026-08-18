import { StyleSheet, Text, View, Image, Button } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>
      Kaio Bolsoni
      </Text>
      <Text style={styles.paragraft}> 23 Anos Ads </Text>
       <Image 
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJT8pBSKutBiqCZmT7fXiTiOCud_v71L94GxzqmvP6Q&s=10' }} 
      style={{ width: 330, height: 250 }} 
    />
      <Button title="Clique aqui GRATIS"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 6,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "green"
  },
    paragraft: {
    margin: 6,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: "red",
  },
});

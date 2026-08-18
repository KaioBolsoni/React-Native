import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch
} from 'react-native';

import { Card } from 'react-native-paper';
import { useState } from 'react';

export default function App() {

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Qjg0skoTIy-QOLdsRUn-McNMe3gWhjYtF6R8LAPpBw&s=10'
      }}
      style={{ width: "100%", height: "100%" }}
    >

      <SafeAreaView style={styles.screen}>

        <View style={styles.container}>

          <ScrollView>

            <Card style={styles.card}>
              <Text>
                Recopa Sul-Americana: 2024
              </Text>

              <Switch
                value={switch1}
                onValueChange={setSwitch1}
                trackColor={{
                  false: '#767577',
                  true: '#81b0ff'
                }}
              />
            </Card>


            <Card style={styles.card}>
              <Text>
                Copa Libertadores da América: 2023
              </Text>

              <Switch
                value={switch2}
                onValueChange={setSwitch2}
                trackColor={{
                  false: '#767577',
                  true: '#81b0ff'
                }}
              />
            </Card>


            <Card style={styles.card}>
              <Text>
                Copa do Brasil: 2007
              </Text>
              <Switch
                value={switch3}
                onValueChange={setSwitch3}
                trackColor={{
                  false: '#767577',
                  true: '#81b0ff'
                }}
              />
            </Card>

          </ScrollView>

        </View>

      </SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 300,
    backgroundColor: '#ecf0f1',
    borderRadius: 20,
    padding: 20,
  },

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    padding: 15,
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});

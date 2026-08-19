import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SectionList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const DATA = [
  {
    title: 'Principais Jogadores',
    data: ['Fred', 'Cano', 'Ganso'],
  }
];

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Qjg0skoTIy-QOLdsRUn-McNMe3gWhjYtF6R8LAPpBw&s=10'
      }}
      style={styles.background}
    >
      <View style={styles.screen}>
       
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardContainer}
        >
          <View style={styles.container}>
            
            <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
              )}
              style={styles.list}
            />

            <Text style={styles.title}>Buscar Jogadores</Text>
            
            <TextInput 
              style={styles.input}
              placeholder="Digite o nome do jogador..."
              placeholderTextColor="#f1c40f"
            />

          </View>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%", 
    height: "100%",
  },
  screen: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    maxHeight: 450,
    backgroundColor: '#ecf0f1',
    borderRadius: 20,
    padding: 20,
  },
  list: {
    flexGrow: 0, 
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 2,
    marginLeft: 10,
  },
  title: {
    marginVertical: 15,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "green",
  },
  input: {
    backgroundColor: '#c0392b',
    padding: 10,
    borderRadius: 8,
    color: 'white',
    fontSize: 16,
  },
});
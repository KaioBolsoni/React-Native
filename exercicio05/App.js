import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Button,
  ActivityIndicator
} from 'react-native';

const DATA = [
  { id: '1', nome: 'Fabio' },
  { id: '2', nome: 'Marcao' },
  { id: '3', nome: 'Martineli' }
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(false);
    }, 1500);
  };

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
            <Text style={styles.title}>Principais Jogadores</Text>
            
            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Text style={styles.item}>{item.nome}</Text>}
              style={styles.list}
            />

            <Button 
              title="Buscar Jogadores" 
              onPress={() => setModalVisible(true)} 
              color="#27ae60" 
            />
          </View>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent={true} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.title}>Nova Busca</Text>
              
              <TextInput 
                style={styles.input}
                placeholder="Digite o nome do jogador..."
                placeholderTextColor="#f1c40f"
              />

              {loading ? (
                <ActivityIndicator size="large" color="#c0392b" style={styles.loader} />
              ) : (
                <View style={styles.buttonGroup}>
                  <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#7f8c8d" />
                  <Button title="Confirmar" onPress={handleSearch} color="#c0392b" />
                </View>
              )}
            </View>
          </View>
        </Modal>
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
    marginBottom: 20,
  },
  item: {
    fontSize: 16,
    paddingVertical: 5,
    marginLeft: 10,
    fontWeight: 'bold',
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
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#ecf0f1',
    borderRadius: 20,
    padding: 20,
  },
  loader: {
    marginVertical: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
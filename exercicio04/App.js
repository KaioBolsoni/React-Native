import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  SectionList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const DATA = [
  {
    title: 'Principais Jogadores',
    data: ['Fred', 'Cano', 'Ganso'],
  }];

export default function App() {

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
            <SectionList
               sections={DATA}
               keyExtractor={(item) => item}
               renderItem={({ item }) => <Text>{item}</Text>}
               renderSectionHeader={({ section }) => (
                <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
                )}
            />

            <Text style={styles.title} > Buscar Jodores </Text>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height' }>
            <TextInput style={styles.input}
                  placeholder="Digite sua senha"
              />
            </KeyboardAvoidingView>

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

  title:{
    margin: 15,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "green"
  },
  input:{
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 8
    
  },

});

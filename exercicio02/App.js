import { StyleSheet, Text, View, ImageBackground, SafeAreaView,TextInput, Pressable } from 'react-native';



export default function App() {
  return (
    <ImageBackground 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYOxJ0ohbJvdSQuPlvDAKdMHP5UmG1jDHNQibJwQk9g&s=10'  }}
        style={{ width: "100%", height: "100%" }}
     >
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.text}>Email:</Text>
            <TextInput style={styles.input}
                placeholder="Digite seu email"
            />
          <Text style={styles.text}>Senha:</Text>
            <TextInput style={styles.input}
                  placeholder="Digite sua senha"
              />

          <Pressable style={styles.press}>

 <Text>Confirmar</Text>
</Pressable>


        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 200,
    backgroundColor: '#ecf0f1',
    borderRadius: 20,
    padding: 20,
  },
  
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 16,
    fontWeight: '500',
  },
  input:{
    backgroundColor: 'green',
    padding: 3,
    borderRadius: 8
    
  },
  press:{
    backgroundColor: 'purple',
    padding: 3,
    borderRadius: 8
    
  }

});

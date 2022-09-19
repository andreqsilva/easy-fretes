import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View>
          <Image style={styles.logo} source={require('./assets/Topo.png')}/>
      </View>

      <StatusBar style="auto" />

      <View>
        <Image style={styles.frame} source={require('./assets/Frame1.png')}/>
      </View>
    
      <TouchableOpacity style={styles.button}>
        <Text style={styles.letra}>Cadastrar</Text>
      </TouchableOpacity>
      
      <View><Text style={styles.letra2}>Entrar</Text></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 197, 110, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  logo:
  {
    width: 350,
    height: 180,
    marginRight: 10,
    paddingBottom: 180,
  },

  frame:
  {
    width: 380,
    marginTop: 70,
  },


  letra:
  {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },

  letra2:
  {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    textDecorationLine: 'underline'
  },

  button:
  {
    backgroundColor: 'rgba(255, 108, 1, 1)',
    color: '#fff',
    width: 350,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 55,
    marginBottom: 180,
    marginTop: 90,
    shadowColor: 'black',
    elevation: 3,
  },

});

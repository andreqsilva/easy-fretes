import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity,} from 'react-native';
import { css } from '../assets/css/Css';

export default function Cadastro(props) {

  return (
    <View style={css.container}>
      <View style={css.initial_cadastro}>
        <View>
            <Image style={css.logo} source={require('../assets/img/topo.png')}/>
        </View>

      <StatusBar style="auto" />
        <View>
          <Image style={css.frame} source={require('../assets/img/frame1.png')}/>
        </View>

        <TouchableOpacity
          style={css.button}
          onPress={() => props.navigation.navigate('AreaRestrita')}
        >
          <Text style={css.letra}>Cadastrar</Text>
        </TouchableOpacity>

        <View>
          <Text style={css.letra2}>Entrar</Text>
        </View>
    </View>
  </View>
  );

}

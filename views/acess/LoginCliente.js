import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity,} from 'react-native';
import { css } from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginCliente({navigation}) {

  return (
    <SafeAreaView style={[css.container, css.initial_cadastro]}>

      <View style={css.back_menu}>
        <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
          <Icon name='arrow-left' size={32} color='black' />
        </TouchableOpacity>
      </View>
      <View style={css.login_logomarca}>
          <Image style={css.logo} source={require('../../assets/img/topo.png')}/>
      </View>

      <StatusBar style="auto" />
      <View>
        <Image style={css.frame} source={require('../../assets/img/frame1.png')}/>
      </View>

      <TouchableOpacity
        style={css.button}
        onPress={() => navigation.navigate('Opcao')}
      >
        <Text style={css.letra}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>navigation.navigate('Entrar')}
        style={{marginTop: 50}}
      >
        <Text style={css.letra2}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}

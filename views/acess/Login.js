import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity,} from 'react-native';
import { css } from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../assets/components/MenuAcess';

export default function Login(props) {

  return (
    <View style={[css.container, css.initial_cadastro]}>
      <MenuAcess navigation={props.navigation} />

      <View style={css.login_logomarca}>
          <Image style={css.logo} source={require('../../assets/img/topo.png')}/>
      </View>

      <StatusBar style="auto" />

      {/*<View>
        <Image style={css.frame} source={require('../../assets/img/frame1.png')}/>
      </View>*/}

      <Text style={{
        color: 'white',
        marginTop: 20,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
        Faça sua mudança {'\n'} de maneira simples e segura
      </Text>

      <TouchableOpacity
        style={css.button}
        onPress={()=>props.navigation.navigate('Opcao', {type: props.route.params.type})}
      >
        <Text style={css.letra}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>props.navigation.navigate('Entrar', {type: props.route.params.type})}
        style={{marginTop: 20}}
      >
        <Text style={[css.letra, {textDecorationLine: 'underline'}]}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

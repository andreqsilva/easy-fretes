import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import { css } from '../../assets/css/Css';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuAcess from '../../assets/components/MenuAcess';

export default function EscolhaLogin(props) {
    return (
      <View style={[css.container, css.initial_cadastro]}>

          <View style={[css.login_logomarca, {marginTop: 84}]}>
            <Image style={css.logo} source={require('../../assets/img/topo.png')}/>
          </View>

          <StatusBar style="auto" />

              {/*<View>
                <Image style={css.frame} source={require('../../assets/img/frame1.png')}/>
              </View>*/}

              <Text style={{
                color: 'white',
                marginTop: 30,
                fontSize: 28,
                fontWeight: 'bold',
                textAlign: 'center',
                //textShadowColor: '#000',
                //textShadowOffset: { width: 0.5, height: 0.5 },
                //textShadowRadius: 0.4,
              }}>
                Faça sua mudança {'\n'} de maneira simples e segura
              </Text>

              <TouchableOpacity
                onPress={()=>props.navigation.navigate('Login', {type: 1})}
                style={[css.button2]}>
                <Text style={css.letra}>SOU TRANSPORTADOR</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={css.button2}
                onPress={()=>props.navigation.navigate('Login', {type: 0})}>
                <Text style={css.letra}>SOU CLIENTE</Text>
              </TouchableOpacity>
        </View>
      );
}

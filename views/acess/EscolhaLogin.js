import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import { css } from '../../assets/css/Css';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuAcess from '../../assets/components/MenuAcess';

export default function EscolhaLogin(props) //CLIENTE OU TRANSPOTADOR
{
    return (
        <View style={[css.container, css.initial_cadastro]}>

          <View style={{top: 48}}>
            <View style={[css.login_logomarca]}>
              <Image style={css.logo} source={require('../../assets/img/topo.png')}/>
            </View>
          </View>

            <StatusBar style="auto" />
              <View>
                <Image style={css.frame} source={require('../../assets/img/frame1.png')}/>
              </View>

              <TouchableOpacity style={[css.button2]}>
                <Text style={css.letra}>SOU TRANSPOTADOR</Text>
              </TouchableOpacity>

              <TouchableOpacity style={css.button2} onPress={() => props.navigation.navigate('LoginCliente')}>
                <Text style={css.letra}>SOU CLIENTE</Text>
              </TouchableOpacity>
        </View>
      );
}

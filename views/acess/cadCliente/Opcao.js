import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button,
         TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Opcao ({navigation}) {

  return (

    <SafeAreaView style={[css.container, css.initial_cadastro, {flex: 1}]}>

      <View style={css.back_menu}>
        <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
          <Icon name='arrow-left' size={32} color='black' />
        </TouchableOpacity>
      </View>

      <View>
        <SafeAreaView>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '700', marginBottom: 50}}>Como deseja se cadastrar ?</Text>
        </SafeAreaView>

        <StatusBar style="auto" />

          <View style={css.login_form}>

            <View
              style={
                [css.alinhamentoRow, css.login_input, {
                 borderTopRightRadius: 10,
                 borderTopLeftRadius: 10,
                 width: 320
                 //backgroundColor: 'green'
               }]}>

              <Image
                style={[css.icon, {backgroundColor:'rgba(255, 197, 110, 1)'}]}
                source={require('../../../assets/img/vetorEmail.png')}
              />

                <TouchableOpacity style={css.login_input}><Text style={{color: '#FF6C01', fontSize: 17}}>Cadastrar com e-mail</Text></TouchableOpacity>
                
              </View>

              <View
                style={[css.alinhamentoRow, css.login_input,{
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10, marginBottom: 50}]}>

                <Image
                  style={[css.icon, {backgroundColor:'blue', borderRadius: 22}]}
                  source={require('../../../assets/img/vetorFacebook.png')}
                />

                <TouchableOpacity style={css.login_input}><Text style={{color: '#FF6C01', fontSize: 17}}>Cadastrar com Facebook</Text></TouchableOpacity>

              </View>
            </View>

            <TouchableOpacity>
              <View>
                <Text style={[css.letra2, {textAlign: 'center'}]}>Já possuí cadastro?</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <Text
                  onPress={()=>navigation.navigate('Entrar')}
                  style={[css.letra2, {
                  textAlign: 'center',
                  color: 'blue',
                  textDecorationLine: 'underline',
                  fontSize: 17,
                  marginTop: 5}]}>Entrar</Text>
              </View>
            </TouchableOpacity>

          </View>
    </SafeAreaView>
  );

}

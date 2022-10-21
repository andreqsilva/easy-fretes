import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button,
         TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import MenuAcess from '../../../assets/components/MenuAcess';

export default function Opcao ({navigation}) {

  return (

    <SafeAreaView style={[css.container, css.initial_cadastro]}>

      <MenuAcess navigation={navigation}/>

      <View style={{marginTop:40}}>

          <Text
            style={{color: '#fff',
            fontSize: 20,
            fontWeight: '700',
            marginBottom: 30}}>Como deseja se cadastrar ?</Text>

        <StatusBar style="auto" />

        <View style={css.login_form}>
          <View
            style={
              [css.alinhamentoRow, css.login_input, {
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                width: 350,
                height: 50,
                marginBottom:2
                //backgroundColor: 'green'
              }]}>

          <Image
            style={[css.icon]}
            source={require('../../../assets/img/vetorEmail.png')}
          />

          <TouchableOpacity
            onPress={()=>navigation.navigate('Cc1')}
          >
            <Text style={{color: '#FF6C01', fontSize: 17, left:5}}
            >Cadastrar com e-mail</Text>
          </TouchableOpacity>

          </View>
            <View
              style={[css.alinhamentoRow, css.login_input,{
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                marginBottom: 50}]}>

              <Image
                style={[css.icon]}
                source={require('../../../assets/img/vetorFacebook.png')}
              />

              <TouchableOpacity>
                <Text style={{color: '#FF6C01', fontSize: 17, left:5}}>Cadastrar com Facebook</Text>
              </TouchableOpacity>

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
                  textDecorationLine: 'underline',
                  fontSize: 17,
                  marginTop: 5}]}>Entrar</Text>
              </View>
            </TouchableOpacity>

          </View>
    </SafeAreaView>
  );

}

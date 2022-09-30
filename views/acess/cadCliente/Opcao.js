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
                 //backgroundColor: 'green'
               }]}>

              <Image
                style={[css.icon, {backgroundColor:'rgba(255, 197, 110, 1)'}]}
                source={require('../../../assets/img/vetorEmail.png')}
              />

              <TextInput
                    placeholder='Cadastrar com e-mail'
                    placeholderTextColor='#FF6C01'
                    style={css.login_input}/>
                </View>
              <View
                style={[css.alinhamentoRow, css.login_input,{
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10, marginBottom: 50}]}>

                <Image
                  style={[css.icon, {backgroundColor:'blue'}]}
                  source={require('../../../assets/img/vetorFacebook.png')}
                />

                <TextInput
                  placeholder='Cadastrar com Facebook'
                  placeholderTextColor='#FF6C01'
                  style={css.login_input}/>
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
                    fontSize: 15,
                    marginTop: 5}]}>Entrar</Text>
                </View>
              </TouchableOpacity>

            </View>
    </SafeAreaView>
  );

}

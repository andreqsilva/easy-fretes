import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Cc3 (props) {

  return (
      <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

        <View style={css.back_menu}>
          <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
              <Icon name='arrow-left' size={32} color='black' />
          </TouchableOpacity>
        </View>

        <View style={[css.container_direction, {marginTop: 40}]}>

          <View>
              <Text style={[css.letra, {fontSize: 22}]}>Qual a sua data de nascimento ?</Text>
              <TextInput placeholder='  DD/MM/AAAA' placeholderTextColor='#FF6C01' style={[css.cad_dados, css.container_cadastro]}/>
          </View>

          <KeyboardAvoidingView>
            <TouchableOpacity onPress={() => props.navigation.navigate('Cc4')}>  
              <Image source={require('../../../assets/img/btnNext.png')}/>  
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    );
}  
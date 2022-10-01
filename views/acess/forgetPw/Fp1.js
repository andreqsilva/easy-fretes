import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Fp1 (props) {

    return (
        <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

            <View style={css.back_menu}>
                <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
                    <Icon name='arrow-left' size={32} color='black' />
                </TouchableOpacity>
            </View>

            <View style={[css.container_direction, {marginTop: 40}]}>

                <Text style={[css.letra, {fontSize: 30}]}>Esqueci minha senha</Text>
                
                <View style={{marginTop: 30}}>
                    <Text style={[css.letra, {fontSize: 20, textAlign: 'center'}]}>Qual é o seu email cadastrado ?</Text>

                    <TextInput placeholder='  Digite seu e-mail' placeholderTextColor='#FF6C01' style={[css.cad_dados, css.container_cadastro]}/>
                </View>

                    
                <TouchableOpacity onPress={() => props.navigation.navigate('Fp2')}> 
                    <KeyboardAvoidingView>
                        <Image source={require('../../../assets/img/btnNext.png')}/>
                    </KeyboardAvoidingView>
                    
                </TouchableOpacity>

            </View>

        </SafeAreaView>
      );
}  
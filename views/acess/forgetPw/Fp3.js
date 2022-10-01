import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Fp3 (props) {

    return (
        <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

            <View style={css.back_menu}>
                <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
                    <Icon name='arrow-left' size={32} color='black' />
                </TouchableOpacity>
            </View>

            <View style={[css.container_direction, {marginTop: 40}]}>
                    
                <Text style={[css.letra, {fontSize: 25}]}>Insira uma nova senha agora</Text>
                    
                <View style={{marginTop: 40, width: 340}}>
                    <Text style={[css.letra, {fontSize: 13, textAlign: 'center'}]}>Combine pelo menos 8 caracteres, incluindo letras, números e caracteres especiais para garantir uma melhor segurança.</Text>
                </View>

                <TextInput placeholder='  Insira sua senha' placeholderTextColor='#FF6C01' style={[css.cad_dados, css.container_cadastro, {borderRadius: 8}]}/>

                <TextInput placeholder='  Confirme a nova senha' placeholderTextColor='#FF6C01' style={[css.cad_dados, css.container_cadastro, {borderRadius: 8}]}/>
                    
                <TouchableOpacity onPress={() => props.navigation.navigate('Fp3')}> 
                    <KeyboardAvoidingView>
                        <Image source={require('../../../assets/img/btnNext.png')}/>
                    </KeyboardAvoidingView>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
      );
}  
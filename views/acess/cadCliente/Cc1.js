import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Cc1 (props) {

    return (
        <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

            <View style={css.back_menu}>
                <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
                    <Icon name='arrow-left' size={32} color='black' />
                </TouchableOpacity>
            </View>

            <View style={[css.container_direction, {marginTop: 40}]}>
    
                <View>

                    <Text style={[css.letra, {fontSize: 22}]}>Qual o seu e-mail ?</Text>

                    <TextInput placeholder='  Digite seu e-mail' placeholderTextColor='#FF6C01' style={[css.cad_dados, css.container_cadastro]}/>
                </View>

                    
                <TouchableOpacity onPress={() => props.navigation.navigate('Cc2')}> 
                    <KeyboardAvoidingView>
                        <Image source={require('../../../assets/img/btnNext.png')}/>
                    </KeyboardAvoidingView>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
      );
}  
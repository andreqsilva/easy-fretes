import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Cc2 (props) {

    return (

        <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

            <View style={css.back_menu}>
                <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
                    <Icon name='arrow-left' size={32} color='black' />
                </TouchableOpacity>
            </View>

            <View style={[css.container_direction, {marginTop: 40}]}>    

                <View style={css.mensagem}>
                    <Text style={[css.letra, {fontSize: 22}]}>Qual o seu nome ?</Text>
                    <TextInput placeholder='  Digite seu nome' placeholderTextColor='#FF6C01' style={[css.cad_dados, css.container_cadastro]}/>
                    <TextInput placeholder='  Digite seu sobrenome' placeholderTextColor='#FF6C01' style={[css.container_cadastro, {marginTop: 3}]}/>
                </View>

                <TouchableOpacity onPress={() => props.navigation.navigate('Cc3')}>  
                    <View>
                        <Image source={require('../../../assets/img/btnNext.png')}/>
                    </View>
                </TouchableOpacity>

            </View>

        </SafeAreaView>



        // <View style={css.initial_cadastro}>
    
        //     <View style={css.mensagem}>
        //         <Text style={css.letra}>Qual o seu nome ?</Text>
        //         <TextInput placeholder='  Digite seu nome' placeholderTextColor='#FF6C01' style={[css.cad_dados, css.container_cadastro]}/>
        //         <TextInput placeholder='  Digite seu sobrenome' placeholderTextColor='#FF6C01' style={[css.container_cadastro]}/>
        //     </View>

        //     <TouchableOpacity>  
        //         <View>
        //             <Image style={{marginBottom: 130}} source={require('../../../assets/img/btnNext.png')}/>
        //         </View>
        //     </TouchableOpacity>
            
        // </View>
      );
}  
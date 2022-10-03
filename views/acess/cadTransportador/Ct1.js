import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { Picker } from '@react-native-picker/picker'; //erro com a biblioteca, I dont know why :(


export default function Ct1 (props){

    // const [cursos, setCursos] = useState(['A', 'B'])
    // const [cursoSelecionado, setCursoSelecionado] = useState([])
    
    return(

        <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

            <View style={css.back_menu}>
                <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
                    <Icon name='arrow-left' size={32} color='black' />
                </TouchableOpacity>
            </View>
            
            <View style={{width: 350, marginTop: 30}}>
                <Text style={[css.letra2, {fontSize: 21, fontWeight: '600'}]}>Agora precisaremos saber algumas informações sobre a sua experiência com transportes, tudo bem?</Text>

                <View style={{marginTop: 50}}>

                    <Text style={[css.letra2, {fontSize: 18}]}>Há quanto tempo você trabalha com transportes?</Text>

                    <View style={[css.alinhamentoRow, {justifyContent: 'space-around'}]}>
                        <Text style={[css.letra2, {fontSize: 18}]}>Anos:</Text>

                        <TextInput placeholderTextColor='#FF6C01' style={[css.cad_dados, {backgroundColor: '#fff', width: 100, borderRadius: 10}]}/>
                        {/* <Picker
                            selectedValeu="Selecione"
                            onValueChange={(itemValue) => setCursoSelecionado(itemValue)}
                        >
                            {
                                cursos.map(cr => {return <Picker.Item label={cr} value={cr}/>})
                            }
                        </Picker>                     */}

                        {/* <Picker>
                            <Picker.Item label="teste" value='0'></Picker.Item>
                        </Picker> */}
                    </View>

                    <Text style={[css.letra2, {fontSize: 18}]}>Qual a categoria da sua habilitação?</Text>

                    <View style={[css.alinhamentoRow, {justifyContent: 'space-around'}]}>
                        <Text style={[css.letra2, {fontSize: 18}]}>Selecione:</Text>

                        <TextInput placeholderTextColor='#FF6C01' style={[css.cad_dados, {backgroundColor: '#fff', width: 100, borderRadius: 10, marginRight: 12}]}/>
                    </View>

                </View>
            </View>

            <KeyboardAvoidingView>
                <TouchableOpacity onPress={() => props.navigation.navigate('Ct2')}>  
                        <Image source={require('../../../assets/img/btnNext.png')}/>  
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}
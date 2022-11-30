import { StyleSheet, Text, View, Image, TextInput, Button,
    TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Modal} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../assets/components/MenuAcess';
import Checkbox from 'expo-checkbox';


export default function questCancel ({navigation}) {

    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);

    return (

        <SafeAreaView style={[css.initial_cadastro_white]}>

            <View style={{
                height: '20%',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                marginTop: 25
                }}>
                <Image style={{paddingVertical: 5, right: 5}}
                source={require('../../assets/img/frame-7.png')}
                />
                <Image
                source={require('../../assets/img/truck-icon.png')}
                style={{
                    alignSelf: 'flex-end',
                    bottom: 80,
                    left: 95
                }}
                />
            </View>

            <View>
                <Text style={[css.letra3, {color: 'black'}]}>Reserva de frete cancelada</Text>
            </View>

            <Text style={[{textAlign: 'center', marginTop: 25, fontSize: 19, maxWidth: '70%', fontWeight: '500'}]}>Poderia informar o motivo do cancelamento ?</Text>

            <Text style={{marginTop: 20, fontSize: 17, fontWeight: '500'}}>Selecione as opções que mais se aproximam</Text>

            <View style={{marginTop: 20}}>
            
                <View style={[css.alinhamentoRow, css.container_checkbox, {alignSelf: 'center', marginTop: 10, maxWidth: '60%'}]}>

                    <Checkbox style={{borderColor: 'black'}} value={isChecked} onValueChange={setChecked} 
                                    color={isChecked ? '#FFC100' : undefined}/>
                    <Text style={[css.text_checkbox, {marginLeft: 10, fontWeight: '500'}]}>Reservei por engano.</Text>

                </View>

                <View style={[css.alinhamentoRow, css.container_checkbox, {alignSelf: 'center', marginTop: 10}]}>

                    <Checkbox style={{marginLeft: 125, borderColor: 'black'}} value={isChecked2} onValueChange={setChecked2} 
                                    color={isChecked2 ? '#FFC100' : undefined}/>
                    <Text style={[css.text_checkbox, {marginLeft: 10, width: 300, fontWeight: '500'}]}>O motorista pediu alteração na data ou horário</Text>

                </View>

                <View style={[css.alinhamentoRow, css.container_checkbox, {alignSelf: 'center', marginTop: 10, marginLeft: 23}]}>

                    <Checkbox style={{flexDirection: 'column', borderColor: 'black'}} value={isChecked3} onValueChange={setChecked3} 
                                    color={isChecked3 ? '#FFC100' : undefined}/>
                    <Text style={[css.text_checkbox, {marginLeft: 10, fontWeight: '500'}]}>Imprevisto ou problema pessoal.</Text>

                </View>

                <View style={[css.alinhamentoRow, css.container_checkbox, {alignSelf: 'center', marginTop: 10, marginLeft: -20}]}>

                    <Checkbox style={{marginLeft: 65, flexDirection: 'column', borderColor: 'black'}} value={isChecked4} onValueChange={setChecked4} 
                                    color={isChecked4 ? '#FFC100' : undefined}/>
                    <Text style={[css.text_checkbox, {marginLeft: 10, fontWeight: '500'}]}>O motorista me pediu para cancelar.</Text>

                </View>

                <View style={[css.alinhamentoRow, css.container_checkbox, {alignSelf: 'center', marginTop: 10}]}>

                    <Checkbox style={{marginLeft: 125, borderColor: 'black'}} value={isChecked5} onValueChange={setChecked5} 
                                    color={isChecked5 ? '#FFC100' : undefined}/>
                    <Text style={[css.text_checkbox, {marginLeft: 10, width: 300, fontWeight: '500'}]}>Dificuldade de comunicação com o motorista.</Text>

                </View>
            </View>

            <View style={{}}>
                <TouchableOpacity style={[css.button, {maxWidth: '70%', borderRadius: 8, backgroundColor: '#ff8c00'}]}>
                    <Text style={css.letra}>Enviar</Text>
                </TouchableOpacity>
            </View>
                
        </SafeAreaView>

    );
}

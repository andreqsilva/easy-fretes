import { StyleSheet, Text, View, Image, TextInput, Button,
    TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../../assets/components/MenuAcess';
import Checkbox from 'expo-checkbox';


export default function Cv1 ({navigation}) {
    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
return (

    <SafeAreaView style={[css.initial_cadastro_white]}>

        <View style={css.alinhamentoRow}>
            <MenuAcess navigation={navigation}/>
        </View>

        <View style={[css.container_direction, {marginTop: 40}]}>
            <Text style={[css.letra, css.text_veiculos]}>Qual o tipo do seu veículo?</Text>

            <View style={{flexDirection: 'column'}}>    

                <View style={[css.alinhamentoRow, css.container_checkbox]}>
                    <Checkbox style={css.checkbox} value={isChecked} onValueChange={setChecked} 
                                    color={isChecked ? '#FFC100' : undefined}/>
                    <Text style={[css.text_checkbox]}>Aberto</Text>
                </View>

                <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
                    <Checkbox style={css.checkbox} disable value={isChecked2} onValueChange={setChecked2}
                                color={isChecked2 ? '#FFC100' : undefined}/>
                    <Text style={[css.text_checkbox]}>Fechado (baú)</Text>
                </View>

            </View>
        </View>
        
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1, justifyContent:'flex-end'}}
        >

            <TouchableOpacity
                style={{bottom:70}}
                onPress={()=>Cv2()}> 
                <KeyboardAvoidingView>
                <Image source={require('../../../assets/img/btnNext.png')}/>
                </KeyboardAvoidingView>
            </TouchableOpacity>

        </KeyboardAvoidingView>

    </SafeAreaView>

    );
}

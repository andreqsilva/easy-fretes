import { StyleSheet, Text, View, Image, TextInput, Button,
    TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView} from 'react-native';
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
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);
    const [isChecked7, setChecked7] = useState(false);
    const [isChecked8, setChecked8] = useState(false);
    const [isChecked9, setChecked9] = useState(false);

return (

    <SafeAreaView style={[css.initial_cadastro_white]}>

        <View style={css.alinhamentoRow}>
            <MenuAcess navigation={navigation}/>
        </View>

        <View style={[css.container_direction, {marginTop: 40}]}>
            <Text style={[css.letra, css.text_veiculos, {width: 360, marginStart: 90}]}>Qual a marca do veículo?</Text>

            <View style={{flexDirection: 'column', maxWidth: '70%', marginRight: 60}}>    

                <ScrollView style={{maxHeight: 400, marginTop: 40}} showsVerticalScrollIndicator={false}>

                    <View style={[css.alinhamentoRow, css.container_checkbox]}>
                        <Checkbox style={css.checkbox} value={isChecked} onValueChange={setChecked} 
                                        color={isChecked ? '#FFC100' : undefined}/>
                        <Text style={[css.text_checkbox]}>Fiat</Text>
                    </View>

                    <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
                        <Checkbox style={css.checkbox} disable value={isChecked2} onValueChange={setChecked2}
                                    color={isChecked2 ? '#FFC100' : undefined}/>
                        <Text style={[css.text_checkbox]}>Hyundai</Text>
                    </View>

                    <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
                        <Checkbox style={css.checkbox} disable value={isChecked3} onValueChange={setChecked3}
                                    color={isChecked3 ? '#FFC100' : undefined}/>
                        <Text style={[css.text_checkbox]}>Iveco</Text>
                    </View>

                    <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
                        <Checkbox style={css.checkbox} disable value={isChecked4} onValueChange={setChecked4}
                                    color={isChecked4 ? '#FFC100' : undefined}/>
                        <Text style={[css.text_checkbox]}>Volkswagen</Text>
                    </View>

                    <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
                        <Checkbox style={css.checkbox} disable value={isChecked5} onValueChange={setChecked5}
                                    color={isChecked5 ? '#FFC100' : undefined}/>
                        <Text style={[css.text_checkbox]}>Kia</Text>
                    </View>

                    <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
                        <Checkbox style={css.checkbox} disable value={isChecked6} onValueChange={setChecked6}
                                    color={isChecked6 ? '#FFC100' : undefined}/>
                        <Text style={[css.text_checkbox]}>Renault</Text>
                    </View>

                    <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
                        <Checkbox style={css.checkbox} disable value={isChecked7} onValueChange={setChecked7}
                                    color={isChecked7 ? '#FFC100' : undefined}/>
                        <Text style={[css.text_checkbox, {width: 130}]}>Mercedes-Benz</Text>
                    </View>

                    <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
                        <Checkbox style={css.checkbox} disable value={isChecked8} onValueChange={setChecked8}
                                    color={isChecked8 ? '#FFC100' : undefined}/>
                        <Text style={[css.text_checkbox]}>Chevrolet</Text>
                    </View>

                    <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
                        <Checkbox style={css.checkbox} disable value={isChecked9} onValueChange={setChecked9}
                                    color={isChecked9 ? '#FFC100' : undefined}/>
                        <Text style={[css.text_checkbox]}>Outro</Text>
                    </View>
                </ScrollView>

            </View>
        </View>
        
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1, justifyContent:'flex-end'}}
        >

            <TouchableOpacity
                style={{bottom:70}}
                onPress={()=>Cv6()}> 
                <KeyboardAvoidingView>
                <Image source={require('../../../assets/img/btnNext.png')}/>
                </KeyboardAvoidingView>
            </TouchableOpacity>

        </KeyboardAvoidingView>

    </SafeAreaView>

    );
}

import { StyleSheet, Text, View, Image, TextInput, Button,
    TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../../assets/components/MenuAcess';
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';


export default function Cv1 ({navigation}) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [selectedValue, setSelectedValue] = useState("java");
return (

    <SafeAreaView style={[css.initial_cadastro_white]}>

        <View style={css.alinhamentoRow}>
            <MenuAcess navigation={navigation}/>
        </View>

        <View style={[css.container_direction, {marginTop: 40}]}>
            <Text style={[css.letra, css.text_veiculos, {fontSize: 28, marginStart: 50, width: 300}]}>Qual o modelo e ano do veículo?</Text>

            <View style={{marginTop: 70}}>
                <TextInput
                    placeholder='Insira o modelo do veículo'
                    placeholderTextColor='black'
                    style={[css.box_input_placa, {fontSize: 15, width: 250}]}/>
            </View>
                
            <View style={[css.alinhamentoRow]}>
                
                <View style={{marginRight: 40, marginLeft: 100}}>
                    <Text style={[css.text_checkbox, {marginTop: 72}]}>Ano</Text>
                </View>
                
                <View style={[css.container_picker]}>
                    <Picker
                    selectedValue={selectedValue}
                    style={[css.picker]}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="1990" value="90" />
                        <Picker.Item label="1991" value="91" />
                        <Picker.Item label="1992" value="92" />
                        <Picker.Item label="1993" value="93" />
                        <Picker.Item label="1994" value="94" />
                        <Picker.Item label="1995" value="95" />
                        <Picker.Item label="1996" value="96" />
                        <Picker.Item label="1997" value="97" />
                        <Picker.Item label="1998" value="98" />
                        <Picker.Item label="1999" value="99" />
                        <Picker.Item label="2000" value="00" />
                        <Picker.Item label="2001" value="01" />
                        <Picker.Item label="2002" value="02" />
                        <Picker.Item label="2003" value="03" />
                        <Picker.Item label="2004" value="04" />
                        <Picker.Item label="2005" value="05" />
                        <Picker.Item label="2006" value="06" />
                        <Picker.Item label="2007" value="07" />
                        <Picker.Item label="2008" value="08" />
                        <Picker.Item label="2009" value="09" />
                        <Picker.Item label="2010" value="10" />
                        <Picker.Item label="2011" value="11" />
                        <Picker.Item label="2012" value="12" />
                        <Picker.Item label="2013" value="13" />
                        <Picker.Item label="2014" value="14" />
                        <Picker.Item label="2015" value="15" />
                        
                    </Picker> 
                </View>
            </View>

        </View>
        
        
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1, justifyContent:'flex-end'}}
        >

            <TouchableOpacity
                style={{bottom:70}}
                onPress={()=>props.navigation.navigate('Cv7')}> 
                <KeyboardAvoidingView>
                <Image source={require('../../../assets/img/btnNext.png')}/>
                </KeyboardAvoidingView>
            </TouchableOpacity>

        </KeyboardAvoidingView>

    </SafeAreaView>

    );
}

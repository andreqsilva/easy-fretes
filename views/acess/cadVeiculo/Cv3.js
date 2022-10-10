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
    
    const [selectedValue, setSelectedValue] = useState("");
return (

    <SafeAreaView style={[css.initial_cadastro_white]}>

        <View style={css.alinhamentoRow}>
            <MenuAcess navigation={navigation}/>
        </View>

        <View style={[css.container_direction, {marginTop: 40}]}>
            <Text style={[css.letra, css.text_veiculos, {fontSize: 25}]}>Qual o peso máximo que seu veículo transporta?</Text>
                
            <View style={[css.container_picker, css.alinhamentoRow]}>
                <Picker
                selectedValue={selectedValue}
                style={[css.picker]}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="3" value="3 T" />
                    <Picker.Item label="6" value="6 T" />
                    <Picker.Item label="9" value="9 T" />
                    <Picker.Item label="12" value="12 T" />
                    <Picker.Item label="15" value="15 T" />
                    <Picker.Item label="18" value="18 T" />
                    <Picker.Item label="21" value="21 T" />
                    <Picker.Item label="24" value="24 T" />
                    <Picker.Item label="27" value="27 T" />
                </Picker> 

                <Text style={[css.text_checkbox]}>Toneladas </Text>
            </View>

        </View>
        
        
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1, justifyContent:'flex-end'}}
        >

            <TouchableOpacity
                style={{bottom:70}}
                onPress={()=>Cv4()}> 
                <KeyboardAvoidingView>
                <Image source={require('../../../assets/img/btnNext.png')}/>
                </KeyboardAvoidingView>
            </TouchableOpacity>

        </KeyboardAvoidingView>

    </SafeAreaView>

    );
}

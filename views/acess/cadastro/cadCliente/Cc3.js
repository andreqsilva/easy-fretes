import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,
         TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';
import { css } from '../../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import MenuAcess from '../../../../assets/components/MenuAcess';
//import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
//import DatePicker from 'react-native-datepicker';

export default function Cc3 (props) {

  const [date,setDate] = useState(new Date());
  const [show,setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };
  const showDatepicker = () => {
    setShow(true);
  };

  console.log(date);

  /*
  <View>
    <View>
      <Button onPress={showDatepicker} title='DD/MM/AAAA' />
    </View>
    {show && (
        <DateTimePicker
          testID='DateTimePicker'
          value={date}
          mode={'date'}
          is24Hours={true}
          display='default'
          onChange={onChange}
        />
    )}
  </View>
  */

  return (

      <View style={[css.initial_cadastro, {flex: 1}]}>

      <MenuAcess navigation={props.navigation}/>

        <View style={[css.login_form, {marginTop: 20, height: '80%'}]}>
          <View>
              <Text style={[css.letra, {fontSize: 22}]}>Qual a sua data de nascimento ?</Text>
              <TextInput
                placeholder='  DD/MM/AAAA'
                placeholderTextColor='#FF6C01'
                onChangeText={text=>setDate(text)}
                style={[css.cad_dados, css.container_cadastro]}/>
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex:1, justifyContent:'flex-end'}}
        >
          <TouchableOpacity style={{bottom: 70}}
            onPress={()=>props.navigation.navigate('Cc4',
                      {email:props.route.params.email,name:props.route.params.name,lastName:props.route.params.lastName})}>
            <Image source={require('../../../../assets/img/btnNext.png')}/>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
    );
}

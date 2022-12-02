import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../../../assets/components/MenuAcess';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Ct5(props) {

  return(
    <View style={[css.initial_cadastro, {flex: 1}]}>
      <MenuAcess navigation={props.navigation}/>

      <View style={{width: 350, marginTop: 20}}>
        <Text style={[css.letra2, {fontSize: 20, fontWeight: '600'}]}>Agora precisaremos que nos envie alguns documentos.</Text>
        <Text style={[css.letra2, {fontSize: 21, fontWeight: '700'}]}>  Essa parte é muito importante !</Text>
      </View>

      <View style={[css.alinhamentoRow, css.anexdoc_Ct2]}>

                {/* <TouchableOpacity><Text style={{fontSize: 17}}>Anexar documento CNH</Text></TouchableOpacity>
                <Image style={[css.icon, {marginLeft: 70}]}source={require('../../../assets/img/expand.png')} /> */}

        <Text style={{fontSize: 17}}>Anexar documento CNH</Text>
        <TouchableOpacity>
          <Image style={[css.icon, {marginLeft: 80}]}source={require('../../../../assets/img/expand.png')}/>
        </TouchableOpacity>

      </View>

      <View style={[css.alinhamentoRow, css.anexdoc_Ct2, {marginTop: 20}]}>
        <Text style={{fontSize: 17}}>Anexe uma selfie com sua CNH</Text>
        <TouchableOpacity>
          <Image style={[css.icon, {marginLeft: 25}]}source={require('../../../../assets/img/expand.png')}/>
        </TouchableOpacity>

      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1, justifyContent:'flex-end'}}
      >
        <TouchableOpacity
          style={{bottom: 70}}
          onPress={()=>props.navigation.navigate('Ct6', {
            email:props.route.params.email, name:props.route.params.name,
            lastName:props.route.params.lastName, years:props.route.params.years,
            category:props.route.params.category
          })}>
          <FontAwesome5 name='arrow-circle-right' size={60} color='white' />
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  )
}

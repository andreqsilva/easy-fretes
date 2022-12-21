import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { css } from '../../../assets/css/Css';

export default function Settings() {

  return (
    <View style={css.container}>
      <View style={{flexDirection: "column"}}>

      <View style={[{marginTop: 20}]}>
        <TouchableOpacity style={[css.alinhamentoRow, {justifyContent: 'space-between'}]}>
          <Text style={{fontSize: 20, marginLeft: 40}}>Aplicações</Text>
          <Image style={{marginRight: 40, height: 35}} source={require('../../../assets/img/expand.png')}/>
        </TouchableOpacity>
      </View>

        <View style={[css.risquinho, {marginTop: 5}]} />

        <View style={[{marginTop: 20}]}>
          <TouchableOpacity style={[css.alinhamentoRow, {justifyContent: 'space-between'}]}>
            <Text style={{fontSize: 20, marginLeft: 40}}>Notificações</Text>
            <Image style={{marginRight: 40, height: 35}} source={require('../../../assets/img/expand.png')}/>
          </TouchableOpacity>
        </View>

        <View style={[css.risquinho, {marginTop: 5}]} />

        <View style={[{marginTop: 20}]}>
          <TouchableOpacity style={[css.alinhamentoRow, {justifyContent: 'space-between'}]}>
            <Text style={{fontSize: 20, marginLeft: 40}}>Redefinir senha</Text>
            <Image style={{marginRight: 40, height: 35}} source={require('../../../assets/img/expand.png')}/>
          </TouchableOpacity>
        </View>

        <View style={[css.risquinho, {marginTop: 5}]} />

        <View style={[{marginTop: 20}]}>
          <TouchableOpacity style={[css.alinhamentoRow, {justifyContent: 'space-between'}]}>
            <Text style={{fontSize: 20, marginLeft: 40}}>Termos de uso</Text>
            <Image style={{marginRight: 40, height: 35}} source={require('../../../assets/img/expand.png')}/>
          </TouchableOpacity>
        </View>

        <View style={[css.risquinho, {marginTop: 5}]} />

        <View style={[{marginTop: 20}]}>
          <TouchableOpacity style={[css.alinhamentoRow, {justifyContent: 'space-between'}]}>
            <Text style={{fontSize: 20, marginLeft: 40}}>Suporte</Text>
            <Image style={{marginRight: 40, height: 35}} source={require('../../../assets/img/expand.png')}/>
          </TouchableOpacity>
        </View>

        <View style={[css.risquinho, {marginTop: 5}]} />

        <View style={[{marginTop: 20}]}>
          <TouchableOpacity style={[css.alinhamentoRow, {justifyContent: 'space-between'}]}>
            <Text style={{fontSize: 20, marginLeft: 40}}>Alterar dados pessoais</Text>
            <Image style={{marginRight: 40, height: 35}} source={require('../../../assets/img/expand.png')}/>
          </TouchableOpacity>
        </View>

        <View style={[css.risquinho, {marginTop: 5}]} />

        <View style={[{marginTop: 20}]}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, marginLeft: 40}}>Sair</Text>
          </TouchableOpacity>
        </View>

        <View style={[{marginTop: 20}]}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, marginLeft: 40}}>Encerrar conta</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

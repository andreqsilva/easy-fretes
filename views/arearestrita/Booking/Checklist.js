import React, { useState, useEffect, Component } from 'react';
import { Text, View, Button, Image, FlatList, ScrollView,
         TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Checkbox from 'expo-checkbox';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
import { css } from '../../../assets/css/Css';

export default function Checklist(props) {

  return(
    <View style={css.container}>
      <MenuAreaRestrita navigation={props.navigation}/>
      <View style={{alignItems: 'center'}}>
        <Text style={[css.letra3, {fontSize: 32, textAlign: 'center', width: 280}]}>Móveis a serem transportados</Text>
        <View style={{alignItems: 'center', width: 310, marginTop: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500', textAlign: 'center'}}>
            Abaixo está listado a quantidade de móveis que serão transportados, confira-os ao iniciar o transporte.
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row',  justifyContent: 'space-between', marginTop: 50}}>
        <Text style={{marginLeft: 30, fontSize: 18, fontWeight: '500'}}>
          Tamanho do móvel
        </Text>

        <Text style={{marginRight: 40,fontSize: 18, fontWeight: '500'}}>
          Qtde.
        </Text>
      </View>

      <ScrollView style={{ display: 'flex', flexDirection: 'column', marginTop: 5}}>
          <View>
            <View style={{flexDirection: 'row',  justifyContent: 'space-between', marginTop: 20, alignItems: 'center'}}>
              <Text style={{marginLeft: 60, fontSize: 18, left: 20}}>Pequeno</Text>
              <View style={[css.itemsSize, {marginRight: 30}]}>
                <Text style={{fontSize: 15}}>{}</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row',  justifyContent: 'space-between', marginTop: 20, alignItems: 'center'}}>
              <Text style={{marginLeft: 60, fontSize: 18, left: 20}}>Médio</Text>
              <View style={[css.itemsSize, {marginRight: 30}]}>
                <Text style={{fontSize: 15}}>{}</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row',  justifyContent: 'space-between', marginTop: 20, alignItems: 'center'}}>
              <Text style={{marginLeft: 60, fontSize: 18, left: 20}}>Grande</Text>
              <View style={[css.itemsSize, {marginRight: 30}]}>
                <Text style={{fontSize: 15}}>{}</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{alignSelf: 'center', marginTop: 45}}>
                <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 30}}>Precisa de ajuda terceirizada?</Text>
              </View>
              <View style={{marginTop: 45, marginRight: 30}}>
                <Checkbox style={css.checkbox}
                />
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{alignSelf: 'center', marginTop: 45}}>
                <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 30}}>Será necessário subir escadas?</Text>
              </View>
              <View style={{marginTop: 45, marginRight: 30}}>
                <Checkbox style={css.checkbox}
                />
              </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00', width: 300}]}>
                <Text style={css.letra}>Confirmar Móveis</Text>
              </TouchableOpacity>
            </View>

          </View>
      </ScrollView>
    </View>
  );
}

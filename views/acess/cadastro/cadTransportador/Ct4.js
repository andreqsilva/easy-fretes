import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MenuAcess from '../../../../assets/components/MenuAcess';
import { Picker } from '@react-native-picker/picker';

export default function Ct4(props) {

  const [category,setCategory] = useState();
  const [years,setYears] = useState();

  return(
    <View style={[css.initial_cadastro, {flex: 1}]}>
      <MenuAcess navigation={props.navigation}/>

      <View style={{width: 350, marginTop: 20, height: '80%'}}>
        <Text style={[css.letra2, {fontSize: 21, fontWeight: '600'}]}>
          Agora precisaremos saber algumas informações sobre a
          sua experiência com transportes, tudo bem?
        </Text>

        <View style={{marginTop: 10}}>
          <Text style={[css.letra2, {fontSize: 18}]}>Há quanto tempo você trabalha com transportes?</Text>
          <View style={[css.alinhamentoRow, {justifyContent: 'space-around'}]}>
          <Text style={[css.letra2, {fontSize: 18}]}>Anos:</Text>
          <TextInput placeholderTextColor='#FF6C01'
            style={[css.cad_dados, {backgroundColor: '#fff', textAlign: 'center', width: 100, borderRadius: 10}]}
            onChangeText={text=>setYears(text)}
          />

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
            {/*<TextInput placeholderTextColor='#FF6C01'
              style={[css.cad_dados, {
                backgroundColor: '#fff',
                width: 100,
                borderRadius: 10,
                marginRight: 12}]}/>*/}
            <Picker
              selectedValue={category}
              onValueChange={(itemValue, itemIndex)=>setCategory(itemValue)}
              style={[{
                backgroundColor: '#fff',
                width: 100,
                borderRadius: 10,
                marginRight: 12,
                height: 10
              }]}
            >
              <Picker.Item label="A" value="A" />
              <Picker.Item label="B" value="B" />
              <Picker.Item label="C" value="C" />
              <Picker.Item label="D" value="D" />
              <Picker.Item label="E" value="E" />
            </Picker>
          </View>
        </View>
      </View>

            {/*<KeyboardAvoidingView>
                <TouchableOpacity onPress={() => props.navigation.navigate('Ct5')}>
                        <Image Presource={require('../../../assets/img/btnNext.png')}/>
                </TouchableOpacity>
            </KeyboardAvoidingView>*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1, justifyContent:'flex-end'}}
      >
        <TouchableOpacity
          style={{bottom: 70}}
          onPress={()=>props.navigation.navigate('Ct5', {
            email:props.route.params.email, name:props.route.params.name,
            lastName:props.route.params.lastName, years:years, category:category
          })}>
          <FontAwesome5 name='arrow-circle-right' size={60} color='white' />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

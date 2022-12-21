import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { css } from '../../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function YourProfile({navigation}) {

  const [userData, setUserData] = useState('none');

  useEffect(()=> {
    verifyUserData();
  },[]);

  async function verifyUserData() {
    let response = await AsyncStorage.getItem('userData');
    let json = await JSON.parse(response);
    if (json !== null) {
      setUserData(json);
    }
  }

  const Client = () => (
    <View style={{flexDirection: "column"}}>
      <View style={{marginTop: 20}}>
        <View style={css.alinhamentoRow}>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>   Telefone : </Text>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>{userData.telefone}</Text>
        </View>

        <View style={css.alinhamentoRow}>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>   E-mail : </Text>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>{userData.email}</Text>
        </View>

        <View style={css.alinhamentoRow}>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>   Idade : </Text>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>25 anos</Text>
        </View>

        <View style={[css.alinhamentoRow, {maxWidth: '70%'}]}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>   Endereço : </Text>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>Rua das ruas, 775, Bairro, Cidade, Estado</Text>
        </View>
      </View>

      <View style={css.risquinho} />
      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>69 mudanças feitas</Text>
      <View style={css.risquinho}></View>
    </View>
  );

  const Driver = () => (
    <View style={{flexDirection: "column"}}>
      <View>
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>Sobre você</Text>
      </View>

      <View style={{alignItems: 'center', alignSelf: 'center', width: 330, marginTop: 20}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
            Faço fretes em toda São Paulo, {'\n'}
            do interior ao litoral paulista, além {'\n'}
            de realizar em outros estados como {'\n'}
            MG e RJ.
        </Text>
      </View>

      <View style={css.risquinho} />
      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>69 transportes feitos</Text>
      <View style={[css.risquinho, {marginTop: 20}]} />

      <View style={[css.alinhamentoRow, {marginTop: 20}]}>
        <Text style={{fontSize: 20, marginLeft: 70}}>Sua carteira</Text>
        <TouchableOpacity>
          <Image style={{marginLeft: 145, height: 35}} source={require('../../../assets/img/expand.png')}/>
        </TouchableOpacity>
      </View>

      <View style={[css.alinhamentoRow, {marginTop: 30}]}>
        <Text style={{fontSize: 20, marginLeft: 70}}>Seus veículos</Text>
        <TouchableOpacity>
          <Image style={{marginLeft: 130, height: 35}} source={require('../../../assets/img/expand.png')}/>
        </TouchableOpacity>
      </View>

      <View style={[css.alinhamentoRow, {marginTop: 30}]}>
        <Text style={{fontSize: 20, marginLeft: 70}}>Cadastrar veículo</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('CadVeiculo1')}>
          <Image style={{marginLeft: 100, height: 35}} source={require('../../../assets/img/circle_plus.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={css.container}>

      {userData != 'none' && userData.tipo == 0 &&
        <Client />
      }

      {userData != 'none' && userData.tipo == 1 &&
        <Driver />
      }

    </View>
  );
}

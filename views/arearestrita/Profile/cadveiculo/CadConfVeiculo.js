import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../../assets/css/Css';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function CadConfVeiculo({navigation}) {

  return (
    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: 70}}>
      <Text style={{color: 'rgba(255, 108, 1, 1)', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Veículo cadastrado com sucesso!</Text>
      <Text
        style={{width: '90%', textAlign: 'center', padding: 25, fontSize: 17, marginTop: 20}}>Você está pronto pra utilizar o Easy Fretes! Seu veículo foi cadastrado e as informações serão visíveis aos usuários.
      </Text>
      <View>
        <Image style={{marginBottom: 15}} source={require('../../../../assets/img/HighFive.png')}/>
      </View>

      <TouchableOpacity style={{marginTop:63}} onPress={()=>navigation.navigate('Profile')}>
        <FontAwesome5 name='arrow-circle-right' size={60} color='#ff8c00' />
      </TouchableOpacity>

    </View>
  );
}

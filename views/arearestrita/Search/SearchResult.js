import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { css } from '../../../assets/css/Css';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
import config from '../../../config/config.json';

/* Tela com a listagem de motoristas
   Lista todos os motoristas, pois ainda não
   há uma fórmula de filtragem!
*/

export default function SearchResult(props) {

  const [data,setData] = useState(null);
  const [selectedId,setSelectedId] = useState(null);

  //console.log(props);

  useEffect(()=> {
    sendForm(); // lista de todos os motoristas
  },[]);

  async function sendForm() { // lista de todos os motoristas
    let response = await fetch(`${config.urlRoot}driverList`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).catch(function(error) {
    	console.log('There has been a problem with your fetch operation: ' + error.message);
    });

    let json = await response.json();
    if (json !== 'error') {
      setData(json);
    }
  }

  const Item = ({ item, onPress }) => (
    <TouchableOpacity
      onPress={()=>props.navigation.navigate('DriverProfile',
                   {codMotorista: item.id, nome: item.nome, origem:props.route.params.origem,
                    destino:props.route.params.destino, preco:props.route.params.preco,
                    duracao:props.route.params.duracao, distancia: props.route.params.distancia,
                    })}
      style={[css.box_profile, {marginTop: 20}]}
    >
      <View style={[css.alinhamentoRow]}>
        <View >
          <Image style={{marginTop: 10}} source={require('../../../assets/img/profile_unknow.png')}/>
        </View>

        <View style={{marginLeft: 20}}>
          <Text style={{color: 'black', width: 130, fontSize: 20}}>{item.nome}</Text>

          <View style={[css.alinhamentoRow, {marginTop: 5}]}>
            <Image source={require('../../../assets/img/estrelinha.png')}/>
            <Text>   4.5</Text>
          </View>
        </View>

        <View style={{marginLeft: 5}}>
          <Text style={{fontSize: 20}}>R$ {props.route.params.preco.replace('.', ',')}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={()=>setSelectedId(item.id)}
      />
    );
  };

  return (
    <View style={css.container}>
      <View style={css.frete_screen}></View>
      <View style={{position: 'absolute', width: '100%'}}>
        <MenuAreaRestrita navigation={props.navigation}/>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
    </View>
  );
}

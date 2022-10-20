import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { css } from '../../assets/css/Css';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import config from '../../config/config.json';

export default function SearchResult(props) {

  const [data,setData] = useState(null);
  const [selectedId,setSelectedId] = useState(null);

  // console.log(props.route.params.origem, props.route.params.destino);
  // console.log(props.route.params.preco, props.route.params.duracao);
  useEffect(()=> {
    sendForm();
  },[]);

  async function sendForm() {
    let response = await fetch(`${config.urlRoot}driversList`, {
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
                   {id: item.id, nome: item.nome, origem:props.route.params.origem,
                    destino:props.route.params.destino, preco:props.route.params.preco,
                    duracao:props.route.params.duracao})}
      style={[css.box_profile, {marginTop: 20}]}
    >
      <View style={[css.alinhamentoRow]}>
        <View >
          <Image style={{marginTop: 10}} source={require('../../assets/img/profile_unknow.png')}/>
        </View>

        <View style={{marginLeft: 20}}>
          <Text style={{color: 'black', width: 130, fontSize: 20}}>{item.nome}</Text>

          <View style={[css.alinhamentoRow, {marginTop: 5}]}>
            <Image source={require('../../assets/img/estrelinha.png')}/>
            <Text>   4.5</Text>
          </View>
        </View>

        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 20}}>R$ {props.route.params.preco.replace('.', ',')}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <View style={css.frete_screen}>
      <MenuAreaRestrita navigation={props.navigation}/>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

      <View style={[css.box_profile, {marginTop: 20}]}>
        <View style={[css.alinhamentoRow]}>
            
          <View style={{backgroundColor: 'pink'}}>
              <Image style={{marginTop: 10}} source={require('../../assets/img/profile_unknow.png')}/>
          </View>

          <View style={{marginLeft: 20}}>
              <Text style={{color: 'black', backgroundColor: 'pink', width: 130, fontSize: 20}}>Name</Text>

              <View style={[css.alinhamentoRow, {marginTop: 5}]}>
                  <Image source={require('../../assets/img/estrelinha.png')}/>
                  <Text>   4.5</Text>
              </View>
          </View>

          <View style={{marginLeft: 20}}>
              <Text style={{fontSize: 20}}>R$ 2500</Text>
          </View>
      </View>
      </View>  
    </View>
  );
}

import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, Image, RefreshControl,
         TouchableOpacity, FlatList } from 'react-native';
import { css } from '../../../assets/css/Css';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
import config from '../../../config/config.json';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* Tela inicial de Seus Fretes */

export default function Booking(props) {

  const [userId,setUserId] = useState(null);
  const [userTipo,setUserTipo] = useState(null);
  const [data,setData] = useState(null);

  const [userData,setUserData] = useState(null);
  const [priceData,setPriceData] = useState(null);
  const [localizationData,setLocalizationData] = useState(null);

  const [selectedId,setSelectedId] = useState(null);
  const [travelData,setTravelData] = useState(null);
  const [isEmpty,setIsEmpty] = useState(null);

  const [unlockTravelList,setUnlockTravelList] = useState(null);
  const [fileNavigate,setFileNavigate] = useState('none');

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(()=> {
    getUserDetails(); // busca dados do usuário logado
  },[]);

  useEffect(()=> {
    if (unlockTravelList !== null) {
        travelList(); // lista de motoristas
    }
  },[unlockTravelList]);

  useEffect(()=> {
    if (travelData !== null) {
         if (travelData.length > 0) {
          setIsEmpty(true); // fretes encontrados
          getUser(); // dados do motorista (ou cliente)
          getPrice(); // dados do preço
          getLocalization(); // dados da localização
        } else {
          setIsEmpty(false); // nenhum frete encontrado
        }
    }
  },[travelData]);

  useEffect(()=> { // monta lista de fretes
    if (userData !== null && priceData !== null && localizationData !== null) {
      let listData = [];
      for (let i = 0; i < travelData.length; i++) {
        if (userTipo === 0) {
          setFileNavigate('StatusFrete'); // cliente
          listData.push({
            id: travelData[i].id,
            status: travelData[i].status,
            codUser: travelData[i].codMotorista,
            codLocalizacao: travelData[i].codLocalizacao,
            nome: userData[i].nome,
            preco: priceData[i].preco,
            enderecoOrigem: localizationData[i].enderecoOrigem,
            enderecoDestino: localizationData[i].enderecoDestino,
            latitudeOrigem: localizationData[i].latitudeOrigem,
            longitudeOrigem: localizationData[i].longitudeOrigem,
            latitudeDestino: localizationData[i].latitudeDestino,
            longitudeDestino: localizationData[i].longitudeDestino,
            distancia: priceData[i].distancia
          });
        } else {
          setFileNavigate('StatusFreteMotorista'); // motorista
          listData.push({
            id: travelData[i].id,
            status: travelData[i].status,
            codUser: travelData[i].codCliente,
            codLocalizacao: travelData[i].codLocalizacao,
            nome: userData[i].nome,
            preco: priceData[i].preco,
            enderecoOrigem: localizationData[i].enderecoOrigem,
            enderecoDestino: localizationData[i].enderecoDestino,
            latitudeOrigem: localizationData[i].latitudeOrigem,
            longitudeOrigem: localizationData[i].longitudeOrigem,
            latitudeDestino: localizationData[i].latitudeDestino,
            longitudeDestino: localizationData[i].longitudeDestino,
            distancia: priceData[i].distancia
          });
        }
      }
      setData(listData);
    }
  },[userData,priceData,localizationData]);

  async function getUserDetails() { // dados do usuário logado
    let response = await AsyncStorage.getItem('userData');
    let json = await JSON.parse(response);
    if (json !== null) {
      setUserId(json.id);
      setUserTipo(json.tipo);
      setUnlockTravelList(1);
    }
  }

  async function travelList() { // lista de fretes
    let response = await fetch(`${config.urlRoot}travelList`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        codigo: userId,
        tipo: userTipo
      })
    }).catch(function(error) {
    	console.log('There has been a problem with your fetch operation: ' + error.message);
    });
    let json = await response.json();
    if (json !== 'error') {
      setTravelData(json);
    }
  }

  async function getUser() { // dados do motorista (ou cliente)
    let listData = [];
    for (let i = 0; i < travelData.length; i++) {
      let codigo;
      if (userTipo === 0) {
        codigo = travelData[i].codMotorista;
      } else {
        codigo = travelData[i].codCliente;
      }
      let response = await fetch(`${config.urlRoot}getUser`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: codigo,
        })
      }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
      let json = await response.json();
      if (json !== 'error') {
        let travelDetail = {
          nome: json.nome,
        }
        listData.push(travelDetail);
      }
    }
    setUserData(listData);
  }

  async function getPrice() { // dados do preço
    let listData = [];
    for (let i = 0; i < travelData.length; i++) {
      let response = await fetch(`${config.urlRoot}getPrice`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: travelData[i].codPreco
        })
      }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
      let json = await response.json();
      if (json !== 'error') {
        let travelDetail = {
          preco: json.valor,
          distancia: json.distancia
        }
        listData.push(travelDetail);
      }
    }
    setPriceData(listData);
  }

  async function getLocalization() { // dados da localização
    let listData = [];
    for (let i = 0; i < travelData.length; i++) {
      let response = await fetch(`${config.urlRoot}getLocalization`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: travelData[i].codLocalizacao
        })
      }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
      let json = await response.json();
      if (json !== 'error') {
        let travelDetail = {
          enderecoOrigem: json.enderecoOrigem,
          enderecoDestino: json.enderecoDestino,
          latitudeOrigem: json.latitudeOrigem,
          longitudeOrigem: json.longitudeOrigem,
          latitudeDestino: json.latitudeDestino,
          longitudeDestino: json.longitudeDestino
        }
        listData.push(travelDetail);
      }
    }
    setLocalizationData(listData);
  }

  const Empty = () => ( // tela nenhum frete encontrado
    <View style={css.container}>

     <View style={{marginTop: 80}}>
       <Text style={css.letra_laranja}>Você não possui{'\n'}fretes agendados!</Text>
     </View>

     <View>
      <Image source={require('../../../assets/img/FiguraSemFretesAgendados.png')}/>
     </View>

     <View>
       <Text style={{fontWeight:'bold', fontSize: 20, textAlign: 'center'}}>Aqui aparecerão seus fretes{'\n'}agendados.</Text>
     </View>

     <View>
       <Text style={{fontSize: 16, paddingLeft: 30, paddingRight: 30, marginTop: 30, textAlign: 'center'}}>Assim que seu frete for confirmado, ele aparecerá aqui para que possa ver detalhes e consultá-lo a qualquer momento!</Text>
     </View>
   </View>
  );

  const NoEmpty = () => ( // tela lista de fretes
    <View style={[css.container]}>
    <View style={{backgroundColor: '#FFA666', height: '15%', top: 144}}></View>

      <View style={[css.alinhamentoRow, {marginTop:20, position: 'absolute'}]}>
        <View style={{marginLeft: 50}}>
          <Text style={[css.text_veiculos, css.fretes_text]}>Seus Fretes</Text>
        </View>

        <View style={{marginHorizontal: -40}}>
          <Image source={require('../../../assets/img/truck-icon.png')}/>
        </View>
      </View>

      <FlatList style={{top:20}} // lista de fretes
        data={data}
        showsVerticalScrollIndicator = {false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );

  const Item = ({ item, onPress }) => ( // itens de cada frete
    <TouchableOpacity
      onPress={()=>props.navigation.navigate(fileNavigate, {
                    idTravel: item.id, status: item.status, codUser: item.codUser,
                    nome: item.nome, preco: item.preco, enderecoOrigem: item.enderecoOrigem,
                    codLocalizacao: item.codLocalizacao, enderecoDestino: item.enderecoDestino,
                    latitudeOrigem: item.latitudeOrigem, longitudeOrigem: item.longitudeOrigem,
                    latitudeDestino: item.latitudeDestino, longitudeDestino: item.longitudeDestino})}
      style={[css.box_profile, {marginTop: 30}]}
    >
      <View>
        <View style={[css.alinhamentoRow]}>

          <View style={{height: 40}}>
            <Image style={{width: 40, height: 40}} source={require('../../../assets/img/profile_unknow.png')}/>
          </View>

          <View style={{marginLeft: 15}}>
            <Text style={{width: 110, fontSize: 20}}>{item.nome}</Text>
          </View>
          <View style={{marginLeft: '-2%'}}>
            <Text style={{fontSize: 13}}>qua. 08 setembro, 08:00</Text>
          </View>
        </View>

        <View style={css.alinhamentoRow}>
          <View>
            <Entypo name='location-pin' size={18} color='gray' />
          </View>

          <Text>  {item.enderecoOrigem}</Text>
          <Text style={{marginLeft: 70, fontWeight: 'bold'}}> {item.distancia} km</Text>
        </View>

        <View style={css.alinhamentoRow}>
          <View>
            <Entypo name='location' size={18} color='gray' />
          </View>

          <Text>  {item.enderecoDestino}</Text>
        </View>

        { item.status === 0 &&
          <View style={css.alinhamentoRow}>
            <MaterialCommunityIcons name='clock-time-four-outline' size={21} color='orange' />
            <Text>  Aprovação pendente</Text>
            <Text style={{marginLeft: 50, fontSize: 20, fontWeight: 'bold'}}>R$ {item.preco}</Text>
          </View>
        }

        { item.status === 1 &&
          <View style={css.alinhamentoRow}>
            <AntDesign name='checkcircleo' size={18} color='#228B22' />
            <Text>  Reserva aprovada</Text>
            <Text style={{marginLeft: 50, fontSize: 20, fontWeight: 'bold'}}>R$ {item.preco}</Text>
          </View>
        }

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

    <View style={{flex: 1}}>
      { isEmpty !== null && isEmpty === true &&
          <NoEmpty />
      }

      { isEmpty !== null && isEmpty === false &&
        <Empty />
      }
    </View>

  );
}

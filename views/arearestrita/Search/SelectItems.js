import React, { useState, useEffect, Component } from 'react';
import { Text, View, Button, Image, FlatList, ScrollView,
         TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Checkbox from 'expo-checkbox';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
import { css } from '../../../assets/css/Css';

export default function SelectItems(props) {

  /*
    Preço:
      300 + (5 * distance) + (100 * numAjudantes)
          + (8 * grande) + (5 * medio) + (3 * pequenos)
          + (100 se tiver escada) + (50 * (duration/30))
  */

  const [quantity, setQuantity] = useState({
      small: 0,
      medium: 0,
      large: 0
  });

  const [isHelperChecked, setHelperChecked] = useState(false);
  const [isStairChecked, setStairChecked] = useState(false);
  const [price, setPrice] = useState(0);

  const handleQuantityIncrease = (size) => {
    const newQuantity = {...quantity};
    newQuantity[size]++;
    setQuantity(newQuantity);
  }

  const handleQuantityDecrease = (size) => {
    const newQuantity = {...quantity};
    if (newQuantity[size] > 0) {
      newQuantity[size]--;
    }
    setQuantity(newQuantity);
  }

  useEffect(() => {
    let helper = 0;
    let stair = 0;
    if (isHelperChecked === true) {
      helper = 1;
    }
    if (isStairChecked === true) {
      stair = 1;
    }
    let newPrice = (300 + (5 * props.route.params.distancia) + (100 * helper)
        + (8 * quantity.large) + (5 * quantity.medium) + (3 * quantity.small)
        + (100 * stair) + (50 * (props.route.params.duracao/30)));
    setPrice(newPrice);
  },[quantity, isHelperChecked, isStairChecked]);

  return(
    <View style={css.container}>
      <MenuAreaRestrita navigation={props.navigation}/>
      <View style={{alignItems: 'center'}}>
        <Text style={[css.letra3, {fontSize: 32, textAlign: 'center', width: 280}]}>O que você deseja transportar?</Text>
        <View style={{alignItems: 'center', width: 310, marginTop: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500', textAlign: 'center'}}>
            Acrescente as opções de acordo com os itens que você irá transportar.
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row',  justifyContent: 'space-between', marginTop: 50}}>
        <Text style={{marginLeft: 30, fontSize: 18, fontWeight: '500'}}>
          Tamanho do móvel
        </Text>

        <Text style={{marginRight: 125,fontSize: 18, fontWeight: '500'}}>
          Qtde.
        </Text>
      </View>

      <ScrollView style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 5
      }}>
          <View>

            <View style={{flexDirection: 'row',  justifyContent: 'space-between', marginTop: 20, alignItems: 'center'}}>
              <Text style={{marginLeft: 30, fontSize: 18, left: 20}}>Pequeno</Text>

              <View style={[css.itemsSize, {marginLeft: 100}]}>
                <Text style={{fontSize: 15}}>{quantity.small}</Text>
              </View>

              <TouchableOpacity onPress={()=>handleQuantityIncrease('small')}
                style={{marginRight: 1}}>
                <Icon  name='add' size={28} style={{color: '#282828', marginLeft: 1}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>handleQuantityDecrease('small')}>
                <Icon name='minimize' size={28} style={{color: '#282828', bottom: 10, marginRight: 30}}/>
              </TouchableOpacity>

            </View>

            {/* <View style={[css.alinhamentoRow, {justifyContent: 'space-around'}]}>
              <Text style={{fontSize: 18, left: 20}}>Pequeno</Text>
              <View style={[css.itemsSize, {left: 50}]}>
                <Text style={{fontSize: 15}}>{quantity.small}</Text>
              </View>

              <TouchableOpacity onPress={()=>handleQuantityIncrease('small')}
                style={{marginRight: -60}}
              >
                <Icon  name='add' size={28} style={{color: 'black'}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>handleQuantityDecrease('small')}>
                <Icon name='minimize' size={28} style={{color: 'black', bottom: 10}}/>
              </TouchableOpacity>
            </View> */}

            <View style={{flexDirection: 'row',  justifyContent: 'space-between', marginTop: 20, alignItems: 'center'}}>
              <Text style={{marginLeft: 30, fontSize: 18, left: 20}}>Médio</Text>

              <View style={[css.itemsSize, {marginLeft: 120}]}>
                <Text style={{fontSize: 15}}>{quantity.medium}</Text>
              </View>

              <TouchableOpacity onPress={()=>handleQuantityIncrease('medium')}
                style={{marginRight: 1}}>
                <Icon  name='add' size={28} style={{color: '#282828', marginLeft: 1}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>handleQuantityDecrease('medium')}>
                <Icon name='minimize' size={28} style={{color: '#282828', bottom: 10, marginRight: 30}}/>
              </TouchableOpacity>
              
            </View>

            {/* <View style={[css.alinhamentoRow, {justifyContent: 'space-around', marginTop: 20}]}>
              <Text style={{fontSize: 18, left: 25}}>Médio</Text>
              <View style={[css.itemsSize, {left: 65}]}>
                <Text style={{fontSize: 15}}>{quantity.medium}</Text>
              </View>

              <TouchableOpacity onPress={()=>handleQuantityIncrease('medium')}
                style={{marginRight: -60}}
              >
                <Icon  name='add' size={28} style={{color: 'black'}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>handleQuantityDecrease('medium')}>
                <Icon name='minimize' size={28} style={{color: 'black', bottom: 10}}/>
              </TouchableOpacity>
            </View> */}

            <View style={{flexDirection: 'row',  justifyContent: 'space-between', marginTop: 20, alignItems: 'center'}}>
              <Text style={{marginLeft: 30, fontSize: 18, left: 20}}>Grande</Text>

              <View style={[css.itemsSize, {marginLeft: 113}]}>
                <Text style={{fontSize: 15}}>{quantity.large}</Text>
              </View>

              <TouchableOpacity onPress={()=>handleQuantityIncrease('large')}
                style={{marginRight: 1}}>
                <Icon  name='add' size={28} style={{color: '#282828', marginLeft: 1}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>handleQuantityDecrease('large')}>
                <Icon name='minimize' size={28} style={{color: '#282828', bottom: 10, marginRight: 30}}/>
              </TouchableOpacity>
              
            </View>
            {/* <View style={[css.alinhamentoRow, {justifyContent: 'space-around', marginTop: 20}]}>
              <Text style={{fontSize: 18, left: 24}}>Grande</Text>
              <View style={[css.itemsSize, {left: 60}]}>
                <Text style={{fontSize: 15}}>{quantity.large}</Text>
              </View>

              <TouchableOpacity onPress={()=>handleQuantityIncrease('large')}
                style={{marginRight: -60}}
              >
                <Icon  name='add' size={28} style={{color: 'black'}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>handleQuantityDecrease('large')}>
                <Icon name='minimize' size={28} style={{color: 'black', bottom: 10}}/>
              </TouchableOpacity>
            </View> */}
          </View>

          <View style={[css.alinhamentoRow, {marginTop: 30, alignSelf: 'center'}]}>
            <View style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 18}}>Precisa de ajuda terceirizada?</Text>
            </View>
            <View>
              <View style={[css.container_checkbox, {marginLeft: 35}]}>
                <Checkbox
                  style={css.checkbox}
                  value={isHelperChecked}
                  onValueChange={setHelperChecked}
                  color={isHelperChecked ? '#FFC100' : undefined}
                />
              </View>
            </View>
          </View>

          <View style={[css.alinhamentoRow, {marginTop: 10, alignSelf: 'center'}]}>
            <View style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 18}}>Será necessário subir escadas?</Text>
            </View>
            <View>
              <View style={[css.container_checkbox, {marginLeft: 20}]}>
              <Checkbox
                style={css.checkbox}
                value={isStairChecked}
                onValueChange={setStairChecked}
                color={isStairChecked ? '#FFC100' : undefined}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View>
        <View style={{alignItems: 'center', alignSelf: 'center', width: 200, marginBottom: -40, fontWeight: '500'}}>
          <Text style={{top: 5, fontSize: 15, fontWeight: '400'}}>Os itens serão conferidos antes de dar início ao frete.</Text>
        </View>

        <View style={{alignItems: 'center', marginBottom: 40}}>
          {(quantity.small + quantity.medium + quantity.large) > 0 &&
            <TouchableOpacity onPress={()=>props.navigation.navigate('SearchResult', {
                items: quantity, preco: price.toFixed(2), origem: props.route.params.origem,
                destino:props.route.params.destino, duracao: props.route.params.duracao,
                distancia: props.route.params.distancia })}
              style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00', width: 300}]}>
              <Text style={css.letra}>Continuar</Text>
            </TouchableOpacity>
          }

          {(quantity.small + quantity.medium + quantity.large) == 0 &&
            <TouchableOpacity
              style={[css.button, {borderRadius: 8, backgroundColor: 'lightgray', width: 300}]}>
              <Text style={css.letra}>Continuar</Text>
            </TouchableOpacity>
          }
        </View>
      </View>

    </View>
  );
}
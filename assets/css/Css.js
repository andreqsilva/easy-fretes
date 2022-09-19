import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  map: {
    height: '60%',
  },

  search: {
    height: '40%',
    //backgroundColor: '#fff'
  },

  distance:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      padding: 10
  },
  distance_text:{
      fontSize:20,
      fontWeight:'bold'
  },
  price:{
      backgroundColor: '#000',
      padding: 7,
      borderRadius:4,
      marginTop:30,
      justifyContent:'center',
      alignItems: 'center'
  },
  price_text:{
      color:'#fff',
      fontWeight: 'bold',
      fontSize: 20
  }

});

export {css};

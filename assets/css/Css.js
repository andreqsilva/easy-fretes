import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },

  initial_cadastro: {
    //backgroundColor: 'rgba(255, 197, 110, 1)',
    backgroundColor: '#FFA666',
    alignItems: 'center',
    flexDirection: 'column',
  },

  map: {
    height: '60%',
  },

  search: {
    height: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    //backgroundColor: 'blue'
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
  },

  search_autocomplete: {
    listView: {
      backgroundColor: '#C5C2C0',
      zIndex: 10,
      position: 'relative'
    },
    textInput: {
      marginLeft: 5,
      marginRight: 5,
      color: '#5d5d5d',
      fontSize: 12,
      height: 30,
    },
    container: {position: 'relative', width: '80%'},
    textInput: {
      backgroundColor: '#C5C2C0',
      //height: 60,
      borderRadius: 10,
    }
  },

  area_tab: {
    backgroundColor: '#FFC56F',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },

  letra: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },

  letra2: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 22,
    //padding: 40,
    marginTop: 20,
  },

  alinhamentoRow: {
    //backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },

  icon_cadastro: {
   width: 45
  },

  button: {
    backgroundColor: 'rgba(255, 108, 1, 1)',
    color: '#fff',
    width: 350,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 55,
    //marginBottom: 180,
    marginTop: 60,
    shadowColor: 'black',
    elevation: 3,
  },

  button2: {
   backgroundColor: 'rgba(255, 108, 1, 1)',
   color: '#fff',
   width: 350,
   height: 55,
   alignItems: 'center',
   justifyContent: 'center',
   marginBottom: -20,
   marginTop: 50,
   borderBottomLeftRadius: 30,
   borderBottomRightRadius: 30,
   shadowColor: 'black',
   elevation: 3,
 },

  orangebg: {
      backgroundColor: '#FFA666'
  },

  login_msg:(text='none')=> ({
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    marginTop: 10,
    marginBottom: 15,
    display: text
  }),

  login_input: {
    backgroundColor: '#fff',
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
  },

  logo: {
    width: 380,
    height: 260,
  },

  login_form: {
    //backgroundColor: 'grey',
    width: '85%',
  },

  login_button: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 108, 1, 1)',
    padding: 12,
    color: '#fff',
    alignItems: 'center',
    marginTop: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: 'black',
    elevation: 3,
  },

  login_logomarca: {
    //alignSelf: 'flex-end',
    //backgroundColor: 'blue',
    //marginBottom: 10,
    width: 434,
    height: 314,
    alignItems: 'center',
    justifyContent: 'center'
  },

  back_menu: {
    //backgroundColor: 'blue',
    width: '100%',
    //height: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 10
    //marginTop: 40,
    //marginBottom: 20
  },

  back_button: {
    //backgroundColor: 'white',
    marginLeft: 10,
    textAlign: 'left',
  },
  
  frame: {
    //backgroundColor: 'green',
    width: 380,
    marginTop: 20,
  },

  container_direction: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  container_cadastro: {   
    backgroundColor: '#fff',
    fontSize: 19,
    padding: 12,
    //marginBottom: 15,
    width: 340,
    borderRadius: 5,
  },

  cad_dados: { 
    marginTop: 30,
  },

  msg_selfie: {
    color: 'rgba(255, 108, 1, 1)', 
    fontSize: 19, 
    fontWeight: 'bold'
  },

  anexdoc_Ct2: {
    borderRadius: 10, 
    padding: 11,
    backgroundColor: '#fff',
    marginTop: 50,
    width: 320
  }

});

export {css};

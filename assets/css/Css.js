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

  initial_cadastro_white: { //PARTE DO CADASTRO DE VEÍCULOS
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
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
   marginBottom: -35,
   marginTop: 50,
   borderRadius: 30,
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

  forget_msg:(text='none')=> ({
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    marginTop: 15,
    marginBottom: 5,
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
    width: '100%',
    //alignSelf: 'center',
    backgroundColor: 'rgba(255, 108, 1, 1)',
    padding: 12,
    color: '#fff',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
    //borderBottomRightRadius: 10,
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
    height: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    //backgroundColor:'blue'
  },

  container_cadastro: {
    backgroundColor: '#fff',
    fontSize: 19,
    padding: 12,
    //marginBottom: 15,
    width: '100%',
    borderRadius: 5,
  },

  cad_dados: {
    marginTop: 30,
  },

  container_checkbox: {
    marginTop: 70,
    marginRight: 170
  },

  checkbox: {
    margin: 8,
    borderRadius: 20,
    color: '#FFC100'
  },

  text_checkbox: {
    fontSize: 18,
  },

  text_veiculos: {
    fontSize: 30, 
    color: '#FF6C01', 
    maxWidth: 370,
    marginRight: 90
  },

  space_between_checkboxes: {
    marginTop: 30
  },

  container_picker: {
    height: 50, 
    width: 150, 
    backgroundColor: '#FFE699',
    borderRadius: 8,
    marginTop: 70,
    marginRight: 100,
  },

  picker: {
    height: 50,  
    width: 150
  },

  box_input_placa: {
    backgroundColor: '#FFE699',
    fontSize: 19,
    padding: 12,
    //marginBottom: 15,
    width: '95%',
    borderRadius: 5,
    alignItems: 'center'
  }

});

export {css};

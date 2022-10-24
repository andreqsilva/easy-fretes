import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
  initial_cadastro: {
    //backgroundColor: 'rgba(255, 197, 110, 1)',
    backgroundColor: '#FFA666',
    alignItems: 'center',
    flexDirection: 'column',
  },
  frete_screen: { //PARTE DA PROCURA DE MOTORISTA
    backgroundColor: '#FFA666',
    height: '22%',
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
      zIndex: 5,
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
  letra3: {
    color: '#FF6C01',
    fontWeight: 'bold',
    fontSize: 28
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
    //justifyContent: 'flex-end'

  },
  login_button: {
    width: '100%',
    height: 55,
    //alignSelf: 'center',
    backgroundColor: 'rgba(255, 108, 1, 1)',
    padding: 12,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  box_profile:{
    backgroundColor: '#FFDAB9',
    //opacity: 0.8,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    //marginTop: 30
  },
  risquinho: {
    borderWidth: 0.3,
    borderColor: "#a9a9a9",
    width: 340,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30
  },
  text_veiculos: {
    fontSize: 30,
    color: '#FF6C01',
    maxWidth: 370,
    marginRight: 90
  },
  fretes_text: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  seus_fretes: {
   backgroundColor: '#FFA666',
   height: '15%',
   marginTop: 10
 },
 faixa: {
    borderWidth: 18,
    borderColor: "#FF6C01",
    width: 420,
    marginTop: 30,
  },
  perfil_name: {
    fontSize: 21,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold'
  },
  letra_laranja: {
    color: '#FF6C01',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  size_dados: {
    fontSize: 17
  },
  textoBold: {
    fontWeight: 'bold',
    color: '#282828',
    textAlign: 'center',
  },
  textoRegular: {
    color: '#282828',
    textAlign: 'center',
  },
  textoMedium: {
    fontWeight: '600',
    color: '#282828',
    textAlign: 'center',
  },

});

export {css};

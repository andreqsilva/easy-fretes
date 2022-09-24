import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  initial_cadastro: {
    flex: 1,
    backgroundColor: 'rgba(255, 197, 110, 1)',
    alignItems: 'center',
    justifyContent: 'center',
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
    listView: {backgroundColor: 'grey', zIndex: 10},
    container: {position: 'relative', width: '80%'},
    textInput: {
      backgroundColor: '#C5C2C0',
      height: 60,
      borderRadius: 10,
    }
  },

  area_tab: {
    backgroundColor: '#FFC56F',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },

  logo: {
    width: 350,
    height: 180,
    marginRight: 10,
    paddingBottom: 180,
  },

  frame: {
    width: 380,
    marginTop: 70,
  },

  letra: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },

  letra2: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    textDecorationLine: 'underline'
  },

  button: {
    backgroundColor: 'rgba(255, 108, 1, 1)',
    color: '#fff',
    width: 350,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 55,
    marginBottom: 180,
    marginTop: 90,
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
  login_form: {
    width: '80%'
  },
  login_input: {
    backgroundColor: '#fff',
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
  },
  login_button: {
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
    marginBottom: 10
  }


});

export {css};

import { StyleSheet } from 'react-native';

const estiloContato = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',  
      backgroundColor: '#111111'  
   },
  fundo: {
       justifyContent: 'center',
       height: '99%',
       width: '100%',
   },
   texto: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: 'yellow',
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
   },
      botaoTexto: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold'
   },
});

  export default estiloContato;
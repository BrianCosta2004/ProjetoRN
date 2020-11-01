import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'     
   },
   borda: {   
      backgroundColor: '#111111',  
      width: '80%',
      height: 290,
      borderRadius: 10,
   },
   texto: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   fundo: {
       justifyContent: 'center',
       height: '100%',
       width: '100%',
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

  export default estiloInicial;
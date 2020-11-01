import { StyleSheet } from 'react-native';

const estiloEpisodios = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',  
      backgroundColor: '#111111'   
   },
   fundo: {
       justifyContent: 'space-between',
       height: '85%',
       width: '85%',
   },
   texto: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   textoEP: {
      fontSize: 15,
      color: 'yellow',
      fontWeight: 'bold',
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
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
});

  export default estiloEpisodios;
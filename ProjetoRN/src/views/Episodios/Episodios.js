import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloEpisodios from './estiloEpisodios';

function Episodios({ navigation, route }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloEpisodios.container}>
            
            <View>
                
                
                <Text style={estiloEpisodios.texto}>Episodios</Text>
                <ImageBackground source={require('../../../assets/imagens/eps6.png')}style={estiloEpisodios.fundo}>
                <Text style={estiloEpisodios.textoEP}><br/><br/><br/>EP1 - Naruto Uzumaki Chegando! </Text>
                <Text style={estiloEpisodios.textoEP}><br/><br/><br/>EP2 - Meu nome é Konohamaru!</Text>
                <Text style={estiloEpisodios.textoEP}><br/><br/><br/>EP3 - Sasuke e Sakura: Amigos ou Inimigos?</Text>
                
                

</ImageBackground>
            </View>
            
        </View>
    )
}

export default Episodios;

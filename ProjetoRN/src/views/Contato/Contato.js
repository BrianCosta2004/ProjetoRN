import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloContato from './estiloContato';

function Contato({ navigation }) {

    const abrirEpisodios = () => {
        navigation.navigate('Episodios')
    }
    
   
    
    return (
        <View style={estiloContato.container}>
            <View>
                <ImageBackground source={require('../../../assets/imagens/contato3.png')}style={estiloContato.fundo}>

                
                <Text style={estiloContato.texto}>Contato</Text> 
                <Text style={estiloContato.texto}>Thales Roberto - Brian Costa</Text>
                <Text style={estiloContato.texto}>2ºMDS-A</Text>
                <Text style={estiloContato.texto}>(19)98893-7404 - (19)98881-2004</Text>
                <Text style={estiloContato.texto}>robertothales09@gmail.com - brianhcosta@gmail.com</Text>
               
               
                

               
</ImageBackground>
            </View>
        </View>
    )
}

export default Contato;

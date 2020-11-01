import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

    const abrirEpisodios = () => {
        navigation.navigate('Episodios')
    }
    
   
    
    return (
        <View style={estiloInicial.container}>
            
            <View style={estiloInicial.borda}>
                

                <Text style={estiloInicial.texto}>Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirEpisodios}>
                    <Text style={estiloInicial.botaoTexto}>Episódios</Text>
                </TouchableOpacity>

            

            </View>
            
        </View>
    )
}

export default Inicial;

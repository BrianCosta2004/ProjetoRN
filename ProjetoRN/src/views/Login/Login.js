import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import estiloLogin from './estiloLogin';
import { AntDesign } from '@expo/vector-icons';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    

    const entrar = () => {
        if (login == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>
            <View style={estiloLogin.borda}>
                <ImageBackground source={require('../../../assets/imagens/background3.png')}style={estiloLogin.fundo}>
                
                <View style={estiloLogin.logoContainer}>
                <AntDesign name="pay-circle-o1" size={50} color="black" />
                </View>

                <View style={estiloLogin.campoContainer}>
                <AntDesign name="mail" size={30} color="black" />
                <TextInput
                    placeholderTextColor="white"
                    style={estiloLogin.campo}
                    placeholder="Email"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />
                </View>

                <View style={estiloLogin.campoContainer}>
                <AntDesign name="key" size={30} color="black" />
                <TextInput
                     
                    style={estiloLogin.campo}
                    placeholderTextColor="white"
                    placeholder="Senha"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />
                </View>

                <TouchableOpacity style={estiloLogin.botaoContainer} onPress={entrar}>
                <Text style={estiloLogin.botaoTexto }>Entrar</Text> 
                 
                </TouchableOpacity>
                </ImageBackground>
            </View>            
        </View>
    )
}

export default Login;
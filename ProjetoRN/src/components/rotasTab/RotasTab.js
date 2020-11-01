import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contato from '../../views/Contato/Contato';
import Episodios from '../../views/Episodios/Episodios';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
      {
        labelStyle: { fontSize: 24 },
        style: {backgroundColor: 'yellow'},
        activeTintColor: 'black' 
      }
      }
    >
      <Tab.Screen name="Inicio" component={RotasDrawer} />
      <Tab.Screen name="Episodios" component={Episodios} />
      <Tab.Screen name="Contato" component={Contato} />
    </Tab.Navigator>
  );
}

export default RotasTab;
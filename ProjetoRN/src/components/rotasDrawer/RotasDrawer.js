import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicial from '../../views/Inicial/Inicial';
import Episodios from '../../views/Episodios/Episodios';
import Contato from '../../views/Contato/Contato';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicial" component={Inicial}/>
      <Drawer.Screen name="Temporadas" component={Episodios}/>
      <Drawer.Screen name="Contato" component={Contato}/>
    </Drawer.Navigator>
  );
}

export default RotasDrawer;
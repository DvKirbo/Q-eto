import { Alert, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Main from './src/components/Main';
import Constants from 'expo-constants';
import { GestureHandlerRootView } from "react-native-gesture-handler";
//texto deve estar dentro de un Text//es el unico componente que puede tener texto
//view es un contenedor
//style es un objeto
//flex es un sistema de grid
//alignItems y justifyContent son propiedades de flex 

//view es lo mas parecido a un div pero con flex-box
//touuchableopacity es un boton
//textinput es un input

//para que cualquier cosa sea tocable se usa touchableopacity
export default function App() {
  return (
    <GestureHandlerRootView>
      <View style ={{marginTop: Constants.statusBarHeight}}>
        <Main />
      </View>
    </GestureHandlerRootView>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home';
import Previsao from '../pages/previsao';
import Resultado from '../pages/resultado';
import Coeficientes from '../pages/coeficientes';
import Graficos from '../pages/graficos';
import Informacao from '../pages/informacao';

const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Previsao'
                component={Previsao}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Resultado'
                component={Resultado}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Coeficientes'
                component={Coeficientes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Graficos'
                component={Graficos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Informacao'
                component={Informacao}
                options={{ headerShown: false }}
            />
        </Stack.Navigator >
    );
}
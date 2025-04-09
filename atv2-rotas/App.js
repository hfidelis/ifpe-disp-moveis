import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import Register from './pages/Register';
import Contacts from './pages/Contacts';
import ContactEdit from './pages/ContactEdit';
import ContactRegister from './pages/ContactRegister';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>      
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={Login}
          options={{
            headerShown: false,
            headerRight: () => (
              <Ionicons
                name="notifications-outline"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
            )
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerTitle: 'Usuário',
            headerTitleAlign: 'center'
          }} 
        />
        <Stack.Screen
          name="contacts"
          component={Contacts}
          options={{            
            headerShown: false,
          }} 
        />
        <Stack.Screen
          name="contact-register"
          component={ContactRegister}
          options={{
            headerTitle: 'Contato',
            headerTitleAlign: 'center'
          }} 
        />
        <Stack.Screen
          name="contact-edit"
          component={ContactEdit}
          options={{
            headerTitle: 'Contato',
            headerTitleAlign: 'center'
          }} 
        />
      </Stack.Navigator>      
    </NavigationContainer>
  );
}

export default App;
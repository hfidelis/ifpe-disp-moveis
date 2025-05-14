import styles from "../styles";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useState } from "react";
import { Button, Input } from "react-native-elements";
import { View, SafeAreaView } from 'react-native';

import { toggleSignIn } from "../services/firebase";

export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (login === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }

    toggleSignIn(login, password)
      .then(() => {
        navigation.navigate('contacts');
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={{ gap: '0.6rem' }}
      >
        <FontAwesome
          name="user-circle-o"
          size={62}
          color="black"
          style={{ alignSelf: 'center', marginBottom: '1rem' }}
        />
        <Input
          label='Login'
          labelStyle={{ color: 'black', marginBottom: '0.5rem' }}
          placeholder="Digite seu e-mail"
          inputStyle={styles.defaultInput}
          onChangeText={(text) => setLogin(text)}
        />
        <Input
          label='Senha'
          labelStyle={{ color: 'black', marginBottom: '0.5rem' }}
          placeholder="Digite sua senha"
          inputStyle={styles.defaultInput}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title='Login'
          onPress={() => handleLogin()}
        >
        </Button>
        <Button
          title='Cadastre-se'
          onPress={() => navigation.navigate('register')}
          buttonStyle={{
            backgroundColor: 'red',
          }}
        >
        </Button>
      </View>
    </SafeAreaView>
  );
}
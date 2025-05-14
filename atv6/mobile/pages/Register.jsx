import styles from "../styles";

import { useState } from "react";
import { Button, Input } from "react-native-elements";
import { View, SafeAreaView } from 'react-native';

import { handleSignUp } from "../services/firebase";

export default function Register({ navigation }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (login === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }

    handleSignUp(login, password)
      .then(() => {
        navigation.navigate('login');
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
        <Input
          label='E-mail'
          labelStyle={{ color: 'black', marginBottom: '0.5rem' }}
          inputStyle={styles.defaultInput}
          onChangeText={(text) => setLogin(text)}
        />
        <Input
          label='Senha'
          labelStyle={{ color: 'black', marginBottom: '0.5rem' }}
          inputStyle={styles.defaultInput}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button
          title='Salvar'
          onPress={() => handleRegister()}
        >
        </Button>
      </View>
    </SafeAreaView>
  );
}
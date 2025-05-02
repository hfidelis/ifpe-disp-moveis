import styles from "../styles";

import { Button, Input } from "react-native-elements";
import { View, SafeAreaView } from 'react-native';

export default function Register({ navigation }) {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={{ gap: '0.6rem' }}
      >
        <Input
          label='Nome'
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}
        />
        <Input
          label='CPF'
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}
        />
        <Input
          label='E-mail'
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}
        />
        <Input
          label='Senha'
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}
        />
        <Button
          title='Salvar'
          onPress={() => navigation.navigate('login')}
        >
        </Button>
      </View>
    </SafeAreaView>
  );
}
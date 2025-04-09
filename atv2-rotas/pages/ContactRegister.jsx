import styles from "../styles";

import { Button, Input } from "react-native-elements";
import { View, SafeAreaView } from 'react-native';

function ContactRegister() {
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
          label='E-mail'
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}          
        />
        <Input
          label='Telefone'
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}          
        />
        <Button
          title='Salvar'          
        >
        </Button>        
      </View>
    </SafeAreaView>
  );
}

export default ContactRegister
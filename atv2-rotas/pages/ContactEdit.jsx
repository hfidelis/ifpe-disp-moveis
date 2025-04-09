import styles from "../styles";

import { useRoute } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import { View, SafeAreaView } from 'react-native';

function ContactEdit() {
  const route = useRoute()

  const { user } = route.params;

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={{ gap: '0.6rem' }}
      >
        <Input
          label='Nome'
          value={user.name}
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}          
        />
        <Input
          label='E-mail'
          value={user.email}
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}          
        />
        <Input
          label='Telefone'
          value={user.number}
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}          
        />
        <Button
          title='Alterar'          
        >
        </Button> 
        <Button
          title='Excluir'
          buttonStyle={{
            backgroundColor: 'red'
          }}
        >
        </Button>       
      </View>
    </SafeAreaView>
  );
}

export default ContactEdit
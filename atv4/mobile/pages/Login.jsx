import styles from "../styles";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Button, Input } from "react-native-elements";
import { View, SafeAreaView } from 'react-native';

export default function Login({ navigation }) {
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
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}          
        />
        <Input
          label='Senha'
          labelStyle={{ color: 'black' }}
          inputStyle={styles.defaultInput}          
        />
        <Button
          title='Login'
          onPress={() => navigation.navigate('contacts')}
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
import styles from '../styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

import { View, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';

const users = []

for (let i = 1; i <= 20; i++) {
    users.push({
        name: `Contato ${i}`,
        email: `contato${i}@gmail.com`,
        number: `81 99999-9999`
    })
}

function Contacts({ navigation }) {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={{
          backgroundColor: '#327da8',
          width: '100dvw',        
          height: '100px',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}
      >
        <AntDesign
            name="arrowleft"
            size={32}
            color="white"
            style={{ marginLeft: 20, marginVertical: 'auto' }}
            onPress={() => navigation.navigate('login')}
        />
        <Text
          style={{ color: 'white', fontWeight: 600, marginVertical: 'auto' }}
        >
            Lista de Contatos
        </Text>        
        <AntDesign
            name="plus"
            size={32}
            color="white"
            style={{ marginLeft: 20, marginVertical: 'auto' }}
            onPress={() => navigation.navigate('contact-register')}
        />
      </View>
      <ScrollView
        style={{ width: '100dvw' }}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {
          users.map((user, index) => {
            return (
              <TouchableOpacity
                key={`${user.name}${index}`}
                style={{ padding: '0.6rem', gap: '0.8rem', display: 'flex', flexDirection: 'row' }}
                onPress={() => navigation.navigate('contact-edit', { user })}
              >
                <FontAwesome 
                  name="user-circle-o" 
                  size={62} 
                  color="black"
                  style={{ alignSelf: 'center', marginBottom: '1rem', display: 'inline' }}
                />
                <View
                  style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}
                >
                  <Text>
                    {user.name}
                  </Text>
                  <Text>
                    {user.number}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })
        }        
      </ScrollView>
    </SafeAreaView>
  )
};

export default Contacts
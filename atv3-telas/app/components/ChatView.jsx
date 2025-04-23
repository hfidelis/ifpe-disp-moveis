import { View } from 'react-native';
import { Text } from '@rneui/themed';

import { primary, white } from '../styles/colors';
import { Button, Icon, ListItem, Avatar } from '@rneui/themed';

export default () => {
  const contacts = []

  for (let i = 0; i < 7; i++) {
    contacts.push({
      name: `Contato ${i+1}`,
      status: `Lorem Ipsum ${i+1}`,
      uri: `https://randomuser.me/api/portraits/women/${i+1}.jpg`
    })
  }

  return (
    <>
    <View
      style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: primary
      }}
    >
      <Button
        icon={{
          size: 24,
          name: 'mail-unread-sharp',
          type: 'ionicon',
          color: primary
        }}
        buttonStyle={{
          borderRadius: '50%',
          height: '3rem',
          width: '3rem',
          backgroundColor: white,
        }}
      />
      <Text
        h3
        h3Style={{
          fontWeight: 500,
          color: white
        }}
      >
        Messages & Chat
      </Text>
    </View>
    <View
      style={{
        paddingHorizontal: '2.5rem',
        paddingVertical: '1rem'
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontWeight: 600,
          }}
        >
          Mark all read
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Text
            style={{
              fontWeight: 600,
            }}
          >
            Sort by time
          </Text>
          <Icon
            name='caret-down-sharp'
            type='ionicon'
            size={20}
            color={primary}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: '1.2rem'
        }}
      >
        {
          contacts.map(contact => {
            return (
              <ListItem
                key={contact.name}
                style={{
                  marginTop: '1rem',
                  borderRadius: '10px'
                }}
              >
                <Avatar rounded source={{ uri: contact.uri }}/>
                <ListItem.Content>
                  <ListItem.Title
                    style={{ fontWeight: '600' }}
                  >
                    {contact.name}
                  </ListItem.Title>
                  <ListItem.Subtitle
                    style={{ fontWeight: '300' }}
                  >
                    {contact.status}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            )
          })
        }
      </View>
    </View>
    </>
  )
}
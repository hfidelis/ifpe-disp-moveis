import { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Text as RNText,
} from 'react-native';
import { Text, Icon, Avatar, Badge } from '@rneui/themed';

import chatService from '../services/chat';
import { primary, white } from '../styles/colors';

export default () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const data = await chatService.getChats();
        setTimeout(() => {
          setChats(data);
          setLoading(false);
        }, 1000);
      } catch {
        setError(true);
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <View style={styles.header}>
        <View style={styles.headerIconCircle}>
          <Icon name="mail" type="ionicon" size={24} color={white} />
        </View>
        <Text h3 h3Style={styles.headerTitle}>
          Messages & Chat
        </Text>
      </View>

      <View style={styles.toolbar}>
        <Text style={styles.toolbarText}>Mark all read</Text>
        <View style={styles.sortRow}>
          <Text style={styles.toolbarText}>Sort by time</Text>
          <Icon name="caret-down-sharp" type="ionicon" size={16} color={primary} />
        </View>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        {loading ? (
          <ActivityIndicator size="large" color={primary} style={{ marginTop: 48 }} />
        ) : error ? (
          <Text style={styles.errorText}>
            Ocorreu um erro ao carregar os chats.
          </Text>
        ) : (
          <ScrollView contentContainerStyle={styles.chatList}>
            {chats.map((chat, index) => (
              <View key={index} style={styles.chatCard}>
                <Avatar
                  rounded
                  size={48}
                  source={{
                    uri:
                      chat.avatar ||
                      `https://randomuser.me/api/portraits/women/${index + 1}.jpg`,
                  }}
                />
                <View style={styles.chatContent}>
                  <Text style={styles.chatName}>{chat.name}</Text>
                  <Text style={styles.chatMessage}>{chat.status}</Text>
                </View>
                <View style={styles.chatMeta}>
                  {chat.unread > 0 && (
                    <Badge
                      value={chat.unread}
                      status="primary"
                      badgeStyle={styles.badge}
                      textStyle={styles.badgeText}
                    />
                  )}
                  <RNText style={styles.timeText}>{chat.time}</RNText>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 24,
    backgroundColor: white,
  },
  headerIconCircle: {
    backgroundColor: primary,
    borderRadius: 32,
    padding: 12,
    marginBottom: 12,
  },
  headerTitle: {
    fontWeight: '600',
    color: '#333',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  toolbarText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginTop: 48,
  },
  chatList: {
    paddingBottom: 32,
  },
  chatCard: {
    flexDirection: 'row',
    backgroundColor: white,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  chatContent: {
    flex: 1,
    marginLeft: 12,
  },
  chatName: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 2,
  },
  chatMessage: {
    fontSize: 13,
    color: '#666',
  },
  chatMeta: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: primary,
    height: 22,
    minWidth: 22,
    borderRadius: 11,
    paddingHorizontal: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  timeText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});

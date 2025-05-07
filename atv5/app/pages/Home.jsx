import React from 'react';

import ChatView from '../components/ChatView';
import TripView from '../components/TripView';
import MedicView from '../components/MedicView';

import { View } from 'react-native';
import { Tab, TabView } from '@rneui/themed';
import { primary, primaryDark, white } from '../styles/colors';

export default () => {
  const [index, setIndex] = React.useState(0);

  const viewMap = [
    {
      title: 'Mensagens',
      icon: 'chatbubbles-sharp',
      element: ChatView,
    },
    {
      title: 'Médicos',
      icon: 'medical-sharp',
      element: MedicView,
    },
    {
      title: 'Viagens',
      icon: 'airplane-sharp',
      element: TripView,
    },
  ]

  return (
    <>
      <TabView 
        value={index}
        onChange={setIndex} 
        animationType="timing"
      >
        {
          viewMap.map(view => {
            const ViewElement = view.element

            return (
              <View
                style={{ flex: 1 }}
                key={view.title}                
              >
                <TabView.Item>
                  <ViewElement />
                </TabView.Item>
              </View>              
            )
          })
        }
      </TabView>

      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
            backgroundColor: white,
            height: 3,
        }}
        containerStyle={{
            backgroundColor: primary
        }}
      >
        {
          viewMap.map(item => {
            return (
              <Tab.Item
                key={item.title}
                title={item.title}
                titleStyle={{ fontSize: 12, color: white }}
                icon={{ name: item.icon, type: 'ionicon', color: white }}
                containerStyle={(active) => ({
                    backgroundColor: active ? primaryDark : primary
                })}
              />
            )
          })
        }
      </Tab>
    </>
  );
};
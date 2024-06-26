import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image  } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/settingsScreen';
import { useTheme } from "./themeContext";


const Tab = createBottomTabNavigator();

export function Tabs ({}) {
    const { isDarkTheme } = useTheme();
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ }) => {
  
              const icons = {
                Home : require('../assets/home.png'),
                MyCards : require('../assets/myCards.png'),
                Statistics : require('../assets/statictics.png'),
                Settings : require('../assets/settings.png'),
            }
              return <Image source={icons[route.name]} style={styles.icon} />;
            },
            tabBarStyle: {
              backgroundColor: isDarkTheme ? '#333345' : '#ffffff',
              borderTopWidth: '0px',
              elevation: 0,
              height: '70px',
              paddingBottom: '10px',
            },
          })}
         
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}

        >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="MyCards" component={''} options={{ headerShown: false }}/>
        <Tab.Screen name="Statistics" component={''} options={{ headerShown: false }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
      color: 'red'
    },
    darkContainer: {
      backgroundColor: '#000020',
  },
  });
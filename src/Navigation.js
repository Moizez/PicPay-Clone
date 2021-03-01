import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import PayButton from './components/PayButton'

import HomeScreen from './screens/Home'
import WalletScreen from './screens/Wallet'
import PayScreen from './screens/Pay'
import Notification from './screens/Notification'
import Setting from './screens/Setting'

const Tab = createBottomTabNavigator()

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard'
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline'
    },
    Settings: {
        lib: AntDesign,
        name: 'setting'
    },
}

const Navigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Setting'
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Pay') {
                        return (
                            <PayButton
                                onPress={() => navigation.navigate('Pay')}
                                focused={focused}
                            />
                        )
                    }

                    const { lib: Icon, name } = icons[route.name]
                    return <Icon name={name} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)'
                },
                activeTintColor: '#FFF',
                inactiveTintColor: '#92929C'
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Início'
                }}
            />
            <Tab.Screen
                name='Wallet'
                component={WalletScreen}
                options={{
                    title: 'Carteira'
                }}
            />
            <Tab.Screen
                name='Pay'
                component={PayScreen}
                options={{
                    title: ''
                }}
            />

            <Tab.Screen
                name='Notifications'
                component={Notification}
                options={{
                    title: 'Notificações'
                }}
            />

            <Tab.Screen
                name='Settings'
                component={Setting}
                options={{
                    title: 'Ajustes'
                }}
            />
        </Tab.Navigator>
    )
}

export default Navigation
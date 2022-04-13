import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import MoreScreen from '../screens/MoreScreen';
import CollectionScreen from "../screens/CollectionScreen";

import MyTheme from "../Theme";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const {colors} = useTheme(MyTheme);
    return (
      <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: colors.primary ,
            tabBarInactiveTintColor: colors.grey,
            headerShown: false,
          // headerShown: false
            tabBarLabelStyle: {
                fontWeight: '500',
                fontSize: 12,
                letterSpacing: 0.5,
            },
            tabBarIconStyle: {
                marginTop: 11,
                marginTop: 4,
            },
            tabBarStyle:{
              height:56,
              paddingBottom: 5,
              // _light:{backgroundColor: colors.white},
              // _dark:{backgroundColor: colors.black}
            },
            // headerStyle: { 
            //     headerShadowVisible: false,
            //     shadowColor: 'transparent',
            //     elevation: 0,
            //     shadowOpacity: 0,
            //     shadowOffset:{height: 0, width: 0},
            //     borderBottomColor: 'transparent',
            //   },
        }}
      >
        <Tab.Screen 
          name="HomeStack" 
          component={HomeScreen}
          options={{
            headerShown: false,
            title: "首頁",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={22} />
            ),
            headerStyle: { 
              headerShadowVisible: false,
              shadowColor: 'transparent',
              elevation: 0,
              shadowOpacity: 0,
              shadowOffset:{height: 0, width: 0},
              borderBottomColor: 'transparent',
            },
          }}
        />
        <Tab.Screen 
          name="ShopStack" 
          component={ShopScreen}
          options={{
            headerShown: false,
            headerTitle: " ",
            tabBarLabel: "我的店家",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-restaurant" color={color} size={22} />
            ),
            searchBar: 0,
            headerSearchBarOptions: {
                autoCapitalize: 'none',
                obscureBackground: true,
                onCancelButtonPress: false,
                hideWhenScrolling: false,
            },
          }}
        />
        <Tab.Screen 
          name="CollectionStack" 
          component={CollectionScreen} 
          options={{
            headerShown: false,
            title: "我的收藏",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="folder-star-multiple" color={color} size={22} />
            ),
            headerStyle: { 
              headerShadowVisible: false,
              shadowColor: 'transparent',
              elevation: 0,
              shadowOpacity: 0,
              shadowOffset:{height: 0, width: 0},
              borderBottomColor: 'transparent',
            },
          }}
        />
        <Tab.Screen 
          name="MoreStack" 
          component={MoreScreen} 
          options={{
            headerShown: false,
            title: "更多",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="more-horiz" color={color} size={22} />
            ),
            headerStyle: { 
              headerShadowVisible: false,
              shadowColor: 'transparent',
              elevation: 0,
              shadowOpacity: 0,
              shadowOffset:{height: 0, width: 0},
              borderBottomColor: 'transparent',
            },
          }}
        />
      </Tab.Navigator>
    );
  }

export default MyTabs;
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, icons } from '../contanst/'
import { Home, PlantDetails,Empty } from '../screens'
const Tab = createBottomTabNavigator();


const tabBarOptions = {
     showLabel: false,
     style: {
          height: '10%'

     }
}

const CameraButton = ()=>{
     return(
          <View style={{
          
               alignItems:'center',
               justifyContent:'center',
                    width:50,
                    height:50,
                    borderRadius:25,
                    backgroundColor:COLORS.primary
          }}>
               <Image 
               source={icons.camera}
               resizeMode='contain'
               style={{
                    width:23,
                    height:23
               }}
                />

          </View>
     )
}

const Tabs = () => {
     return (
          <Tab.Navigator
               tabBarOptions={tabBarOptions}
               screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                         const tintColor = focused ? COLORS.primary : COLORS.gray;

                         switch (route.name) {
                              case 'Home':
                                   return (
                                        <Image
                                             source={icons.flashicon}
                                             resizeMode={'contain'}
                                             style={{
                                                  tintColor: tintColor,
                                                  width: 25,
                                                  height: 25
                                             }}
                                        />
                                   )

                              case 'Box':
                                   return (
                                        <Image
                                             source={icons.cubeicon}
                                             resizeMode={'contain'}
                                             style={{
                                                  tintColor: tintColor,
                                                  width: 25,
                                                  height: 25
                                             }}
                                        />
                                   )
                              case 'Camera':
                                   return (
                                        <CameraButton />
                                   )
                              case 'Search':
                                   return (
                                        <Image
                                             source={icons.searchicon}
                                             resizeMode={'contain'}
                                             style={{
                                                  tintColor: tintColor,
                                                  width: 25,
                                                  height: 25
                                             }}
                                        />
                                   )
                              case 'Favorite':
                                   return (
                                        <Image
                                             source={icons.hearticon}
                                             resizeMode={'contain'}
                                             style={{
                                                  tintColor: tintColor,
                                                  width: 25,
                                                  height: 25
                                             }}
                                        />
                                   )
                         }
                    }
               })}
          >
               <Tab.Screen
                    name='Home'
                    component={Home}
               />
               <Tab.Screen
                    name='Box'
                    component={Empty}
               />
               <Tab.Screen
                    name='Camera'
                    component={Empty}
               />
               <Tab.Screen
                    name='Search'
                    component={Empty}
               />
               <Tab.Screen
                    name='Favorite'
                    component={Empty}
               />
          </Tab.Navigator>
     )
}
export default Tabs;
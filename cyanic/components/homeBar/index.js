// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';


// import ProfileScreen from './screens/ProfileScreen'; // Tela do perfil
// import CalcScreen from '../calc';
// import ListaExercices from '../lista';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === 'Calc') {
//             iconName = 'ios-calculator';
//           } else if (route.name === 'List') {
//             iconName = 'ios-list';
//           } 
//           // else if (route.name === 'Profile') {
//           //   iconName = 'ios-person';
//           // }

//           // Você pode retornar qualquer componente aqui!
//           return <Icon name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'white',
//         inactiveTintColor: 'gray',
//         style: {
//           backgroundColor: '#000', // Cor de fundo da barra de navegação
//         },
//       }}
//     >
//       <Tab.Screen name="Calc" component={CalcScreen} />
//       <Tab.Screen name="List" component={ListaExercices} />

//       {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
//     </Tab.Navigator>
//   );
// }

// export default function MenuBar() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

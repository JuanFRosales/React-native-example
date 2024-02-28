import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/home';
import profile from '../views/profile';

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();   

const Navigator = () => { 
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={profile} />
        </Tab.Navigator>
        </NavigationContainer>
    );
}

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="Profile" component={profile} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

const TabNavigator = () => {
    return (
    
            <Tab.Navigator>
                <Tab.Screen name="Tabs"
                 component={TabNavigator} 
                 options={{headerShown: true}}/>
                <Tab.Screen name="Profile" component={profile} />
            </Tab.Navigator>
    
    );
}

export default Navigator;



import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./core/theme";
import { LoginScreen, RegisterScreen, Home } from "./screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="ForgotPasswordScreen"
              component={ForgotPasswordScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

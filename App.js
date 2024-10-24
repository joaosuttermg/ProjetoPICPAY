import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen, { ThemeContext } from "./src/screens/HomeScreen";
import PixScreen from "./src/screens/PixScreen";
import { ThemeProvider } from "./src/contexts/ThemeContext";
const [theme, setTheme] = useState("dark");

const ThemeContext = createContext(null);


const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Button
            onClick={() => {
              setTheme("light");
            }}
          >
            Switch to light theme
          </Button>
          <Stack.Screen
            name="Pix"
            component={PixScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

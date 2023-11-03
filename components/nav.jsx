import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import BottomTab from "./bottomTab";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fefefe",
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fefefe",
      }}
    >
      <Text>Settings Screen</Text>
    </View>
  );
}
function ChatScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fefefe",
      }}
    >
      <Text>Chat Screen</Text>
    </View>
  );
}

export default function Nav() {
  const insets = useSafeAreaInsets();
  function getBottomTabBar(props) {
    return <BottomTab {...props} insets={insets} />;
  }
  return (
    <Tab.Navigator tabBar={(props) => getBottomTabBar(props)}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
}

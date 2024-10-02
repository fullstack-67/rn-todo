import { TouchableOpacity } from "react-native-gesture-handler";
import { Stack, Link } from "expo-router";
import { COLORS, FONT } from "../../constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TodoLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: COLORS.lightWhite,
        headerTitleStyle: {
          fontFamily: FONT.regular,
          fontSize: 15,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "| My Todos",
          headerRight: () => <AboutMenu />,
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
        }}
      />
    </Stack>
  );
}

const AboutMenu = () => {
  return (
    <Link href="/todo/about">
      <TouchableOpacity onPress={() => {}} style={{ paddingRight: 10 }}>
        <Ionicons
          name="help-circle-outline"
          size={32}
          color={COLORS.lightWhite}
        />
      </TouchableOpacity>
    </Link>
  );
};

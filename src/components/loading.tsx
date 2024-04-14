import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return (
        <View className="justify-center items-center mt-20">
            <ActivityIndicator />
        </View>
    )
}
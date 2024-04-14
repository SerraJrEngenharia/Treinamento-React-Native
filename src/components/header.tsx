import { Text, View } from "react-native";

type HeaderProps = {
    title: string
    subtitle: string
}

export function Header({ title, subtitle }: HeaderProps) {
    return (
        <View className="items-center justify-center p-5 px-6 my-8">
            <Text className="text-3xl font-extrabold mb-2">
                {title}
            </Text>
            <Text className="text-lg text-slate-600 text-center font-bold">
                {subtitle}
            </Text>
        </View>
    )
}
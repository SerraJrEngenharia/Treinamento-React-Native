import { Image, Text, View } from "react-native"

type CardProps = {
    title: string
    lyric: string
    image: string
}

export function Card({ title, lyric, image }: CardProps) {
    return (
        <View className="w-full h-56 mt-20 bg-white rounded-lg items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <View className="flex-row items-center p-5">
                <Image 
                    className="w-24 h-24 rounded-lg"
                    source={{ uri: image }}
                />
                <Text className="flex-1 ml-6 font-bold text-xl">{title}</Text>
            </View>
            <Text className="text-center mt-5 font-semibold text-gray-700">
                "{lyric}"
            </Text>
        </View>
    )
}
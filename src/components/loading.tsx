import LottieView from "lottie-react-native";
import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return (
            <LottieView
                source={require('../assets/loading-animate.json')}
                style={{width: "50%", height: "50%"}}
                autoPlay 
                loop
            />
            
    )
}
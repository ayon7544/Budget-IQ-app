import { useEffect, useRef } from "react";
import { Animated } from "react-native";

const FadeInView = ({ children, duration = 260, style, trigger }) => {
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        opacity.setValue(0.86);
        Animated.timing(opacity, {
            toValue: 1,
            duration,
            useNativeDriver: true,
        }).start();
    }, [duration, opacity, trigger]);

    return <Animated.View style={[style, { opacity }]}>{children}</Animated.View>;
};

export default FadeInView;
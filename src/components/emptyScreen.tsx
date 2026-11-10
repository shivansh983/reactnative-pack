import type {ReactNode} from "react";
import {SafeAreaView} from "react-native-safe-area-context";


type ScreenProps = {
    children: ReactNode;
};

export default function Screen({children}: ScreenProps) {
    return(
    <SafeAreaView className="flex-1 bg-brand-bg px-5">
        {children}
    </SafeAreaView>
    );
}

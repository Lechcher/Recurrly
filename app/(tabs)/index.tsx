import { NWSafeAreaView } from "@/core/customNativewind";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function App() {
	return (
		<NWSafeAreaView className="flex-1 bg-background p-5 font-sans-regular">
			<Text className="text-5xl font-sans-extrabold">Home</Text>
			<Link
				href={"/onboarding"}
				className="mt-4 rounded bg-primary text-white p-4 font-sans-bold"
			>
				Go to Onboarding
			</Link>

			<Link
				href={"/(auth)/sign-in"}
				className="mt-4 rounded bg-primary text-white p-4 font-sans-bold"
			>
				Go to Sign In
			</Link>
			<Link
				href={"/(auth)/sign-up"}
				className="mt-4 rounded bg-primary text-white p-4 font-sans-bold"
			>
				Go to Sign Up
			</Link>

			<Link href={"/subscriptions/spotify"}>Spotify Subscription</Link>
			<Link
				href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
			>
				Claude Max Subscription
			</Link>
		</NWSafeAreaView>
	);
}

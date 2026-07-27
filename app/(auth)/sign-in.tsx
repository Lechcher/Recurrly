import { Link } from "expo-router";
import { View } from "react-native";

const SignIn = () => {
	return (
		<View>
			<Link href={"/(auth)/sign-up"}>Create Account</Link>
		</View>
	);
};

export default SignIn;

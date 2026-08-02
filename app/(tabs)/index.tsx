import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
	HOME_BALANCE,
	HOME_SUBSCRIPTIONS,
	HOME_USER,
	UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { NWSafeAreaView } from "@/core/customNativewind";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

export default function App() {
	const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<
		string | null
	>(null);

	return (
		<NWSafeAreaView className="screen-container">
			<View>
				<View className="home-header">
					<View className="home-user">
						<Image source={images.avatar} className="home-avatar" />
						<Text className="home-user-name">{HOME_USER.name}</Text>
					</View>

					<Pressable className="home-add-icon-container">
						<Image source={icons.add} className="home-add-icon" />
					</Pressable>
				</View>

				<FlatList
					data={HOME_SUBSCRIPTIONS}
					renderItem={({ item }) => (
						<SubscriptionCard
							key={item.id}
							expanded={expandedSubscriptionId === item.id}
							onPress={() =>
								setExpandedSubscriptionId((currentId) =>
									currentId === item.id ? null : item.id,
								)
							}
							{...item}
						/>
					)}
					extraData={expandedSubscriptionId}
					ListHeaderComponent={() => (
						<>
							<View className="home-balance-card">
								<Text className="home-balance-label">Balance</Text>

								<View className="home-balance-row">
									<Text className="home-balance-amount">
										{formatCurrency(HOME_BALANCE.amount)}
									</Text>
									<Text className="home-balance-date">
										{dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
									</Text>
								</View>
							</View>

							<View className="mb-5">
								<ListHeading title="Upcoming" />

								<FlatList
									data={UPCOMING_SUBSCRIPTIONS}
									renderItem={({ item }) => (
										<UpcomingSubscriptionCard {...item} />
									)}
									keyExtractor={(item) => item.id}
									horizontal={true}
									showsHorizontalScrollIndicator={false}
									ListEmptyComponent={
										<Text className="home-empty">
											No upcoming subscriptions
										</Text>
									}
								/>
							</View>

							<ListHeading title="All Subscriptions" />
						</>
					)}
					ItemSeparatorComponent={() => <View className="h-4" />}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={
						<Text className="home-empty-state">No subscriptions yet.</Text>
					}
					contentContainerClassName="pb-40"
				/>
			</View>
		</NWSafeAreaView>
	);
}

import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import Screen from "../../../components/emptyScreen";
import { JobCard } from "../../../components/jobCard";
import { StatCard } from "../../../components/statCard";
import {
  applications,
  jobs,
  type ApplicationStatus,
} from "../../../data/jobs";

// Status styles
const statusBg: Record<ApplicationStatus, string> = {
  Applied: "bg-brand-text-muted/15",
  "In review": "bg-brand-blue/15",
  Interview: "bg-brand-success/15",
  Rejected: "bg-brand-coral/15",
};

const statusText: Record<ApplicationStatus, string> = {
  Applied: "text-brand-text-secondary",
  "In review": "text-brand-blue",
  Interview: "text-brand-success",
  Rejected: "text-brand-coral",
};

// Screen
export default function HomeScreen() {
  return (
    <Screen scroll>
      <View className="py-6">
        {
          // Greeting
        }
        <Text className="text-sm text-brand-text-secondary">
          Hi Shivansh
        </Text>
        <Text className="mt-1 text-[26px] font-bold text-brand-text-primary">
          Dashboard
        </Text>

        {
          // Stats
        }
        <View className="mt-6 gap-3">
          <View className="flex-row gap-3">
            <StatCard
              label="Applications sent"
              value={24}
              icon="paper-plane-outline"
              tone="blue"
            />
            <StatCard
              label="Responses"
              value={9}
              icon="mail-open-outline"
              tone="success"
            />
          </View>
          <View className="flex-row gap-3">
            <StatCard
              label="Interviews"
              value={3}
              icon="people-outline"
              tone="coral"
            />
            <StatCard
              label="Saved jobs"
              value={12}
              icon="bookmark-outline"
              tone="muted"
            />
          </View>
        </View>

        {
          // Recent applications
        }
        <View className="mt-8 flex-row items-center justify-between">
          <Text className="text-lg font-semibold text-brand-text-primary">
            Recent applications
          </Text>
          <Pressable onPress={() => router.push("/jobList")}>
            <Text className="text-sm font-medium text-brand-blue">See all</Text>
          </Pressable>
        </View>

        <View className="mt-3 overflow-hidden rounded-2xl border border-brand-surface-border bg-brand-surface">
          {applications.map((item, i) => (
            <View
              key={item.id}
              className={`flex-row items-center justify-between p-4 ${
                i > 0 ? "border-t border-brand-surface-border" : ""
              }`}
            >
              <View className="flex-1 pr-3">
                <Text
                  className="text-sm font-medium text-brand-text-primary"
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text className="mt-0.5 text-xs text-brand-text-secondary">
                  {item.company} - {item.updatedAgo}
                </Text>
              </View>

              <View
                className={`rounded-full px-2.5 py-1 ${statusBg[item.status]}`}
              >
                <Text
                  className={`text-[11px] font-medium ${statusText[item.status]}`}
                >
                  {item.status}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {
          // Recommended
        }
        <Text className="mt-8 text-lg font-semibold text-brand-text-primary">
          Jobs for you
        </Text>
        <View className="mt-1">
          {jobs.slice(0, 2).map((job) => (
            <JobCard key={job.id} job={job} onPress={() => router.push("/jobList")} />
          ))}
        </View>
      </View>
    </Screen>
  );
}

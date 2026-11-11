import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { AppCard } from "./card";
import type { Job } from "../data/jobs";

// Types
type JobCardProps = {
  job: Job;
  onPress?: () => void;
};

// Component
export const JobCard = ({ job, onPress }: JobCardProps) => {
  return (
    <AppCard onPress={onPress}>
      <View className="flex-row items-start gap-3">
        {
          // Company initial
        }
        <View className="h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15">
          <Text className="text-base font-bold text-brand-blue">
            {job.company.charAt(0)}
          </Text>
        </View>

        <View className="flex-1">
          <Text
            className="text-base font-semibold text-brand-text-primary"
            numberOfLines={1}
          >
            {job.title}
          </Text>
          <Text className="mt-0.5 text-sm text-brand-text-secondary">
            {job.company}
          </Text>

          {
            // Meta row
          }
          <View className="mt-2 flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Ionicons name="location-outline" size={13} color="#8A8D96" />
              <Text className="text-xs text-brand-text-secondary">
                {job.location}
              </Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Ionicons name="cash-outline" size={13} color="#8A8D96" />
              <Text className="text-xs text-brand-text-secondary">
                {job.salary}
              </Text>
            </View>
          </View>

          {
            // Tags
          }
          <View className="mt-3 flex-row flex-wrap gap-2">
            <View className="rounded-full bg-brand-surface-border px-2.5 py-1">
              <Text className="text-[11px] text-brand-text-primary">
                {job.type}
              </Text>
            </View>
            {job.remote ? (
              <View className="rounded-full bg-brand-success/15 px-2.5 py-1">
                <Text className="text-[11px] text-brand-success">Remote</Text>
              </View>
            ) : null}
            {job.skills.slice(0, 2).map((skill) => (
              <View
                key={skill}
                className="rounded-full border border-brand-surface-border px-2.5 py-1"
              >
                <Text className="text-[11px] text-brand-text-secondary">
                  {skill}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Text className="text-[11px] text-brand-text-muted">
          {job.postedAgo}
        </Text>
      </View>
    </AppCard>
  );
};

export default JobCard;

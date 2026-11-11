import Ionicons from "@expo/vector-icons/Ionicons";
import { useMemo, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import Screen from "../../../components/emptyScreen";
import { JobCard } from "../../../components/jobCard";
import { jobs, type JobType } from "../../../data/jobs";

const filters = ["All", "Full-time", "Part-time", "Contract", "Internship"] as const;

type Filter = (typeof filters)[number];

// Screen
export default function JobListScreen() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesFilter =
        filter === "All" || job.type === (filter as JobType);
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q);

      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <Screen>
      <FlatList
        data={visible}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-6"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View className="pt-6">
            <Text className="text-[26px] font-bold text-brand-text-primary">
              Jobs
            </Text>
            <Text className="mt-1 text-sm text-brand-text-secondary">
              {visible.length} jobs found
            </Text>

            {
              // Search
            }
            <View className="mt-5 flex-row items-center gap-2 rounded-xl border border-brand-surface-border bg-brand-surface px-3">
              <Ionicons name="search" size={18} color="#5C5F68" />
              <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder="Search jobs"
                placeholderTextColor="#5C5F68"
                cursorColor="#1A85FF"
                selectionColor="#1A85FF"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="search"
                className="flex-1 py-3 text-base text-brand-text-primary"
              />
              {query ? (
                <Pressable onPress={() => setQuery("")} hitSlop={8}>
                  <Ionicons name="close-circle" size={18} color="#5C5F68" />
                </Pressable>
              ) : null}
            </View>

            {
              // Filters
            }
            <View className="mt-4 flex-row flex-wrap gap-2">
              {filters.map((item) => {
                const selected = item === filter;
                return (
                  <Pressable
                    key={item}
                    onPress={() => setFilter(item)}
                    className={`rounded-full border px-3 py-1.5 ${
                      selected
                        ? "border-brand-blue bg-brand-blue/15"
                        : "border-brand-surface-border bg-brand-surface"
                    }`}
                  >
                    <Text
                      className={`text-xs font-medium ${
                        selected ? "text-brand-blue" : "text-brand-text-secondary"
                      }`}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        }
        renderItem={({ item }) => <JobCard job={item} />}
        ListEmptyComponent={
          <View className="items-center py-16">
            <Ionicons name="briefcase-outline" size={40} color="#5C5F68" />
            <Text className="mt-3 text-base font-medium text-brand-text-primary">
              Nothing found
            </Text>
            <Text className="mt-1 text-sm text-brand-text-secondary">
              Try another search
            </Text>
          </View>
        }
      />
    </Screen>
  );
}

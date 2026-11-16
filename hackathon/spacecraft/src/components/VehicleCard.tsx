import { Image, StyleSheet, View } from "react-native";
import { Card, Chip, Text } from "react-native-paper";

import type { GameVehicle, Translation } from "@/api/starcitizen.schemas";

interface VehicleCardProps {
  vehicle: GameVehicle;
}

// The spec types translations with `en`, but the live API sends `en_EN`
const toText = (value?: null | Translation) =>
  value?.en ?? (value as null | Record<string, string> | undefined)?.en_EN;

const formatNumber = (value?: null | number, unit = "") =>
  value == null ? "–" : `${value.toLocaleString("en-US")}${unit}`;

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const thumbnail = vehicle.images?.[0]?.thumbnail_url;
  // Role and type are often the same word (e.g. "Destroyer"), so we dedupe them
  const tags = [
    ...new Set(
      [
        vehicle.role,
        toText(vehicle.type),
        toText(vehicle.production_status),
      ].filter((tag): tag is string => Boolean(tag)),
    ),
  ];

  const stats = [
    { label: "Crew", value: formatNumber(vehicle.crew?.max) },
    { label: "SCM", value: formatNumber(vehicle.speed?.scm, " m/s") },
    { label: "Cargo", value: formatNumber(vehicle.cargo_capacity, " SCU") },
    { label: "Price", value: vehicle.msrp ? `$${vehicle.msrp}` : "–" },
  ];

  return (
    <Card style={styles.card}>
      {thumbnail && (
        <Image
          accessibilityIgnoresInvertColors
          source={{ uri: thumbnail }}
          style={styles.image}
        />
      )}
      <Card.Title
        subtitle={vehicle.manufacturer?.name ?? undefined}
        subtitleNumberOfLines={2}
        title={vehicle.name}
        titleNumberOfLines={2}
      />
      <Card.Content style={styles.content}>
        {tags.length > 0 && (
          <View style={styles.tags}>
            {tags.map((tag) => (
              <Chip
                compact
                key={tag}
              >
                {tag}
              </Chip>
            ))}
          </View>
        )}
        <View style={styles.stats}>
          {stats.map(({ label, value }) => (
            <View
              key={label}
              style={styles.stat}
            >
              <Text variant="labelSmall">{label}</Text>
              <Text
                style={styles.value}
                variant="titleSmall"
              >
                {value}
              </Text>
            </View>
          ))}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 24,
    marginHorizontal: 24,
  },
  content: {
    gap: 12,
  },
  image: {
    aspectRatio: 16 / 9,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
  },
  stat: {
    flexBasis: "45%",
    flexGrow: 1,
  },
  stats: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  value: {
    fontVariant: ["tabular-nums"],
  },
});

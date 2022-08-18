import React from "react";
import { Feather } from "@expo/vector-icons";

export const FeatherListInApp = {
  "chevron-left": "chevron-left",
} as const;

export type FeatherIconsList =
  typeof FeatherListInApp[keyof typeof FeatherListInApp];

interface IconWrapperProps {
  name: FeatherIconsList;
  iconSize?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl";
}

export const Icon = (props: IconWrapperProps) => {
  switch (props.iconSize) {
    case "xs": {
      return <Feather size={12} {...props} />;
    }
    case "sm": {
      return <Feather size={14} {...props} />;
    }
    case "md": {
      return <Feather size={16} {...props} />;
    }
    case "lg": {
      return <Feather size={18} {...props} />;
    }
    case "xl": {
      return <Feather size={20} {...props} />;
    }
    case "2xl": {
      return <Feather size={24} {...props} />;
    }
    case "3xl": {
      return <Feather size={28} {...props} />;
    }
    case "4xl": {
      return <Feather size={34} {...props} />;
    }
    case "5xl": {
      return <Feather size={39} {...props} />;
    }
    case "6xl": {
      return <Feather size={48} {...props} />;
    }
    case "7xl": {
      return <Feather size={60} {...props} />;
    }
    case "8xl": {
      return <Feather size={72} {...props} />;
    }

    default: {
      return <Feather size={24} {...props} />;
    }
  }
};

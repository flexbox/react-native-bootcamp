import { SkeletonListReanimated } from "@/components/SkeletonListReanimated";

export default {
  title: "SkeletonListReanimated",
};

export const _SkeletonListReanimated = () => {
  return <SkeletonListReanimated numberItems={10} />;
};

export const _SkeletonListReanimatedSingle = () => {
  return <SkeletonListReanimated numberItems={1} />;
};

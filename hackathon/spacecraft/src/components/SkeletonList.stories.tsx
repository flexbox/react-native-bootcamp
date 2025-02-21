import { SkeletonList } from "@/components/SkeletonList";

export default {
  title: "SkeletonList",
};

export const _SkeletonList = () => {
  return <SkeletonList numberItems={10} />;
};

export const _SkeletonListSingle = () => {
  return <SkeletonList numberItems={1} />;
};

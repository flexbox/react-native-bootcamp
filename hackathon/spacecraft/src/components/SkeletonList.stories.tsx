import { SkeletonList } from "@/components/SkeletonList";

export default {
  title: "SkeletonList",
};

export const _SkeletonList = () => {
  return <SkeletonList />;
};

export const _SkeletonListSingle = () => {
  return <SkeletonList numberItems={1} />;
};

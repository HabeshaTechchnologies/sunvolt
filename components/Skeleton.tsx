export default function Skeleton({ height = 400 }: { height?: number }) {
  return (
    <div
      style={{ height }}
      className="w-full bg-gray-200 animate-pulse rounded-lg"
    />
  );
}
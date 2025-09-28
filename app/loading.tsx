import FancyLoading from "@/components/LoadingSkelton";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <FancyLoading />
    </div>
  );
}

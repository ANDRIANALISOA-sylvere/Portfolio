import { App } from "@/components/App";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/4"></div>
      <div className="w-1/2">
        <div className="p-6">
          <App></App>
        </div>
      </div>
      <div className="w-1/4"></div>
    </div>
  );
}

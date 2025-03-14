import { App } from "@/components/App";

export default function Home() {
  return (
    <div className="md:flex md:h-screen">
      <div className="md:w-1/6"></div>
      <div className="md:w-3/4">
        <div className="p-6">
          <App></App>
        </div>
      </div>
      <div className="md:w-1/6"></div>
    </div>
  );
}

import { App } from "@/components/App";

export default function Home() {
  return (
    <div className="md:flex md:h-screen">
      <div className="md:w-1/4"></div>
      <div className="md:w-1/2">
        <App></App>
      </div>
      <div className="md:w-1/4"></div>
    </div>
  );
}

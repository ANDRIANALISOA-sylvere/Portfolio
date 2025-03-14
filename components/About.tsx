import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <div className="mt-16">
      <h1 className="font-bold">About me</h1>
      <div className="mt-3">
        <span className="space-y-1">
          Hi, I&apos;m{" "}
          <Badge className="important">ANDRIANALISOA Joséphin Sylvère</Badge>{" "}
          from <Badge className="important">Madagascar 🇲🇬 </Badge>, a passionate
          <Badge className="important"> backend developer</Badge> specializing
          in
          <Badge className="important"> Node.js</Badge>. I enjoy building
          efficient,scalable systems and optimizing performance to deliver
          hight-quality solutions.
        </span>
      </div>
    </div>
  );
}

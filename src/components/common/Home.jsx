import { HeroSection } from './HeroSection';
import { Xp } from './Xp';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div className="max-w-3xl w-full">
        <HeroSection />
        <Xp></Xp>
      </div>
    </div>
  );
};


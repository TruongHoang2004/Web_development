// pages/index.tsx
//import { Button } from "@/components/ui/button"
import Header from '../components/ui/Header';


export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto p-4">
        HOME PAGE
      </div>
    </div>
  );
}


import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { data } from "./_data";

export default function Home() {
  return (
    <div>
      {data.map((item: AnimeProp, index) => (
        <AnimeCard anime={item} key={item.id} index={index} />
      ))}
    </div>
  );
}

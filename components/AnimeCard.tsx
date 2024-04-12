import Image from "next/image";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

export default function AnimeCard({ anime }: Prop) {
  return (
    <div>
      <div>
        <Image
          src={anime.image.original}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div>
        <div>
          <h2>{anime.name}</h2>
          <div>
            <p>{anime.kind}</p>
          </div>
        </div>
        <div>
          <div>
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p>{anime.episodes || anime.episodes_aired}</p>
          </div>
          <div>
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p>{anime.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

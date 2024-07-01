"use client";
import PodcastCard from "@/components/PodcastCard";
import React from "react";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {trendingPodcasts?.map(
            ({ _id, podcastTitle, podcastDesc, imageUrl }) => {
              return (
                <PodcastCard
                  key={_id}
                  imgUrl={imageUrl!}
                  title={podcastTitle}
                  description={podcastDesc}
                  podcastId={_id}
                />
              );
            }
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;

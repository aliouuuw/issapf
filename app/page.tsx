import Hero from "@/components/Hero";
import Videos from "@/components/Videos";
import { sanityClient } from "@/utils/sanity-client";

type VideoType = {
  source: string
}

// async function getIds() {
//   try {
//     const response = await fetch(`${apiUrl}/api/ids`,
//       { method: "POST",
//         body: JSON.stringify({url: "https://drive.google.com/drive/folders/1-ZFL2E25PSELuEn-YSVwgd9zarfxwxQt"})
//       },
//     )
//     const res = await response.json()
//     const videoIds = res.fileIDs
//     return videoIds 
//   } catch (error) {
//     console.log(error)
//     return
//   }
// }

async function getVideos(){
  try {
    const videos = await sanityClient.fetch(
      `*[_type == 'video']{
        "source": fichier.asset -> url,
      }`,
      {},
      { next: { revalidate: 0 } }
    );
    return videos;
  } catch (error) {
    throw new Error("Error fetching videos");
  }
}

export default async function Home() {

  const videos: VideoType[] = await getVideos()
  return (
    <main className="relative">
      <Hero />
      <Videos videos = {videos} />
      <div className="h-screen">
        Images
      </div>
    </main>
  );
}

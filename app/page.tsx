import Hero from "@/components/Hero";
import Videos from "@/components/Videos";


async function getIds() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const response = await fetch(`${apiUrl}/api/ids`,
      { method: "POST",
        body: JSON.stringify({url: "https://drive.google.com/drive/folders/1-ZFL2E25PSELuEn-YSVwgd9zarfxwxQt"})
      },
    )
    const res = await response.json()
    const videoIds = res.fileIDs
    return videoIds 
  } catch (error) {
    console.log(error)
    return
  }
}

export default async function Home() {
  const videoIDs: string[] = await getIds()
  return (
    <main className="relative">
      <Hero />
      <Videos videoIDs = {videoIDs} />
    </main>
  );
}

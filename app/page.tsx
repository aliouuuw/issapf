import Contact from "@/components/Contact";
import Footer from "@/components/Footer"
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Images from "@/components/Images";
import Services from "@/components/Services";
import Videos from "@/components/Videos";
import { sanityClient } from "@/utils/sanity-client";
import { Metadata } from "next";
//import { promises as fs } from "fs";


export const metadata: Metadata = {
  title: "Issa Ndao",
  description: "My Videography & Photography Portfolio",
};

type VideoType = {
  source: string;
};

type ImageType = {
  titre: string,
  url: string;
  type: string;
};

async function getVideos() {
  try {
    const videos = await sanityClient.fetch(
      `*[_type == 'video'] | order(datetime desc){
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
async function getPhotos() {
  try {
    const photos = await sanityClient.fetch(
      `*[_type == 'photo']{
        titre,
        type,
        "url": image.asset -> url,
      }`,
      {},
      { next: { revalidate: 0 } }
    );
    return photos;
  } catch (error) {
    throw new Error("Error fetching photos");
  }
}

// const prepareDocuments = async (directory: string) => {
//   const files = await fs.readdir(process.cwd() + `/public/${directory}`, "utf8");

//   files.map(async (file) => {
//     const titre = `${directory} - ${file}` 
//     const stream = await fs.readFile(process.cwd() + `/public/${directory}/${file}`);
//     sanityClient.assets
//       .upload("image", stream, {
//         filename: file,
//       })
//       .then((imageAsset) => {
//         const doc = {
//           _type: 'photo',
//           titre: titre, 
//           slug: {
//             current: titre.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
//           },
//           type: `${directory}`,
//           image: {
//             _type: 'image',
//             asset: {
//               _type: 'reference',
//               _ref: imageAsset._id, 
    
//             },
//           },
//           datetime: new Date(), 
//         };
//         sanityClient.create(doc).then((res) => {
//           console.log('Doc was created (or was already present)')
//         })
//       })
//       .catch((error: { message: any; }) => {
//         console.error("Upload failed:", error.message);
//       });
//   });
//   return;
// };

// const deleteFiles = async (directory:string) => {
//   sanityClient
//   .delete({query: `*[_type == "photo" && type == "${directory}"]`})
//   .then(() => {
//     console.log(`The document matching *[_type == "photo" && type == "${directory}"] was deleted`)
//   })
//   .catch((err) => {
//     console.error('Delete failed: ', err.message)
//   })
// }

export default async function Home() {
  const videos: VideoType[] = await getVideos();
  const images: ImageType[] = await getPhotos();
  return (
    <>
    <Header />
    <main className="relative">
      <Hero />
      <Videos videos={videos} />
      <Images images={images} />
      <Services />
      <Contact />
    </main>
    <Footer />
    </>
  );
}

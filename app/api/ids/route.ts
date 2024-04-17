const cheerio = require("cheerio");

export const POST = async (req: Request) => {
  const { url } = await req.json();
  try {
    // Make a GET request to the public Google Drive link
    const response = await fetch(
      url,
      { next: { revalidate: 0 } }
    );
    const html = await response.text();

    // Load the HTML response into Cheerio
    const $ = cheerio.load(html);

    const fileIDs: string[] = [];

    $('.pmHCK > [data-target="doc"]').each((i: number, element: any) => {
      const id = $(element).attr("data-id");
      if (id) {
        fileIDs.push(id);
      }
    });
    console.log("Received Ids!")

    // Respond with the extracted video IDs
    return Response.json({ fileIDs });
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    return Response.json({
      error: "An error occurred while scraping tjjhe Google Drive link.",
    });
  }
};

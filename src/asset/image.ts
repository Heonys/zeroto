import { getCldImageUrl } from "next-cloudinary";
const path = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1711725900`;

export const spaceImage = getCldImageUrl({ src: `${path}/space.webp` });
export const starImage = getCldImageUrl({ src: `${path}/stars.webp` });
export const messageImage = getCldImageUrl({ src: `${path}/404Message.webp` });
export const backgroundImage = getCldImageUrl({
  src: `${path}/background.webp`,
});
export const octocatImage = getCldImageUrl({ src: `${path}/octocat.webp` });
export const github = getCldImageUrl({ src: `${path}/github.webp` });

export const docsImage1 = getCldImageUrl({ src: `${path}/docs1.webp` });
export const docsImage2 = getCldImageUrl({ src: `${path}/docs2.webp` });
export const docsImage3 = getCldImageUrl({ src: `${path}/docs3.webp` });
export const docsImage4 = getCldImageUrl({ src: `${path}/docs4.webp` });

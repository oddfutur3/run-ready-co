import localFont from "next/font/local";

export const neue_pixel = localFont({
  src: '../fonts/NeuePixel-Regular.otf',
  variable: '--font-neue-pixel'
})
export const ppNeueMontreal = localFont({
  src: [
    { path: '../fonts/OTF/PPNeueMontreal-Bold.otf', weight: "700", style: "normal" },
    { path: '../fonts/OTF/PPNeueMontreal-BoldItalic.otf', weight: "700", style: "italic" },
    { path: '../fonts/OTF/PPNeueMontreal-Book.otf', weight: "400", style: "normal" },
    { path: '../fonts/OTF/PPNeueMontreal-BookItalic.otf', weight: "400", style: "italic" },
    { path: '../fonts/OTF/PPNeueMontreal-Italic.otf', weight: "400", style: "italic" },
    { path: '../fonts/OTF/PPNeueMontreal-Medium.otf', weight: "500", style: "normal" },
    { path: '../fonts/OTF/PPNeueMontreal-Regular.otf', weight: "400", style: "normal" }
  ],
  variable: '--font-neue-montreal'
});


export const ppMonumentExtendedBold = localFont({
  src: [
    { path: "../fonts/PPMonumentExtended-Bold.woff2"}
  ],
  variable: '--font-pp-monument-extended-bold'
})

export const matterMono = localFont({
  src: [
    { path: "../fonts/MatterMono-Regular.woff2", weight: "400"},
    { path: "../fonts/MatterMono-SemiBold.woff2", weight: "600"},
  ],
  variable: '--font-matter-mono'
})

export const saans = localFont({
  src: [
    { path: "../fonts/SaansTRIAL-Light.woff2", weight: "300"},
    { path: "../fonts/SaansTRIAL-Regular.woff2", weight: "400"},
    { path: "../fonts/Saans-Medium-1.woff2", weight: "500"},
    { path: "../fonts/SaansTRIAL-SemiBold.woff2", weight: "600"},
    { path: "../fonts/SaansTRIAL-Bold.woff2", weight: "700"},
    { path: "../fonts/Saans-Heavy-1.woff2", weight: "900"},
  ],
  variable: '--font-saans'
})
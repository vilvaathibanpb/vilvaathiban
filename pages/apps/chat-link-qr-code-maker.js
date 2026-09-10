import AppLanding from "../../components/appLanding";

const APP = {
  slug: "chat-link-qr-code-maker",
  iconBase: "chat-link-qr",
  name: "Chat Link & QR Code Maker",
  alternateNames: ["WhatsApp link generator", "wa.me link generator", "WhatsApp QR code maker", "WhatsApp DP full size"],
  appStoreId: "6810372979",
  price: { amount: "0", label: "Free" },
  color: "#0891B2",
  head: {
    title: "WhatsApp Link Generator & QR Code Maker for iPhone (Free, wa.me)",
    description:
      "Create a wa.me click-to-chat WhatsApp link with a pre-filled message, turn it into a printable QR code, and make a full-size profile picture that is not cropped. Free iOS app, works offline, nothing is uploaded.",
    keywords:
      "whatsapp link generator, wa.me link generator, whatsapp qr code generator, whatsapp click to chat link, create whatsapp link with message, whatsapp link for instagram bio, send whatsapp message without saving number, whatsapp qr code for business, whatsapp dp full size without crop, whatsapp profile picture without cropping, whatsapp link maker iphone",
    ogTitle: "Free WhatsApp Link Generator & QR Code Maker for iPhone",
    ogDescription: "wa.me click-to-chat links with a pre-filled message, printable QR codes, and full-size profile pictures that do not get cropped. Free, offline, nothing uploaded.",
  },
  h1: "WhatsApp link generator & QR code maker, free and on your iPhone",
  answer:
    "Chat Link & QR Code Maker turns any phone number into a wa.me click-to-chat link with an optional pre-written message, renders it as a QR code you can save to Photos and print, and pads any photo onto a square so your whole profile picture fits inside the circle. It is free, needs no account, and never uploads your number or your photos.",
  quickFacts: [
    ["Price", "Free, no ads in 1.0, no account"],
    ["Platform", "iPhone, iOS 15.1 or later"],
    ["Makes", "wa.me link · PNG QR code · 1024×1024 square photo"],
    ["Privacy", "Runs offline. Nothing leaves the phone."],
  ],
  screenshotsTitle: "What you get: a chat link, a QR code and a profile picture that fits",
  screenshots: [
    { src: "/apps/chat-link-qr-code-maker/01.webp", alt: "WhatsApp link generator on iPhone showing a wa.me link with a pre-filled message and its QR code", caption: "Number + message → wa.me link + QR code" },
    { src: "/apps/chat-link-qr-code-maker/02.webp", alt: "Landscape photo padded onto a white square so the full picture fits a WhatsApp profile circle without cropping", caption: "Full-size profile picture, no crop" },
    { src: "/apps/chat-link-qr-code-maker/03.webp", alt: "Chat Link & QR Code Maker works offline; the phone number and photos are never uploaded", caption: "Works offline, nothing uploaded" },
  ],
  howTo: {
    title: "How to create a WhatsApp link with a pre-filled message and a QR code",
    intro: "A click-to-chat link opens a conversation with a number the other person has not saved. This is the 30-second version; the app does the URL encoding for you so the message survives spaces, emoji and line breaks.",
    steps: [
      { name: "Type the phone number with its country code", text: "Use digits only, for example 14155550142 for a US number or 4915112345678 for Germany. Leave out the plus sign, spaces and leading zeros; the app strips them anyway." },
      { name: "Add the message people should send you (optional)", text: "Something like “Hi! I would like to book a table for Saturday”. The app builds https://wa.me/<number>?text=<message> with correct encoding." },
      { name: "Copy the link or open the chat to test it", text: "Copy link puts it on the clipboard for your Instagram bio, email signature, invoice or ad. Open chat hands it to iOS so you can check that it opens the right conversation." },
      { name: "Save the QR code to Photos and print it", text: "The QR code is saved at full resolution as a PNG. Put it on a menu, a counter card, a flyer, a business card, a shop window or a receipt. Anyone who points their camera at it lands in your chat." },
    ],
  },
  featuresTitle: "Why people install a link maker instead of typing wa.me by hand",
  features: [
    { icon: "🔗", title: "Correct wa.me links every time", text: "The message is URL-encoded properly, so apostrophes, emoji and line breaks do not break the link. Links use the standard wa.me format that WhatsApp itself documents." },
    { icon: "📇", title: "Message without saving the number", text: "Tap the link and the chat opens, even if neither side has the other in their contacts. Ideal for one-off customer enquiries and for keeping a personal number private." },
    { icon: "🖨️", title: "QR codes you can actually print", text: "Saved to Photos as a crisp PNG at full resolution, without a watermark, ready for a poster, menu, flyer, sticker or business card." },
    { icon: "🖼️", title: "Profile picture without the crop", text: "The built-in crop tool cuts off heads and logos. This pads any photo onto a white square, so the whole image sits inside the round profile picture." },
    { icon: "✈️", title: "Works offline, nothing uploaded", text: "Links, QR codes and photos are generated on the phone. There is no server, no account and no analytics, so the numbers you type stay yours." },
    { icon: "🆓", title: "Free, no watermark", text: "Everything in version 1.0 is free with no watermark on the QR code or the picture, and there is nothing to unlock." },
  ],
  intentsTitle: "Questions this app answers",
  intents: [
    { h: "How do I message someone on WhatsApp without saving their number?", p: "Build a wa.me link for their number and tap Open chat. WhatsApp opens the conversation directly, no contact card needed. The same trick lets customers message you without saving your number first." },
    { h: "What is a wa.me link and how do I make one with a message?", p: "wa.me is the short click-to-chat domain. The format is https://wa.me/<number in international format>?text=<URL-encoded message>. The app fills in both parts and shows the finished link so you can copy it." },
    { h: "How do I make a WhatsApp QR code for my business?", p: "Create the link with a greeting such as “Hi, I am interested in…”, then tap Save QR to Photos. Print it on the counter card or menu. Scanning it opens a pre-written chat to your business number." },
    { h: "How do I set a full-size WhatsApp profile picture without cropping?", p: "Open the Profile Pic tab, choose the photo, and save the square version to Photos. Set that square image as your profile photo; because the picture is already square, nothing is cut off." },
    { h: "Can I put a WhatsApp link in my Instagram bio, email signature or invoice?", p: "Yes. Copy the link and paste it anywhere a URL works: Instagram or TikTok bio, a Linktree, an email signature, an invoice footer, a Google Business profile or a Facebook ad." },
  ],
  compare: {
    title: "Chat Link & QR Code Maker vs online wa.me generators",
    intro: "Most “free WhatsApp link generator” websites are fine for a single link, but the number goes to their server, the QR download is often low-resolution or watermarked, and none of them fix profile pictures.",
    columns: ["", "Chat Link & QR Code Maker", "Online generator websites", "Built-in WhatsApp options"],
    rows: [
      ["Works offline", "✓ Yes", "✗ Needs a browser and a connection", "✓ Yes"],
      ["Pre-filled message", "✓ Yes, encoded for you", "✓ Usually", "Manual URL typing"],
      ["Printable QR code", "✓ Full-resolution PNG, no watermark", "Often watermarked or small", "Business app only, no message text"],
      ["Your number stays private", "✓ Never leaves the phone", "✗ Sent to the website", "✓ Yes"],
      ["Profile picture without crop", "✓ Yes", "✗ No", "✗ Crop tool only"],
      ["Price", "Free", "Free with ads, or paid tiers", "Free"],
    ],
  },
  faqs: [
    { q: "Is Chat Link & QR Code Maker free?", a: "Yes. Version 1.0 is completely free: every feature, no watermark, no account, and no in-app purchase. It is an independent utility built by one developer." },
    { q: "Does the link work for WhatsApp Business numbers?", a: "Yes. wa.me links open the chat for any number registered on WhatsApp or WhatsApp Business, as long as the number is entered in international format." },
    { q: "Which number format should I use?", a: "Country code followed by the number, digits only. Drop the plus sign, spaces, dashes, brackets and any leading zero from the local part. Example: 447700900123 for a UK mobile." },
    { q: "Why does my pre-filled message look strange in the link?", a: "That is URL encoding: spaces become %20 and special characters become codes so the link survives being pasted anywhere. WhatsApp decodes it back into normal text when the chat opens." },
    { q: "How large is the saved QR code, and can I print it?", a: "The QR code is captured at the screen’s full pixel density and saved as a PNG to Photos. It prints cleanly on business cards, A4 posters and counter cards. For very large signage, print at 300 dpi and keep the white margin." },
    { q: "Does the app access my whole photo library?", a: "No. It asks only for add-only access to Photos when saving a QR code or a square picture. Choosing a photo uses the system picker, which shares just the image you select." },
    { q: "Why does my profile photo get cropped in the first place?", a: "Profile pictures are stored as squares and shown as circles. A landscape or portrait photo is forced to fill the square, so the edges are cut. Padding the photo onto a white square keeps the full image inside the circle." },
    { q: "Is there an Android version?", a: "Not yet. The app is built natively for iPhone first. An Android build is planned and this page will link to Google Play when it is live." },
    { q: "Is this an official WhatsApp app?", a: "No. Chat Link & QR Code Maker is an independent utility and is not affiliated with, endorsed by or connected to WhatsApp LLC or Meta Platforms, Inc. It simply builds standard wa.me links." },
  ],
  guides: [
    { title: "How to create a WhatsApp link with a message and a QR code (wa.me guide)", href: "/blog/whatsapp-link-generator-qr-code-full-size-dp", blurb: "The wa.me format explained, common number-format mistakes, and how to print a QR code for a menu or business card." },
  ],
  related: [
    { name: "Voice Note Audio Converter", href: "/apps/voice-note-audio-converter", blurb: "Convert WhatsApp .opus voice notes to MP3 or WAV on your iPhone, free and offline." },
    { name: "Voice Note to Text", href: "/apps/voice-note-to-text", blurb: "Transcribe WhatsApp voice messages to text on-device, no upload, one-time purchase." },
    { name: "Chat Export Studio: PDF", href: "/apps/chat-export-studio", blurb: "Turn an exported WhatsApp chat (.txt or .zip) into a paginated PDF with statistics." },
  ],
  disclaimer:
    "Chat Link & QR Code Maker is an independent utility. It is not affiliated with, endorsed by, sponsored by, or in any way officially connected with WhatsApp LLC or Meta Platforms, Inc. WhatsApp is a registered trademark of Meta Platforms, Inc. The app creates standard wa.me links that any messaging client can open.",
};

export default function Page() {
  return <AppLanding app={APP} />;
}

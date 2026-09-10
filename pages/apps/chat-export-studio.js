import AppLanding from "../../components/appLanding";

const APP = {
  slug: "chat-export-studio",
  iconBase: "chat-export",
  name: "Chat Export Studio: PDF",
  alternateNames: ["WhatsApp chat to PDF", "export WhatsApp chat to PDF iPhone", "WhatsApp chat analyzer"],
  appStoreId: "6810375389",
  price: { amount: "4.99", label: "$4.99 one-time" },
  color: "#1D4ED8",
  category: "UtilitiesApplication",
  head: {
    title: "Export a WhatsApp Chat to PDF on iPhone — Printable, With Statistics",
    description:
      "Chat Export Studio turns the .txt or .zip that WhatsApp’s Export Chat produces into a clean, paginated PDF with message bubbles, plus instant statistics: messages per person, busiest hour, top emoji. Everything stays on your iPhone. One-time $4.99.",
    keywords:
      "export whatsapp chat to pdf, whatsapp chat to pdf iphone, print whatsapp conversation, save whatsapp chat as pdf, convert whatsapp txt export to pdf, whatsapp chat analyzer, whatsapp chat statistics, who texts more whatsapp, whatsapp export chat txt to pdf, archive whatsapp chat, whatsapp chat backup pdf iphone, whatsapp conversation printout",
    ogTitle: "Export a WhatsApp chat to PDF on iPhone, with statistics",
    ogDescription: "Open the .txt or .zip export, get a paginated PDF with bubbles and instant stats. Parsed on your phone only, nothing uploaded. $4.99 once.",
  },
  h1: "Export a WhatsApp chat to PDF on your iPhone, printable and with statistics",
  answer:
    "Chat Export Studio: PDF opens the .txt or .zip that WhatsApp’s Export Chat produces and turns it into a clean, paginated PDF that looks like the conversation did on screen: one bubble per message with sender, date and time, colours per participant in group chats. It also shows instant statistics: total messages and words, messages per person, busiest hour, date range and top emoji. The chat is parsed on your iPhone only, nothing is uploaded, and it is a one-time $4.99 purchase.",
  quickFacts: [
    ["Price", "$4.99 once. No subscription"],
    ["Input", "WhatsApp Export Chat: .txt or .zip, iPhone or Android, 12 h or 24 h times"],
    ["Output", "Paginated PDF + statistics"],
    ["Privacy", "Parsed on-device, no upload, no account"],
  ],
  screenshotsTitle: "What you get: statistics in one tap and a styled, paginated PDF",
  screenshots: [
    { src: "/apps/chat-export-studio/01.webp", alt: "WhatsApp chat statistics on iPhone: messages, words, busiest hour, messages per participant and top emoji", caption: "Chat statistics in one tap" },
    { src: "/apps/chat-export-studio/02.webp", alt: "Exporting a WhatsApp chat as a styled, paginated PDF from the iOS share sheet", caption: "Export a styled, paginated PDF" },
    { src: "/apps/chat-export-studio/03.webp", alt: "Chat Export Studio parses the chat on the phone; nothing is uploaded", caption: "Parsed on your phone, nothing uploaded" },
  ],
  howTo: {
    title: "How to export a WhatsApp chat to PDF on iPhone",
    intro: "WhatsApp can export a chat, but only as a .txt file inside a .zip, which is hard to read and impossible to print nicely. This turns that export into a PDF in under a minute.",
    steps: [
      { name: "Export the chat from WhatsApp", text: "Open the chat, tap the contact or group name at the top, scroll down and tap Export Chat, then choose Without Media. WhatsApp creates a .zip containing the .txt transcript." },
      { name: "Send the export to Chat Export Studio", text: "In the share sheet that appears, pick “Copy to Chat Export”. Or save the file to Files and open it from inside the app with Open exported chat (.txt or .zip)." },
      { name: "Check the statistics", text: "The app parses the file on the phone and shows message and word counts, messages per participant with percentages, busiest hour, date range, media count and the most-used emoji." },
      { name: "Tap Export styled PDF", text: "A paginated PDF is generated on the device and the iOS share sheet opens. Save it to Files, print it with AirPrint, AirDrop it to a Mac, or attach it to an email." },
    ],
  },
  featuresTitle: "What is in the PDF",
  features: [
    { icon: "💬", title: "One bubble per message", text: "Sender, date and time on every message. One-to-one chats are laid out left and right; group chats get a colour per participant, so it reads like the conversation did on screen." },
    { icon: "📄", title: "Clean pagination", text: "Pages break between messages, never through them, so a long chat stays readable when printed or scrolled." },
    { icon: "🏷️", title: "Tidy system notices", text: "Encryption notices, joins, leaves and “N media files omitted” markers are rendered as small pills instead of clutter." },
    { icon: "📊", title: "Instant statistics", text: "Who sends the most messages, the busiest hour of the day, total words, the date range and the top emoji, all computed the moment the file opens." },
    { icon: "🔒", title: "Parsed on your phone only", text: "There is no server and no account. A confidential conversation never leaves the device, and the app works in airplane mode." },
    { icon: "🧪", title: "Sample chat included", text: "Try the whole flow with a built-in sample before exporting one of your own chats." },
  ],
  intentsTitle: "Questions this app answers",
  intents: [
    { h: "How do I convert a WhatsApp .txt export to PDF?", p: "Open the .txt (or the .zip that contains it) in Chat Export Studio and tap Export styled PDF. The app understands both the iPhone and the Android export formats, with 12-hour or 24-hour timestamps." },
    { h: "How can I print a WhatsApp conversation?", p: "Export the chat to a PDF with the app, then print it from the share sheet using AirPrint, or save it to Files and print from a computer. Messages are paginated cleanly so the printout is readable." },
    { h: "How do I save a WhatsApp chat as a PDF before deleting it?", p: "Export it Without Media, open the export in the app, and save the PDF to Files or iCloud Drive. Keep the original .zip alongside the PDF as the raw record." },
    { h: "Who texts more in our chat? Is there a WhatsApp chat analyzer for iPhone?", p: "Yes. The statistics view shows messages per participant as counts and percentages, plus busiest hour and top emoji, without sending the chat to any website." },
    { h: "Can I keep a record of a conversation for HR, a landlord or an insurer?", p: "You can produce a clean, readable PDF of the exported chat on your own phone and keep it together with the original export file. Whether a particular record is accepted depends on who is asking and on local rules; the app makes the document, not the legal judgement." },
  ],
  compare: {
    title: "Chat Export Studio vs raw .txt exports and online “WhatsApp to PDF” sites",
    intro: "The raw export is a wall of text. Online converters make it prettier but require uploading a private conversation. On-device conversion gives you the readable PDF without the upload.",
    columns: ["", "Chat Export Studio: PDF", "Raw WhatsApp export (.txt)", "Online chat-to-PDF websites"],
    rows: [
      ["Readable message bubbles", "✓ Yes, with sender, date and time", "✗ Plain lines of text", "✓ Usually"],
      ["Clean pagination for printing", "✓ Yes", "✗ No", "Varies"],
      ["Statistics (who talks most, busiest hour)", "✓ Built in", "✗ No", "Sometimes, after upload"],
      ["Conversation stays on your phone", "✓ Never leaves the device", "✓ Yes", "✗ Uploaded to their server"],
      ["Works offline", "✓ Yes", "✓ Yes", "✗ No"],
      ["Price", "$4.99 once", "Free", "Free with ads, or paid"],
    ],
  },
  faqs: [
    { q: "Which export does the app need?", a: "The standard WhatsApp export: in the chat, tap the contact or group name, then Export Chat → Without Media. Both the .zip and the .txt inside it are accepted. Screenshots, copied text and PDFs from other tools are not exports." },
    { q: "Does it include photos, voice notes or videos?", a: "Version 1.0 renders the text and marks media as “N media files omitted”, matching a Without Media export. Rendering images from a With Media export is planned." },
    { q: "Does it work with Android exports?", a: "Yes. Android and iPhone use slightly different date and bracket formats, and both are supported, in 12-hour and 24-hour time." },
    { q: "Is the chat uploaded anywhere?", a: "No. Parsing and PDF generation run on the iPhone. The app makes no network requests and works with airplane mode on." },
    { q: "Can the PDF be used as evidence?", a: "The PDF reproduces the export faithfully and is generated without any cloud processing, but whether a document is accepted depends on the organisation or jurisdiction involved. Keep the original .zip or .txt export next to the PDF, and ask the person or body requesting the record what format they need." },
    { q: "How long a chat can it handle?", a: "Chats with tens of thousands of messages work; PDF generation takes longer for very long chats. Statistics appear almost instantly." },
    { q: "Can I export more than one chat?", a: "Yes. Tap Close this chat and open the next export. There is no limit." },
    { q: "Is there a subscription?", a: "No. Chat Export Studio: PDF is a one-time purchase of $4.99." },
    { q: "Is there an Android version?", a: "Not yet. The iPhone app is available now; an Android build is in progress and this page will link to Google Play when it is live." },
    { q: "Is this an official WhatsApp app?", a: "No. Chat Export Studio: PDF is an independent utility and is not affiliated with, endorsed by or connected to WhatsApp LLC or Meta Platforms, Inc. It reads the standard export files that the chat app produces." },
  ],
  guides: [
    { title: "How to export a WhatsApp chat to PDF on iPhone (and print it)", href: "/blog/export-whatsapp-chat-to-pdf-iphone", blurb: "Where the Export Chat option hides, what the .zip contains, and how to get a clean paginated PDF with statistics." },
  ],
  related: [
    { name: "Voice Note to Text", href: "/apps/voice-note-to-text", blurb: "Transcribe voice messages to text on-device, no upload, one-time purchase." },
    { name: "Voice Note Audio Converter", href: "/apps/voice-note-audio-converter", blurb: "Convert .opus voice notes to MP3 or WAV on your iPhone. Free." },
    { name: "Chat Link & QR Code Maker", href: "/apps/chat-link-qr-code-maker", blurb: "wa.me click-to-chat links, printable QR codes and uncropped profile pictures. Free." },
  ],
  disclaimer:
    "Chat Export Studio: PDF is an independent utility. It is not affiliated with, endorsed by, sponsored by, or in any way officially connected with WhatsApp LLC or Meta Platforms, Inc. WhatsApp is a registered trademark of Meta Platforms, Inc. The app reads the standard chat export files and generates the PDF on the device.",
};

export default function Page() {
  return <AppLanding app={APP} />;
}

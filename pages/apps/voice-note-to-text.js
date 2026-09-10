import AppLanding from "../../components/appLanding";

const APP = {
  slug: "voice-note-to-text",
  iconBase: "voice-to-text",
  name: "Voice Note to Text",
  alternateNames: ["WhatsApp voice note to text", "voice message transcriber", "offline audio transcription iPhone"],
  appStoreId: "6810376600",
  price: { amount: "2.99", label: "$2.99 one-time" },
  color: "#7C3AED",
  category: "UtilitiesApplication",
  head: {
    title: "Transcribe WhatsApp Voice Messages to Text on iPhone — Offline, Private",
    description:
      "Voice Note to Text transcribes WhatsApp voice notes and any .opus, .m4a, .mp3 or .wav file to text entirely on your iPhone. Automatic language detection, works offline, no upload, no subscription: a one-time $2.99 purchase.",
    keywords:
      "transcribe whatsapp voice note, whatsapp voice message to text iphone, convert voice note to text, voice note transcription app, whatsapp voice to text not available, read whatsapp voice message as text, offline transcription app iphone, transcribe audio file iphone, opus to text, voice message transcriber, voice note to text app, transcribe voice memo iphone",
    ogTitle: "Voice Note to Text: transcribe WhatsApp voice messages on your iPhone, offline",
    ogDescription: "Pick a voice note, read the transcript seconds later, copy or share it. Any language, nothing uploaded, no subscription.",
  },
  h1: "Transcribe WhatsApp voice messages to text on your iPhone, offline and private",
  answer:
    "Voice Note to Text turns a voice note into readable text in a few seconds, without sending the audio anywhere. Pick a .opus, .m4a, .mp3 or .wav file (or share it from any chat app), the language is detected automatically, and the transcript appears on screen ready to copy or share as a .txt file. The speech model ships inside the app, so it works in airplane mode, and it is a single $2.99 purchase with no subscription.",
  quickFacts: [
    ["Price", "$2.99 once. No subscription, no credits"],
    ["Input", ".opus .ogg .m4a .aac .mp3 .wav .caf .aiff .flac .amr .3gp"],
    ["Languages", "Around 100, detected automatically"],
    ["Privacy", "On-device speech recognition, no upload, no account"],
  ],
  screenshotsTitle: "What you get: a transcript you can read, copy and share",
  screenshots: [
    { src: "/apps/voice-note-to-text/01.webp", alt: "WhatsApp voice note transcribed to text on iPhone with Copy and Share .txt buttons", caption: "Voice note → text, with Copy and Share" },
    { src: "/apps/voice-note-to-text/02.webp", alt: "Voice Note to Text transcribes offline with no upload and no subscription", caption: "Offline, no upload, no subscription" },
    { src: "/apps/voice-note-to-text/03.webp", alt: "Automatic language detection for voice message transcription in about 100 languages", caption: "Any language, detected automatically" },
  ],
  howTo: {
    title: "How to transcribe a WhatsApp voice note to text on iPhone",
    intro: "WhatsApp’s own transcription is only offered in some countries and languages, and it never covers files you already saved. This works for any voice note, from any app, in any language the model knows.",
    steps: [
      { name: "Share the voice note to the app", text: "In the chat, long-press the voice message, tap Share, and choose “Copy to Voice to Text”. Or save it to Files first and pick it from inside the app with Pick a voice note & transcribe." },
      { name: "Wait a few seconds", text: "The app decodes the audio, loads the bundled speech model on first use, and transcribes on the phone. A one-minute voice note typically takes a few seconds on a recent iPhone." },
      { name: "Read, copy or share the transcript", text: "The text appears under the file name. Tap Copy to paste it into Notes, Mail or a reply, or Share .txt to send it as a file or save it in Files." },
    ],
  },
  featuresTitle: "Why this is different from cloud transcription apps",
  features: [
    { icon: "🔒", title: "Nothing is uploaded", text: "Speech recognition runs on the iPhone using a bundled model. The audio and the transcript never leave the device, which is what a private voice message deserves." },
    { icon: "💸", title: "One-time purchase", text: "Most transcription apps charge a monthly subscription or sell minutes. This is $2.99 once, with unlimited transcriptions and no account." },
    { icon: "🌍", title: "Around 100 languages, auto-detected", text: "English, Spanish, German, French, Portuguese, Hindi, Tamil, Arabic, Turkish and many more. You do not pick the language; the model detects it." },
    { icon: "✈️", title: "Works in airplane mode", text: "The speech model ships inside the app, so the first run needs no download and the app is complete without a connection." },
    { icon: "🎧", title: "Opens .opus voice notes directly", text: "Native Opus and Ogg decoding means WhatsApp, Telegram and Signal voice messages transcribe without converting them first. Voice Memos and voicemail (.m4a) work too." },
    { icon: "📤", title: "Share-sheet integration", text: "“Copy to Voice to Text” appears in the iOS share sheet, so transcribing is two taps from any chat." },
  ],
  intentsTitle: "Questions this app answers",
  intents: [
    { h: "WhatsApp voice-to-text is not available on my phone. What can I do?", p: "The built-in transcription depends on your region and language. Share the voice note to Voice Note to Text instead: it works for any language the model supports, on any iPhone running iOS 15.1 or later, with no regional restriction." },
    { h: "How can I read a voice message instead of listening to it?", p: "Transcribe it. In a meeting, on a train or in a library, share the voice note to the app and read the text on screen. The transcript can be copied into a reply or kept as a searchable note." },
    { h: "How do I transcribe an .opus file on iPhone?", p: "Pick it in the app. Opus decoding is built in, so there is no need to convert to MP3 first. The same goes for .ogg, .m4a, .mp3 and .wav." },
    { h: "Is there a transcription app that does not upload my audio?", p: "Yes, this one. Recognition runs entirely on the device. You can verify it by switching on airplane mode: transcription still works." },
    { h: "Can I transcribe a long voice memo or an interview?", p: "Yes. There is no length limit. Longer files take proportionally longer; a ten-minute recording is typically done in well under a minute on a recent iPhone." },
  ],
  compare: {
    title: "Voice Note to Text vs WhatsApp’s built-in transcripts and cloud apps",
    intro: "Three ways to get text out of a voice note: the built-in feature, a cloud transcription app, or on-device transcription. They differ in privacy, price and what they can open.",
    columns: ["", "Voice Note to Text", "Built-in WhatsApp transcripts", "Cloud transcription apps"],
    rows: [
      ["Works for saved .opus / .m4a / .mp3 files", "✓ Yes", "✗ Only inside the chat", "✓ Usually"],
      ["Available in every country and language", "✓ ~100 languages, auto-detected", "✗ Limited regions and languages", "✓ Mostly"],
      ["Audio stays on the phone", "✓ Yes, verified offline", "✓ On-device", "✗ Uploaded to a server"],
      ["Price", "$2.99 once", "Free", "Subscription or per-minute credits"],
      ["Copy / share as .txt", "✓ Yes", "Copy only", "✓ Yes"],
      ["Works in airplane mode", "✓ Yes", "✓ Yes", "✗ No"],
    ],
  },
  faqs: [
    { q: "How accurate is the transcription?", a: "It uses a Whisper-family speech model running on the phone. Clear speech in a major language is typically transcribed with very few errors; heavy background noise, overlapping speakers or strong accents lower accuracy, as with any transcription tool." },
    { q: "Which languages are supported?", a: "Around 100, including English, Spanish, German, French, Italian, Portuguese, Dutch, Russian, Turkish, Arabic, Hindi, Tamil, Bengali, Indonesian, Japanese, Korean and Chinese. The language is detected automatically per file." },
    { q: "Is there a subscription?", a: "No. Voice Note to Text is a one-time purchase of $2.99 with unlimited use. There are no credits, minutes, accounts or upsells." },
    { q: "Does it upload my voice notes anywhere?", a: "No. The speech model is bundled with the app and inference runs on the iPhone. The app makes no network requests at all; it works with airplane mode on." },
    { q: "Why is the app around 60 MB?", a: "Because the speech model ships inside it. That is what makes the first transcription instant and offline, with nothing to download later." },
    { q: "Can I transcribe Telegram, Signal or iMessage audio messages?", a: "Yes. Save or share the audio file to the app. Telegram and Signal produce .ogg or .m4a files, iMessage audio messages are .caf or .m4a; all are supported." },
    { q: "Can I translate the transcript?", a: "The app transcribes in the spoken language. Copy the text into Apple Translate or any translator to translate it; translation is not built in." },
    { q: "Is there an Android version?", a: "Not yet. The iPhone version is available now; an Android build is in progress and this page will link to Google Play when it is live." },
    { q: "Is this an official WhatsApp product?", a: "No. Voice Note to Text is an independent utility and is not affiliated with, endorsed by or connected to WhatsApp LLC or Meta Platforms, Inc." },
  ],
  guides: [
    { title: "How to transcribe WhatsApp voice messages to text on iPhone (any language, offline)", href: "/blog/transcribe-whatsapp-voice-message-to-text-iphone", blurb: "Why the built-in option is missing for many people, and a two-tap workflow that works for every saved voice note." },
  ],
  related: [
    { name: "Voice Note Audio Converter", href: "/apps/voice-note-audio-converter", blurb: "Convert .opus voice notes to MP3 or WAV instead of transcribing them. Free." },
    { name: "Chat Export Studio: PDF", href: "/apps/chat-export-studio", blurb: "Turn an exported chat into a paginated PDF with statistics, on-device." },
    { name: "Chat Link & QR Code Maker", href: "/apps/chat-link-qr-code-maker", blurb: "wa.me click-to-chat links, printable QR codes and uncropped profile pictures. Free." },
  ],
  disclaimer:
    "Voice Note to Text is an independent utility. It is not affiliated with, endorsed by, sponsored by, or in any way officially connected with WhatsApp LLC or Meta Platforms, Inc. WhatsApp is a registered trademark of Meta Platforms, Inc. Speech recognition runs on the device using an open-source Whisper-family model.",
};

export default function Page() {
  return <AppLanding app={APP} />;
}

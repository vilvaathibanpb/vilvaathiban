import AppLanding from "../../components/appLanding";

const APP = {
  slug: "voice-note-audio-converter",
  iconBase: "audio-converter",
  name: "Voice Note Audio Converter",
  alternateNames: ["Opus to MP3 Converter", "WhatsApp voice note to MP3", "opus converter iPhone"],
  appStoreId: "6810373840",
  price: { amount: "0", label: "Free" },
  color: "#EA580C",
  category: "MultimediaApplication",
  head: {
    title: "Convert WhatsApp Voice Notes (.opus) to MP3 on iPhone — Free, Offline",
    description:
      "Opus to MP3 converter for iPhone: turn WhatsApp voice notes (.opus, .ogg) and any .m4a, .aac or .wav file into MP3 or WAV, in batches, entirely on your phone. Free iOS app, no upload, no account, works offline.",
    keywords:
      "convert whatsapp voice note to mp3, opus to mp3 iphone, whatsapp audio to mp3, opus file converter, how to open opus file on iphone, ogg to mp3 iphone, whatsapp voice message to mp3, save whatsapp voice note as mp3, opus to wav, voice note converter, audio converter iphone offline, m4a to mp3 iphone",
    ogTitle: "Opus to MP3 Converter for iPhone: WhatsApp voice notes to MP3 or WAV, free and offline",
    ogDescription: "Pick one or a hundred .opus voice notes, tap Convert, share the MP3 or WAV. Nothing is uploaded and it works in airplane mode.",
  },
  h1: "Convert WhatsApp voice notes (.opus) to MP3 on your iPhone, free and offline",
  answer:
    "Voice Note Audio Converter is an opus to MP3 converter that runs entirely on your iPhone. Pick one or a hundred .opus, .ogg, .m4a, .aac or .wav files, choose MP3 or WAV, tap Convert, and share the results to Files, Mail, AirDrop or any app. Nothing is uploaded to a server, no account is needed, and it works in airplane mode.",
  quickFacts: [
    ["Price", "Free, no watermark, no limits"],
    ["Input", ".opus .ogg .oga .m4a .aac .mp3 .wav .caf .aiff .flac .amr .3gp .mp4"],
    ["Output", "MP3 (128 kbps) or WAV (16-bit PCM)"],
    ["Privacy", "On-device conversion, no upload, no account"],
  ],
  screenshotsTitle: "What you get: MP3 or WAV files you can play, edit and send anywhere",
  screenshots: [
    { src: "/apps/voice-note-audio-converter/01.webp", alt: "Opus to MP3 converter on iPhone with a list of WhatsApp voice notes and a Convert to MP3 button", caption: "Voice notes → MP3 or WAV in one tap" },
    { src: "/apps/voice-note-audio-converter/02.webp", alt: "Batch of converted .opus voice notes with Share buttons next to each MP3 file", caption: "Batch convert, then share each file" },
    { src: "/apps/voice-note-audio-converter/03.webp", alt: "Audio converter that converts on the phone with nothing uploaded", caption: "Converts on your phone, nothing uploaded" },
  ],
  howTo: {
    title: "How to convert a WhatsApp voice note to MP3 on iPhone",
    intro: "WhatsApp voice messages are stored as .opus files (they usually start with PTT-, for push-to-talk). Most players, editors and transcription tools cannot open them. This is the whole process; it takes about a minute the first time and seconds after that.",
    steps: [
      { name: "Get the voice note out of WhatsApp", text: "Long-press the voice message, tap Share (or Forward → Share), then choose Save to Files, or pick “Copy to Audio Converter” to hand the file straight to the app." },
      { name: "Pick the files in the app", text: "Tap Pick voice notes or audio files. The picker shows every file type on purpose: iOS has no built-in type for .opus, so an audio-only picker would grey out exactly the files you need. Select as many as you like." },
      { name: "Choose MP3 or WAV and tap Convert", text: "MP3 plays on everything and stays small. WAV is lossless 16-bit PCM, the right choice if you plan to edit or transcribe the audio afterwards." },
      { name: "Share the converted file", text: "Tap Share next to a file to send it to Files, iCloud Drive, Mail, AirDrop, a Mac, or any app. The original voice note is left untouched." },
    ],
  },
  featuresTitle: "Why an on-device converter beats an online opus to mp3 website",
  features: [
    { icon: "🎧", title: "Opens the files nobody else can", text: "Native decoders for Opus and Ogg Vorbis are built in, plus AAC, M4A, MP3, WAV, CAF, AIFF, FLAC, AMR and 3GP, so a voice note from any chat app converts without a detour." },
    { icon: "📦", title: "Batch conversion", text: "Select a whole folder of voice notes at once and convert them with one tap. Each result gets its own Share button." },
    { icon: "🔒", title: "Nothing is uploaded", text: "Online converters upload the recording to a server you do not control. Here the decode and the MP3 encode happen on the phone, so private messages stay private." },
    { icon: "✈️", title: "Works in airplane mode", text: "No connection, no waiting for a server queue, no file-size limits. Convert on a plane or in a basement." },
    { icon: "🎚️", title: "MP3 or lossless WAV", text: "128 kbps MP3 for sharing and archiving, 16-bit WAV for editing in GarageBand, Logic, Audacity or feeding a transcription tool." },
    { icon: "📤", title: "Straight from the share sheet", text: "The app registers as a share-sheet target, so “Copy to Audio Converter” works from WhatsApp, Files, Mail and any other app that shares files." },
  ],
  intentsTitle: "Questions this app answers",
  intents: [
    { h: "How do I open an .opus file on iPhone?", p: "iOS cannot play .opus files natively in Files or the Music app. Convert the file to MP3 or WAV with this app and it will play in every player, attach to any email and open on any computer." },
    { h: "Can I save a WhatsApp voice message as MP3?", p: "Yes. Share the voice message to the app, choose MP3, tap Convert, then Save to Files or send it on. The MP3 keeps the full quality of the original 48 kHz Opus recording." },
    { h: "How do I convert WhatsApp audio to MP3 without uploading it anywhere?", p: "Use an on-device converter. This app performs the Opus decode and the MP3 encode on the phone itself, so the audio never touches a server. It even works with the network switched off." },
    { h: "Can I convert many voice notes at once?", p: "Yes. Pick as many files as you like in one go; they are converted one after another and each gets a Share button. There is no cap on the number of files or their length." },
    { h: "Which format should I choose, MP3 or WAV?", p: "MP3 for sending, playing and archiving. WAV when you will edit the audio or run it through speech-to-text software, because it is lossless and universally supported by editors." },
  ],
  compare: {
    title: "Voice Note Audio Converter vs online converters and desktop tools",
    intro: "Uploading a private voice message to a random “opus to mp3 online” site is a privacy risk, and the desktop route (AirDrop to a Mac, install ffmpeg or VLC) is slow. On-device conversion removes both problems.",
    columns: ["", "Voice Note Audio Converter", "Online converter websites", "Desktop (ffmpeg / VLC)"],
    rows: [
      ["Opens .opus WhatsApp voice notes", "✓ Yes", "✓ Usually", "✓ Yes"],
      ["Works offline on the phone", "✓ Yes", "✗ No", "✗ Needs a computer"],
      ["Recording stays private", "✓ Never leaves the phone", "✗ Uploaded to their server", "✓ Yes"],
      ["Batch conversion", "✓ Unlimited", "Often limited or paid", "✓ With scripting"],
      ["Share-sheet integration", "✓ Copy to Audio Converter", "✗ No", "✗ No"],
      ["Price", "Free", "Free with ads or paid tiers", "Free, technical"],
    ],
  },
  faqs: [
    { q: "Is the converter really free?", a: "Yes. Version 1.0 is free with no watermark, no file limit and no account. It is built and maintained by an independent developer." },
    { q: "Why are WhatsApp voice notes .opus files?", a: "WhatsApp records voice messages with the Opus codec because it sounds good at very low bitrates. The files are named like PTT-20260908-WA0012.opus. Opus is great for chat but poorly supported by players and editors, which is why converting is useful." },
    { q: "Does converting reduce the audio quality?", a: "MP3 at 128 kbps is far above the bitrate of the original voice note, so there is no audible loss. WAV output is lossless." },
    { q: "Why does the file picker show every file type?", a: "iOS has no built-in type identifier for .opus. An audio-only picker would grey out exactly the files this app exists for, so the picker accepts everything and the app checks the extension itself." },
    { q: "Where do the converted files go?", a: "They are created in the app’s cache and offered through the Share sheet. Choose Save to Files to keep them in iCloud Drive or On My iPhone, or send them straight to Mail, AirDrop, Telegram or any other app." },
    { q: "Can it convert Telegram, Signal or voicemail audio too?", a: "Yes. Telegram and Signal voice messages are .ogg or .m4a, iPhone voicemails and Voice Memos are .m4a, and all of those are supported inputs." },
    { q: "Does it work on Android?", a: "Not yet. The app is iPhone-only for now; an Android version is in progress and this page will link to Google Play when it ships." },
    { q: "Is this app made by WhatsApp?", a: "No. Voice Note Audio Converter is an independent utility, not affiliated with or endorsed by WhatsApp LLC or Meta Platforms, Inc. It converts the standard audio files that chat apps produce." },
  ],
  guides: [
    { title: "How to convert a WhatsApp voice note to MP3 on iPhone (offline, no upload)", href: "/blog/convert-whatsapp-voice-note-to-mp3-iphone", blurb: "Getting the .opus file out of WhatsApp, converting it, and sending the MP3 on, with the traps to avoid." },
  ],
  related: [
    { name: "Voice Note to Text", href: "/apps/voice-note-to-text", blurb: "Transcribe voice messages to text on-device instead of converting them." },
    { name: "Chat Export Studio: PDF", href: "/apps/chat-export-studio", blurb: "Turn an exported chat (.txt or .zip) into a paginated PDF with statistics." },
    { name: "Chat Link & QR Code Maker", href: "/apps/chat-link-qr-code-maker", blurb: "wa.me click-to-chat links, printable QR codes and uncropped profile pictures." },
  ],
  disclaimer:
    "Voice Note Audio Converter is an independent utility. It is not affiliated with, endorsed by, sponsored by, or in any way officially connected with WhatsApp LLC or Meta Platforms, Inc. WhatsApp is a registered trademark of Meta Platforms, Inc. Opus decoding uses the open-source libopus; MP3 encoding runs on the device.",
};

export default function Page() {
  return <AppLanding app={APP} />;
}

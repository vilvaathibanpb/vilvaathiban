// How-to guides for the iOS utility apps. Same shape as data/posts.js entries.
// Paragraph text supports `code`, **bold**, *italic* and [text](url) links.

const DISCLAIMER =
  "The apps mentioned here are independent utilities built by the author. They are not affiliated with, endorsed by, or connected to WhatsApp LLC or Meta Platforms, Inc. WhatsApp is a registered trademark of Meta Platforms, Inc.";

export const appPosts = [
  {
    slug: "convert-whatsapp-voice-note-to-mp3-iphone",
    title: "How to Convert a WhatsApp Voice Note to MP3 on iPhone (Offline, No Upload)",
    description:
      "WhatsApp voice messages are .opus files that most players cannot open. Here is how to get the file out of WhatsApp and convert it to MP3 or WAV on the iPhone itself, without uploading it to a website.",
    datePublished: "2026-09-10",
    readingMinutes: 5,
    content: [
      {
        blocks: [
          { type: "p", text: "You saved a voice message from WhatsApp, tried to open it on a computer or attach it to an email, and hit a wall: the file is called something like `PTT-20260908-WA0012.opus` and nothing wants to play it. This guide explains why, and shows the fastest way to turn that voice note into an **MP3** or **WAV** on your iPhone, with the audio never leaving the phone." },
          { type: "p", text: "Short version: share the voice note to [Voice Note Audio Converter](/apps/voice-note-audio-converter), choose MP3, tap Convert, share the result. It is free, works offline, and handles a hundred files at once. The rest of this post covers the details and the traps." },
        ],
      },
      {
        heading: "Why WhatsApp voice notes are .opus files",
        blocks: [
          { type: "p", text: "WhatsApp records voice messages with the **Opus** codec inside an Ogg container. Opus sounds remarkably good at tiny bitrates, which is exactly what a chat app wants. The downside is support: iOS has no built-in file type for .opus, the Files app shows it as a generic document, the Music app ignores it, and most editors, car stereos and transcription tools reject it." },
          { type: "p", text: "The file names follow a pattern. `PTT` stands for push-to-talk (a recorded voice note), `AUD` is an audio file someone attached, and the date and counter follow. Both kinds convert the same way." },
        ],
      },
      {
        heading: "Step 1: get the voice note out of WhatsApp",
        blocks: [
          { type: "list", items: [
            "Open the chat and **long-press the voice message**.",
            "Tap **Share** (on some versions: Forward, then the share icon).",
            "Either choose **Save to Files** to keep the .opus file, or pick **Copy to Audio Converter** in the share sheet to send it straight to the converter app.",
          ] },
          { type: "p", text: "If you need many voice notes from one chat, use **Export Chat → With Media** from the contact or group name screen. The resulting .zip contains every voice note as a separate .opus file, which you can unzip in Files and convert in one batch." },
        ],
      },
      {
        heading: "Step 2: convert on the phone, not on a website",
        blocks: [
          { type: "p", text: "Search for “opus to mp3” and you will find dozens of online converters. They work, but every one of them uploads the recording to a server you do not control, and voice notes are often the most private thing on a phone. The alternative is to decode Opus on the device." },
          { type: "p", text: "[Voice Note Audio Converter](/apps/voice-note-audio-converter) ships native decoders for Opus, Ogg, AAC, M4A, MP3, WAV, CAF, AIFF, FLAC, AMR and 3GP and encodes MP3 on the phone. Open the app, tap **Pick voice notes or audio files**, select the .opus files, pick **MP3** or **WAV**, tap **Convert**." },
          { type: "list", items: [
            "**MP3 (128 kbps)** plays on everything and stays small. Use it for sharing, archiving and car stereos.",
            "**WAV (16-bit PCM)** is lossless. Use it when you will edit the audio in GarageBand or Audacity, or feed it to speech-to-text software.",
          ] },
          { type: "p", text: "The picker shows every file type rather than only audio. That is deliberate: because iOS has no type identifier for .opus, an audio-only picker would grey out exactly the files you are trying to convert." },
        ],
      },
      {
        heading: "Step 3: send the MP3 wherever it needs to go",
        blocks: [
          { type: "p", text: "Each converted file gets a **Share** button. Save to Files or iCloud Drive, AirDrop it to a Mac, attach it to Mail, or send it to another chat app. The original .opus is left untouched, and you can convert it again to the other format later." },
        ],
      },
      {
        heading: "Common problems",
        blocks: [
          { type: "list", items: [
            "**The file will not play after converting.** Check that you chose MP3, not WAV, for a player that only lists MP3s. Both formats are standard; some older devices simply hide WAV files.",
            "**“Not an audio file” alert.** The picker accepted a file the app cannot decode, for example a screenshot or a PDF. Only audio extensions are converted.",
            "**The voice note is silent or very quiet.** Opus preserves the original level, so a quiet recording stays quiet. Raise the volume in an editor after converting to WAV.",
            "**Telegram or Signal audio.** Those apps produce .ogg or .m4a files, which convert exactly the same way.",
          ] },
        ],
      },
      {
        heading: "Alternatives, and when to use them",
        blocks: [
          { type: "p", text: "On a Mac with `ffmpeg` installed, `ffmpeg -i note.opus note.mp3` does the job for one file. VLC can also transcode. Both require moving the file to a computer first. If you only need to *read* the message rather than keep the audio, transcribing it with [Voice Note to Text](/apps/voice-note-to-text) is faster than converting." },
          { type: "p", text: DISCLAIMER },
        ],
      },
    ],
  },
  {
    slug: "transcribe-whatsapp-voice-message-to-text-iphone",
    title: "How to Transcribe WhatsApp Voice Messages to Text on iPhone (Any Language, Offline)",
    description:
      "WhatsApp’s own voice-to-text is missing for many countries and languages and never covers saved files. Here is a two-tap way to transcribe any voice note on the iPhone itself, with nothing uploaded.",
    datePublished: "2026-09-10",
    readingMinutes: 5,
    content: [
      {
        blocks: [
          { type: "p", text: "Long voice messages arrive at the worst moments: in a meeting, on a train, in a library. WhatsApp added transcripts for some people, but the feature depends on your country and language, and it does nothing for voice notes you have already saved or received in another app. This guide shows how to **transcribe any voice message to text on an iPhone**, in any major language, without uploading the audio anywhere." },
          { type: "p", text: "Short version: long-press the voice note, tap Share, choose **Copy to Voice to Text**, wait a few seconds, read. [Voice Note to Text](/apps/voice-note-to-text) runs the speech model on the phone, detects the language automatically, and costs $2.99 once, with no subscription." },
        ],
      },
      {
        heading: "Why the built-in transcript is often missing",
        blocks: [
          { type: "p", text: "The native feature is rolled out by region and by language, and it only works inside the chat on the device that received the message. If your language is not on the list, if the message was forwarded as a file, or if you are looking at a voice note you saved months ago, there is no transcribe button. Third-party transcription is the way around all three." },
        ],
      },
      {
        heading: "The workflow, step by step",
        blocks: [
          { type: "list", items: [
            "In the chat, **long-press the voice message** and tap **Share**.",
            "In the share sheet, choose **Copy to Voice to Text**. The app opens and starts immediately.",
            "The first transcription loads the bundled speech model; later ones start instantly. A one-minute note takes a few seconds on a recent iPhone.",
            "Read the transcript on screen, then tap **Copy** to paste it into a reply or a note, or **Share .txt** to save it as a text file.",
          ] },
          { type: "p", text: "You can also save voice notes to Files first and pick them from inside the app. The app opens `.opus` directly, so there is no need to convert WhatsApp audio to MP3 before transcribing it. `.m4a` (iPhone Voice Memos, voicemail), `.mp3`, `.wav`, `.ogg` (Telegram, Signal) and `.caf` (iMessage audio) all work too." },
        ],
      },
      {
        heading: "Language detection",
        blocks: [
          { type: "p", text: "There is no language setting. The model listens to the first seconds of audio and decides. Around a hundred languages are covered, including English, Spanish, German, French, Portuguese, Italian, Dutch, Turkish, Arabic, Hindi, Tamil, Bengali, Indonesian, Japanese, Korean and Chinese. Mixed-language messages are transcribed in whichever language dominates." },
        ],
      },
      {
        heading: "Privacy: how to check that nothing is uploaded",
        blocks: [
          { type: "p", text: "Most transcription apps send audio to a cloud service. That is a problem for a private voice note. On-device transcription is easy to verify: switch on **airplane mode**, share a voice note to the app, and watch it transcribe anyway. The speech model ships inside the app bundle, which is why the download is around 60 MB and why there is no account or subscription." },
        ],
      },
      {
        heading: "Getting better results",
        blocks: [
          { type: "list", items: [
            "Voice notes recorded close to the microphone transcribe best. Wind, traffic and echo lower accuracy, as with any speech recogniser.",
            "For a very long recording, expect proportionally longer processing. Ten minutes is usually done in well under a minute.",
            "If you need the audio itself in a standard format, convert it with [Voice Note Audio Converter](/apps/voice-note-audio-converter) instead.",
            "To translate a transcript, copy it into Apple Translate or any translator. Transcription and translation are separate steps.",
          ] },
          { type: "p", text: DISCLAIMER },
        ],
      },
    ],
  },
  {
    slug: "export-whatsapp-chat-to-pdf-iphone",
    title: "How to Export a WhatsApp Chat to PDF on iPhone (Printable, With Statistics)",
    description:
      "WhatsApp only exports a chat as a .txt inside a .zip. This guide shows where the Export Chat option is, what you get, and how to turn it into a clean, paginated PDF with message bubbles and statistics, without uploading the conversation.",
    datePublished: "2026-09-10",
    readingMinutes: 6,
    content: [
      {
        blocks: [
          { type: "p", text: "People want a WhatsApp chat as a PDF for very ordinary reasons: to keep a record of an agreement with a landlord or a client, to hand a conversation to HR, to archive a group before leaving it, or simply to print a chat with someone who is no longer around. WhatsApp itself only gives you a **.txt transcript inside a .zip**, which is hard to read and prints as a wall of text." },
          { type: "p", text: "Short version: Export Chat → Without Media, share the file to [Chat Export Studio: PDF](/apps/chat-export-studio), tap **Export styled PDF**. The chat is parsed on the phone, nothing is uploaded, and you get a paginated PDF with one bubble per message plus statistics." },
        ],
      },
      {
        heading: "Step 1: find the Export Chat option",
        blocks: [
          { type: "list", items: [
            "Open the chat.",
            "Tap the **contact or group name** at the top to open the info screen.",
            "Scroll to the bottom and tap **Export Chat**.",
            "Choose **Without Media** for a small, fast export (recommended) or **With Media** to include photos and voice notes.",
          ] },
          { type: "p", text: "WhatsApp builds a .zip and opens the iOS share sheet. On Android the steps are the same from the three-dot menu → More → Export chat." },
        ],
      },
      {
        heading: "What is inside the export",
        blocks: [
          { type: "p", text: "The .zip contains a single `_chat.txt` with one line per message: `[05/09/26, 18:02:11] Maya: text`. System events (encryption notice, someone joined, missed call) appear as lines without a sender, and media shows as `<attached: …>` or `image omitted`. The exact date format depends on the phone’s region and on whether it is an iPhone or Android export, which is why hand-converting it is fiddly." },
        ],
      },
      {
        heading: "Step 2: turn the export into a PDF",
        blocks: [
          { type: "p", text: "In the share sheet that WhatsApp opens, pick **Copy to Chat Export**. If you already saved the file, open [Chat Export Studio](/apps/chat-export-studio) and tap **Open exported chat (.txt or .zip)**. The app reads either the .zip or the .txt inside it, for iPhone and Android exports, with 12-hour or 24-hour times." },
          { type: "p", text: "The statistics appear first: total messages and words, messages per participant with percentages, busiest hour of the day, date range, media count and the most-used emoji. Then tap **Export styled PDF**." },
          { type: "list", items: [
            "Every message becomes its own bubble with sender, date and time.",
            "One-to-one chats are laid out left and right; group chats get a colour per participant.",
            "System notices and “N media files omitted” markers are small pills, not clutter.",
            "Pages break between messages, never through them.",
          ] },
          { type: "p", text: "The PDF opens in the iOS share sheet: **Save to Files**, **Print** with AirPrint, AirDrop it to a Mac, or attach it to an email." },
        ],
      },
      {
        heading: "Keeping the record useful",
        blocks: [
          { type: "list", items: [
            "Keep the **original .zip** next to the PDF. The PDF is the readable version; the export is the raw record.",
            "Name the file with the chat and the date range, for example `Landlord chat 2025-03 to 2026-09.pdf`.",
            "If someone (HR, an insurer, a landlord, a lawyer) asks for the chat, ask them which format they need. The app produces a faithful, on-device PDF of the export; whether a document is accepted is their decision and depends on local rules.",
          ] },
        ],
      },
      {
        heading: "Why not use an online “WhatsApp to PDF” website?",
        blocks: [
          { type: "p", text: "They require uploading the entire conversation, often including other people’s messages, to a server you cannot audit. A chat you care enough about to archive is usually one you do not want on a stranger’s disk. On-device conversion removes the question entirely; the app works with airplane mode on." },
          { type: "p", text: DISCLAIMER },
        ],
      },
    ],
  },
  {
    slug: "whatsapp-link-generator-qr-code-full-size-dp",
    title: "WhatsApp Link Generator: Create a wa.me Click-to-Chat Link, QR Code and a Profile Picture That Does Not Crop",
    description:
      "How wa.me links work, how to add a pre-filled message, common number-format mistakes, how to print a WhatsApp QR code for a menu or business card, and how to set a full-size profile picture without cropping.",
    datePublished: "2026-09-10",
    readingMinutes: 6,
    content: [
      {
        blocks: [
          { type: "p", text: "A **click-to-chat link** lets anyone start a WhatsApp conversation with you without saving your number first. It is the single most useful thing a small business can put on a flyer, a menu, an Instagram bio or an invoice. This guide explains the wa.me format, the pre-filled message trick, the QR code, and a bonus that people search for constantly: how to set a **full-size profile picture without the crop**." },
          { type: "p", text: "Short version: [Chat Link & QR Code Maker](/apps/chat-link-qr-code-maker) builds the link, encodes the message, saves a printable QR code to Photos and pads any photo onto a square. Free, offline, nothing uploaded." },
        ],
      },
      {
        heading: "The wa.me link format",
        blocks: [
          { type: "p", text: "The link is `https://wa.me/<number>` where the number is in **international format without the plus sign**: country code followed by the subscriber number, digits only. Examples:" },
          { type: "list", items: [
            "US +1 (415) 555-0142 → `https://wa.me/14155550142`",
            "UK 07700 900123 → `https://wa.me/447700900123` (drop the leading 0)",
            "Germany 0151 12345678 → `https://wa.me/4915112345678`",
            "India 98765 43210 → `https://wa.me/919876543210`",
          ] },
          { type: "p", text: "The most common mistakes are keeping the leading zero, adding the plus sign, and using spaces or dashes. The app strips all of them, but if you type the link by hand, digits only." },
        ],
      },
      {
        heading: "Adding a pre-filled message",
        blocks: [
          { type: "p", text: "Append `?text=` and the message, URL-encoded: `https://wa.me/14155550142?text=Hi%21%20I%27d%20like%20to%20book%20a%20table`. Spaces become `%20`, apostrophes `%27`, line breaks `%0A`. Get the encoding wrong and the link breaks at the first special character, which is the main reason to let a tool do it. A good pre-filled message tells you where the person came from: “Hi, I saw your card at the market and would like to order…”." },
        ],
      },
      {
        heading: "Making a QR code you can print",
        blocks: [
          { type: "list", items: [
            "Build the link in [Chat Link & QR Code Maker](/apps/chat-link-qr-code-maker) with the message you want.",
            "Tap **Save QR to Photos**. The code is saved as a full-resolution PNG with no watermark.",
            "Place it on the menu, counter card, flyer, business card, shop window or receipt. Keep the white margin around the code and print at 300 dpi for signage.",
            "Scan it with any phone camera to test; it should open the chat with the message already typed.",
          ] },
          { type: "p", text: "Unlike online generators, the number never leaves the phone, and the QR code has no third-party redirect that could stop working or start showing ads later. It encodes the wa.me link directly." },
        ],
      },
      {
        heading: "Where to use the link",
        blocks: [
          { type: "list", items: [
            "Instagram, TikTok and X bios, Linktree and similar pages",
            "Email signatures and invoice footers",
            "Google Business Profile, Facebook page and ads",
            "Websites: a “Chat with us” button that opens WhatsApp on tap",
            "Printed: menus, flyers, receipts, stickers, business cards",
          ] },
        ],
      },
      {
        heading: "Bonus: a profile picture that does not get cropped",
        blocks: [
          { type: "p", text: "Profile photos are stored as squares and displayed as circles, so a landscape or portrait photo is forced to fill the square and the edges disappear. The fix is to **pad the photo onto a white square** before uploading it, so the whole image sits inside the circle. The Profile Pic tab does exactly that: choose a photo, tap Save square picture, then set the saved square as your profile photo. Nothing is zoomed or pinched, and logos keep their full shape." },
          { type: "p", text: DISCLAIMER },
        ],
      },
    ],
  },
  {
    slug: "benefits-of-using-a-teleprompter-app",
    title: "9 Benefits of Using a Teleprompter App (And When You Should Not Use One)",
    description:
      "What actually changes when you read from a teleprompter: fewer takes, real eye contact, tighter scripts and less on-camera anxiety — plus the situations where a teleprompter makes your video worse.",
    datePublished: "2026-09-10",
    readingMinutes: 6,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Almost everyone who films themselves talking has the same loop: record, forget a line, sigh, delete, record again. Fourteen takes later the energy is gone and the best version was take three. A teleprompter breaks that loop — but it also introduces its own failure mode, the flat, slightly glazed delivery of someone visibly reading.",
          },
          {
            type: "p",
            text: "This post covers what genuinely improves when you use one, and the cases where you are better off winging it. It is the first in a running series about teleprompting for [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay), the free iOS app that floats your script over the camera and scrolls as you speak.",
          },
        ],
      },
      {
        heading: "1. You stop paying the memory tax",
        blocks: [
          {
            type: "p",
            text: "Speaking to camera asks you to do three things at once: remember content, perform it, and operate the recording. Memory is the expensive one, and it steals from the other two. When the words are in front of you, all of that attention goes into delivery instead — which is why prompted takes often sound *more* natural, not less, once you get past the reading-voice stage.",
          },
        ],
      },
      {
        heading: "2. Fewer takes, and much less editing",
        blocks: [
          {
            type: "p",
            text: "The real cost of a forgotten line is rarely the retake. It is the cut you have to hide later, the jump in your hands, the audio that no longer matches. Getting a clean single take turns a twenty-minute edit into a trim at both ends. For anyone posting daily, that compounds faster than any other production upgrade you can make.",
          },
        ],
      },
      {
        heading: "3. Actual eye contact — if the script sits at the lens",
        blocks: [
          {
            type: "p",
            text: "This is where teleprompter setups succeed or fail. A script taped beside the phone, or open in another app you glance at, produces the classic darting eyes. A script overlaid **directly on the camera preview**, next to the front lens, keeps your gaze where the audience is. That single detail is the difference between looking like you are talking to someone and looking like you are reading a menu.",
          },
        ],
      },
      {
        heading: "4. You can write tighter than you can talk",
        blocks: [
          {
            type: "p",
            text: "Improvised speech is padded: filler words, restarts, three attempts at the same sentence. Written speech gets edited before it is spoken. A scripted sixty-second video usually carries the content of an unscripted two-minute one, which matters enormously on platforms where watch-through decides distribution.",
          },
        ],
      },
      {
        heading: "5. Pacing becomes yours, not the machine's",
        blocks: [
          {
            type: "p",
            text: "Classic auto-scroll moves at a fixed speed and forces you to chase it — the reason many people try a teleprompter once and give up. Voice-driven scrolling inverts that: the app listens with on-device speech recognition, matches what you say against the script, and moves at exactly your pace. Speed up, slow down, pause for effect, stumble and jump back — the script follows you. Auto-scroll with a speed slider is still there for read-aloud work like voiceovers, where a constant rhythm is what you want.",
          },
        ],
      },
      {
        heading: "6. Consistency across a series",
        blocks: [
          {
            type: "p",
            text: "If you publish regularly, your hook, your call to action and any legal or brand wording should be identical every time. Memory drifts; a saved script does not. Keeping a library of scripts means episode fourteen opens exactly as sharply as episode one, and a sponsor's required phrasing survives to the final cut.",
          },
        ],
      },
      {
        heading: "7. Multilingual recording stops being terrifying",
        blocks: [
          {
            type: "p",
            text: "Recording in a second language is where memory load peaks. Having the text in front of you removes the vocabulary panic entirely. Voice-follow works in every language your iPhone's on-device speech recognition supports, and the app detects the script's language automatically — so a German or Spanish take is the same workflow as an English one.",
          },
        ],
      },
      {
        heading: "8. Less on-camera anxiety",
        blocks: [
          {
            type: "p",
            text: "The specific fear most people have is not the camera. It is going blank while it is running. Removing that possibility is often the entire reason someone finally starts posting. It is the least technical benefit on this list and, judging by what users write in, the one that changes behaviour most.",
          },
        ],
      },
      {
        heading: "9. Privacy, if the processing stays on the phone",
        blocks: [
          {
            type: "p",
            text: "Voice-driven prompting means something is listening to you. Where that listening happens matters. In [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay), speech recognition runs entirely on-device with Apple's frameworks — scripts, voice and recordings never leave the phone, and the whole app works in airplane mode. Worth checking before you dictate an unreleased product script into any app.",
          },
        ],
      },
      {
        heading: "When you should not use a teleprompter",
        blocks: [
          {
            type: "list",
            items: [
              "**Interviews and conversations.** Reading answers to a live question is obvious to everyone watching. Use notes.",
              "**Anything emotional or personal.** Grief, apologies, big announcements — scripts read as insincere precisely when sincerity is the point. Write it, learn the shape of it, then put it away.",
              "**Very short hooks.** A seven-word opener does not need prompting, and glancing at text costs you the eye contact exactly when it matters most. Memorise the first line even if you prompt the rest.",
              "**Word-for-word scripts, generally.** Bullets and key phrases usually outperform full prose. You get the safety net without the cadence of someone reading aloud.",
            ],
          },
        ],
      },
      {
        heading: "Getting a natural read on the first try",
        blocks: [
          {
            type: "list",
            items: [
              "Write the way you speak — contractions, short sentences, one idea per line.",
              "Break lines at natural breathing points rather than filling the width of the screen.",
              "Increase the text size until you can read a line in a single glance; small text is what makes eyes visibly scan.",
              "Read the script aloud once before recording so you know where the emphasis falls.",
              "Record a throwaway first take. It absorbs the stiffness, and take two is usually the one you keep.",
            ],
          },
          {
            type: "p",
            text: "The app is free on iOS, records in 4K, adds no watermark, and leaves the script out of your saved video entirely. Next in this series: how to write a script that does not sound written.",
          },
        ],
      },
    ],
  },
];

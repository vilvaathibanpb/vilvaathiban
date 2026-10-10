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
          { type: "p", text: "Short version: share the voice note to [Voice Note Audio Converter](/apps/voice-note-audio-converter), choose MP3, tap Convert, share the result. It is free, works offline, and handles a hundred files at once. The rest of this post covers the details and the traps. If you are reading this on a computer, you do not need to install anything at all: the [free Opus to MP3 converter](/tools/opus-to-mp3) does the same job in your browser." },
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
           { type: "p", text: "If you only need the audio file rather than the words, the [free Opus to MP3 converter](/tools/opus-to-mp3) will convert a voice note in your browser without installing anything." },
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
           { type: "p", text: "Working on a computer? The [free browser tools](/tools) cover links, QR codes, profile pictures and audio conversion without an install." },
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
           { type: "p", text: "You can also do both of these right now in your browser: the [free WhatsApp link and QR generator](/tools/whatsapp-link-generator) and the [full-size profile picture maker](/tools/whatsapp-dp-full-size)." },
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
  {
    slug: "write-a-script-that-doesnt-sound-written",
    title: "How to Write a Video Script That Doesn't Sound Written",
    description:
      "The reason scripted videos sound stiff is not the teleprompter — it's the sentences. Eight rewriting habits that make a written script sound like you talking.",
    datePublished: "2026-09-11",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "There is a specific flatness people can hear. You know it instantly when you watch someone else's video, and you can never quite locate it in your own. The delivery is fine. The lighting is fine. And yet the whole thing sounds like a person reading a document out loud, because that is exactly what is happening.",
          },
          {
            type: "p",
            text: "Almost everyone diagnoses this as a performance problem and tries to fix it with more takes. It is usually not a performance problem. It is a writing problem, and it starts the moment you open a blank document and your brain switches into essay mode.",
          },
          {
            type: "p",
            text: "Writing for the eye and writing for the ear are different crafts. Here is what actually changes between them.",
          },
        ],
      },
      {
        heading: "1. Write it in the wrong medium on purpose",
        blocks: [
          {
            type: "p",
            text: "A blank word processor invites paragraphs. Paragraphs invite subordinate clauses. Subordinate clauses are where spoken language goes to die.",
          },
          {
            type: "p",
            text: "Try drafting the script as a voice memo to yourself first — just talk through the idea for two minutes as though a friend asked you about it. Then transcribe that and clean it up. What you get back is messy, but its bones are conversational, and cleaning up a conversation is far easier than warming up an essay.",
          },
          {
            type: "p",
            text: "If that feels too roundabout, the cheaper version is to write standing up, or to write in a notes app on your phone. Both nudge you toward shorter sentences without you having to think about it.",
          },
        ],
      },
      {
        heading: "2. Read every line aloud, and cut anything you stumble on",
        blocks: [
          {
            type: "p",
            text: "This is the single highest-value habit and almost nobody does it, because reading your own draft aloud in an empty room feels ridiculous.",
          },
          {
            type: "p",
            text: "The rule is simple: if you trip over a sentence while reading it, the sentence is wrong. Not your mouth — the sentence. Your brain built it for eyes that can re-scan a line, and your mouth has no such luxury. Rewrite it until it comes out clean on the first pass.",
          },
          {
            type: "p",
            text: "Stumbles cluster around three things: long noun phrases, clauses stacked in front of the main verb, and words you would never actually say. All three are invisible on the page and obvious the second you speak them.",
          },
        ],
      },
      {
        heading: "3. Put the verb early",
        blocks: [
          {
            type: "p",
            text: "\u201cWhat a lot of people who are new to this tend to find difficult is the first thirty seconds.\u201d That sentence makes a listener hold eleven words in memory before anything happens. Written down it reads fine. Spoken, it loses them.",
          },
          {
            type: "p",
            text: "\u201cThe first thirty seconds are the hard part.\u201d Same content. The listener gets the point immediately and can relax.",
          },
          {
            type: "p",
            text: "This one change probably accounts for a third of the difference between a script that sounds written and one that sounds spoken. Front-load the subject and verb; put the qualifications afterwards, in their own sentence.",
          },
        ],
      },
      {
        heading: "4. Use contractions, every time",
        blocks: [
          {
            type: "p",
            text: "Nobody says \u201cdo not\u201d in conversation unless they are emphasising the not. Nobody says \u201cit is\u201d or \u201cyou will\u201d or \u201cwe have.\u201d When those appear uncontracted in a script, the performance turns formal without the speaker choosing to be formal.",
          },
          {
            type: "p",
            text: "Go through the draft and contract everything. Then uncontract the two or three places where you genuinely want weight \u2014 \u201cthis does not work\u201d hits harder precisely because everything around it is relaxed.",
          },
        ],
      },
      {
        heading: "5. Leave the rough edges in",
        blocks: [
          {
            type: "p",
            text: "Real speech has false starts, small corrections, asides. Scripts have none, and their absence is part of what makes scripted delivery feel airless.",
          },
          {
            type: "p",
            text: "You can write a few back in deliberately. \u201cWell \u2014 sort of.\u201d \u201cActually, let me put that differently.\u201d \u201cAnd honestly, this bit surprised me.\u201d These are not filler; they are the texture that tells a listener a person is thinking rather than reciting.",
          },
          {
            type: "p",
            text: "Use them sparingly. Three or four in a two-minute script reads as natural. Twenty reads as an affectation, which is its own kind of stiff.",
          },
        ],
      },
      {
        heading: "6. One idea per sentence, one point per breath",
        blocks: [
          {
            type: "p",
            text: "Punctuation on a page is a suggestion. Punctuation in a script is a breathing instruction.",
          },
          {
            type: "p",
            text: "When you read a script back, mark every place you naturally take a breath. If a sentence runs past two of those marks, split it. Your listener is breathing along with you whether they notice or not, and a sentence that outlasts a breath makes them tense.",
          },
          {
            type: "p",
            text: "Short sentences also give you somewhere to put emphasis. A long one flattens everything inside it to the same pitch.",
          },
        ],
      },
      {
        heading: "7. Write to one person",
        blocks: [
          {
            type: "p",
            text: "\u201cHi everyone, welcome back to the channel\u201d addresses a crowd. Your viewer is one person holding a phone, usually alone, often in bed. Addressing them as a crowd creates a subtle distance that no amount of warm delivery closes.",
          },
          {
            type: "p",
            text: "Swap \u201cyou guys\u201d for \u201cyou.\u201d Swap \u201ca lot of people ask me\u201d for \u201cyou have probably wondered.\u201d Picture a specific person \u2014 an actual friend who does not know this topic \u2014 and write the whole thing to them. It changes the register more than any other single decision.",
          },
        ],
      },
      {
        heading: "8. Script the shape, improvise the texture",
        blocks: [
          {
            type: "p",
            text: "The most natural-sounding creators are rarely reading word for word, and they are rarely winging it either. They script tightly where precision matters \u2014 the opening, the key explanation, the call to action \u2014 and loosely everywhere else.",
          },
          {
            type: "p",
            text: "In practice that means a script with two densities: full sentences for the parts you must get right, and bullet prompts for the parts where your own phrasing on the day will beat anything you planned.",
          },
          {
            type: "p",
            text: "This is where a voice-driven teleprompter earns its keep over a fixed auto-scroll. Because [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) follows your actual voice using on-device speech recognition rather than a timer, you can slow down, expand on a bullet, or double back on a sentence and the script stays with you instead of running ahead. A constant-speed scroll punishes exactly the improvisation that makes you sound human. If you are unsure which mode suits you, that trade-off is worth thinking through before you hit record.",
          },
        ],
      },
      {
        heading: "When a stiff script is the right answer",
        blocks: [
          {
            type: "p",
            text: "Not every video should sound like a chat, and it is worth saying so plainly.",
          },
          {
            type: "p",
            text: "If you are reading medical, legal or financial wording, the phrasing may be the whole point, and \u201cnatural\u201d rewriting can quietly change meaning. Same for a formal announcement, a sponsor read with approved copy, or anything where someone else signs off on the words. In those cases, script it exactly, read it exactly, and put your warmth into pace and expression instead.",
          },
          {
            type: "p",
            text: "The goal is not casualness for its own sake. It is that the register matches the situation \u2014 and for most talking-head video, the situation is a conversation.",
          },
        ],
      },
      {
        heading: "A quick pass before you record",
        blocks: [
          {
            type: "list",
            items: [
              "Read the whole thing aloud once, start to finish, and mark every stumble.",
              "Rewrite every marked sentence so the verb arrives in the first six or seven words.",
              "Contract everything, then uncontract two or three lines for emphasis.",
              "Split any sentence that outruns a breath.",
              "Replace every plural address with a singular one.",
              "Cut the first two sentences entirely \u2014 they are almost always throat-clearing.",
            ],
          },
          {
            type: "p",
            text: "That pass takes about ten minutes and does more for how you sound than a second hour of takes. The earlier post on [the benefits of using a teleprompter app](/blog/benefits-of-using-a-teleprompter-app) covers why having the script by the lens matters once the writing is right \u2014 good words read off to the side still look like you are talking to someone else in the room.",
          },
          {
            type: "p",
            text: "Next in this series: voice-follow scrolling versus classic auto-scroll \u2014 which one to reach for, and when the old-fashioned speed slider is actually the better choice.",
          },
        ],
      },
    ],
  },
  {
    slug: "voice-follow-vs-auto-scroll-teleprompter",
    title: "Voice-Follow vs Auto-Scroll: Which Teleprompter Mode to Use When",
    description:
      "Voice-driven scrolling and classic auto-scroll solve different problems. A practical comparison of when each one wins, when each one fails, and how to choose per video.",
    datePublished: "2026-09-12",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Most teleprompter advice treats scrolling as a settings question — find the right speed, save it, done. That works right up until the first time you pause to think, and the script sails calmly on without you.",
          },
          {
            type: "p",
            text: "There are really two different philosophies here, and they fail in opposite directions. **Auto-scroll** moves the text at a constant speed and expects you to keep up. **Voice-follow** listens to what you are saying and moves the text to match. Neither is better in general. They are better at different jobs, and once you can name which job you are doing, choosing takes about three seconds.",
          },
          {
            type: "p",
            text: "Here is the honest comparison, including the cases where each one is the wrong choice.",
          },
        ],
      },
      {
        heading: "What each mode actually does",
        blocks: [
          {
            type: "p",
            text: "Auto-scroll is the older idea and the simpler one. You set a speed with a slider, tap record, and the text creeps upward at that rate forever. It is completely predictable. It is also completely indifferent to you.",
          },
          {
            type: "p",
            text: "Voice-follow inverts the relationship. In [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay), the app listens through the microphone, matches what you are saying against the script, and advances the text to wherever you actually are. Speed up and it speeds up. Pause mid-sentence for four seconds and it waits. Lose your place and stumble back a few words, and it finds you again rather than carrying on without you.",
          },
          {
            type: "p",
            text: "Worth knowing about the listening part specifically: it uses Apple's **on-device** speech recognition. Nothing is uploaded, the whole thing works in airplane mode, and it auto-detects the script's language — every language iOS supports for on-device recognition works, not just English. That last detail matters more than it sounds, and I will come back to it.",
          },
        ],
      },
      {
        heading: "When voice-follow is clearly right",
        blocks: [
          {
            type: "p",
            text: "Voice-follow earns its keep whenever your delivery is not going to be metronomic — which is most of the time, if you are trying to sound like a person.",
          },
          {
            type: "list",
            items: [
              "**You want natural pacing.** Real speech slows down for the important sentence and speeds through the setup. Auto-scroll punishes both.",
              "**You improvise off the script.** If you habitually add a half-sentence that is not written down, voice-follow tolerates it and picks you up again.",
              "**Long takes.** Over four or five minutes, tiny speed mismatches compound. By the end of an auto-scrolled long take you are either racing or waiting.",
              "**You are nervous.** Nerves change your speed unpredictably, usually upward. Being chased by text makes that worse in a feedback loop.",
              "**Unfamiliar material.** Reading something you wrote an hour ago is slower and more halting than reading something you know.",
            ],
          },
          {
            type: "p",
            text: "The second language case deserves its own mention. Recording in a language you speak well but not natively means your pace varies far more than it does in your first language — some phrases come out fluently, others need a beat. A fixed speed set for your good sentences will steamroll your careful ones. This is probably the single strongest argument for voice-follow, and it is why the language auto-detection matters rather than being a spec-sheet line.",
          },
        ],
      },
      {
        heading: "When auto-scroll is the better tool",
        blocks: [
          {
            type: "p",
            text: "This is the part most app write-ups skip, because auto-scroll is the boring old feature. But there are real situations where a constant speed is the correct answer, and pretending otherwise helps nobody.",
          },
          {
            type: "list",
            items: [
              "**You need a specific duration.** If the video has to be sixty seconds, a known scroll speed is a timing instrument. Voice-follow will happily let you run to seventy.",
              "**Noisy environments.** Speech recognition needs to hear you. A cafe, a busy street, or a room with a loud fan degrades the matching.",
              "**Silent or lip-synced recording.** If you are not speaking aloud at all — recording B-roll to voice over later, or filming mouthed sections — there is nothing for voice-follow to follow.",
              "**Very short, heavily rehearsed scripts.** For a twenty-second piece you have already run four times, the constant speed is one less thing behaving unpredictably.",
              "**Deliberate pace training.** If you know you rush, a fixed scroll speed set slightly slow is a genuinely useful discipline. Voice-follow will accommodate your rushing instead of correcting it.",
            ],
          },
          {
            type: "p",
            text: "That last one is the honest trade-off with voice-follow generally: by adapting to you, it removes a constraint that was sometimes doing useful work. If your problem is that you talk too fast, a mode that speeds up when you do is not going to fix it.",
          },
        ],
      },
      {
        heading: "The failure modes, side by side",
        blocks: [
          {
            type: "p",
            text: "Both modes break. What separates them is *how* they break, and how recoverable it is mid-take.",
          },
          {
            type: "p",
            text: "Auto-scroll fails gradually and unrecoverably. You fall half a line behind, then a full line, and the only fix is stopping. You cannot speed yourself up to catch a scroll without it being audible — that panicked acceleration is one of the most recognisable sounds in amateur video.",
          },
          {
            type: "p",
            text: "Voice-follow fails suddenly and recoverably. If it mishears a phrase it may hesitate or jump; but because it is matching against your actual words, saying the next few words clearly usually snaps it back. The recovery is a second of awkwardness rather than a ruined take, and it is often invisible after a cut.",
          },
          {
            type: "p",
            text: "In practice I would rather have occasional one-second glitches than a slow inevitable drift, which is why voice-follow is the sensible default. But note the word default. It is not the answer to everything.",
          },
        ],
      },
      {
        heading: "A quick way to decide",
        blocks: [
          {
            type: "p",
            text: "Two questions, in this order:",
          },
          {
            type: "list",
            items: [
              "**Is the room quiet enough that a voice assistant would understand you?** If no, use auto-scroll. Nothing else in this decision matters.",
              "**Does the video have a hard time limit?** If yes, lean auto-scroll and rehearse to the clock. If no, use voice-follow.",
            ],
          },
          {
            type: "p",
            text: "That covers the vast majority of real recordings. Everything else is preference.",
          },
        ],
      },
      {
        heading: "Settings that matter more than the mode",
        blocks: [
          {
            type: "p",
            text: "One thing worth saying plainly: people spend a lot of time agonising over scroll behaviour and almost none on the two settings that visibly change the footage.",
          },
          {
            type: "p",
            text: "The first is **text size**. Larger text means fewer words on screen, which means your eyes travel less, which means less visible scanning on camera. Most people set it too small because they want to see more of the script, and then wonder why their eyes look busy.",
          },
          {
            type: "p",
            text: "The second is **where the text sits**. The whole point of a camera-overlay teleprompter is that the script floats over the preview right next to the front lens, so reading and looking at the lens are nearly the same action. If the text is drifting to the bottom of the screen, no scrolling mode will save the eye contact.",
          },
          {
            type: "p",
            text: "And regardless of mode, the script never appears in the saved video — it is an overlay on the preview only, so you can record in portrait 4K with a wall of text in front of you and the finished file is clean.",
          },
        ],
      },
      {
        heading: "Try switching mid-project, not mid-take",
        blocks: [
          {
            type: "p",
            text: "A practical habit: pick the mode per video rather than setting it once and forgetting. The same person filming a timed sixty-second ad and a five-minute explainer on the same afternoon genuinely wants different behaviour for each.",
          },
          {
            type: "p",
            text: "If you are new to voice-follow, the cheapest way to build trust is to record the same ninety-second script twice, once in each mode, and watch both back. The difference in your eyes is usually more obvious than the difference in the audio.",
          },
          {
            type: "p",
            text: "If neither take sounds right, the problem may not be the scrolling at all — badly built sentences are hard to deliver in any mode, and [writing a script that does not sound written](/blog/write-a-script-that-doesnt-sound-written) fixes more than settings ever will. For the broader case on using a prompter in the first place, there is also [the benefits of using a teleprompter app](/blog/benefits-of-using-a-teleprompter-app).",
          },
          {
            type: "p",
            text: "Next in this series: teleprompter technique for Instagram Reels specifically — why the vertical crop changes where you should put the text, and what a nine-second hook does to your scripting.",
          },
        ],
      },
    ],
  },
  {
    slug: "teleprompter-for-instagram-reels",
    title: "Using a Teleprompter for Instagram Reels (Without Looking Like You Are Reading One)",
    description: "How to script, position and record Instagram Reels with a teleprompter app — the vertical crop problem, the nine-second hook, and when a prompter makes Reels worse.",
    datePublished: "2026-09-13",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Reels are the format where a teleprompter is most useful and most obvious. Useful, because you are trying to land a complete idea in under ninety seconds and there is no room to ramble. Obvious, because the viewer is watching a face fill a phone screen, and reading eyes on a vertical crop are unmissable in a way they are not on a widescreen talking head.",
          },
          {
            type: "p",
            text: "So the question is not whether to use a prompter for Reels. It is how to use one so the format works for you rather than exposing you. Three things change when you go vertical: where the text has to sit, how the first few seconds have to be written, and how long a script can realistically be.",
          },
        ],
      },
      {
        heading: "The Vertical Crop Changes Where Text Has to Sit",
        blocks: [
          {
            type: "p",
            text: "On a horizontal frame, a prompter can put text almost anywhere along the top and your eyeline stays close enough to the lens. Vertical is unforgiving. The frame is narrow, your face occupies most of it, and the front camera sits in a specific spot at the top of the phone. Any text that sits low pulls your gaze down and the viewer reads it as distraction or dishonesty.",
          },
          {
            type: "p",
            text: "This is the whole reason an overlay prompter beats a second device. [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) floats the script directly over the camera preview, right next to the front lens, so the distance your eyes travel between reading and looking at the camera is close to nothing. Propping a script on a laptop behind your phone gives you the same words and a visibly wrong eyeline.",
          },
          {
            type: "p",
            text: "Two practical adjustments for vertical specifically. Keep the text block narrow — a shorter line length means less horizontal eye movement, which is the movement viewers actually notice. And push the text as high in the frame as the app will let you, even if that means fewer visible lines at once.",
          },
        ],
      },
      {
        heading: "Compose For the Crop, Not Just the Camera",
        blocks: [
          {
            type: "p",
            text: "Instagram overlays its own interface on a Reel: the caption, the audio strip, the action buttons down the right side. The bottom quarter and the right edge of your frame are effectively borrowed.",
          },
          {
            type: "p",
            text: "That matters for prompter use because it determines where your face should sit. Frame yourself in the upper-middle of the vertical frame, which is also where your eyeline wants to be for the overlay text. The two constraints happen to agree, which is convenient — but only if you frame deliberately rather than holding the phone at whatever height feels natural.",
          },
          {
            type: "list",
            items: [
              "Get the lens at or very slightly above eye level. Below eye level is the single most common self-shot mistake and no prompter fixes it.",
              "Leave the bottom quarter of the frame clear of anything you need the viewer to see.",
              "Record in 4K portrait if you plan to crop or reframe later — you have resolution to spare.",
            ],
          },
        ],
      },
      {
        heading: "The First Nine Seconds Have to Be Written Differently",
        blocks: [
          {
            type: "p",
            text: "Reels are consumed in a feed where the cost of leaving is a thumb flick. Whatever the current retention numbers are for your account, the shape is always the same: the steepest drop happens at the very start, and everything after it is a smaller problem.",
          },
          {
            type: "p",
            text: "The practical consequence for scripting is that the opening lines carry disproportionate weight, and they are also the lines you are most likely to deliver badly — because that is when you are least warmed up and most aware of the text.",
          },
          {
            type: "p",
            text: "The fix is to write the opening so it can be delivered almost without reading. Make it short, make it concrete, and rehearse only that part until it is in your head. Then let the prompter carry the middle, where precision matters more and delivery matters less.",
          },
          {
            type: "list",
            items: [
              "Open with the specific claim, not the preamble. Cut every sentence that exists to introduce the sentence after it.",
              "Keep the first line under about twelve words so it fits on one prompter line and you read it in one glance.",
              "Never open with your name or a greeting. Both are pure cost in a feed.",
              "Say the thing the video is actually about before you say why it matters.",
            ],
          },
        ],
      },
      {
        heading: "Voice-Follow Earns Its Keep on Short Scripts",
        blocks: [
          {
            type: "p",
            text: "Auto-scroll at a fixed speed is a reasonable default for a long, evenly paced piece. On a Reel it is a poor fit, because short-form delivery is deliberately uneven — you speed up through setup, stop dead before the payoff, and the pauses are doing real work.",
          },
          {
            type: "p",
            text: "Voice-driven scrolling follows your actual pace using on-device speech recognition, so a two-second dramatic pause does not leave the text sliding away from you. It also auto-detects the script language and finds your place again if you stumble, which on a sixty-second take is the difference between one usable recording and six.",
          },
          {
            type: "p",
            text: "If you have not compared the two modes on your own delivery, [voice-follow versus auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter) walks through when each one is the better choice.",
          },
        ],
      },
      {
        heading: "How Long Can a Reel Script Actually Be?",
        blocks: [
          {
            type: "p",
            text: "Conversational delivery on camera runs somewhere around 130 to 150 words a minute — slower than people expect, because pauses count. That puts a comfortable sixty-second Reel at roughly 130 to 150 words of actual script.",
          },
          {
            type: "p",
            text: "Almost everyone writes more than that on the first draft. The most reliable way to get a Reel to land is to write the script you want, then cut it by about a third, and the third you cut is almost always qualifiers, restatements, and the sentence at the end that summarises what you just said.",
          },
          {
            type: "p",
            text: "A prompter makes this easier to judge, because you can see the script as a block before you record. If it fills more than a couple of screens at a readable text size, it is long for the format.",
          },
        ],
      },
      {
        heading: "When a Teleprompter Makes a Reel Worse",
        blocks: [
          {
            type: "p",
            text: "Worth being straight about this. There are Reels a prompter actively hurts.",
          },
          {
            type: "list",
            items: [
              "**Reaction and commentary content**, where the appeal is that you are clearly thinking in real time. A script flattens exactly the thing people came for.",
              "**Anything under about fifteen seconds.** Reading eyes are proportionally more visible in a short clip, and fifteen seconds of speech is short enough to just remember.",
              "**Videos where you are demonstrating something with your hands** and looking down at the work anyway — the prompter competes with the demo for your attention.",
              "**The first few videos you ever make**, honestly. Reading badly looks worse than improvising badly, and the reading skill takes a handful of takes to acquire.",
            ],
          },
          {
            type: "p",
            text: "The general rule: use a prompter when the words need to be right — a claim you cannot misstate, a sequence of steps, a sponsored read, a topic where wording has consequences. Skip it when the appeal is spontaneity.",
          },
        ],
      },
      {
        heading: "A Workable Reels Setup",
        blocks: [
          {
            type: "p",
            text: "Putting it together, and none of this needs equipment beyond the phone:",
          },
          {
            type: "list",
            items: [
              "Write to about 140 words, then cut a third.",
              "Rehearse only the opening line until you can say it looking straight at the lens.",
              "Phone at eye level, framed upper-middle, bottom quarter kept clear.",
              "Text high in the frame, narrow block, size large enough to read in one glance.",
              "Voice-follow scrolling on, so your pauses stay yours.",
              "Record portrait 4K and do two takes minimum — the second is almost always looser.",
            ],
          },
          {
            type: "p",
            text: "One detail that matters more than it sounds: the script never appears in the saved video. What you get back is a clean recording, no watermark, ready to upload — the prompter exists only on your screen while you film. And because the speech recognition runs entirely on the device, nothing you write or record leaves the phone, which is worth knowing if you script anything under an NDA or record on a plane.",
          },
          {
            type: "p",
            text: "If you are earlier in the process than the recording, [writing a script that does not sound written](/blog/write-a-script-that-doesnt-sound-written) is the piece to read first — most delivery problems are sentence-construction problems wearing a disguise.",
          },
          {
            type: "p",
            text: "Next in this series: YouTube Shorts, which look like the same format as Reels and reward a noticeably different scripting approach — particularly at the end, where Shorts behave in a way Reels do not.",
          },
        ],
      },
    ],
  },
  {
    slug: "teleprompter-for-youtube-shorts",
    title: "Using a Teleprompter for YouTube Shorts: What Actually Changes from Reels",
    description:
      "Shorts and Reels look identical and reward different scripts. How to write, set up and record a Shorts script with a teleprompter \u2014 including when not to use one.",
    datePublished: "2026-09-14",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "If you already record Reels, the temptation with Shorts is to change nothing. Same phone, same vertical frame, same script, upload to both. It works, in the sense that nothing breaks. It just quietly underperforms, and the reason is not the algorithm \u2014 it is that people arrive at a Short in a different state of mind than they arrive at a Reel, and a script written for one is slightly miscalibrated for the other.",
          },
          {
            type: "p",
            text: "This is the practical version: what to change in the writing, what to change in the setup, and the one place where reading from a prompter is the wrong call entirely.",
          },
        ],
      },
      {
        heading: "The one difference that changes the script",
        blocks: [
          {
            type: "p",
            text: "Shorts sit inside YouTube. That sounds obvious and it is the whole thing. A viewer who finds you in the Shorts feed is one tap away from a channel with your longer videos on it, and YouTube has spent years training people to follow channels rather than individual posts. Instagram does not work that way \u2014 a Reel mostly has to justify itself alone.",
          },
          {
            type: "p",
            text: "Practically, that means the end of a Shorts script carries weight that the end of a Reel does not. On Reels, the last line is often a throwaway because the viewer is already gone. On Shorts, the last line is the handover \u2014 it is where a viewer decides whether there is more of this somewhere.",
          },
          {
            type: "p",
            text: "So when you adapt a script, do not just trim it. Rewrite the final eight to ten words so they point at something specific: the longer video this came from, the next part, the thing you cover on the channel. Not the word subscribe. Something concrete enough that following feels like a decision rather than a favour.",
          },
        ],
      },
      {
        heading: "Front-load harder than you think you need to",
        blocks: [
          {
            type: "p",
            text: "The opening rule is the same in both places but less forgiving on Shorts, because the feed is deep and the thumb is fast. What that means for a scripted piece specifically:",
          },
          {
            type: "list",
            items: [
              "Put the claim in the first sentence. Not the setup for the claim \u2014 the claim.",
              "Cut every phrase that is throat-clearing: so, basically, I wanted to talk about, in this video.",
              "Never open with your own name. It is the single most common wasted second in scripted short-form.",
              "If the piece has a number in it \u2014 three ways, forty minutes, twice the speed \u2014 say the number early. Numbers survive being half-heard.",
            ],
          },
          {
            type: "p",
            text: "The advantage of working from a written script here is that you can see the throat-clearing on the page. Improvised openings almost always start two sentences before they need to, and you cannot hear yourself doing it in the moment. Reading the first line off the page, written deliberately, removes the problem before it exists.",
          },
        ],
      },
      {
        heading: "Length, and the honest version of the rule",
        blocks: [
          {
            type: "p",
            text: "Shorts can run up to three minutes now, which has quietly made scripting harder rather than easier, because the extra room is a trap for scripted content. A tight forty-five seconds outperforms a padded ninety almost every time.",
          },
          {
            type: "p",
            text: "The number that has served me well: write to roughly 140 words for a sixty-second piece, then cut a third of it. Most people speak faster on camera than they expect, and a script that felt sparse on the page lands about right out loud. If you genuinely need two minutes, the test is whether every twenty-second block has its own small payoff \u2014 if any of them is only there to get you to the next one, cut it and make two Shorts.",
          },
        ],
      },
      {
        heading: "Setting up the recording",
        blocks: [
          {
            type: "p",
            text: "The mechanics are where a prompter earns its place. The difficulty with reading a script on a phone is that the text is in the middle of the screen and the lens is at the top, so your eyes are visibly pointed at the wrong place for the entire take. That is the thing viewers read as shifty, even when they cannot say why.",
          },
          {
            type: "p",
            text: "[Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) floats the script over the live camera preview and lets you position it right next to the front lens, so the gap between reading and looking down the barrel is a few millimetres. Concretely, for Shorts:",
          },
          {
            type: "list",
            items: [
              "Phone at eye level, not below. Recording from your lap is the other half of the eye-contact problem.",
              "Text block positioned high in the frame, close to the lens, and kept narrow \u2014 short lines mean your eyes travel less per line.",
              "Text size large enough to read in a single glance from arm's length. If you are squinting, you are reading rather than talking.",
              "Leave the bottom quarter of the frame clear. That is where the title, channel handle and subscribe button sit in the Shorts player, and it is where your face should not be.",
              "Record portrait 4K. YouTube compresses hard, and giving it more to start with visibly survives the trip.",
            ],
          },
        ],
      },
      {
        heading: "Voice-follow versus a speed slider, for this format",
        blocks: [
          {
            type: "p",
            text: "Both are available and for Shorts the choice matters more than it does at length, because a sixty-second script has no room to recover from a scroll that is running ahead of you.",
          },
          {
            type: "p",
            text: "Voice-driven scrolling follows your actual pace \u2014 the text advances as you speak, using on-device speech recognition, and finds its place again if you stumble or repeat a line. For short-form that is usually the right default, because the natural pauses that make a Short sound conversational are exactly what a fixed-speed scroll punishes. Auto-scroll with a speed slider is better when you already know the piece cold and want a metronome to keep you from rushing, which is a real failure mode when you are recording six takes in a row.",
          },
          {
            type: "p",
            text: "The [voice-follow versus auto-scroll comparison](/blog/voice-follow-vs-auto-scroll-teleprompter) goes into where each one falls down. For a first Shorts session, start with voice-follow.",
          },
        ],
      },
      {
        heading: "When not to use a prompter at all",
        blocks: [
          {
            type: "p",
            text: "Worth saying plainly, because a post about a prompter app has an obvious incentive not to. There are Shorts formats where reading hurts.",
          },
          {
            type: "p",
            text: "Reaction and commentary pieces need the small hesitations and self-corrections that make a reaction read as genuine, and a script sands those off. Anything with your hands in the frame \u2014 a demo, a cooking step, a repair \u2014 works better with bullet points you glance at than with prose you follow, because your attention belongs on the object. And if the Short is genuinely a single sentence, writing it down and reading it is more setup than saying it.",
          },
          {
            type: "p",
            text: "Where a prompter is clearly worth it: explainers with an order that matters, anything with numbers or names you must get right, compliance-sensitive wording, a piece you are recording in a language you are less fluent in, and any session where you are batching several videos and your memory for the fourth script has quietly given up.",
          },
        ],
      },
      {
        heading: "The thing that actually makes it not sound read",
        blocks: [
          {
            type: "p",
            text: "Most scripted Shorts fail at the sentence level, not the delivery level. Written sentences are longer than spoken ones, they front-load subordinate clauses, and they use words nobody says out loud. No amount of good reading fixes a sentence that was never meant to be spoken.",
          },
          {
            type: "p",
            text: "The cheapest fix is to read the script aloud once before you record and mark every place you ran out of breath or stumbled. Those are not delivery problems, they are punctuation problems, and shortening the sentence solves them permanently. [Writing a script that does not sound written](/blog/write-a-script-that-doesnt-sound-written) covers the rewriting patterns in more detail.",
          },
          {
            type: "p",
            text: "A few format details worth knowing: the script never appears in the saved video, so what you upload is clean with no watermark; the app is free with occasional ads and a one-time purchase to remove them rather than a subscription; and because the speech recognition runs entirely on the device, it works in airplane mode and nothing you write or record is uploaded anywhere. That last part matters more than it sounds if you script anything before it is public.",
          },
          {
            type: "p",
            text: "Next in this series: TikTok, where the scripting pressure moves to a different part of the video again \u2014 and where the thing that keeps people watching is not the hook or the ending but what happens around the fifteen-second mark.",
          },
        ],
      },
    ],
  },
  {
    slug: "teleprompter-for-tiktok",
    title: "Using a Teleprompter for TikTok: Where Scripted Videos Actually Lose People",
    description: "TikTok punishes polish differently from Reels or Shorts. How to script for it, which teleprompter mode fits, and the videos where you should not use one at all.",
    datePublished: "2026-09-15",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "If you have already read the [Reels](/blog/teleprompter-for-instagram-reels) and [Shorts](/blog/teleprompter-for-youtube-shorts) pieces in this series, you might reasonably expect TikTok to be the same advice with a different logo. It is not, and the difference is worth understanding before you script anything.",
          },
          {
            type: "p",
            text: "On Shorts, the risk is the opening - people leave in the first two seconds. On TikTok, plenty of viewers will give you the opening. Where they leave is the middle, somewhere around the fifteen-second mark, and scripted videos are unusually good at losing them there.",
          },
        ],
      },
      {
        heading: "Why the middle is where scripts fail",
        blocks: [
          {
            type: "p",
            text: "A written script has a shape: setup, development, payoff. That shape is fine on paper, but the development section is where the writing gets most written - the connective sentences, the *and what that means is*, the careful restatement of the point you already made.",
          },
          {
            type: "p",
            text: "When you are improvising, you skip all of that instinctively, because you can feel yourself getting boring. When you are reading, you do not feel it, because the sentence is right there and reading it takes no effort. The script protects you from stumbling and also protects you from noticing.",
          },
          {
            type: "p",
            text: "The practical fix is structural rather than performative: cut the connective tissue out of the script before you record it. If a sentence exists to get you from one idea to the next, delete it and let the cut do that job. TikTok viewers are extremely comfortable with abrupt transitions.",
          },
        ],
      },
      {
        heading: "Script for TikTok's tolerance for roughness",
        blocks: [
          {
            type: "p",
            text: "The platform rewards a specific register - fast, direct, slightly unfinished. A script that reads well in a document usually sounds a full notch too formal once it is out loud, and on TikTok that gap is more visible than anywhere else because the surrounding content is so casual.",
          },
          {
            type: "p",
            text: "Some things that help, none of which require any particular app:",
          },
          {
            type: "list",
            items: [
              "Write in fragments. Not every line needs a subject and a verb.",
              "Put the conclusion first and the reasoning second. TikTok is not a place for building to a point.",
              "Use contractions everywhere, including the ones that feel slightly sloppy written down.",
              "Read the whole thing out loud once and delete every sentence you had to take a breath in the middle of.",
              "Leave one deliberate gap where you will say something unscripted - a reaction, an aside, a correction. It resets the rhythm.",
            ],
          },
          {
            type: "p",
            text: "The [script-writing piece](/blog/write-a-script-that-doesnt-sound-written) in this series goes through the rewriting patterns in more detail; they apply here with the dial turned further up.",
          },
        ],
      },
      {
        heading: "Which mode to use",
        blocks: [
          {
            type: "p",
            text: "For TikTok specifically, voice-driven scrolling tends to fit better than fixed-speed auto-scroll, and the reason is the deliberate gap mentioned above. Auto-scroll runs at a constant rate, so the moment you go off-script for four seconds, the text has moved on without you and you spend the next line catching up. Voice-follow waits.",
          },
          {
            type: "p",
            text: "In [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay), the voice-driven mode uses Apple's on-device speech recognition to track where you are in the script and scroll to match - so pausing, ad-libbing, or repeating a line all work, and it finds your place again if you stumble. It auto-detects the script's language and supports every language iOS on-device recognition does, which matters if you switch languages mid-sentence the way a lot of creators do.",
          },
          {
            type: "p",
            text: "Auto-scroll with a speed slider is still there and still the better choice for a tightly timed read where you know you will not deviate. [The full comparison](/blog/voice-follow-vs-auto-scroll-teleprompter) covers when each wins.",
          },
        ],
      },
      {
        heading: "The eye-contact problem is worse in vertical",
        blocks: [
          {
            type: "p",
            text: "TikTok is shot close and vertical, which means your face fills the frame and any gaze drift is obvious. A script taped below the phone, or read off a second device, reads immediately as *looking at something else*.",
          },
          {
            type: "p",
            text: "The overlay approach exists for this: the script floats over the live camera preview, positioned next to the front lens, so your eyes stay within a degree or two of the camera while you read. It is the single biggest difference between a scripted video that looks scripted and one that does not.",
          },
          {
            type: "p",
            text: "Two practical settings to get right. Make the text larger than feels necessary - bigger text means fewer words on screen, which means less eye travel per line. And if you are using a rig or a mirror setup, mirror mode flips the text so it reads correctly through the glass.",
          },
        ],
      },
      {
        heading: "When you should not use a teleprompter on TikTok",
        blocks: [
          {
            type: "p",
            text: "This is the part most posts on the subject leave out, and on TikTok it is a bigger category than on other platforms.",
          },
          {
            type: "p",
            text: "Do not script a trend participation video. The whole appeal is that everyone is doing the same thing slightly differently, and a polished read makes you look like you missed the joke. Same for duets, stitches, and replies to comments - those formats are built on reacting, and a script kills the reaction.",
          },
          {
            type: "p",
            text: "Do not script anything under about fifteen seconds. Below that length the setup cost of writing, loading and reading is longer than just saying the thing, and short videos are where unscripted energy reads best anyway.",
          },
          {
            type: "p",
            text: "And be careful scripting anything emotional. A script is excellent at keeping you accurate and terrible at keeping you moved. If the video's job is to convey that you care about something, a bullet list of three points you improvise around will almost always beat a paragraph you read correctly.",
          },
          {
            type: "p",
            text: "Where a teleprompter genuinely earns its place on TikTok: explainers with facts you cannot get wrong, anything with numbers or names in it, videos in a language you are less fluent in, and long-form talking-head content where losing your place costs you a whole take.",
          },
        ],
      },
      {
        heading: "A workflow that holds up",
        blocks: [
          {
            type: "p",
            text: "Write the script. Read it aloud once and cut a third of it. Load it, set the text size large, pick voice-follow, and record in portrait - the app records 4K and the script never appears in the saved video, so what comes out is clean and unwatermarked, ready to upload or edit.",
          },
          {
            type: "p",
            text: "Then do the take you did not plan. Record the same script a second time without looking at it, using only what you remember. Quite often that is the one you post, and the scripted take turns out to have been rehearsal. That is not a failure of the tool - getting the words into your head is most of what the tool is for.",
          },
          {
            type: "p",
            text: "Everything runs on the device, including the speech recognition, so this works in airplane mode and nothing you write or record leaves the phone. The app is free with occasional ads and a one-time purchase to remove them, no subscription. It is iOS-only for now.",
          },
          {
            type: "p",
            text: "Next in this series: how to keep eye contact with the camera - the mechanics of it, why looking *at* the lens and looking *near* the lens produce such different results on video, and what to do if you find it physically uncomfortable.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-keep-eye-contact-with-the-camera",
    title: "How to Keep Eye Contact With the Camera (And Why It Is Harder Than It Looks)",
    description:
      "Looking at the lens and looking near the lens produce completely different results on video. The mechanics of camera eye contact, and how to fix it if you keep drifting.",
    datePublished: "2026-09-17",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Watch a video where someone is reading off a screen and you can tell within two seconds. Not because you consciously spot the scanning - it is subtler than that. The eyes are pointed slightly below, or slightly to the side, and they move in small horizontal sweeps. You do not think *they are reading*. You think *something is off*, and you scroll.",
          },
          {
            type: "p",
            text: "That reaction is worth understanding, because it is the whole reason camera eye contact matters. It is not that looking at the lens is polite. It is that the human visual system is absurdly sensitive to gaze direction, and a couple of degrees of error reads as evasiveness.",
          },
        ],
      },
      {
        heading: "Why a few degrees ruins it",
        blocks: [
          {
            type: "p",
            text: "People can detect where another person is looking with remarkable precision - it is one of the things our vision is specialised for. The high-contrast white sclera around a dark iris makes gaze direction unusually legible in humans compared with other primates, and we read it constantly without effort.",
          },
          {
            type: "p",
            text: "On video this becomes a problem because the viewer has no depth cues to help them. In a room, if someone looks past your shoulder, you understand they are looking at something behind you. On a flat screen there is no behind. There is only *at me* and *not at me*, and *not at me* defaults to the least generous interpretation.",
          },
          {
            type: "p",
            text: "This is the same effect that makes video calls feel subtly cold. Everyone is looking at the face on their screen rather than the camera above it, so nobody ever quite makes eye contact with anybody.",
          },
        ],
      },
      {
        heading: "The distance between your script and the lens is the whole problem",
        blocks: [
          {
            type: "p",
            text: "Every fix for camera eye contact is really a fix for one thing: the angular gap between where your words are and where the lens is.",
          },
          {
            type: "p",
            text: "Hold your phone at arm's length and put your notes at the bottom of the screen, and that gap is maybe ten degrees. Visible. Put your script on a laptop next to the phone and it is forty degrees. Unmissable. Tape a note below the tripod and you are looking at the floor.",
          },
          {
            type: "p",
            text: "The distance also matters in the other direction: the further away the camera, the smaller the angle for the same physical offset. This is why studio setups get away with a teleprompter mirror at a couple of metres, and why phone-at-arm's-length is the hardest case.",
          },
          {
            type: "p",
            text: "So the goal is to shrink that angle to near zero. Which is exactly what a camera-overlay teleprompter does - [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) floats the script directly over the camera preview, positioned next to the front lens, so reading and looking-at-the-lens become the same physical act. The gap stops being something you have to compensate for.",
          },
        ],
      },
      {
        heading: "Why you still drift, even with the script in the right place",
        blocks: [
          {
            type: "p",
            text: "Here is the part nobody tells you: putting the words next to the lens removes the *geometric* problem and leaves the *cognitive* one entirely intact.",
          },
          {
            type: "p",
            text: "When you are reading, your eyes are doing saccades - rapid jumps along the line. When you are talking, your eyes are comparatively still, with occasional breaks as you think. Those are visibly different behaviours, and the second one is what viewers read as speaking to them. A script perfectly aligned with the lens will still look like reading if you are, in fact, reading it word by word.",
          },
          {
            type: "p",
            text: "The way out is not more discipline. It is knowing the line well enough that you are glancing rather than reading - taking in a phrase, delivering it to the lens, glancing again. That is a rhythm, and it has a prerequisite: the script has to be a script you can *say*, not just one you can read. We covered that in [writing a script that does not sound written](/blog/write-a-script-that-doesnt-sound-written), and it turns out to be an eye contact technique as much as a writing one.",
          },
        ],
      },
      {
        heading: "Practical fixes, in order of how much they help",
        blocks: [
          {
            type: "list",
            items: [
              "**Get the text next to the lens.** Everything else is a rounding error if this is wrong. On a phone, that means an overlay teleprompter rather than notes below the frame.",
              "**Make the text bigger than feels necessary.** Larger text means fewer, longer glances and fewer horizontal sweeps. It is counterintuitive - less text on screen feels riskier - but it looks dramatically better.",
              "**Let the script follow you, not the other way around.** Fixed-speed scrolling forces your eyes to track a moving target, which is visibly different from reading a still one. Voice-driven scrolling that matches your pace keeps the line you need where it was. The [comparison of voice-follow and auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter) goes into when each is the right choice.",
              "**Move the camera further back and zoom slightly in.** A longer distance shrinks the angle for free and flatters your face at the same time. Two steps back is worth more than most technique advice.",
              "**Put the lens at eye height.** A camera below you means you are looking down, which reads as diminished no matter how good your gaze is. A camera above means you are looking up, which reads as hesitant.",
              "**Rehearse the first and last lines to memory.** The open and close are where viewers decide about you. Delivering those two without a glance buys a lot of goodwill for the middle.",
            ],
          },
        ],
      },
      {
        heading: "The thing to stop doing",
        blocks: [
          {
            type: "p",
            text: "Do not stare. This is the most common overcorrection, and it is worse than the problem.",
          },
          {
            type: "p",
            text: "People in natural conversation break eye contact constantly - roughly every few seconds, usually while thinking or reaching for a word. Unbroken eye contact for sixty seconds is not warmth; it is interrogation. Viewers will not be able to say why the video feels intense, but they will feel it.",
          },
          {
            type: "p",
            text: "The natural-looking pattern is to hold the lens while you deliver a thought, break briefly at the end of it, and come back for the next one. Which is, conveniently, the same rhythm that glancing at a script produces anyway. If you are working in a second language or with unfamiliar material, those breaks get longer - and that is fine. They read as thinking, which is what they are.",
          },
        ],
      },
      {
        heading: "When not to bother",
        blocks: [
          {
            type: "p",
            text: "Camera eye contact is not a universal virtue, and chasing it in the wrong format makes videos worse.",
          },
          {
            type: "list",
            items: [
              "**Screen recordings and tutorials.** If the viewer is watching your screen, your face is a small inset and gaze direction barely registers. Spend the effort on pacing instead.",
              "**Interview-style and two-person content.** Looking at the person you are talking to is correct. Looking at the lens mid-conversation is the thing that looks strange.",
              "**Genuinely spontaneous pieces.** A vlog-style video where you are clearly thinking out loud does not need it, and polished lens contact can make it feel staged.",
              "**Anything where the words must be exact.** Compliance wording, legal disclaimers, precise numbers. Read it properly. A viewer forgives a glance down far more readily than a misstatement.",
            ],
          },
        ],
      },
      {
        heading: "A ten-minute practice that actually works",
        blocks: [
          {
            type: "p",
            text: "Record the same thirty seconds three times. First reading it straight off the script. Second with the script loaded but trying to glance rather than read. Third from memory, no script at all.",
          },
          {
            type: "p",
            text: "Watch them back with the sound off. The difference will be obvious, and it will be obvious in a way that no amount of reading about gaze can teach you - you will see your own eyes doing the thing that looks like reading, and afterwards you will feel when you are doing it.",
          },
          {
            type: "p",
            text: "Keeping all three takes is easy enough; the takes library holds them, the script never appears in the saved video, and none of it leaves the phone - the app runs entirely on-device, including the speech recognition, so this works in airplane mode. It is free with occasional ads and a one-time purchase to remove them, and it is iOS-only.",
          },
          {
            type: "p",
            text: "Next in this series: mirror mode and DIY teleprompter rigs - what the mirror setting is actually for, how to build a beam-splitter rig cheaply, and whether any of it is worth the effort when the phone can do the job on its own.",
          },
        ],
      },
    ],
  },
  {
    slug: "recording-video-in-a-second-language",
    title: "Recording Video Confidently in a Second Language",
    description:
      "Filming in a language you did not grow up speaking is a memory problem, not a fluency problem. How to script, pace and record so you sound like yourself on camera.",
    datePublished: "2026-09-21",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "You speak the language perfectly well. You hold meetings in it, you argue in it, you make jokes in it. Then you point a camera at yourself and something collapses. The sentence you had planned comes out in the wrong order, you hear your own accent for the first time in years, and take eleven is somehow worse than take one.",
          },
          {
            type: "p",
            text: "This is extremely common and it is almost never a fluency problem. It is a load problem. Speaking a second language costs you working memory; performing to a camera costs you working memory; remembering what you meant to say costs you working memory. Do all three at once and something has to give.",
          },
          {
            type: "p",
            text: "The fix is to take the third one off the table entirely, and then to write for the mouth you actually have rather than the one you wish you had.",
          },
        ],
      },
      {
        heading: "Why the camera makes a fluent speaker stumble",
        blocks: [
          {
            type: "p",
            text: "In conversation you get help you never notice. The other person nods, so you know you are landing. You can pause without it being awkward. If a word escapes you, you point, or you say *the thing for the* and they finish it. None of that exists when you are talking to a lens.",
          },
          {
            type: "p",
            text: "On top of that, unscripted second-language speech leans on filler and repair - *how do you say*, *I mean*, *sorry, again* - which is completely normal in conversation and sounds like uncertainty on video. So people over-correct by memorising a script word for word, and memorised text in a second language is the fastest route to sounding stiff, because now you are translating *and* reciting.",
          },
        ],
      },
      {
        heading: "Write in the register you actually speak",
        blocks: [
          {
            type: "p",
            text: "Here is the trap almost everyone falls into. When we write in a second language, we write formally - that is the register school taught, and it is the register of the articles we read. Then we read that writing aloud and it sounds like a textbook, which is not how we talk at all.",
          },
          {
            type: "p",
            text: "So write the script badly on purpose, in the way you would actually say it to a colleague:",
          },
          {
            type: "list",
            items: [
              "Short sentences. One idea each. A comma in a second-language script is usually a place you will stumble - make it a full stop instead.",
              "Contractions everywhere. *It is not* becomes *it isn't*. Formal writing avoids them; speech does not.",
              "Swap out any word you would not use in a meeting. If you have written *utilise*, you meant *use*. If you have written *subsequently*, you meant *then*.",
              "Cut the linking phrases you learned for essays - *moreover*, *in conclusion*, *furthermore*. Nobody says them.",
              "Where you know a sound is hard for you, choose a different word. This is not cheating, it is the same thing native speakers do unconsciously.",
            ],
          },
          {
            type: "p",
            text: "Then read the whole thing out loud once before you record anything. Every place you trip is a place to rewrite, not a place to practise harder. The [guide to writing a script that doesn't sound written](/blog/write-a-script-that-doesnt-sound-written) goes deeper on this, and everything in it applies double here.",
          },
        ],
      },
      {
        heading: "Put the script next to the lens, not in your memory",
        blocks: [
          {
            type: "p",
            text: "Once the words are on a teleprompter you stop spending memory on recall and spend all of it on delivery. That single change is usually worth more than weeks of practice.",
          },
          {
            type: "p",
            text: "[Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) floats the script directly over the camera preview, right next to the front lens, so you can read without your eyes drifting off to the side. The script never appears in the saved video - it exists only on your screen while you record.",
          },
          {
            type: "p",
            text: "The feature that matters most for a second language is the **voice-driven scrolling**. Instead of the text crawling at a fixed speed you have to chase, the app listens and follows your pace using Apple's on-device speech recognition. It auto-detects the language of your script, and supports every language iOS on-device recognition supports - so if you are recording in Spanish, German, Hindi or Japanese, it follows you in that language rather than trying to match English sounds.",
          },
          {
            type: "p",
            text: "That matters because the thing that derails second-language takes is the stumble. You mispronounce a word, go back, say it again. A fixed-speed scroll keeps going and you lose your line. Voice-follow waits, finds your place again, and carries on. You are allowed to be imperfect mid-sentence without losing the take.",
          },
        ],
      },
      {
        heading: "Record in passes, not in takes",
        blocks: [
          {
            type: "p",
            text: "Stop trying to nail a three-minute video in one go. Record it in four chunks of forty seconds, with a breath between each, and cut them together. Your failure rate per chunk is dramatically lower, and the confidence of having banked three good chunks changes how the fourth one sounds.",
          },
          {
            type: "p",
            text: "Two habits that compound with this:",
          },
          {
            type: "list",
            items: [
              "**Record the hardest section first**, while you still have patience. The bit you are dreading gets worse every time you postpone it.",
              "**Do one deliberately fast throwaway pass** before the real ones. Speaking too quickly on purpose gets the self-monitoring voice out of the way, and take two usually comes out at a natural pace.",
            ],
          },
        ],
      },
      {
        heading: "About the accent",
        blocks: [
          {
            type: "p",
            text: "Worth saying plainly, because it is the thing most people are actually worried about: an accent is not a defect to be edited out. Clarity matters - pacing, articulation, finishing your words - and accent does not. Viewers forgive an accent instantly. They do not forgive being unable to follow.",
          },
          {
            type: "p",
            text: "If clarity is genuinely the issue, the levers are speed and stress, not vowel sounds. Slow down about fifteen percent from what feels natural. Land firmly on the one stressed word in each sentence. Leave a real pause at every full stop instead of running sentences together. That is most of it.",
          },
        ],
      },
      {
        heading: "When not to do this",
        blocks: [
          {
            type: "p",
            text: "A teleprompter is the wrong tool for some second-language recording, and pretending otherwise would be useless.",
          },
          {
            type: "list",
            items: [
              "**If you are genuinely still learning the language**, reading a script you cannot produce yourself will show. The mismatch between your written and spoken register becomes audible, and viewers read it as inauthentic rather than impressive.",
              "**For anything conversational** - a Q&A, a reaction, a livestream - scripting kills the format. Use bullet prompts, not sentences.",
              "**For very short clips**, under about twenty seconds, the setup costs more than it saves. Just learn the four lines.",
            ],
          },
          {
            type: "p",
            text: "There is also an honest trade-off with voice-follow specifically: it works by listening, so it needs you to be reasonably audible. In a noisy cafe, classic auto-scroll with the speed slider is the more reliable choice. The [comparison of voice-follow and auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter) covers when each one wins.",
          },
        ],
      },
      {
        heading: "The practical setup",
        blocks: [
          {
            type: "p",
            text: "For a second-language recording specifically, a few settings earn their keep. Turn the text size up more than you think you need - larger text means fewer words per line, which means less scanning, which means less of the sideways eye movement that reads as *reading*. Keep chunks short in the script itself, with plenty of line breaks at natural breathing points.",
          },
          {
            type: "p",
            text: "Everything runs on the device: the speech recognition is on-device, the app works in airplane mode, and nothing about your script or your takes is uploaded anywhere. For people rehearsing in a language they are self-conscious about, that tends to matter more than any feature - the fumbling takes stay on your phone.",
          },
          {
            type: "p",
            text: "The app records in portrait 4K, keeps unlimited scripts and a library of takes, and is free with occasional ads, with a small one-time purchase to remove them. No subscription, no watermark. It is iOS only.",
          },
        ],
      },
      {
        heading: "Next",
        blocks: [
          {
            type: "p",
            text: "The eye contact problem is a close cousin of this one, and it gets worse when you are concentrating on pronunciation - your eyes drift to the text exactly when you need them on the lens. [How to keep eye contact with the camera](/blog/how-to-keep-eye-contact-with-the-camera) is the companion piece.",
          },
          {
            type: "p",
            text: "Next in this series: mirror mode and DIY teleprompter rigs - what you actually need to build one, and when a phone propped against a laptop is genuinely good enough.",
          },
        ],
      },
    ],
  },
  {
    slug: "mirror-mode-and-diy-teleprompter-rigs",
    title:
      "Mirror Mode and DIY Teleprompter Rigs: What You Actually Need to Build One",
    description:
      "How teleprompter mirror mode works, how to build a beam-splitter rig at home, and the honest test for whether you need a rig at all or just a better phone position.",
    datePublished: "2026-09-21",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Somewhere in every creator's second year there is an evening spent watching rig build videos. Glass at forty-five degrees, a hood made of blackout fabric, a tablet lying face-up underneath. It looks like the thing that separates amateur footage from the stuff on television, and there is a version of that which is true.",
          },
          {
            type: "p",
            text: "There is also a version where you spend a weekend and eighty pounds to solve a problem you did not have. This post covers what mirror mode is actually for, how to build a rig if you need one, and - more usefully for most people - the test for whether you do.",
          },
        ],
      },
      {
        heading: "What mirror mode is, in one paragraph",
        blocks: [
          {
            type: "p",
            text: "A proper teleprompter puts a piece of half-silvered glass at forty-five degrees in front of the lens. The camera looks straight through it. You, standing in front, see the reflection of a screen lying face-up below. Your eyes are on the lens and on the script at the same time, which is the entire point.",
          },
          {
            type: "p",
            text: "A reflection is laterally reversed. So the screen has to display the text already flipped, and the mirror un-flips it back for you. That is all mirror mode is: a horizontal flip of the text so it reads correctly after one bounce. Turn it on when there is a mirror in the light path, and off when there is not. Turning it on without a mirror gives you a screen of backwards text, which is a five-second mystery that has briefly confused everybody who has ever used the setting.",
          },
        ],
      },
      {
        heading: "Building one: the minimum viable rig",
        blocks: [
          {
            type: "p",
            text: "If you want to build rather than buy, the parts list is genuinely short.",
          },
          {
            type: "list",
            items: [
              "**A beam splitter.** This is the one part not to improvise. A standard household mirror reflects off both the glass surface and the silvered back, so you get a faint double image of every letter. Teleprompter glass, or a sheet of beam-splitter film on clear acrylic, is what you want.",
              "**A frame holding the glass at 45 degrees** to the lens axis. Foam board, a cardboard box cut to a triangle, or three pieces of timber all work. The angle matters more than the material.",
              "**A shroud.** Some black fabric or card wrapping the camera side of the glass. Without it, the camera sees the room reflected in the glass and your footage gets a milky wash across it. This is the step most first builds skip and then quietly re-do.",
              "**A shelf for the phone**, screen up, directly under the glass.",
              "**A second camera.** If your script phone is under the glass, it cannot also be the camera.",
            ],
          },
          {
            type: "p",
            text: "That last point is the one that catches people out with a phone-based workflow. A single phone cannot be both the face-up screen and the through-the-glass camera. So the DIY rig is really a two-device setup: an old phone or tablet running the script, and your main phone shooting through the glass.",
          },
        ],
      },
      {
        heading: "The overlay alternative, and why it exists",
        blocks: [
          {
            type: "p",
            text: "The other way to solve eye contact is to put the script *on* the camera preview rather than in front of the lens. That is what [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) does - the text floats over the live preview, positioned up next to the front lens, so your eyes are already about a centimetre from the camera while you read. One phone, no glass, no shroud, nothing to assemble.",
          },
          {
            type: "p",
            text: "It is not optically identical to a beam splitter. With real prompter glass your eyeline is exactly on the lens. With an overlay it is very close to it - close enough that at any normal framing, nobody watching can tell. The gap only becomes visible in extreme close-ups shot from a metre away.",
          },
          {
            type: "p",
            text: "The app keeps mirror mode as a setting precisely for the case where you *are* using a rig: prop the phone face-up under a beam splitter, flip the text, and the voice-driven scrolling still works, because the on-device speech recognition is listening to you rather than watching the screen.",
          },
        ],
      },
      {
        heading: "The honest test: do you need a rig?",
        blocks: [
          {
            type: "p",
            text: "Record ninety seconds of the thing you actually make, using nothing but a phone at eye level with an overlay prompter. Watch it back on a laptop, full screen. Then ask one question: can you tell I am reading?",
          },
          {
            type: "p",
            text: "If the answer is no - and for talking-head content at arm's length or further, it usually is - a rig will not improve the video. It will improve the setup time, in the wrong direction.",
          },
          {
            type: "p",
            text: "The cases where a rig earns its place are fairly specific:",
          },
          {
            type: "list",
            items: [
              "You shoot with a dedicated camera and lens rather than a phone, so there is no screen next to the sensor to put text on.",
              "Your framing is a tight close-up where a centimetre of eyeline offset becomes visible.",
              "You read long-form, near-verbatim scripts - legal, medical, corporate - where you cannot afford to paraphrase and need continuous reading for ten minutes at a time.",
              "Somebody else is operating the camera and controlling the scroll, which is a genuinely different workflow from solo recording.",
            ],
          },
          {
            type: "p",
            text: "If none of those describe your work, the honest answer is that the rig is a hobby, and an enjoyable one - just do not file it under production quality.",
          },
        ],
      },
      {
        heading: "If you do build one, four things that go wrong",
        blocks: [
          {
            type: "list",
            items: [
              "**Double text.** You used a household mirror instead of beam-splitter glass. There is no setting that fixes this.",
              "**Washed-out footage.** No shroud. The camera is photographing the room's reflection along with your face.",
              "**Backwards text.** Mirror mode off when it should be on, or on when there is no mirror in the path.",
              "**Screen glare in the frame.** The face-up screen at full brightness can bounce into the lens. Drop the brightness until the reflection is comfortably readable and no further.",
            ],
          },
        ],
      },
      {
        heading: "One thing a rig cannot fix",
        blocks: [
          {
            type: "p",
            text: "A beam splitter puts your eyes on the lens. It does nothing at all about sounding like someone reading, which is the failure mode viewers actually notice. Plenty of very expensively rigged footage still has the flat, evenly-paced delivery of a person working through a paragraph.",
          },
          {
            type: "p",
            text: "That is a scripting problem, and it is solved before the camera comes out - [writing a script that doesn't sound written](/blog/write-a-script-that-doesnt-sound-written) is the piece on it. And if your eyes drift to the text mid-sentence rather than staying forward, [how to keep eye contact with the camera](/blog/how-to-keep-eye-contact-with-the-camera) covers the habit side of the same problem.",
          },
        ],
      },
      {
        heading: "The app, briefly",
        blocks: [
          {
            type: "p",
            text: "For completeness, since it is the thing being compared against a rig here: the script floats over the camera preview next to the front lens, voice-driven scrolling follows your pace using Apple's on-device speech recognition - it detects the script's language automatically and finds your place again if you stumble - and classic auto-scroll with a speed slider is there when you would rather set a pace. Text size is adjustable, mirror mode is available for rig setups, it records portrait 4K, and the script never appears in the saved video.",
          },
          {
            type: "p",
            text: "Everything runs on the device. It works in airplane mode and nothing is uploaded. Unlimited scripts, a takes library, free with occasional ads and a small one-time purchase to remove them - no subscription, no watermark. iOS only.",
          },
        ],
      },
      {
        heading: "Next",
        blocks: [
          {
            type: "p",
            text: "Next in this series: what to actually look for in a free teleprompter app - which limitations are reasonable trade-offs and which ones quietly make the app useless for real recording.",
          },
        ],
      },
    ],
  },
  {
    slug: "what-to-look-for-in-a-free-teleprompter-app",
    title: "What to Look For in a Free Teleprompter App (and What “Free” Usually Costs)",
    description:
      "A buyer's checklist for free teleprompter apps: the five features that actually change your footage, the three traps hidden in the word free, and when to skip the app entirely.",
    datePublished: "2026-09-22",
    readingMinutes: 9,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Search the App Store for “teleprompter” and you get hundreds of results, most of them labelled free. Download five of them and you will find that the word is doing a lot of work: one adds a watermark, one caps your script at 300 words, one wants £9.99 a month before it will let you record at all.",
          },
          {
            type: "p",
            text: "The problem is that the things that separate a good teleprompter app from a bad one are not visible on the store listing. They only show up once you have recorded something and are watching it back, wondering why your eyes look wrong. Here is what to actually check.",
          },
        ],
      },
      {
        heading: "1. Where the text sits relative to the lens",
        blocks: [
          {
            type: "p",
            text: "This is the single feature that determines whether your video looks like you are talking to someone or reading a screen, and it is the one most apps get wrong.",
          },
          {
            type: "p",
            text: "A lot of “teleprompter” apps are really just scrolling text displays. You put your phone next to the camera, or you read from one device while filming on another. Your eyes land somewhere off to the side, and every viewer registers it instantly — not consciously, usually, just as a vague sense that you are distracted.",
          },
          {
            type: "p",
            text: "What you want instead is text overlaid on the camera preview, positioned close to the front lens. The distance between where your eyes are looking and where the lens is becomes small enough that it reads as eye contact. This is the core of what Teleprompter: Camera Overlay does, and it is worth checking on any app you try: does the script float over the live camera view, or is the camera somewhere else entirely?",
          },
          {
            type: "p",
            text: "There is more on the mechanics of this in the guide to [keeping eye contact with the camera](/blog/how-to-keep-eye-contact-with-the-camera).",
          },
        ],
      },
      {
        heading: "2. How the scroll is driven",
        blocks: [
          {
            type: "p",
            text: "Almost every app gives you auto-scroll with a speed slider. Very few give you anything better, and the difference is enormous once you are actually recording.",
          },
          {
            type: "p",
            text: "Auto-scroll assumes you will read at a constant rate. You will not. You will pause for emphasis, stumble on a word, speed up when you are nervous. Within about forty seconds the text is either ahead of you or behind you, and you spend the rest of the take fighting it — which is exactly the tension that shows up on your face.",
          },
          {
            type: "p",
            text: "Voice-driven scrolling solves this by following what you are actually saying. The script moves at your pace, and if you stumble and repeat a line, it finds your place again instead of marching on without you. Check whether the app offers it, and then check the next thing, which matters just as much.",
          },
          {
            type: "p",
            text: "That said, auto-scroll is not obsolete. It is better for a piece you intend to read at a deliberately even pace, and better in a genuinely loud room. The [comparison of voice-follow and auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter) goes into which to pick for which job.",
          },
        ],
      },
      {
        heading: "3. Whether the speech recognition runs on the device",
        blocks: [
          {
            type: "p",
            text: "If an app listens to your voice, ask where the audio goes. Some send it to a server for processing. That has three consequences most listings do not mention: it needs a connection, it adds latency, and it means your script and your voice have left your phone.",
          },
          {
            type: "p",
            text: "On-device recognition avoids all three. Teleprompter: Camera Overlay uses Apple's on-device speech recognition, which means voice-follow works in airplane mode and nothing is uploaded. It also auto-detects the language of your script and supports every language iOS on-device recognition supports, which matters more than it sounds if you record in a language other than English — see [recording confidently in a second language](/blog/recording-video-in-a-second-language).",
          },
          {
            type: "p",
            text: "If you are recording anything under NDA, anything medical or legal, or anything for a client before announcement, this is not a preference. It is the requirement.",
          },
        ],
      },
      {
        heading: "4. Whether the script ends up in the video",
        blocks: [
          {
            type: "p",
            text: "A surprising number of overlay apps record the screen rather than the camera feed, which means the text is burned into your footage. You find this out at the editing stage, which is the worst possible time.",
          },
          {
            type: "p",
            text: "Test it before you rely on it: write two lines, record ten seconds, and watch the file back in Photos. The script should be nowhere in it. While you are there, check what resolution came out — plenty of free apps quietly record at 1080p or lower even on a phone capable of 4K.",
          },
        ],
      },
      {
        heading: "5. The boring settings that decide whether you can read it",
        blocks: [
          {
            type: "p",
            text: "Adjustable text size sounds trivial until you are filming at arm's length rather than at desk distance and discover the app has three fixed sizes, none of which work. Mirror mode matters if you ever put the phone behind beam-splitter glass on a rig — covered in [mirror mode and DIY teleprompter rigs](/blog/mirror-mode-and-diy-teleprompter-rigs).",
          },
          {
            type: "p",
            text: "And check how many scripts you are allowed to save. A cap of three is fine for trying the app and useless the moment you are batching a week of content.",
          },
        ],
      },
      {
        heading: "The three things “free” usually means",
        blocks: [
          {
            type: "p",
            text: "Worth being blunt about the business models, because they are not all equivalent and the store listing will not distinguish them.",
          },
          {
            type: "list",
            items: [
              "**Free with a watermark.** Your footage carries the app's branding unless you pay. This is the one to avoid outright — it makes every video you produce an advert for someone else, and there is no version of your content where that looks good.",
              "**Free trial, subscription after.** Fully functional for seven days, then a recurring charge. Reasonable if you record constantly; poor value if you make a video a month, which describes most people.",
              "**Free with ads, one-time unlock.** You see occasional ads, and a single purchase removes them permanently. Teleprompter: Camera Overlay works this way — free with occasional ads, a small one-time purchase to remove them, no subscription and no watermark.",
            ],
          },
          {
            type: "p",
            text: "The honest trade-off with the third model: you do watch the occasional ad if you never pay. Whether that beats a subscription depends entirely on how often you record. For someone shooting weekly, a one-time unlock stops costing anything after the first month; for someone shooting daily and professionally, a subscription app with more production features may genuinely be the better buy.",
          },
        ],
      },
      {
        heading: "When to skip the app entirely",
        blocks: [
          {
            type: "p",
            text: "Not every video wants a teleprompter, and pretending otherwise is how people end up with stiff footage and a vague sense the tool failed them.",
          },
          {
            type: "p",
            text: "If your video is under about twenty seconds, you are better off learning the line. If it is a genuine reaction, a demo you are narrating live, or anything conversational with another person, a script will fight you rather than help you. And if the reason you want a prompter is that you are not sure what you want to say, the prompter is not the missing piece — the script is. Writing one that survives being read aloud is its own skill, covered in [writing a script that doesn't sound written](/blog/write-a-script-that-doesnt-sound-written).",
          },
          {
            type: "p",
            text: "Teleprompters are for the middle case, which is also the most common one: you know roughly what you want to say, it is longer than you can hold in your head, and you want to say it once cleanly instead of eleven times badly.",
          },
        ],
      },
      {
        heading: "A ten-minute test before you commit",
        blocks: [
          {
            type: "p",
            text: "Whatever app you are evaluating, run this before you build a workflow on it:",
          },
          {
            type: "list",
            items: [
              "Paste in 200 words of real script, not a test sentence.",
              "Record 30 seconds at arm's length, the way you actually film.",
              "Watch it back on a phone screen, not a laptop — that is where it will be watched.",
              "Check three things: do your eyes look right, is the script absent from the video, and what resolution did it save at.",
              "Then deliberately stumble and repeat a line, and see whether the app keeps up or leaves you behind.",
            ],
          },
          {
            type: "p",
            text: "That last step is the one that separates the apps. Most of them handle a clean read fine. Almost none of them handle the take where you fumble a word — which is every take.",
          },
          {
            type: "p",
            text: "You can try the approach described here for yourself with [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay), which is free on iOS.",
          },
        ],
      },
      {
        heading: "Next in this series",
        blocks: [
          {
            type: "p",
            text: "Picking the app is the easy half. The harder half is the room — where the light comes from, where the phone sits, and what the microphone can hear. Next up: a full talking-head filming setup, built entirely from things you probably already own.",
          },
        ],
      },
    ],
  },
  {
    slug: "teleprompter-for-online-courses-and-tutorials",
    title: "Using a Teleprompter for Online Courses and Tutorials",
    description:
      "Course modules are long, technical, and unforgiving of rambling. How to use a teleprompter for tutorial video without sounding like you are reading a manual aloud.",
    datePublished: "2026-09-23",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Course video is a different job from social video, and most teleprompter advice quietly assumes you are filming a 45-second Reel.",
          },
          {
            type: "p",
            text: "A tutorial module runs eight, twelve, twenty minutes. It has to be technically precise, because a wrong step in a lesson costs every student who follows it. It has to be consistent across forty videos recorded over three weeks. And it has to not sound like someone reading a manual into a webcam, because that is the single most common reason people abandon a course at lesson three.",
          },
          {
            type: "p",
            text: "Those constraints change how you should use a teleprompter — and, in a few specific places, whether you should use one at all.",
          },
        ],
      },
      {
        heading: "Why course creators resist the teleprompter, and why they are half right",
        blocks: [
          {
            type: "p",
            text: "The objection goes like this: teaching is not reciting. A good instructor responds to where the difficulty is, slows down at the hard part, and sounds like they have thought about this rather than transcribed it. Scripting every word supposedly kills that.",
          },
          {
            type: "p",
            text: "The half that is right: a fully scripted 15-minute lesson delivered word-for-word does tend to flatten. Pacing becomes uniform. Emphasis lands in the wrong places. Students notice, even if they cannot say why.",
          },
          {
            type: "p",
            text: "The half that is wrong: the alternative is not spontaneity, it is your fourteenth take. Unscripted technical explanation drifts. You forget step four, re-record, forget the caveat you meant to add, re-record again. What was supposed to be natural becomes an exhausting afternoon, and the final cut is stitched from six attempts that do not quite match in energy.",
          },
          {
            type: "p",
            text: "The useful version sits in between, and it depends on which part of the lesson you are recording.",
          },
        ],
      },
      {
        heading: "Script the parts that must be exact; outline the rest",
        blocks: [
          {
            type: "p",
            text: "This is the single most useful habit for course video. Not every minute of a lesson has the same requirements.",
          },
          {
            type: "list",
            items: [
              "**Script tightly:** definitions, step-by-step instructions, exact commands or settings, safety and accuracy caveats, anything with a number in it, and the first and last 30 seconds of every module.",
              "**Outline loosely:** analogies, the \"why this matters\" framing, worked examples, and anything where you are reacting to something on screen.",
            ],
          },
          {
            type: "p",
            text: "In practice this means your teleprompter script is not a wall of prose. It is dense where precision matters and sparse where it does not — a few bullet prompts you can talk around rather than sentences you read. Because the script scrolls as you speak, a sparse section simply moves slower while you elaborate, and a dense one keeps pace with you.",
          },
          {
            type: "p",
            text: "This is where [voice-driven scrolling rather than a fixed-speed auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter) earns its place in course work specifically. A timed scroll assumes you deliver at a constant rate. Teaching never is: you speed up through the setup and slow right down at the part students get stuck on. A script that follows your voice lets you vary that freely without the text running ahead of you.",
          },
        ],
      },
      {
        heading: "The eye-contact problem is worse in long-form",
        blocks: [
          {
            type: "p",
            text: "In a 30-second clip, glancing off-camera a few times reads as a quirk. In a 12-minute lesson, it reads as evasive, and students feel it accumulate even if they never consciously register it.",
          },
          {
            type: "p",
            text: "This is the practical case for a phone-based teleprompter over a second monitor or a printed outline taped next to the lens. When the script floats directly over the camera preview, right beside the front lens, your eyeline does not move for the whole take. [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) is built around exactly that arrangement, and the script never appears in the saved video — so you can run it over a full-length module without any post-production consequence.",
          },
          {
            type: "p",
            text: "Worth being honest about a limitation, though: this is an iOS app, and it records on the phone. If your course pipeline is built around a mirrorless camera and a capture card, a phone teleprompter is not going to slot into it. The workaround most people use is the phone as prompter beside the real camera, which works but reintroduces a small eyeline offset. There is more on rig arrangements in [mirror mode and DIY teleprompter rigs](/blog/mirror-mode-and-diy-teleprompter-rigs).",
          },
        ],
      },
      {
        heading: "Consistency across forty videos",
        blocks: [
          {
            type: "p",
            text: "A course is not one video, it is a series, and the thing students notice most is when lesson 12 sounds like a different person from lesson 3. This is a real problem when recording spans weeks.",
          },
          {
            type: "p",
            text: "A few things help more than they should:",
          },
          {
            type: "list",
            items: [
              "Keep a reusable opening and closing block in your scripts library, identical across modules apart from the lesson title. Students learn the rhythm and stop having to reorient.",
              "Write all your scripts before recording any of them. Terminology drifts badly when you write lesson 9 three weeks after lesson 8.",
              "Keep the same text size and scroll behaviour across sessions. Changing them mid-course changes your delivery pace subtly.",
              "Record the whole series at the same time of day if you can. Voice energy at 9am and 6pm are not the same instrument.",
            ],
          },
          {
            type: "p",
            text: "Having every script stored in one place rather than scattered across notes apps matters more for course work than for anything else, simply because there are so many of them and you will revise them when a student asks a question you did not anticipate.",
          },
        ],
      },
      {
        heading: "Screen recording is where this gets awkward",
        blocks: [
          {
            type: "p",
            text: "Most tutorials are not talking-head throughout. They are a talking-head intro, a long screen recording, and a talking-head wrap-up. A camera teleprompter cannot help you during the screen-capture portion, because you are not on camera and not on the phone.",
          },
          {
            type: "p",
            text: "The approach that works is to treat them as separate recordings with separate scripts. Record all your on-camera segments in one sitting, with the prompter, then record screen segments separately with the script simply open on a second device beside you — voice for the narration does not need eye contact at all, so the constraint disappears.",
          },
          {
            type: "p",
            text: "Trying to do both in one continuous take is where people get frustrated with teleprompters generally. The tool is solving an eye-contact problem. Where there is no eye contact to protect, it is not the right tool.",
          },
        ],
      },
      {
        heading: "Teaching in a language that is not your first",
        blocks: [
          {
            type: "p",
            text: "A large share of technical instructors teach in English as a second or third language, and course video is unforgiving of that: long duration, technical vocabulary, no edit-friendly jump cuts if you want the lesson to flow.",
          },
          {
            type: "p",
            text: "A script removes the two hardest parts at once — searching for the word mid-sentence, and losing the thread of a complex explanation while you do. Because the speech recognition runs on-device and detects the script language automatically, it follows along in whatever language you are actually teaching in rather than expecting English. [Recording confidently in a second language](/blog/recording-video-in-a-second-language) goes into this in more depth.",
          },
        ],
      },
      {
        heading: "The trade-off to keep in view",
        blocks: [
          {
            type: "p",
            text: "A teleprompter makes your course faster to record and more accurate. It does not make it more engaging — that comes from how you write, not how you read.",
          },
          {
            type: "p",
            text: "If you find your lessons sound flat after adopting one, the fix is almost never to abandon the prompter. It is to write the script for the ear rather than the page: shorter sentences, direct address, the occasional deliberate aside. That is a writing problem, and it is the one worth spending your effort on.",
          },
          {
            type: "p",
            text: "Next in this series: scripting hooks that hold watch time — specifically what to do in the first fifteen seconds so students actually reach the part you spent all week preparing.",
          },
        ],
      },
    ],
  },
  {
    slug: "scripting-hooks-that-hold-watch-time",
    title: "Scripting Hooks That Hold Watch Time (Not Just Stop the Scroll)",
    description:
      "Most hook advice teaches you to win the first second and lose the next ten. How to write an opening that earns the rest of the video \u2014 and how to read it without sounding like an ad.",
    datePublished: "2026-09-30",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Every piece of advice about hooks is about stopping the scroll. Very little of it is about what happens next \u2014 which is a problem, because a hook that stops the scroll and then does not pay off is worse than no hook at all. It trains the viewer that your openings are bait.",
          },
          {
            type: "p",
            text: "The useful question is not how do I get attention in the first second. It is what has to be true at second fifteen for someone to still be watching. That is a writing problem, and it is one you solve at the script stage rather than in the edit.",
          },
          {
            type: "p",
            text: "This post is about writing that kind of opening, and \u2014 because a written hook has a specific way of going wrong when you read it aloud \u2014 how to deliver it so it does not sound like a script.",
          },
        ],
      },
      {
        heading: "The gap between a stop and a hold",
        blocks: [
          {
            type: "p",
            text: "A stopping hook creates a reason to look. A holding hook creates a reason to stay. They are not the same mechanism and most openings only do the first.",
          },
          {
            type: "p",
            text: "\u201cI made a huge mistake with my first camera\u201d stops the scroll. But it does not tell me what I am about to get, so the moment the video shifts into explanation I have no idea how long this is going to take or whether it applies to me \u2014 and that is the second where people leave.",
          },
          {
            type: "p",
            text: "\u201cThe camera setting I had wrong for two years \u2014 it takes about forty seconds to fix\u201d does both. There is a specific thing, an implied payoff, and a stated size. The viewer knows what they are buying with their attention.",
          },
          {
            type: "p",
            text: "That third element \u2014 the size \u2014 is the one almost nobody writes in, and it does a disproportionate amount of work. Uncertainty about length is one of the quietest reasons people scroll away.",
          },
        ],
      },
      {
        heading: "Five openings that earn the next ten seconds",
        blocks: [
          {
            type: "p",
            text: "These are structures rather than templates. Fill them with something true about your actual topic and they hold up; treat them as fill-in-the-blank phrases and they sound like everyone else.",
          },
          {
            type: "list",
            items: [
              "**The specific wrong belief.** Name the thing the viewer probably thinks, then say you are going to contradict it. \u201cYou have been told to script every word. For this kind of video that is the reason it sounds stiff.\u201d The hold comes from wanting to know if you are right.",
              "**The named cost.** State what the mistake costs in a unit the viewer feels \u2014 hours, takes, money, rejections. \u201cThis one habit was adding about an hour to every video I made.\u201d The hold comes from wanting to avoid the cost.",
              "**The mid-action open.** Begin inside the thing rather than introducing it. \u201cSo this is take eleven and I have finally worked out what is wrong.\u201d The hold comes from arriving late and wanting to catch up.",
              "**The bounded list.** \u201cThree settings. The third one is the one nobody changes.\u201d The hold comes from a countable promise, and it is the most reliable structure for a first video on a channel because it is impossible to feel misled.",
              "**The honest disqualifier.** \u201cIf you already film with a second person holding the camera, skip this one.\u201d It loses some viewers immediately and holds the rest much harder, because they now know the video is aimed at them specifically.",
            ],
          },
        ],
      },
      {
        heading: "Write the hook last",
        blocks: [
          {
            type: "p",
            text: "The single most effective change to how you script openings: do not write the opening first. Write the body, find out what the video actually turned out to be about, and then write a hook that promises exactly that.",
          },
          {
            type: "p",
            text: "Hooks written first are promises made before you know what you have. They are the reason so many videos open with a claim the rest of the video quietly fails to deliver \u2014 not from dishonesty, but because the script drifted and the opening did not get updated.",
          },
          {
            type: "p",
            text: "A practical test once both exist: read the hook, then read your closing line. If someone who heard only those two sentences would feel the second followed from the first, the hook is doing its job. If they would feel switched on, rewrite the hook, not the ending.",
          },
        ],
      },
      {
        heading: "Why hooks are the hardest line to read aloud",
        blocks: [
          {
            type: "p",
            text: "Here is the trap. A hook is the most heavily written sentence in your script \u2014 you polished it, you counted the syllables, you cut it twice. Which makes it the sentence most likely to sound written when you say it.",
          },
          {
            type: "p",
            text: "It is also the sentence where you most need eye contact. A first line delivered while glancing down reads as reading, and the viewer decides you are performing before they have heard what you promised.",
          },
          {
            type: "p",
            text: "This is the specific case a camera-overlay prompter handles well. In [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) the script floats over the live preview right beside the front lens, so the line you are most worried about is the one you deliver straight down the barrel. Voice-driven scrolling matters here too: opening lines are where people most often pause, restart, or say it slightly differently \u2014 and because the on-device speech recognition follows your actual pace rather than a fixed speed, a restarted first line does not put you out of sync with the text.",
          },
          {
            type: "p",
            text: "The mechanical tricks that help, prompter or not:",
          },
          {
            type: "list",
            items: [
              "Break the hook across two or three short lines in the script rather than one long one. You will phrase it in its natural rhythm instead of racing a sentence.",
              "Bump the text size up for the opening. Bigger text means shorter eye movements, which reads as steadier presence.",
              "Say the hook out loud before you record it and change any word you stumble on. A word that trips you in rehearsal will trip you on camera.",
              "Record the hook two or three times in a row at the start, then continue. It costs thirty seconds and gives the edit a choice on the only line that decides whether anything else is seen.",
            ],
          },
        ],
      },
      {
        heading: "When not to use a hook at all",
        blocks: [
          {
            type: "p",
            text: "The honest trade-off, because hook advice is usually sold as universal and is not.",
          },
          {
            type: "p",
            text: "If someone is watching because they already chose you \u2014 a tutorial they searched for, a lesson inside a course, an email to a client who booked the call \u2014 a punchy hook actively hurts. They have already decided. Withholding the answer to build tension now reads as wasting their time, and for search-driven video it is measurably worse: people came for the answer, and a twenty-second wind-up sends them back to the results page.",
          },
          {
            type: "p",
            text: "For those videos the correct opening is the answer, stated immediately, followed by the detail. \u201cThe setting is under Format, and here is why it matters.\u201d That is a hook of a different kind, and it works for the same reason \u2014 it tells the viewer what they are getting.",
          },
          {
            type: "p",
            text: "The rule underneath both cases: match the opening to how the viewer arrived. Feed viewers need a reason to stop. Search and subscriber viewers need a reason to trust that you will be quick.",
          },
        ],
      },
      {
        heading: "The short version",
        blocks: [
          {
            type: "p",
            text: "A hook that holds names something specific, implies a payoff, and hints at the size of the commitment. It is written after the body, not before it. It survives being read next to your closing line. And it is delivered looking at the camera, because a promise made to the floor is not a promise anyone believes.",
          },
          {
            type: "p",
            text: "If your openings feel stiff even after all this, the problem has usually moved upstream into the writing itself \u2014 which is what [writing a script that does not sound written](/blog/write-a-script-that-doesnt-sound-written) is about. And if you are unsure whether to let the prompter follow your voice or run at a fixed speed while you find your rhythm on a difficult opening, [voice-follow versus auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter) covers the choice.",
          },
          {
            type: "p",
            text: "Next in this series: how to sound natural while reading \u2014 the delivery habits that separate someone reading a script from someone who simply knows what they want to say.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-sound-natural-reading-a-teleprompter",
    title: "How to Sound Natural While Reading From a Teleprompter: 9 Drills That Work",
    description:
      "Reading from a prompter does not have to sound like reading. Nine drills for pauses, emphasis, pace and eye position — and when to stop reading verbatim.",
    datePublished: "2026-10-01",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Everyone can hear the difference between someone reading and someone talking, even if they cannot say what it is. The words can be identical. What changes is the rhythm: readers move at an even speed, stress the wrong words, and breathe where the line breaks instead of where the thought ends.",
          },
          {
            type: "p",
            text: "The good news is that this is a delivery skill, not a talent. It responds to practice the same way handwriting does. Below are nine drills, roughly in the order you would use them — from marking up the script to the last pass before you hit record — plus an honest section on when reading word for word is the wrong goal.",
          },
        ],
      },
      {
        heading: "1. Fix the writing before you fix the reading",
        blocks: [
          {
            type: "p",
            text: "Half of “I sound robotic” is a script problem. If a sentence has three clauses and no contractions, no amount of delivery practice will save it. Read the whole script aloud once, at normal speed, and change every word you trip on. The full version of this is in [how to write a script that does not sound written](/blog/write-a-script-that-doesnt-sound-written); for today, the one rule is: if you would not say it to a friend across a table, rewrite it until you would.",
          },
        ],
      },
      {
        heading: "2. Mark up pauses and emphasis in the script itself",
        blocks: [
          {
            type: "p",
            text: "Actors and newsreaders mark their copy. You should too, because a prompter shows you the next few lines, not the meaning of them. Keep the system simple enough that you can read it at speed:",
          },
          {
            type: "list",
            items: [
              "**A line break where you breathe.** Not where the sentence ends — where the thought ends. Short lines are the single best pause marker there is.",
              "**An ellipsis or a dash for a beat.** “And the result was… nothing.” The punctuation tells your eye to wait.",
              "**CAPITALS for the one word that matters** in a sentence. Only one. If everything is stressed, nothing is.",
            ],
          },
          {
            type: "p",
            text: "Stress is where reading gives itself away most. People reading cold stress the last word of every sentence. People talking stress the new information. Marking it once fixes it for every take.",
          },
        ],
      },
      {
        heading: "3. Read ahead, not on the word",
        blocks: [
          {
            type: "p",
            text: "Fluent readers are always a phrase ahead of their mouth. Your eyes take in “the one setting I always change first” while you are still saying the sentence before it, so by the time you get there you already know where it is going and can shape it.",
          },
          {
            type: "p",
            text: "The drill: read a paragraph aloud while deliberately keeping your eyes one line above your voice. It feels awkward for about five minutes, then it becomes the way you read. A slightly larger text size helps, because you can take in a whole phrase in one glance rather than scanning word by word.",
          },
        ],
      },
      {
        heading: "4. Put your eyes where the viewer is",
        blocks: [
          {
            type: "p",
            text: "You cannot sound like you are talking to someone while visibly looking past them. On a phone, the fix is mostly about where the text sits. [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) floats the script over the camera preview right next to the front lens, so reading the line and looking at the viewer are nearly the same thing. Keep the text narrow and near the top of the screen; a wide block of text makes your eyes sweep side to side, which the camera picks up long before the viewer can name it. There is more on this in [how to keep eye contact with the camera](/blog/how-to-keep-eye-contact-with-the-camera).",
          },
        ],
      },
      {
        heading: "5. Let your pace drive the scroll, not the other way round",
        blocks: [
          {
            type: "p",
            text: "A fixed-speed scroll is the quietest cause of robotic delivery. If the text moves at a steady rate, you end up moving at that rate too — no slowing down for the important line, no speeding through the throwaway one. Natural speech is uneven, and that unevenness is a large part of what sounds natural.",
          },
          {
            type: "p",
            text: "Voice-driven scrolling flips that relationship. The app listens using Apple's on-device speech recognition and moves the script along as you speak, so you can pause for effect and the text waits. If you stumble or repeat a phrase, it finds your place again. It detects the script's language automatically and works in any language iOS on-device recognition supports, and because it runs on the phone, it works in airplane mode and nothing is uploaded.",
          },
          {
            type: "p",
            text: "Auto-scroll with a speed slider is still there and is the better choice for some scripts — [voice-follow versus auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter) covers when. But if your problem is sounding even and flat, voice-follow is the first thing to try.",
          },
        ],
      },
      {
        heading: "6. Do three practice passes with different jobs",
        blocks: [
          {
            type: "p",
            text: "Running the script five times the same way just rehearses the same habits. Give each pass one job:",
          },
          {
            type: "list",
            items: [
              "**Pass one: meaning.** Read it to yourself and know what each paragraph is *for*. If you cannot say it in five words, you will not deliver it well.",
              "**Pass two: out loud, too slow.** Exaggerate the pauses and the stressed words. It will feel theatrical. That is fine; you are calibrating.",
              "**Pass three: on camera, as a real take.** Then watch it back with the sound on and fix only the one thing that bothers you most.",
            ],
          },
          {
            type: "p",
            text: "Unlimited scripts and the takes library mean you can keep the practice takes next to the real ones and compare.",
          },
        ],
      },
      {
        heading: "7. Bring the energy up a notch — and smile on the first line",
        blocks: [
          {
            type: "p",
            text: "Cameras flatten energy. A delivery that feels lively in the room reads as calm on screen, and one that feels calm reads as bored. Aim about ten percent above what feels normal. The easiest place to start is the first line: a small, genuine smile before you speak changes the sound of your voice, and the viewer hears it before they see it.",
          },
        ],
      },
      {
        heading: "8. Make the setup disappear",
        blocks: [
          {
            type: "p",
            text: "A lot of stiffness is low-level worry about the gear. Settle it before you start: text size big enough that you never squint, the phone at eye level, and a quick test take. If you are using a mirrored glass rig, switch on mirror mode so the text reads correctly in the reflection. The script never appears in the saved video, so you do not have to think about hiding it. Recording is in portrait 4K, which leaves room to crop.",
          },
        ],
      },
      {
        heading: "9. Give yourself permission to go off-script",
        blocks: [
          {
            type: "p",
            text: "The most natural moments in scripted videos are often the half-sentence someone adds that is not on the page — a quick aside, a reaction, a “which, honestly, surprised me.” Build in room for it. Leave one line in each section as a prompt rather than a sentence (“story about the first client”) and talk it.",
          },
          {
            type: "p",
            text: "With voice-follow, the script is not running on a timer while you talk, so a short aside does not leave you chasing the text — come back in on the written line, cleanly, and keep going. With auto-scroll, pause the scroll before you go off-book.",
          },
        ],
      },
      {
        heading: "When not to read verbatim",
        blocks: [
          {
            type: "p",
            text: "The honest trade-off: a teleprompter makes it easy to say exactly what you planned, and that is not always what a video needs.",
          },
          {
            type: "list",
            items: [
              "**Stories and opinions** usually sound better from bullet points. You know the story; reading it word for word removes the parts that made it yours.",
              "**Reactions, unboxings and anything casual** should mostly be unscripted. Use the prompter for the opening and the call to action, and talk the middle.",
              "**When you have done the same video many times**, a script can make you sound less fluent than memory would.",
            ],
          },
          {
            type: "p",
            text: "Script word for word where exact wording matters: the hook, numbers, claims, instructions, legal or medical caveats, and anything in a language you are still learning. Everything else can be a guide, not a contract.",
          },
        ],
      },
      {
        heading: "A ten-minute routine",
        blocks: [
          {
            type: "list",
            items: [
              "Read the script aloud once and fix every stumble (two minutes).",
              "Add line breaks at breaths and CAPITALS on one word per sentence (two minutes).",
              "Do a too-slow, exaggerated pass out loud (two minutes).",
              "Record one take with voice-follow and watch it back with sound on (three minutes).",
              "Fix one thing and record the real take.",
            ],
          },
          {
            type: "p",
            text: "The app is free, iOS-only, with occasional ads and a small one-time purchase to remove them — no subscription and no watermark — if you want to try the voice-follow part of this today.",
          },
          {
            type: "p",
            text: "Next in this series: the ideal script length for a 60-second video — how many words actually fit, and why the answer is fewer than most people write.",
          },
        ],
      },
    ],
  },
  {
    slug: "convert-opus-to-mp3-iphone-android",
    title: "How to Convert .opus to MP3 on iPhone (and Android): Free Methods First",
    description:
      "An .opus file will not open in most players, editors or car stereos. Here are the free ways to convert it to MP3 on iPhone, Android and a computer, which one to pick, and the mistakes that waste time.",
    datePublished: "2026-10-02",
    dateModified: "2026-10-02",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          { type: "p", text: "You have a file ending in `.opus` (very often a WhatsApp voice note called something like `PTT-20261001-WA0004.opus`) and you need it as an MP3: to play it in the car, attach it to an email, drop it into an editor, or send it to someone whose phone will not open it. This guide lists the free methods first, in the order I would try them, and only mentions an app at the end." },
          { type: "p", text: "**Short answer:** on an iPhone, open the [free browser converter](/tools/opus-to-mp3) in Safari, add the file, choose MP3, download. On a computer, VLC or one `ffmpeg` command does it for free. On Android, check whether your player already opens .opus before converting anything." },
        ],
      },
      {
        heading: "What an .opus file is, and why it will not play",
        blocks: [
          { type: "p", text: "Opus is an audio codec designed for speech and low bitrates. It sounds better than MP3 at the tiny sizes a voice message uses, which is why chat apps record in it. The file is usually Opus audio inside an Ogg container, and you may see it named `.opus`, `.ogg` or `.oga`." },
          { type: "p", text: "The catch is support. MP3 has been everywhere for decades; Opus has not. The iPhone Files app treats an .opus file as a generic document, and many editors, car stereos and older players refuse it. Converting to MP3 trades a slightly larger file for something that opens everywhere." },
          { type: "p", text: "One thing that does **not** work: renaming the file to `.mp3`. That changes the label, not the audio inside, and a player that checks the contents will still refuse it." },
        ],
      },
      {
        heading: "Step 0 on iPhone: get the file out of WhatsApp",
        blocks: [
          { type: "list", items: [
            "Open the chat and **long-press the voice message**.",
            "Tap **Forward**, then the **Share** icon at the bottom.",
            "Choose **Save to Files** and pick a folder you can find again, such as On My iPhone → Downloads.",
          ] },
          { type: "p", text: "Need every voice note from one chat? Open the chat, tap the contact or group name, choose **Export Chat → Attach Media**. The .zip contains each voice note as its own .opus file; tap the .zip in Files to unpack it." },
        ],
      },
      {
        heading: "Free method 1 (iPhone): convert in Safari, nothing uploaded",
        blocks: [
          { type: "p", text: "Open the [Opus to MP3 converter](/tools/opus-to-mp3) in Safari. Tap the drop area, choose **Choose File** (or Browse), pick one or more .opus files from Files, select **MP3**, and convert. Download each MP3 back to Files, or use Download all." },
          { type: "p", text: "The conversion runs inside the page on your phone. The audio is not uploaded, there is no account and no file limit from a server. It needs a reasonably current iOS: very old versions of Safari cannot decode Opus, and on those the tool will tell you it failed rather than produce a broken file." },
          { type: "p", text: "Pick **WAV** instead of MP3 if the audio is going into an editor or a transcription tool. WAV is uncompressed, so nothing is lost to a second round of compression." },
        ],
      },
      {
        heading: "Free method 2 (any computer): VLC",
        blocks: [
          { type: "p", text: "If you can move the file to a Mac or PC (AirDrop, iCloud Drive, email it to yourself), VLC converts it for free:" },
          { type: "list", items: [
            "Open VLC and choose **File → Convert / Stream** (Mac) or **Media → Convert / Save** (Windows).",
            "Add the .opus file, choose the **Audio - MP3** profile.",
            "Choose where to save, give the file a `.mp3` name, and start.",
          ] },
        ],
      },
      {
        heading: "Free method 3 (computer, many files): ffmpeg",
        blocks: [
          { type: "p", text: "If you are comfortable in a terminal, `ffmpeg` is the fastest way to convert one file or a whole folder:" },
          { type: "code", language: "bash", code: "# one file\nffmpeg -i note.opus -codec:a libmp3lame -q:a 2 note.mp3\n\n# every .opus file in the current folder\nfor f in *.opus; do ffmpeg -i \"$f\" -codec:a libmp3lame -q:a 2 \"${f%.opus}.mp3\"; done" },
          { type: "p", text: "Install it with `brew install ffmpeg` on a Mac or `winget install ffmpeg` on Windows. Audacity also opens .opus files and exports MP3 if you want to trim or boost the audio first." },
        ],
      },
      {
        heading: "On Android: check whether you need to convert at all",
        blocks: [
          { type: "p", text: "Android itself understands Opus, so on a recent phone many file managers, music players and VLC for Android play a voice note without any conversion. Try opening it first." },
          { type: "p", text: "WhatsApp keeps voice notes in `Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Voice Notes`, in dated subfolders. Most phones' Files app can reach that folder; you can also long-press the voice note in the chat and use **Share** to send it to another app." },
          { type: "p", text: "If you do need an MP3 (for a car stereo, an editor, or someone on an older device), the same [browser converter](/tools/opus-to-mp3) works in Chrome on Android, and VLC or ffmpeg on a computer work exactly as above." },
        ],
      },
      {
        heading: "What about online converter websites?",
        blocks: [
          { type: "p", text: "They work, and for a song or a podcast clip they are fine. For a voice note, think about it first: the site receives the recording, and voice messages are often the most personal thing on a phone. WhatsApp's end-to-end encryption protects the message in transit, not a copy you upload somewhere. A converter that runs on your own device avoids the question." },
        ],
      },
      {
        heading: "If you want the words, not the audio",
        blocks: [
          { type: "p", text: "Many people converting a voice note really want to read it, quote it or search it later. Converting to MP3 does not help with that. Transcribe it instead: see [how to turn a voice message into text](/blog/transcribe-whatsapp-voice-message-to-text-iphone)." },
        ],
      },
      {
        heading: "If you convert voice notes often: the app",
        blocks: [
          { type: "p", text: "The browser method is fine for the occasional file. If you do this every week, an app saves the trip through Files: [Opus to MP3 Converter](/apps/voice-note-audio-converter) (I built it) shows up in the share sheet, so you can send a voice note from WhatsApp straight to it, convert a batch to MP3 or WAV offline, and share the results. It is free on the App Store and on Google Play. For all four of my chat and voice-note tools in one place, see [WhatsApp power tools](/apps/whatsapp-tools)." },
          { type: "p", text: DISCLAIMER },
        ],
      },
    ],
  },
  {
    slug: "iphone-camera-settings-northern-lights",
    title: "iPhone Camera Settings for the Northern Lights (and the Mistakes That Blur Aurora Photos)",
    description:
      "The best iPhone camera settings for photographing the northern lights: Night mode, exposure time, focus, lens choice and white balance, plus how to know if the aurora is worth going out for tonight.",
    datePublished: "2026-10-02",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          { type: "p", text: "An iPhone can take a genuinely good photo of the northern lights. Often the camera sees more than you do: a faint grey glow to the eye comes out green on the screen. What ruins most aurora photos is not the phone but four things: a moving phone, the wrong lens, focus hunting in the dark, and going out on a night with no aurora or full cloud." },
          { type: "p", text: "Short version: **check the aurora forecast, put the phone on something solid, turn the flash off, stay on the 1x lens, and use a 3 to 10 second exposure.** The rest of this guide explains each setting, what to change when the aurora is bright or fast, and how to film it." },
        ],
      },
      {
        heading: "Before you go out: check the aurora forecast for your area",
        blocks: [
          { type: "p", text: "The settings below do not matter if there is nothing to photograph. Three numbers decide the night: the **Kp index** (how strong the geomagnetic activity is), **cloud cover** where you are, and the **moon** (a bright moon washes out faint aurora). For what Kp you need at your latitude, see [the Kp index explained](/blog/aurora-forecast-kp-index-explained)." },
          { type: "p", text: "The aurora is usually strongest within an hour or two of local midnight, but during storms it can appear as soon as it is dark. Face north in the northern hemisphere (south in the southern), away from street lights." },
        ],
      },
      {
        heading: "The settings, one by one",
        blocks: [
          { type: "list", items: [
            "**Flash: off.** It lights up the foreground a metre away and does nothing for the sky.",
            "**Lens: the main 1x camera.** It has the widest aperture and the biggest sensor, so it gathers far more light than the 0.5x ultra-wide or the telephoto. Do not pinch to zoom.",
            "**Night mode: on, and set the time manually.** When the phone is still (on a tripod or propped up), Night mode offers longer exposures, up to 30 seconds on recent iPhones. Tap the Night mode icon and drag the slider. Start at **3 to 5 seconds** for a bright, moving aurora and **10 seconds** for a faint glow.",
            "**Focus: lock it far away.** In the dark, autofocus hunts. Tap and hold on the brightest star or a distant light until you see AE/AF Lock.",
            "**Exposure: pull it down slightly.** Drag the sun icon down by a third of a stop or so. It keeps the bright parts of the aurora green instead of washing them out to white.",
            "**ProRAW: optional.** On Pro models it keeps more detail for editing later, at the cost of much larger files. The standard format is fine if you just want to share the photo.",
          ] },
        ],
      },
      {
        heading: "Why aurora photos come out blurry",
        blocks: [
          { type: "p", text: "Almost always, the phone moved. Night mode stacks many frames, and even a few millimetres of movement smears stars into streaks. Use a small tripod, or wedge the phone against a wall, a fence post or a rolled-up jacket. Tapping the shutter shakes the phone too: use the 3-second self-timer or a volume button on wired earphones." },
          { type: "p", text: "The second cause is the aurora itself. A fast-moving display during a storm changes within a second, so a 10-second exposure turns sharp curtains into a green haze. When it is bright and dancing, go shorter: 1 to 3 seconds." },
        ],
      },
      {
        heading: "Filming the northern lights on an iPhone",
        blocks: [
          { type: "p", text: "Normal video uses short exposures of 1/30 of a second or less, so it only records a strong aurora. For a faint display, a **time-lapse** works better: the Camera app's time-lapse mode on a tripod, or an app that takes long exposures back to back. Real-time video of a moving aurora needs exposures of around a quarter of a second, which the built-in Camera app does not offer." },
        ],
      },
      {
        heading: "Doing it with Night Cam",
        blocks: [
          { type: "p", text: "I built [Night Cam](/apps/night-cam) because doing all of this with cold fingers at 1 a.m. is fiddly. Its **Tonight** screen shows the aurora chance for your area (NOAA's OVATION model and Kp forecast, plus cloud cover and the moon), and optional alerts tell you when it is worth going out. The **Aurora** preset sets everything above for you: focus locked at infinity, white balance tuned for green aurora, exposure metered from your actual sky, and a short stack of 1-second frames so the curtains stay sharp. **Aurora Live** records real-time video with quarter-second frames, and **Time-lapse** does the long version." },
          { type: "p", text: "The forecast is free, and you get 3 free captures to try the camera. After that, Pro is a one-time purchase and there is a 48-hour Night Pass for a single trip. [Get Night Cam on the App Store](https://apps.apple.com/us/app/night-cam-stars-aurora/id6818341326)." },
        ],
      },
      {
        heading: "Quick checklist",
        blocks: [
          { type: "list", items: [
            "Forecast checked: Kp high enough for your latitude, low cloud, moon not too bright.",
            "Away from street lights, facing north (or south below the equator).",
            "Phone on a tripod or propped up, flash off, 1x lens.",
            "Focus locked far away, exposure pulled down slightly.",
            "Night mode 3 to 5 s for a bright aurora, about 10 s for a faint one. Shorter if it is moving fast.",
          ] },
        ],
      },
    ],
  },
  {
    slug: "aurora-forecast-kp-index-explained",
    title: "Aurora Forecast for Your Area: The Kp Index Explained (What Kp Do You Need?)",
    description:
      "How to read an aurora forecast: what the Kp index means, which Kp you need to see the northern lights where you live, the OVATION map, the 3-day outlook and why cloud cover matters more than Kp.",
    datePublished: "2026-10-02",
    readingMinutes: 6,
    content: [
      {
        blocks: [
          { type: "p", text: "Every aurora forecast leads with a number between 0 and 9: the **Kp index**. It is useful, but on its own it does not tell you whether *you* will see the northern lights tonight. That depends on Kp, how far north you are, the time of night, cloud cover and the moon. This guide explains each, so you can read any aurora forecast for your area with confidence." },
        ],
      },
      {
        heading: "What the Kp index measures",
        blocks: [
          { type: "p", text: "Kp is a global measure of how disturbed the Earth's magnetic field is, published by NOAA's Space Weather Prediction Center and updated in three-hour blocks. It runs from 0 (quiet) to 9 (extreme). When the field is disturbed, the auroral oval (the ring of aurora around each magnetic pole) gets brighter and expands toward the equator. That is why a higher Kp means the aurora can be seen further from the Arctic." },
          { type: "p", text: "Kp 5 and above is officially a **geomagnetic storm**, graded G1 (Kp 5) to G5 (Kp 9). The storms you hear about on the news, when people far south suddenly see red and pink skies, are usually G4 or G5." },
        ],
      },
      {
        heading: "What Kp do you need to see the aurora?",
        blocks: [
          { type: "p", text: "NOAA's own rule of thumb for the northern hemisphere, as the lowest places the aurora may be seen (often low on the northern horizon, and brighter on camera than to the eye):" },
          { type: "list", items: [
            "**Kp 3 to 4:** northern Norway, Sweden and Finland, Iceland, Alaska, northern Canada. In these places the aurora is common on most clear, dark nights.",
            "**Kp 5 (G1):** Scotland, southern Norway and Sweden, the Baltic states, and US border states such as northern Michigan and Maine.",
            "**Kp 6 (G2):** northern England, Denmark, northern Germany and Poland; New York and Idaho in the US.",
            "**Kp 7 (G3):** much of central Europe; Illinois and Oregon.",
            "**Kp 8 to 9 (G4 to G5):** southern Europe, and in the US as far as Alabama, northern California and, in extreme storms, Florida and southern Texas.",
          ] },
          { type: "p", text: "What matters is magnetic latitude, not geographic latitude. North America is tilted toward the magnetic pole, so a given Kp reaches further south there than in Europe or Asia." },
        ],
      },
      {
        heading: "Kp is not the whole story: the OVATION map",
        blocks: [
          { type: "p", text: "Kp is one number for the whole planet. NOAA's **OVATION** model is more useful locally: it maps the probability of aurora over a grid around the poles, updated every few minutes from real-time solar wind measurements. If the oval on the map reaches your latitude, or sits just north of you (the aurora can be seen up to several hundred kilometres away, low on the horizon), your chances are real." },
          { type: "p", text: "The solar wind also matters minute to minute. When the interplanetary magnetic field (Bz) turns strongly south, the aurora can flare up within half an hour even if the three-hour Kp looked modest. That is why forecasts change during the night." },
        ],
      },
      {
        heading: "The 3-day aurora forecast",
        blocks: [
          { type: "p", text: "NOAA also publishes a 3-day Kp forecast. It is based on what has left the Sun: coronal mass ejections take one to three days to arrive, and fast solar wind from coronal holes returns every 27 days as the Sun rotates. Use it to plan which night to drive somewhere dark, then check the live forecast on the evening itself. Arrival times of a CME are uncertain by many hours." },
        ],
      },
      {
        heading: "Clouds and the moon decide more nights than Kp",
        blocks: [
          { type: "p", text: "A Kp 7 storm under full cloud is invisible. Always check cloud cover for the next few hours alongside the aurora forecast, and look for gaps: a partly cloudy night can still work. A full or nearly full moon washes out faint aurora and stars but does not hide a strong display; a new moon is best." },
        ],
      },
      {
        heading: "One number for your exact location",
        blocks: [
          { type: "p", text: "Checking Kp, the OVATION map, cloud cover and the moon phase separately every evening gets old. [Night Cam](/apps/night-cam), the app I built for this, combines them into one aurora chance for where you are: it reads the OVATION grid around your position and toward the pole, discounts it by cloud cover for the next 12 hours, and shows the moon phase and the 3-day Kp outlook. Optional alerts send at most one notification a night when it is worth going out. The forecast is free ([Night Cam on the App Store](https://apps.apple.com/us/app/night-cam-stars-aurora/id6818341326)), and the same app has camera presets for photographing what you see. For the camera side, see [iPhone camera settings for the northern lights](/blog/iphone-camera-settings-northern-lights)." },
        ],
      },
      {
        heading: "Quick reference",
        blocks: [
          { type: "list", items: [
            "Kp 0 to 2: quiet. Aurora only in the far north, if at all.",
            "Kp 3 to 4: active. Good nights in the Arctic.",
            "Kp 5 to 6 (G1 to G2): storm. Scotland, southern Scandinavia, northern US states.",
            "Kp 7+ (G3 and above): strong storm. Central Europe and mid-latitude US; check the sky even if you rarely see aurora.",
            "Always check clouds and the moon too. Best hours are usually 10 p.m. to 2 a.m. local time.",
          ] },
        ],
      },
    ],
  },
  {
    "slug": "ideal-script-length-for-a-60-second-video",
    "title": "The Ideal Script Length for a 60-Second Video: How Many Words Really Fit (With a Worksheet)",
    "description": "How many words fit in a 60-second video, why most scripts run long, a two-minute way to measure your own pace, and word budgets for 15, 30, 60 and 90-second clips.",
    "datePublished": "2026-10-02",
    "readingMinutes": 7,
    "content": [
      {
        "blocks": [
          {
            "type": "p",
            "text": "Ask ten creators how many words fit in a 60-second video and you will hear \"about 150\" from most of them. It is a reasonable number for a newsreader. For a talking-head clip with a hook, a pause, a point you want to land and an ending that does not feel chopped off, it is almost always too many. This post gives you a way to find *your* number in two minutes, the budgets I would start from for each clip length, and the editing moves that get a script down to size without making it sound thin."
          },
          {
            "type": "p",
            "text": "It follows on from [how to sound natural while reading from a teleprompter](/blog/how-to-sound-natural-reading-a-teleprompter): the drills there assume a script that fits. This is how you make one that does."
          }
        ]
      },
      {
        "heading": "Why \"150 words a minute\" is the wrong starting point",
        "blocks": [
          {
            "type": "p",
            "text": "The figure comes from measuring continuous, fluent speech: audiobook narrators, broadcasters, people reading prepared text with no interruptions. A short video is nothing like that. It has a hook you want to slow down for, at least one pause where the viewer is meant to think, a line you emphasise by stretching it, and a last sentence that needs air after it. Every one of those costs seconds and buys no words."
          },
          {
            "type": "p",
            "text": "There is a second effect. People reading from a prompter speed up when the text gets dense, because the eye is pulling them forward. That reads as nervous, and it is the usual reason a take \"fits\" in 58 seconds but feels rushed. A script that fits comfortably is one you could deliver at a relaxed pace with room to spare."
          },
          {
            "type": "p",
            "text": "So instead of a universal number, you need two of your own: your relaxed talking pace in words per minute, and the number of seconds your clip spends *not* talking."
          }
        ]
      },
      {
        "heading": "Measure your own pace in two minutes",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Paste any paragraph of roughly 100 words into your teleprompter. Use something conversational, not a legal notice.",
              "Record one take reading it the way you would to a friend across a table, pausing where the full stops are. Do not try to be quick.",
              "Note the length of the take. Divide 100 by the seconds and multiply by 60. That is your relaxed pace in words per minute.",
              "Do it once more with voice-driven scrolling on, so the text follows you rather than pushing you. If the second number is lower, that is the honest one."
            ]
          },
          {
            "type": "p",
            "text": "In [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) the voice-follow mode makes this measurement easier because the script never drags you along; it waits when you pause and finds its place again if you stumble, so the take reflects how you actually talk. Most people land somewhere between 120 and 160 words per minute on this test, and the ones who sound best on camera are usually at the lower end."
          }
        ]
      },
      {
        "heading": "Now subtract the silence",
        "blocks": [
          {
            "type": "p",
            "text": "Watch three of your own recent videos with a stopwatch and count the seconds you are not speaking: the beat after the hook, the pause before the key line, the half-second before you say the last word, any on-screen text you let people read. Ten to fifteen seconds of a 60-second clip is normal for a good one. If you have never measured, assume twelve."
          },
          {
            "type": "p",
            "text": "The formula is then simple: **words that fit = (clip seconds minus silent seconds) multiplied by your pace, divided by 60.** For someone at 140 words per minute with twelve seconds of silence in a 60-second clip, that is 48 x 140 / 60 = 112 words. Not 150. For someone at 130 words per minute it is 104."
          },
          {
            "type": "p",
            "text": "Write the number down and put it at the top of the script document. It is the single most useful thing on the page."
          }
        ]
      },
      {
        "heading": "Word budgets by clip length",
        "blocks": [
          {
            "type": "p",
            "text": "If you do not want to measure yet, these are the budgets I would start from, assuming a relaxed 140 words per minute and the usual proportion of pauses. Treat the upper number as a ceiling, not a target."
          },
          {
            "type": "list",
            "items": [
              "**15 seconds:** 25 to 30 words. One claim, one reason, done. There is no room for a greeting.",
              "**30 seconds:** 55 to 65 words. A hook, one point with one example, a one-line ending.",
              "**60 seconds:** 100 to 120 words. A hook, two or three points, a short payoff. This is the length most people write 160 words for and then rush.",
              "**90 seconds:** 160 to 180 words. Enough for a mini-tutorial with a setup, three steps and a result.",
              "**3 minutes:** 330 to 380 words. Beyond this, structure matters more than word count; read the [online courses and tutorials post](/blog/teleprompter-for-online-courses-and-tutorials) instead."
            ]
          },
          {
            "type": "p",
            "text": "Short-form platforms now allow clips far longer than 60 seconds, so nobody is forcing the limit on you. The reason to respect it anyway is retention: the shorter a clip is, the larger the share of viewers who reach the end, and a clip that ends cleanly at 48 seconds beats one that fills 60 with throat-clearing."
          }
        ]
      },
      {
        "heading": "Getting a 160-word script down to 110",
        "blocks": [
          {
            "type": "p",
            "text": "Most scripts do not need new ideas removed; they need the padding around the ideas removed. In rough order of how many words each move saves:"
          },
          {
            "type": "list",
            "items": [
              "**Delete the greeting and the throat-clearing.** \"Hey everyone, so today I want to talk about\" is nine words that cost you the hook. Start on the claim.",
              "**Cut the pre-announcement.** \"The first thing you need to know is\" becomes the thing itself.",
              "**Keep one example per point.** The second example is the one you cut, even if it is funnier. Save it for the next video.",
              "**Replace a sentence of explanation with a concrete number or name.** \"It is a lot faster\" is vaguer and longer than \"it took four minutes instead of twenty\".",
              "**Remove hedges.** \"Kind of\", \"basically\", \"I think that\" and \"sort of\" disappear without changing the meaning.",
              "**End on the point, not on a summary of the point.** If the last sentence restates the previous one, cut the last sentence."
            ]
          },
          {
            "type": "p",
            "text": "Read it aloud after each pass. [Writing a script that does not sound written](/blog/write-a-script-that-doesnt-sound-written) covers the sentence-level side of this in more depth, and the two go together: shorter sentences are both easier to say and cheaper in words."
          }
        ]
      },
      {
        "heading": "The check before you record",
        "blocks": [
          {
            "type": "p",
            "text": "Put the script in the prompter and record a single relaxed take without watching the clock. If the take is under your target by five seconds or more, you have room to slow the hook down. If it is over by more than five seconds, go back to the list above rather than trying to talk faster; speed is the one fix that makes everything else worse."
          },
          {
            "type": "p",
            "text": "Keep the takes. The app stores unlimited scripts and a takes library, so the \"too long\" version is still there if you later decide the clip should be a 90-second one. Nothing is uploaded and it works offline, so there is no cost to recording a few variants and picking the best length afterwards."
          }
        ]
      },
      {
        "heading": "When to ignore all of this",
        "blocks": [
          {
            "type": "p",
            "text": "Word budgets are for scripted talking-head and tutorial clips. They are the wrong tool for a reaction, a vlog, an interview or anything where the pace is set by what is happening rather than by you. They are also too strict for a story: a well-told 70-second story beats a 60-second one that had its ending trimmed to fit a rule. Use the number to stop yourself over-writing, not as a reason to cut something that works."
          },
          {
            "type": "p",
            "text": "And if English is not your first language, add ten percent more silence to the calculation. Pauses are where you breathe and plan, and the [second-language recording post](/blog/recording-video-in-a-second-language) explains why slower is better there anyway."
          },
          {
            "type": "p",
            "text": "Next in this series: using a teleprompter for voiceovers and podcasts, where there is no camera to look at and the whole game changes."
          }
        ]
      }
    ]
  },
  {
    "slug": "pretend-police-call-for-kids-bedtime-good-behavior-police-call-iphone",
    "title": "Good Behavior Police Call: How the Gentle Pretend Police Call for Bedtime, Teeth and Tidy-Up Works on iPhone",
    "description": "Good Behavior Police Call is a free iPhone app where a gentle, made-up officer rings your child about bedtime, teeth or tidying up. First-call setup, the 13 calls, and when not to use it.",
    "datePublished": "2026-10-02",
    "readingMinutes": 7,
    "content": [
      {
        "blocks": [
          {
            "type": "p",
            "text": "There is a well-worn parenting trick that predates smartphones: when the fourth \"pajamas, please\" has failed, a *third party* asking for the same thing often works on the first try. A grandparent on the phone, a favourite teacher, a character from a book. [Good Behavior Police Call](https://apps.apple.com/us/app/good-behavior-police-call/id6815485255) packages that trick into an iPhone app: you pick a moment, hand the phone over, and it rings with a friendly officer from the \"Good Behavior Patrol\" who asks your child for one small thing and promises to check in later."
          },
          {
            "type": "p",
            "text": "This post is for parents deciding whether it is a fit for their child, and for anyone who installed it and wants to run the first call well. It covers only what the app actually does, including the parts that make it deliberately *not* a scary cop, and ends with the situations where I would not reach for it."
          }
        ]
      },
      {
        "heading": "What the call actually looks like",
        "blocks": [
          {
            "type": "p",
            "text": "The app never places a real phone call. It shows a pretend incoming call inside the app, with ringing, an answer button and a call timer, and an animated officer who talks on screen. You choose between two characters, **Officer Pat** (bright and warm) and **Officer Sam** (calm and steady), and between a video call and a voice call. The officer explains in simple terms why the job matters (sleep helps you grow; \"sugar bugs\" love skipped teeth), asks for one thing, and leaves real pauses so your child can answer out loud."
          },
          {
            "type": "p",
            "text": "Two design choices do most of the work. First, there are no threats, no sirens and no talk of being in trouble; the officers are explicitly made-up characters with no connection to any police force, and the script is written so the officer is someone the child is pleased to hear from. Second, you get the last word: after the call, you tell your child the officer was proud of them. The app is a nudge, not a replacement for you."
          }
        ]
      },
      {
        "heading": "The 13 calls, and which two are free",
        "blocks": [
          {
            "type": "p",
            "text": "The calls split into gentle nudges and praise. The nudges cover bedtime, brushing teeth, eating dinner, tidying up, being kind to a brother or sister, listening the first time, screens off, getting dressed, buckling up in the car, sharing and taking turns, and calming down (that one includes a breathing exercise). The two praise calls, **Great day** and **Super helper**, ring when things went right, so the officer is not only the voice of chores."
          },
          {
            "type": "p",
            "text": "**Bedtime** and **Great day** are free forever, which is a sensible pair to start with: one nudge, one high-five. The free version shows a small ad on the menu screens and never during a call. A single one-time purchase unlocks every call, removes the ads and includes any calls added later. There is no subscription and no trial to cancel. The app is iPhone-only and needs iOS 15.1 or later."
          }
        ]
      },
      {
        "heading": "Running the first call: a four-step setup",
        "blocks": [
          {
            "type": "list",
            "items": [
              "**Read the script first.** Every call's full script is on screen before you ring. Read it once so nothing in it surprises you, and so you can echo the officer's words afterwards (\"the officer said sleep helps you grow, remember?\").",
              "**Pick the delay, not \"ring now\".** You can ring immediately or in 10 seconds, 30 seconds or a minute. The delay is what makes the hand-over believable: tap Call, pass the phone across, and let it ring in your child's hands. While it waits, the screen dims to a pretend lock screen so there is nothing to poke at.",
              "**Turn silent mode off and the volume up.** The call plays through the speaker. A silent iPhone is the most common reason \"there is no sound\".",
              "**Let it be declined once.** If your child taps decline, the officer can try once more. Do not force a third attempt; a child who really does not want the call is telling you something, and the trick only works while it is fun."
            ]
          },
          {
            "type": "p",
            "text": "To get out of the call screen, press and hold the clock for about a second and a half. It is deliberately hard to exit by tapping, so a curious child cannot end the call early; grown-ups hold, little fingers tap. If you ever get stuck, that is the gesture."
          }
        ]
      },
      {
        "heading": "Video call or voice call?",
        "blocks": [
          {
            "type": "p",
            "text": "Voice is the lower-key option and works well for a child who is already in bed with the lights down. Video is more engaging for a tidy-up or a teeth call, because the animated officer talking on screen holds attention longer. On video calls there is an optional self-view in the corner so the child sees themselves the way a real video call shows you; it is displayed live and is never recorded or saved."
          },
          {
            "type": "p",
            "text": "Whichever you pick, keep the phone in the child's hands rather than propped up. The call is more convincing when they hold it, and the praise calls especially land better when it is \"their\" phone call."
          }
        ]
      },
      {
        "heading": "Nine languages, and the language setting",
        "blocks": [
          {
            "type": "p",
            "text": "Every call is fully voiced in English, Spanish, French, German, Italian, Portuguese, Hindi, Japanese and Chinese. The app follows your iPhone's language by default, and you can pick a different one in Settings, which is useful in bilingual homes where the bedtime language is not the phone language. Because the calls are stored on the phone, switching language does not need a download."
          }
        ]
      },
      {
        "heading": "What it does with your data",
        "blocks": [
          {
            "type": "p",
            "text": "There are no accounts and no sign-up. The calls live on the phone and work offline, nothing is uploaded, and the app never dials a real number. Ads in the free version are non-personalised. If you buy the unlock and the calls still show as locked on another device, open Settings and tap *Restore an earlier purchase* while online and signed in with the Apple Account that bought it. The [support page](/apps/police-call/support) lists the other common fixes."
          }
        ]
      },
      {
        "heading": "When not to use it",
        "blocks": [
          {
            "type": "p",
            "text": "A pretend authority figure is a tool with a short shelf life and a few sharp edges, so some honest limits:"
          },
          {
            "type": "list",
            "items": [
              "**Not every night.** Used daily it becomes background noise within a week or two. Keep it for the evenings that have already gone sideways, and lean on the praise calls so the officer is not purely a chore enforcer.",
              "**Not for a child who is frightened of police.** The script is gentle, but if your child has a fear of police or of \"getting in trouble\", the format itself is the problem. Skip it rather than hoping the warm voice wins.",
              "**Not as a threat.** \"If you don't, the police will call\" undoes the whole design. The call is a friendly check-in that happens to arrive at a useful moment; present it that way.",
              "**Not past the age where it works.** Roughly, it fits the years when a child still finds a phone call exciting and takes a character at face value. An eight-year-old who asks how the officer knew about the pajamas is ready for a different approach, and that is a good sign, not a failure."
            ]
          },
          {
            "type": "p",
            "text": "Used sparingly and followed by your own \"the officer was proud of you\", it is a small, cheap way to turn a stand-off into a game. If that sounds like your household this week, the free Bedtime and Great day calls are enough to find out."
          }
        ]
      }
    ]
  },
  {
    "slug": "expiry-date-tracker-android-setup-barcode-reminders",
    "title": "Expiry Date Tracker for Android: A 10-Minute Setup So Food, Medicine and Cosmetics Stop Expiring Unnoticed",
    "description": "Set up Expiry Date Tracker: Scanner on Android in ten minutes: barcode scanning, date chips, reminder timing, the permissions that make reminders arrive, and what to track beyond food.",
    "datePublished": "2026-10-02",
    "readingMinutes": 7,
    "content": [
      {
        "blocks": [
          {
            "type": "p",
            "text": "Most expiry-tracking apps on Android lose you at the door: create an account, then discover you can add twelve items before the subscription prompt. [Expiry Date Tracker: Scanner](https://play.google.com/store/apps/details?id=com.vilva.expirytracker) takes the opposite position. No account, no sign-up, no item limit, your list stays on the phone, and it reminds you before the date rather than after. It is free with a single small banner and a one-time purchase to remove it; there is no subscription."
          },
          {
            "type": "p",
            "text": "This is the setup I would do in the first ten minutes, written for Android specifically, because the step people skip (notification and alarm permissions) is the one that decides whether the reminders ever show up."
          }
        ]
      },
      {
        "heading": "Minute 1 to 3: the first scan",
        "blocks": [
          {
            "type": "p",
            "text": "Open the app and point the camera at the barcode on anything in the fridge. The product name fills itself in from the free Open Food Facts database, which receives the barcode number and nothing else. Then pick the expiry date. Instead of a calendar, the app offers quick date chips: one week, two weeks, one month, three months, six months and a year. Tap the chip closest to the printed date, adjust if needed, save."
          },
          {
            "type": "p",
            "text": "Two things are worth knowing about the lookup. Household and medicine barcodes are often missing from Open Food Facts, and the lookup is skipped entirely when you are offline. When the name does not fill in, just type it; the app remembers your own history, so the second time you scan that barcode the name comes back instantly from your phone, no database needed. That is also why the app gets quicker the longer you use it."
          },
          {
            "type": "p",
            "text": "No barcode at all, like a bag of flour decanted into a jar, or a loaf from the bakery? Type the name. Entry takes seconds either way."
          }
        ]
      },
      {
        "heading": "Minute 4 to 5: decide when you want to be warned",
        "blocks": [
          {
            "type": "p",
            "text": "Open Settings (the gear icon) and set two things: how many days ahead you want warning, and the hour the reminder should arrive. You get a nudge before the date and again on the day itself. Pick the hour you are actually near the kitchen, early evening for most households, rather than first thing in the morning when the notification gets swiped away with the rest."
          },
          {
            "type": "p",
            "text": "One detail that catches people: changing either setting only affects items you add or edit afterwards. If you tweak the hour a week in, re-save older items (open, save) to move their reminders. Reminders are scheduled on the phone itself, so they fire with no signal and without the app being open."
          }
        ]
      },
      {
        "heading": "Minute 6 to 8: the Android permissions that make or break it",
        "blocks": [
          {
            "type": "p",
            "text": "This is the part specific to Android, and the single most common support question. For a reminder to arrive on time, the app needs two permissions, not one:"
          },
          {
            "type": "list",
            "items": [
              "**Notifications:** Settings → Apps → Expiry Tracker → Notifications, switched on.",
              "**Alarms and reminders (Android 12 and later):** Settings → Apps → Special app access → Alarms and reminders, and allow the app. Without this, Android treats the reminder as low priority and may deliver it late."
            ]
          },
          {
            "type": "p",
            "text": "Then there is battery optimisation. Some manufacturers, notably Xiaomi, Oppo, Vivo and Samsung, aggressively stop background apps and will delay or drop scheduled alarms from any app that is not whitelisted. Find the app in your phone's battery settings and allow it to run in the background (the wording varies: \"Unrestricted\", \"No restrictions\", \"Don't optimise\"). If reminders have been arriving hours late, this is almost always why."
          },
          {
            "type": "p",
            "text": "Test it before trusting it: add a throwaway item with a one-week chip, set the warning to seven days ahead, and check that the notification lands at the chosen hour."
          }
        ]
      },
      {
        "heading": "Minute 9 to 10: the rest of the kitchen, then everything else",
        "blocks": [
          {
            "type": "p",
            "text": "Do the fridge door first, then the freezer, then whatever in the pantry has a date you cannot read without glasses. Use the location chips (fridge, freezer, pantry) so the list tells you where to look. The list itself groups everything into **expired**, **expiring today**, **this week** and **later**, so whatever needs attention is at the top. When something is gone, mark it used with one tap."
          },
          {
            "type": "p",
            "text": "Nothing in the app is food-specific, and the second wave of items is where it starts earning its place:"
          },
          {
            "type": "list",
            "items": [
              "**Medicine and first-aid supplies:** children's paracetamol, antihistamines, the plasters in the car. Use the location chips for these too.",
              "**Cosmetics and sunscreen:** sunscreen in particular loses effectiveness after its date, and the bottle from last summer is the one everyone grabs.",
              "**Contact lens solution** and anything else that goes in or near your eyes.",
              "**Documents and renewals:** passport, insurance, a warranty, a domain. Use the note field for the reference number so the reminder is actionable on its own."
            ]
          }
        ]
      },
      {
        "heading": "Where the data lives, and moving to a new phone",
        "blocks": [
          {
            "type": "p",
            "text": "Your items are stored in a database on the device. There is no account, no cloud and no server, and the app works fully offline; the only optional network call is that barcode lookup. The flip side is that there is no sync between phones. When you change phone, the list is included in an Android or Google device backup if backups are enabled, and restores with the rest of your apps. If you share a kitchen, one phone has to be the kitchen phone, or both of you scan what you bring home."
          },
          {
            "type": "p",
            "text": "The app is available in fifteen languages (Settings → Language; it follows the phone language by default), and if you bought the ad removal and the banner is still there, Settings → Restore purchase while signed in with the same Google account fixes it. The [support page](/apps/expiry-date-tracker/support) has the rest."
          }
        ]
      },
      {
        "heading": "Is it worth the ten minutes?",
        "blocks": [
          {
            "type": "p",
            "text": "Honest answer: only if you keep scanning. The app does nothing for items you never add, and the first week is the hard part because everything in the kitchen needs entering at once. The trick that works is to scan at the point of unpacking the shopping, one barcode at a time while things go into the fridge. After that it is thirty seconds a shop. If you are someone who already checks dates and plans meals around them, you will not need it. If you have found a sour yoghurt behind the milk twice this month, you will."
          },
          {
            "type": "p",
            "text": "Set the two permissions, test one reminder, and let the list do the remembering."
          }
        ]
      }
    ]
  },
  {
    slug: "teleprompter-for-voiceovers-and-podcasts",
    title: "Using a Teleprompter for Voiceovers and Podcasts: When the Camera Is Off, the Rules Change",
    description:
      "How to use a teleprompter app for voiceovers, podcast intros and audio-only recordings: voice-follow vs auto-scroll, formatting a script for the ear, recording in takes, and when reading is the wrong choice.",
    datePublished: "2026-10-03",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Most teleprompter advice is about eye contact: keep the text near the lens, do not let your eyes track left to right, look like you are talking rather than reading. Switch the camera off and almost all of that stops mattering. A voiceover, a podcast cold open, an audiobook sample or a narrated screen recording has exactly one job, which is to *sound* right, and a teleprompter used for audio has a different set of rules. This post is about those rules.",
          },
          {
            type: "p",
            text: "It is written around [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay), which is built for on-camera use, but the ideas apply to any prompter: how to format a script for the ear, which scrolling mode to use when nobody can see your eyes, how to record in takes, and the honest cases where you should put the script down and talk.",
          },
        ],
      },
      {
        heading: "What changes when the camera is off",
        blocks: [
          {
            type: "list",
            items: [
              "**Eye line is irrelevant.** You can hold the phone wherever your voice sounds best, usually below the mouth and a little to the side so breath does not hit the microphone.",
              "**Text size can be huge.** With no need to keep the script near a lens, use the largest text the screen allows. Fewer words per line means fewer stumbles.",
              "**Pauses are free.** On camera, a pause while you find your place looks like a freeze. In audio, a pause is a breath and an edit point. You can stop, re-read, and start again mid-sentence without a visible seam.",
              "**Pace is the whole performance.** Listeners hear rushing immediately. The script should be marked for speed and emphasis in a way you would never bother with on video.",
            ],
          },
        ],
      },
      {
        heading: "Voice-follow or auto-scroll for audio work?",
        blocks: [
          {
            type: "p",
            text: "The [voice-follow vs auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter) question has a different answer for audio than for video. On camera, voice-follow wins because it lets you pause and the text waits. For voiceovers the answer depends on the kind of read.",
          },
          {
            type: "p",
            text: "**Use voice-follow for conversational reads**: podcast intros, explainer narration, anything where you want to ad-lib a sentence, laugh, or restart a line. The app listens on-device, follows what you actually say, and finds your place again if you stumble, so a restarted sentence does not leave you scrolling back by hand.",
          },
          {
            type: "p",
            text: "**Use auto-scroll for timed reads**: a 30-second ad spot, a narration that has to land on specific visuals, or a meditation track that must not speed up. Set the speed slider so the script finishes exactly at the target length, then make yourself match it. The scroll becomes a metronome, and that discipline is the point.",
          },
          {
            type: "p",
            text: "One caveat specific to audio: if you record with the phone's own microphone, voice-follow is using the same microphone to listen, which is fine, but a very quiet whisper read may not register well enough to track. Speak at normal volume or switch to auto-scroll for whispered or ASMR-style work.",
          },
        ],
      },
      {
        heading: "Format the script for the ear, not the eye",
        blocks: [
          {
            type: "p",
            text: "A voiceover script should look odd on paper. Short lines. One idea per line. Marks for breath and emphasis. Here is a before-and-after for a podcast cold open.",
          },
          {
            type: "p",
            text: "*Before:* \"Welcome back to the show. Today we're talking about why most people quit learning a language after three months, and what the ones who don't have in common, which turns out to be surprisingly simple.\"",
          },
          {
            type: "p",
            text: "*After:* \"Welcome back. / Today: why most people quit a language after three months. / And what the ones who DON'T have in common. / (beat) / It's simpler than you'd think.\"",
          },
          {
            type: "list",
            items: [
              "Use a slash or a line break for every breath. Your eyes read ahead; your lungs do not.",
              "Capitalise the one word per sentence that carries the meaning. Not three. One.",
              "Write \"(beat)\" where you want silence. On a prompter, silence has to be written down or it does not happen.",
              "Spell numbers and names the way they are said: \"twenty twenty-six\", \"ess-cue-ell\". The read will be cleaner and the voice-follow tracking will be too.",
              "Cut anything you would not say to a friend across a table. The [script that doesn't sound written](/blog/write-a-script-that-doesnt-sound-written) rules apply double when there is no face to carry the words.",
            ],
          },
        ],
      },
      {
        heading: "A recording setup that takes two minutes",
        blocks: [
          {
            type: "list",
            items: [
              "Record into whatever you normally use for audio. The teleprompter app records portrait video, which is useful if you want a video version too, but for pure audio you can run the prompter on the phone and record on a laptop or a dedicated recorder.",
              "Put the phone on a stand at mouth height, 30 to 40 centimetres away, slightly off-axis from the microphone. Do not hand-hold it; the small tilts show up as level changes in your voice.",
              "Turn text size up until there are four or five words per line. Text size matters more here than on camera because you are reading continuously rather than glancing.",
              "Silence notifications on the phone. A banner mid-read is a retake.",
              "Record a ten-second test and listen back with headphones before the real take. Room noise and mouth clicks are easier to fix in the setup than in the edit.",
            ],
          },
        ],
      },
      {
        heading: "Record in takes, not in one pass",
        blocks: [
          {
            type: "p",
            text: "The single biggest improvement for most people is to stop trying to read the whole script in one perfect take. Break it into sections of 30 to 60 seconds, record each as its own take, and keep the good ones. Teleprompter: Camera Overlay keeps a takes library, so each section's recording stays attached to the script; if you are recording audio separately, name the files by section so the edit is a matter of assembling rather than searching.",
          },
          {
            type: "p",
            text: "Within a take, if you fluff a line, do not stop. Pause, say the line again from the start of the sentence, and keep going. With voice-follow the text waits for you; with auto-scroll, let it run and pick the sentence up again when the line comes round, or end the take and redo just that section. Your editor (even if that is you, tomorrow) will cut at the pause. A three-second silence is far easier to remove than a restart from the top.",
          },
        ],
      },
      {
        heading: "When not to use a teleprompter for audio",
        blocks: [
          {
            type: "p",
            text: "There are kinds of audio where reading makes things worse, and it is better to know them than to fight them.",
          },
          {
            type: "list",
            items: [
              "**Interview podcasts.** Script the intro and the questions you must ask; do not script your reactions. Listeners can hear a read response from a mile away.",
              "**Anything you know cold.** If you have given the talk fifty times, a prompter will make you sound like it is the first. Use bullet points on the screen instead of sentences.",
              "**Highly emotional reads.** Narrating something personal from a script tends to flatten it. Record it from memory first, then use the script only for the facts you got wrong.",
              "**When the script is still changing.** A prompter rewards a finished script. If you are still thinking, talk it through unscripted, transcribe it, and *then* write the script from your own words.",
            ],
          },
        ],
      },
      {
        heading: "A note on privacy for voice work",
        blocks: [
          {
            type: "p",
            text: "Voiceover scripts are often confidential: an unreleased product, a client's ad copy, a course that has not launched. Teleprompter: Camera Overlay's voice-follow uses Apple's on-device speech recognition, works in airplane mode, and uploads nothing, which means the script and your voice never leave the phone. If you are reading something under NDA, that is worth checking in whatever prompter you use, because several cloud-based ones send audio to a server to do the same tracking.",
          },
          {
            type: "p",
            text: "The app is free with occasional ads and a one-time purchase to remove them, there is no subscription and no watermark, and it is iOS-only, so the audio-first workflow above is an iPhone workflow. If the rest of your audio chain is on a Mac or a PC, the phone simply becomes the script display, which is honestly the cleanest way to use it.",
          },
        ],
      },
      {
        heading: "Next in the series",
        blocks: [
          {
            type: "p",
            text: "Audio was the easy case because the camera was off. Next we put it back on and go through the full talking-head filming setup: where the light goes, where the phone goes, how to frame for the prompter overlay, and the five-minute checklist that makes a batch of videos look like they were shot by the same person on the same day.",
          },
        ],
      },
    ],
  },
  {
    slug: "warranty-tracker-iphone-keep-receipts-get-reminded-before-expiry",
    title: "How to Keep Track of Warranties on iPhone: Receipts, Expiry Reminders and the One-Hour Setup for Everything You Own",
    description:
      "A practical system for tracking warranties on iPhone with Warranty Tracker & Receipt Log: what to log, how to photograph receipts, reminder lead times that work, extended warranties, and when a photo album is enough.",
    datePublished: "2026-10-03",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "The pattern is always the same. The dishwasher starts leaking, you are fairly sure it is less than two years old, and the receipt is either in an email you cannot find, a drawer of thermal paper that has faded to white, or a camera roll somewhere between a holiday and a screenshot of a recipe. By the time you find it, you have either missed the warranty by a month or spent an evening you will not get back.",
          },
          {
            type: "p",
            text: "This post is a one-hour setup for never doing that again, using [Warranty Tracker & Receipt Log](/apps/warranty-tracker), a small iPhone app built for exactly this job. It also covers, honestly, when you do not need an app at all.",
          },
        ],
      },
      {
        heading: "What the app actually does",
        blocks: [
          {
            type: "p",
            text: "Warranty Tracker & Receipt Log stores each product you buy with its receipt photo, purchase date, price, store, serial number, notes and warranty length, then counts down to the expiry and reminds you before it arrives. The home screen shows how many items are active, expiring soon or expired, and the total value still under warranty. Everything stays on the phone: there is no account, no cloud, no analytics and no ads. It is a one-time purchase of $0.99 on the App Store, requires iOS 17 or later, is iPhone-only, and is available in 19 languages.",
          },
          {
            type: "p",
            text: "That is the whole feature list, and the smallness is deliberate. There is no sync between devices in this version, no receipt scanning with text recognition, and no cloud backup beyond your normal iPhone backup. If you need those, this is not your app; if you want the receipt and the date in one place and a nudge before it is too late, it is.",
          },
        ],
      },
      {
        heading: "The one-hour setup",
        blocks: [
          {
            type: "p",
            text: "Do this once, on a weekend, with a cup of something. The goal is not to log everything you have ever bought; it is to log the things that would cost real money to replace and are still inside their warranty.",
          },
          {
            type: "list",
            items: [
              "**Walk the house with the phone.** Kitchen appliances, laptop, phone, TV, headphones, the bike, power tools, the kids' tablet, the mattress (many carry long guarantees people forget), the washing machine. Make a list on paper first; it goes faster than adding as you go.",
              "**Find the proof for each.** For online orders, search your email for the store name and screenshot the order confirmation. For shop purchases, the receipt or the card statement line. For gifts, the giver's order email counts. A photo of the product's serial-number sticker is worth adding while you are standing in front of it.",
              "**Add each item.** Tap +, type the name and store, enter the price and purchase date, pick a category. Tap the warranty length: 6 months, 1, 2, 3 or 5 years, or type any number of months. If you bought an extended warranty, add it; the app combines the manufacturer and extended periods into one total coverage period with one expiry date.",
              "**Attach the photos.** Take the receipt photo in the app or pick it from your library; several photos per item are allowed and they are stored at full resolution with pinch-to-zoom, so a faded till receipt stays legible as long as the photo was sharp.",
              "**Set the reminders once.** In Settings, choose any combination of 90, 60, 30, 14, 7 and 1 day before expiry, and the time of day. The defaults are 30 and 7 days at 9:00, which suits most people. These are local notifications; nothing is sent anywhere.",
            ],
          },
        ],
      },
      {
        heading: "Which reminder lead times to pick",
        blocks: [
          {
            type: "p",
            text: "The right lead time depends on what you would actually do with the warning. A reminder is only useful if there is an action attached.",
          },
          {
            type: "list",
            items: [
              "**30 days** is the one to keep for everything. It is enough time to notice a fault you have been ignoring, book a repair, and get it looked at while a claim is still possible.",
              "**90 days** is for big-ticket items where you might want to buy an extension, or where a service visit has a long waiting list.",
              "**7 days** is a last call: if anything is slightly wrong with the item, this is the week to report it.",
              "**1 day** is mostly noise unless you are tracking a short return window rather than a warranty.",
            ],
          },
          {
            type: "p",
            text: "When a reminder arrives, open the item, read your own notes, and give the product a two-minute inspection. Most warranty claims that are missed are missed because the fault was minor and tolerated, not because nobody knew the date.",
          },
        ],
      },
      {
        heading: "Three habits that keep it working",
        blocks: [
          {
            type: "list",
            items: [
              "**Add it on the day.** The flow is built for phone in one hand, receipt in the other, at the shop door. Twenty seconds then saves twenty minutes later.",
              "**Use the search.** When something breaks, search by name, store or serial number rather than scrolling. The serial number is one tap to copy, which is what the support chat will ask for first.",
              "**Export a CSV twice a year.** The app exports every item to a CSV file whenever you like. Keep a copy with your insurance documents; a list of what you own, when you bought it and what it cost is exactly what an insurer asks for after a burglary or a flood, and the app has quietly built it for you.",
            ],
          },
        ],
      },
      {
        heading: "Moving phones and backups",
        blocks: [
          {
            type: "p",
            text: "Because the app is single-device by design, the question people ask most is what happens when they get a new iPhone. The answer is the ordinary one: restore the new phone from an iCloud or computer backup and the app comes across with its data, since it is included in your normal iPhone backup. The purchase is tied to your Apple Account, so you are not charged again. If you want belt and braces, export the CSV before the switch. There is no sync between two phones at once, and no way to share the list with a partner's phone other than sending them the CSV.",
          },
        ],
      },
      {
        heading: "When a photo album is enough",
        blocks: [
          {
            type: "p",
            text: "If you own three things with warranties and you are the kind of person who already knows their dates, make a \"Receipts\" album in Photos and stop reading. Add a calendar event a month before each expiry and you have most of what the app does for nothing.",
          },
          {
            type: "p",
            text: "The app earns its dollar when the list is longer than you can hold in your head, when the receipt and the date and the serial number need to be in one place, and when you want to be told rather than having to remember. It is also the right choice if you do not want receipts, which can show your address and partial card numbers, uploaded to a subscription service's server; this one never leaves the phone.",
          },
          {
            type: "p",
            text: "Warranty Tracker & Receipt Log is on the App Store for iPhone; the landing page at [/apps/warranty-tracker](/apps/warranty-tracker) has screenshots of the add flow, the countdown and the reminder settings if you want to see it before buying.",
          },
        ],
      },
    ],
  },
  {
    slug: "save-whatsapp-chat-as-pdf-android-for-hr-landlord-insurer",
    title: "How to Save a WhatsApp Chat as a PDF on Android When HR, a Landlord or an Insurer Asks for It",
    description:
      "Someone official has asked for a copy of a WhatsApp conversation. How to export the chat on Android, turn the .txt or .zip into a readable, paginated PDF with Chat Export Studio, and what to check before you send it.",
    datePublished: "2026-10-03",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "At some point a conversation that lived happily in WhatsApp has to leave it. A manager asks for the messages where a colleague agreed to something. A landlord disputes when you reported the boiler. An insurer wants the exchange with the garage. A lawyer, an adviser, a school. In every one of those cases, a screenshot of a scrolling chat is a poor answer: it is hard to read, impossible to search, easy to accuse of being cropped, and a 400-message thread would need forty of them.",
          },
          {
            type: "p",
            text: "What they actually want is a document: every message in order, with who said it and when, that opens on any computer and prints cleanly. This guide shows how to produce exactly that on an Android phone, using WhatsApp's own export and [Chat Export Studio: PDF](/apps/chat-export-studio), and what to look at before you hit send.",
          },
        ],
      },
      {
        heading: "Step 1: export the chat from WhatsApp on Android",
        blocks: [
          {
            type: "list",
            items: [
              "Open the chat in WhatsApp.",
              "Tap the three-dot menu in the top-right corner, then **More**, then **Export chat**.",
              "Choose **Without media** unless photos are part of what you are proving. Without media gives you a small .txt file inside a .zip that converts in seconds; with media, WhatsApp bundles the images alongside the transcript and the archive can run to hundreds of megabytes.",
              "Android's share sheet opens. Pick **Chat Export Studio** directly if it is listed, or choose **Save to Files** / **Drive** to keep a copy you can open from the app later.",
            ],
          },
          {
            type: "p",
            text: "The export is a plain-text transcript with one line per message in the form date, time, sender, message. That is also why it is a poor thing to hand to someone as-is: a wall of unformatted text with no bubbles, no sender colours and no page breaks.",
          },
        ],
      },
      {
        heading: "Step 2: open it in Chat Export Studio",
        blocks: [
          {
            type: "p",
            text: "If you shared straight from WhatsApp, the app opens with the chat already loaded. Otherwise open Chat Export Studio, tap to open an exported chat, and pick the .txt or the .zip from your Downloads, Files or Drive; it accepts both, from Android or iPhone exports, in 12-hour or 24-hour time, so a transcript a friend exported from their iPhone works too.",
          },
          {
            type: "p",
            text: "The first thing you see is the statistics: total messages and words, messages per participant as counts and percentages, the busiest hour of the day, the date range, the media count and the most-used emoji. For the official-document use case the useful number is the date range, because it confirms you are about to export the right period.",
          },
          {
            type: "p",
            text: "Then tap to export the styled PDF. Each message gets its own bubble with the sender, date and time; one-to-one chats are laid out left and right, group chats get a colour per participant; system notices and \"media omitted\" markers are rendered as small pills rather than clutter; and pages break between messages, never through them. The PDF is generated on the phone and handed to Android's share sheet, so you can save it to Files, attach it to an email, upload it to Drive or send it straight back into another chat.",
          },
        ],
      },
      {
        heading: "Step 3: check it before you send it",
        blocks: [
          {
            type: "p",
            text: "Open the PDF yourself first and look at it the way the recipient will. Four things are worth a minute each.",
          },
          {
            type: "list",
            items: [
              "**Is the whole period there?** WhatsApp's export covers the most recent messages only: its help centre puts the limit at 40,000 messages without media and 10,000 with media. For a very long chat, scroll to the top of the PDF and check the first date matches what you expect.",
              "**Is there more than they asked for?** An export is the entire chat, not a date range. If the request was for \"the messages from March\", say so in your covering note and point them to those pages, or ask whether they need the full thread. You cannot trim inside the app, and that is deliberate: a document that has visibly not been edited is worth more.",
              "**Are there private things in it?** A thread with a colleague will also contain the lunch plans, the complaint about another manager, the photo caption you would rather forget. Read before you send. If the conversation is mostly unrelated, consider whether a shorter, separate chat exists that covers the same point.",
              "**Does the media matter?** Without-media exports show \"media omitted\" pills where photos were. If a photo is the evidence, export again with media and attach the relevant images separately, referencing their timestamps.",
            ],
          },
        ],
      },
      {
        heading: "Why a PDF, and not screenshots or the raw .txt",
        blocks: [
          {
            type: "p",
            text: "Screenshots are what most people send, and most recipients quietly dislike them. They cannot be searched, they are hard to read on a laptop, they often cut a message in half at the edge, and because each one is a separate image, there is no way for the reader to be confident nothing was skipped between them. The raw .txt is complete but unpleasant: no visual separation between speakers, timestamps that run into the message text, and an attachment type that some corporate email systems strip.",
          },
          {
            type: "p",
            text: "A paginated PDF solves all three. It is one file, it opens everywhere, it prints, it is searchable, and the bubble layout makes who-said-what obvious at a glance. If the matter becomes formal, a plain, unedited, complete PDF export of the chat is also the form most people on the receiving end are used to seeing.",
          },
        ],
      },
      {
        heading: "Privacy: nothing leaves the phone",
        blocks: [
          {
            type: "p",
            text: "The reason this matters more than usual is that the chats people are asked to produce are precisely the sensitive ones. Chat Export Studio parses the file and builds the PDF entirely on the device; it works in airplane mode, needs no account or sign-up, and has no analytics. The only copy of the conversation that leaves your phone is the PDF you choose to share. Several browser-based \"WhatsApp to PDF\" converters upload the transcript to a server to do the same job, which is an odd thing to do with an HR dispute.",
          },
          {
            type: "p",
            text: "On Google Play the app is listed as containing ads with a one-time purchase and no subscription. A built-in sample chat lets you try the whole flow before you export a real conversation, which is worth doing once so the first time is not under pressure.",
          },
        ],
      },
      {
        heading: "Other times the same flow helps",
        blocks: [
          {
            type: "list",
            items: [
              "Archiving a chat before you delete it or leave a group, so the record outlives the thread.",
              "Keeping a readable copy of instructions from a tradesperson, a doctor's receptionist or a school group, where the useful part is buried among a hundred emoji replies.",
              "Settling the question of who really sends the most messages in the family group, which is what the statistics screen was clearly built for.",
            ],
          },
          {
            type: "p",
            text: "For the iPhone side of the same job, see the earlier guide to [exporting a WhatsApp chat to PDF on iPhone](/blog/export-whatsapp-chat-to-pdf-iphone); the export and PDF are identical, only the share-sheet and Files steps differ.",
          },
          { type: "p", text: DISCLAIMER },
        ],
      },
    ],
  },
  {
    slug: "talking-head-video-setup-guide-iphone",
    title: "The Complete Talking-Head Filming Setup: Phone, Light, Sound, Script and Eye Line, With No Studio",
    description:
      "A step-by-step talking-head video setup for creators filming on an iPhone: where to put the phone and the light, how to get clean audio, framing that survives every platform, and where the script goes so you can read it without looking like you are reading.",
    datePublished: "2026-10-04",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Most talking-head videos fail before the first word is spoken. The phone is too low, the window is behind the speaker, the microphone is on the other side of the room, and the script is on a laptop a metre to the left so every sentence ends with a glance away. None of that is fixed by a better phone. It is fixed by a setup you build once, write down, and rebuild the same way every time you record.",
          },
          {
            type: "p",
            text: "This is that setup, in the order you should build it: position, light, sound, framing, then script. It assumes an iPhone, a desk or table, and a budget of roughly nothing to a small tripod and a light. Earlier posts in this series went deep on single pieces, such as [keeping eye contact with the camera](/blog/how-to-keep-eye-contact-with-the-camera) and [mirror mode and DIY rigs](/blog/mirror-mode-and-diy-teleprompter-rigs); this one is the whole picture, so you can get from nothing to a repeatable recording corner in an afternoon.",
          },
        ],
      },
      {
        heading: "Step 1: Pick the spot by the light, not the background",
        blocks: [
          {
            type: "p",
            text: "Walk around your home in the daytime and find the place where a window would be *in front of you* while you talk, slightly to one side. That is your spot. Everything else, including the background, is secondary and can be fixed; bad light cannot. A window behind you turns you into a silhouette and no setting on the phone rescues it. A window directly beside you gives a half-lit face, which can look dramatic and usually just looks like a mistake.",
          },
          {
            type: "p",
            text: "If daylight is unreliable or you record at night, one affordable LED panel or ring light placed where the window would be does the same job. Put it slightly above eye level, angled down, and about an arm's length further away than feels natural; closer light is softer but shows every pore and makes you squint. Turn off the overhead room light, which casts shadows under the eyes and fights the colour of your main light.",
          },
        ],
      },
      {
        heading: "Step 2: Put the lens at eye level, not where the tripod ends",
        blocks: [
          {
            type: "p",
            text: "The single most common amateur tell is a camera looking up at the speaker from desk height. Stack books, use a tall tripod, or mount the phone on a shelf; whatever it takes, the lens should be at your eye level or a finger's width above. If you are sitting, that is roughly the height of your eyebrows when you sit up straight, and you will slump, so aim a touch high.",
          },
          {
            type: "p",
            text: "Distance matters too. Arm's length is the minimum for a phone; closer and the wide lens stretches your features. A little further back, with the phone zoomed slightly or using the 2x lens if your model has one, gives a flatter, more flattering look and makes it easier to keep the script near the lens, which matters in step 5.",
          },
        ],
      },
      {
        heading: "Step 3: Sound is half the video",
        blocks: [
          {
            type: "p",
            text: "Viewers forgive soft focus and odd colours; they do not forgive echo. Three things fix most audio problems in a normal room, in order of cost: record in the smallest, softest room you have (a bedroom with a bed and curtains beats a kitchen every time), get the microphone close (any wired or wireless lavalier clipped at the sternum will outperform the phone's built-in mic from a metre away), and put something soft behind the phone so your voice does not bounce straight back off a wall into the mic.",
          },
          {
            type: "p",
            text: "Do a ten-second test take and listen on headphones before every session. Fridges, laptop fans and the neighbour's lawnmower are all invisible until you are editing.",
          },
        ],
      },
      {
        heading: "Step 4: Frame once for every platform",
        blocks: [
          {
            type: "p",
            text: "Record in portrait. Vertical video is what Reels, Shorts and TikTok want and a portrait master can be cropped to a square for feeds; a landscape master cannot be turned into a usable vertical without cutting off your shoulders. Place your eyes on the upper third line, leave a hand's width above your head, and keep the bottom quarter of the frame reasonably clear because captions and interface buttons will sit there on every platform.",
          },
          {
            type: "p",
            text: "Lock exposure and focus before you start (tap and hold on the subject in the camera app) so the image does not pulse when you move your hands. If you want the detail that lets you crop later, [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) records in portrait 4K, which gives you room to punch in for a tighter shot in the edit without the result turning to mush.",
          },
          {
            type: "list",
            items: [
              "Portrait, eyes on the upper third, bottom quarter clear for captions.",
              "Exposure and focus locked; no auto-adjust pulsing.",
              "A background with depth (a room behind you) rather than a flat wall right behind your head.",
              "One or two objects in the background that are yours: a plant, a shelf, a lamp. Not a shrine, not a bare wall.",
            ],
          },
        ],
      },
      {
        heading: "Step 5: Put the script where your eyes already are",
        blocks: [
          {
            type: "p",
            text: "This is the step that separates talking-head videos that feel like a conversation from ones that feel like a hostage statement. Any script that lives away from the lens, on a laptop, a second phone or a printout, pulls your eyes off camera every few seconds, and viewers notice even when they cannot say why. The fix is to put the words as close to the lens as physically possible.",
          },
          {
            type: "p",
            text: "On a phone you have two practical options. The first is a camera-overlay teleprompter: the script floats over the camera preview on the same screen, right next to the front lens, so reading and looking at the camera are the same movement. Teleprompter: Camera Overlay does exactly this, with the text positioned beside the lens and a choice of scroll modes. The second is a physical beam-splitter rig that reflects a second screen in front of the lens; it is better for long, formal pieces and worse for everything else because of the setup time, which is why the [rig post](/blog/mirror-mode-and-diy-teleprompter-rigs) recommends it only for people recording hours of material.",
          },
          {
            type: "p",
            text: "Whichever you use, set the text large enough that you read in phrases rather than words, and narrow the column so your eyes do not visibly track left to right. Use voice-follow scrolling if your app has it, so the script moves at your speaking pace and waits when you pause to think; the [voice-follow vs auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter) post explains when the classic timed scroll is still the better choice. In the overlay app the script is only on the preview, never in the saved video, so there is nothing to crop out afterwards.",
          },
        ],
      },
      {
        heading: "Step 6: The two-minute pre-flight checklist",
        blocks: [
          {
            type: "p",
            text: "Write this on a sticky note and put it on the tripod. It is the difference between a setup and a habit.",
          },
          {
            type: "list",
            items: [
              "Light on, overhead off, blinds adjusted if daylight has moved.",
              "Lens at eye level, phone level (check the horizon of a shelf behind you).",
              "Mic clipped, headphones test take done, phone on Do Not Disturb and airplane mode so a call does not kill the recording.",
              "Battery above 40 percent or plugged in; storage checked (4K eats space).",
              "Exposure and focus locked. Lens wiped with a cloth. This one fixes more soft videos than any setting.",
              "Script loaded, first line visible, text size and scroll mode set from the last session.",
              "Water within reach, out of frame.",
            ],
          },
        ],
      },
      {
        heading: "When NOT to bother with all this",
        blocks: [
          {
            type: "p",
            text: "If you are replying to a comment, filming a quick reaction, or recording a behind-the-scenes clip where the point is that it is unpolished, do not build the set. Hold the phone, talk, post. Polish on the wrong content reads as trying too hard. The full setup is for the videos that carry your ideas, your course material, your sales pitch or your explanation of something you know well, where the viewer's attention is the thing you are spending and you want them to spend it on the words rather than on the shadow under your nose. Those videos are also the ones where a script earns its keep, so they are the ones where step 5 pays off most.",
          },
          {
            type: "p",
            text: "One last honest note: the setup makes a good speaker look professional, it does not make a nervous speaker relaxed. If the camera itself is the problem, the fixes are repetition and script craft, not equipment; the [writing a script that doesn't sound written](/blog/write-a-script-that-doesnt-sound-written) post is the better starting point, and a later post in this series will deal with camera anxiety directly.",
          },
        ],
      },
      {
        heading: "Next in the series",
        blocks: [
          {
            type: "p",
            text: "With the room sorted, the next question people ask is about the app itself, specifically what it does with your voice when voice-follow scrolling is on. The next post looks at why on-device speech recognition matters for privacy, what actually happens to the audio when a teleprompter listens to you, and how to tell whether an app is processing speech on the phone or sending it somewhere else.",
          },
        ],
      },
    ],
  },
  {
    slug: "wire-size-voltage-drop-conduit-fill-iphone-electrician-calculator-walkthrough",
    title: "Sizing a Circuit on Your iPhone: Wire Size, Voltage Drop and Conduit Fill in One Pass With Electrician Calculator Toolkit",
    description:
      "A worked example of sizing a branch circuit on an iPhone with Electrician Calculator Toolkit: load and breaker, wire size with derating, voltage drop and conduit fill, with the NEC 2023 table behind each number and the cases where you still open the book.",
    datePublished: "2026-10-04",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "The three questions that come up on almost every job are the same: what breaker and wire does this load need, will the voltage drop pass over that run, and what conduit does the bundle fit in. Each has a table in the code book, each table has a footnote, and each footnote is annoying to find with gloves on in a crawl space. This post walks one realistic circuit through all three on an iPhone using [Electrician Calculator Toolkit](/apps/electrician-calculator), showing which NEC 2023 table each answer comes from, so you can check it against the book or explain it to the inspector.",
          },
          {
            type: "p",
            text: "The app is a $3.99 one-time purchase for iPhone (iOS 17 or later), works fully offline, and bundles eight tools: voltage drop, wire size with derating, conduit fill, box fill, load and breaker, Ohm's law, resistor colour codes and the reference tables. There is no Android version yet. It is a calculation aid, not a substitute for the adopted code in your jurisdiction or the authority having jurisdiction, and this post is not electrical advice.",
          },
        ],
      },
      {
        heading: "The example circuit",
        blocks: [
          {
            type: "p",
            text: "A 240 V single-phase continuous load of 9,600 W, so 40 A, feeding equipment about 100 feet from the panel in copper THHN, run in EMT with two other circuits sharing the raceway in a hot attic. Realistic enough to hit every rule that matters: the continuous-load factor, ambient and conductor-count derating, voltage drop over a long run, and conduit fill with more than three conductors.",
          },
        ],
      },
      {
        heading: "Step 1: Load and breaker (240.6(A) and the 125 percent rule)",
        blocks: [
          {
            type: "p",
            text: "Open Load & Breaker, enter 9,600 W, 240 V, single-phase, and mark the load continuous because it runs for three hours or more. The tool returns the load current (40 A), the design current at 125 percent (50 A), the next standard breaker rating from Table 240.6(A), and the minimum 75°C conductor for that current.",
          },
          {
            type: "p",
            text: "The 125 percent step is the one people skip when they size from the nameplate alone. A 40 A continuous load needs an overcurrent device and conductors rated for 50 A, which is why the breaker and the wire both come out a size larger than the nameplate suggests. The app shows both numbers on the same screen so the reasoning is visible rather than buried.",
          },
        ],
      },
      {
        heading: "Step 2: Wire size with derating (Table 310.16, 310.15(B)(1), 310.15(C)(1))",
        blocks: [
          {
            type: "p",
            text: "Carry the 50 A into Wire Size. In a mild room with three or fewer current-carrying conductors, Table 310.16 at 75°C gives #8 AWG copper for 50 A, and that is the textbook answer to \"what size wire for a 50 amp circuit\". Our example is not a mild room. Set the termination rating (75°C for typical breaker and equipment terminals), enter the attic ambient temperature, and set the number of current-carrying conductors sharing the EMT to six, since three two-wire circuits are in it.",
          },
          {
            type: "p",
            text: "The tool applies the ambient correction from 310.15(B)(1) and the adjustment factor for more than three conductors from 310.15(C)(1), then shows the adjusted ampacity of every size around the answer rather than a single number. That table view is the useful part: you can see exactly how far #8 falls short once the factors are applied and whether #6 clears it with margin. For the small sizes, it also enforces the 240.4(D) caps so that #14, #12 and #10 are never shown protected above 15, 20 and 30 A no matter what the derated ampacity says.",
          },
          {
            type: "list",
            items: [
              "Termination rating caps you at the 60°C or 75°C column even if the insulation is 90°C; the 90°C column is only the starting point for derating.",
              "Ambient correction and conductor-count adjustment multiply together; a hot attic and a crowded conduit can push a circuit up two sizes.",
              "Equipment grounding conductors and most neutrals in balanced circuits do not count as current-carrying; the app asks for the count, you decide what counts.",
            ],
          },
        ],
      },
      {
        heading: "Step 3: Voltage drop over the run (210.19(A) informational note)",
        blocks: [
          {
            type: "p",
            text: "Now the 100-foot one-way run. Open Voltage Drop, enter 240 V, 40 A (the actual load current, not the design current), copper, the conductor size you landed on, and 100 feet. The tool uses VD = 2 × K × I × L ÷ CM for single-phase and DC (1.732 instead of 2 for three-phase), with K = 12.9 for copper and 21.2 for aluminium, and returns the drop in volts and percent plus the voltage at the load.",
          },
          {
            type: "p",
            text: "To see why this step matters even after derating, run a smaller case: a 120 V, 20 A load on #12 copper at 100 feet. The formula gives 2 × 12.9 × 20 × 100 ÷ 6,530 circular mils, which is about 7.9 V, or 6.6 percent, more than double the 3 percent branch-circuit figure in the informational note to 210.19(A). #10 brings it to roughly 4.1 percent; #8 gets it under 3 percent. The app does this comparison for you, flagging anything above the 3 percent branch and 5 percent total informational limits and showing the smallest conductor that stays under 3 percent. You can flip to aluminium or add parallel sets to see the alternatives side by side.",
          },
          {
            type: "p",
            text: "Those 3 and 5 percent figures are informational in the NEC, not mandatory, and energy codes or the equipment manufacturer may impose their own. The tool labels them as such; the decision stays yours.",
          },
        ],
      },
      {
        heading: "Step 4: Conduit fill (Chapter 9, Tables 1, 4 and 5)",
        blocks: [
          {
            type: "p",
            text: "Finally the raceway. In Conduit Fill, add the conductors: the two circuit conductors and grounding conductor for this circuit at the size you chose, plus the conductors of the two other circuits, each with its insulation type. THHN/THWN, XHHW and THW are supported, and you can mix sizes freely. The tool reads the 40 percent fill limit from Table 1, the raceway areas from Table 4, and the conductor areas from Table 5, and shows the minimum trade size for EMT, PVC Schedule 40, PVC Schedule 80, RMC and IMC side by side.",
          },
          {
            type: "p",
            text: "There is also a reverse mode, Max conductors, for the question that gets asked the other way round: how many of one conductor fit in a given conduit. The classic example is sixteen #12 THHN in a 3/4 inch EMT, which is what Tables 1, 4 and 5 give and what the tool reports.",
          },
        ],
      },
      {
        heading: "Step 5: Box fill, if the run ends in a box you have to justify",
        blocks: [
          {
            type: "p",
            text: "Box Fill applies the 314.16(B) volume allowances: one per conductor originating outside the box, a single allowance for all internal clamps, one per support fitting, two per device yoke, and one for all equipment grounds together, each based on the largest conductor in the box. Enter what enters the box and compare the required cubic inches against the box you have in your hand; the tool gives a pass or fail against standard box volumes from the tables.",
          },
        ],
      },
      {
        heading: "Why the table reference on every screen matters",
        blocks: [
          {
            type: "p",
            text: "Plenty of free single-purpose calculators will give you a wire size. Few tell you which table and which edition they used, and that is the number an inspector will ask about. Every result in Electrician Calculator Toolkit names the NEC 2023 table or section it came from, which does two things: it lets you verify any answer against the book in seconds, and it turns the app into a teaching tool for apprentices who need to learn where the numbers live, not just what they are. The Code Tables tool opens those references directly, including ampacity tables for copper and aluminium, standard breaker ratings, derating factors, box volumes and the US and IEC wire colour conventions.",
          },
        ],
      },
      {
        heading: "When you still open the book",
        blocks: [
          {
            type: "list",
            items: [
              "**Your jurisdiction is not on the 2023 edition.** Many places adopt a code cycle late or with amendments. The tables rarely move much between editions, but the app is explicit that it follows 2023, so check which edition your inspector enforces.",
              "**Motor, HVAC, welder and other special loads.** Those articles have their own conductor and overcurrent rules that override the general method. Use the tool for the arithmetic, not for the rule.",
              "**Feeders and services with demand factors.** Article 220 load calculations are not what the Load & Breaker tool does; it sizes a known load.",
              "**Anything outside AWG and kcmil.** Lengths can be in metres and temperatures in Celsius, but conductor sizes follow the US tables. European installers working to IEC cross-sections in square millimetres will find the voltage drop and Ohm's law tools useful and the ampacity tables not directly applicable.",
            ],
          },
        ],
      },
      {
        heading: "The quick version",
        blocks: [
          {
            type: "p",
            text: "Load & Breaker for the design current and breaker, Wire Size for the derated conductor, Voltage Drop for the run, Conduit Fill for the raceway, Box Fill for the termination. Five screens, each naming its table, under a minute once you have done it twice, and nothing uploaded or downloaded along the way. If that is the flow you already do on paper, [Electrician Calculator Toolkit](/apps/electrician-calculator) just makes it faster and shows its working.",
          },
        ],
      },
    ],
  },
  {
    slug: "read-whatsapp-voice-notes-as-text-android-offline-faq",
    title: "Read WhatsApp Voice Notes as Text on Android, Offline: The Questions People Actually Ask",
    description:
      "An Android FAQ for turning WhatsApp, Telegram and Signal voice notes into text without uploading them: the share-sheet route, what to do when WhatsApp's own transcript is missing for your language, long recordings, accuracy, and what the one-time purchase covers.",
    datePublished: "2026-10-04",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "A six-minute voice note arrives while you are in a meeting, on a bus with no headphones, or in a library. You cannot listen, you do not want to put it on speaker, and WhatsApp's own \"transcribe\" option is either missing or in the wrong language. This FAQ covers the Android side of that problem, using the free-to-download [Voice Note to Text](/apps/voice-note-to-text) app, which transcribes on the phone itself with no upload. The questions below are the ones that come up in reviews, support emails and search, in roughly the order people hit them. The iPhone version of the workflow is covered in an [earlier post](/blog/transcribe-whatsapp-voice-message-to-text-iphone); this one is Android only.",
          },
        ],
      },
      {
        heading: "Why doesn't WhatsApp just transcribe it for me?",
        blocks: [
          {
            type: "p",
            text: "Sometimes it does. WhatsApp has a built-in transcript feature on Android, but it works only for a short list of languages, needs a language pack downloaded per language, has to be switched on in settings, and only applies to messages inside the chat. A voice note in Tamil, Turkish, Dutch or Punjabi, a note forwarded from a group, or an audio file somebody already saved to your phone typically gets no transcript at all. The gap is not a bug you can fix in settings; it is the shape of the feature. An on-device transcriber that opens any audio file in any language fills that gap.",
          },
        ],
      },
      {
        heading: "How do I get a voice note out of WhatsApp and into the app?",
        blocks: [
          {
            type: "p",
            text: "Two routes, both without leaving WhatsApp for long.",
          },
          {
            type: "list",
            items: [
              "**Share sheet (fastest).** Long-press the voice message in the chat, tap the share icon (or the three dots, then Share), and choose Voice Note to Text from the Android share sheet. The app opens with the file loaded and starts transcribing.",
              "**From Files.** If the audio is already on your phone, open the app and pick the file with the system file picker. WhatsApp voice notes live under the WhatsApp Media or Voice Notes folder as .opus files; Telegram and Signal produce .ogg or .m4a, which also open directly.",
            ],
          },
          {
            type: "p",
            text: "No conversion step is needed. The app decodes .opus, .m4a, .mp3 and .wav itself, so you never have to turn a voice note into an MP3 first just to read it.",
          },
        ],
      },
      {
        heading: "Does it need internet? What happens to my audio?",
        blocks: [
          {
            type: "p",
            text: "It does not need internet, and that is the point of it. The speech-recognition model ships inside the app, so transcription runs entirely on the phone, nothing is uploaded, and no account is created. The simplest way to confirm this is to turn on airplane mode and transcribe something: it works exactly the same. For a message from a doctor, a lawyer, a landlord or a partner, that matters more than any other feature, because the usual alternative is an app that sends the recording to a server you know nothing about.",
          },
        ],
      },
      {
        heading: "Which languages work, and do I have to pick one?",
        blocks: [
          {
            type: "p",
            text: "Around 100 languages, and no, you do not pick. The language is detected automatically from the audio, which is useful in exactly the situations where people need it most: a family group that switches between Hindi and English mid-sentence, a colleague who records in Spanish, a voice note from a friend abroad. The transcript comes back in the language that was spoken. Translation is not built in; copy the text into Google Translate or any translator if you need it in another language.",
          },
        ],
      },
      {
        heading: "How accurate is it, really?",
        blocks: [
          {
            type: "p",
            text: "Clear speech in a major language, recorded close to the phone, comes back with very few errors, the kind you would fix in a second if you were pasting it into a reply. Accuracy drops with background noise, several people talking at once, heavy accents in a less common language, and the slightly muffled audio you get when someone records while walking in wind. For those, the transcript is usually still good enough to know what the message is about and whether it needs a call back, which is what you wanted in the meeting anyway. Treat it like a careful first draft rather than a court record.",
          },
        ],
      },
      {
        heading: "Can I do long recordings, like a lecture or an interview?",
        blocks: [
          {
            type: "p",
            text: "Yes. There is no length limit. Longer files take proportionally longer because the work happens on your own processor, so a ten-minute recording takes noticeably longer than a thirty-second voice note, and an older or budget Android phone will be slower than a recent one. For a one-hour interview, start it, put the phone down, and come back. The transcript can then be copied or shared as a .txt file, which is a cleaner way to get an interview into a document than any amount of typing.",
          },
        ],
      },
      {
        heading: "What can I do with the text once I have it?",
        blocks: [
          {
            type: "list",
            items: [
              "**Copy** it and paste it straight into your reply, so the sender gets a quoted answer to what they said rather than \"what did you mean in the voice note?\"",
              "**Share .txt** through the Android share sheet to Keep, Drive, email or a notes app, which turns an important voice message into something searchable instead of a blob of audio you can never find again.",
              "**Keep a record.** Agreements made by voice note, delivery instructions, a landlord's promise, a doctor's dosage advice: text you can search beats audio you have to scrub through.",
            ],
          },
        ],
      },
      {
        heading: "Is it free? What does the purchase cover?",
        blocks: [
          {
            type: "p",
            text: "The Android app is free to download and contains ads, and instead of a subscription there is a single one-time purchase. There are no minutes to top up and no credits, which is unusual in this category, where the common model is a monthly fee for cloud transcription. Pay once, transcribe for as long as you keep the app. What the purchase unlocks and its exact price are shown on the Play Store listing for your country.",
          },
        ],
      },
      {
        heading: "When NOT to use it",
        blocks: [
          {
            type: "list",
            items: [
              "**You need a translated transcript in one step.** This app transcribes in the spoken language only. Pair it with a translator.",
              "**You need speaker labels or timestamps for a multi-person meeting.** It produces plain text. Dedicated meeting tools do more, at the cost of uploading the audio.",
              "**The voice note is already transcribed by WhatsApp in your language and you are inside the chat.** Use the built-in one; it is right there. This app is for everything that feature does not cover.",
              "**You want to send a text version to someone who cannot see the chat.** You can, by sharing the .txt, but remember the transcript is a draft; read it before you forward it.",
            ],
          },
        ],
      },
      {
        heading: "The short answer",
        blocks: [
          {
            type: "p",
            text: "Long-press the voice note, Share, choose Voice Note to Text, read it, copy it into your reply. Any language, no upload, works in airplane mode, and the audio never leaves your Android phone. If the voice notes in your life are mostly in a language WhatsApp's own transcript ignores, or they arrive at times you cannot listen, that is the whole workflow, and the [app page](/apps/voice-note-to-text) has the Play Store link and the full feature list.",
          },
          {
            type: "p",
            text: DISCLAIMER,
          },
        ],
      },
    ],
  },
  {
    slug: "on-device-speech-recognition-teleprompter-privacy",
    title:
      "Why On-Device Speech Recognition Matters for a Teleprompter (and for Your Privacy)",
    description:
      "Voice-following teleprompters listen to every word you say. Where that audio goes depends on one design choice: on-device or cloud speech recognition. What the difference means for privacy, airplane mode, scripts over a minute long, and when cloud recognition is still the better tool.",
    datePublished: "2026-10-05",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text:
              "A voice-following teleprompter has to listen to you. That is the whole trick: it hears the words you are saying, matches them to the script, and scrolls so the next line is always in front of you. Which raises a question most creators never ask until a client does: where does the audio go? The answer depends on a single engineering decision inside the app, whether speech recognition runs **on the device** or **in the cloud**, and that decision affects far more than privacy. It decides whether the prompter works on a plane, whether it dies after sixty seconds, how fast it reacts, and what happens to the unreleased product name you just said out loud. This post explains the difference in plain terms, busts a few myths, and is honest about the cases where cloud recognition is still the better tool.",
          },
        ],
      },
      {
        heading: "Two ways to turn speech into text",
        blocks: [
          {
            type: "p",
            text:
              "Cloud recognition streams your microphone audio to a server, which runs a large model and sends the words back. On-device recognition runs a smaller model on the phone's own chip and never opens a network connection for the audio. Both produce a stream of recognised words; the teleprompter uses that stream the same way either way. The difference is entirely in what leaves the phone, what it needs to work, and what limits apply.",
          },
          {
            type: "p",
            text:
              "On iPhone, both paths exist inside the same Apple framework. Apple's own documentation for its speech API is unusually frank about the cloud path: because it is a network service, it enforces a limit of about one minute of audio per recognition task, caps how many recognitions a device and an app can make per day, and advises developers not to send private or sensitive speech through it. The on-device path, which Apple added later and which recent iPhones support for a long and growing list of languages, has none of those constraints because there is no server to protect. An app can choose either, and the choice is invisible to you unless the developer tells you.",
          },
        ],
      },
      {
        heading: "Myth 1: it only matters if you say something secret",
        blocks: [
          {
            type: "p",
            text:
              "People hear privacy and picture spies. The realistic risk is duller. A teleprompter script is, by definition, the thing you have not published yet: the product launch, the earnings commentary, the medical explainer with a patient's story in it, the course module you are selling. If recognition runs in the cloud, every take of every draft of that script travels as audio to a server you do not control, under terms you did not read, in a jurisdiction you did not choose. Most of the time nothing bad happens. The point is that with on-device recognition there is no **most of the time**; the audio stays in the app, so there is nothing to leak, retain, subpoena or train on.",
          },
          {
            type: "p",
            text:
              "This also matters in the opposite direction, for the people in your videos. Teachers recording with students in the room, doctors recording near a clinic, anyone filming in a workplace: a prompter that uploads audio is a prompter that uploads whatever else the microphone catches. On-device recognition keeps that boundary where it should be.",
          },
        ],
      },
      {
        heading: "Myth 2: offline just means it works without Wi-Fi",
        blocks: [
          {
            type: "p",
            text:
              "True, and that alone is worth having: airplane mode on a flight, a basement studio, a conference centre with saturated Wi-Fi, a field shoot with one bar of signal. A cloud prompter in those places either stalls or falls back to auto-scroll without telling you, which is the worst possible moment to find out.",
          },
          {
            type: "p",
            text:
              "But offline has two quieter benefits. The first is latency: there is no round trip to a server, so the scroll responds to your voice within a fraction of a second rather than lagging a beat behind you. With voice-following, that lag is the difference between a prompter that feels like it is reading your mind and one you are forever waiting for. The second is consistency: the model on your phone behaves the same on Tuesday as it did on Monday, because nobody updated it overnight.",
          },
          {
            type: "p",
            text:
              "**Teleprompter: Camera Overlay** is built this way. Its voice-driven scrolling uses Apple's on-device speech recognition, it works fully in airplane mode, and nothing you say or write is uploaded. It auto-detects the language of the script and supports every language iOS on-device recognition supports, which is why it holds up for [recording in a second language](/blog/recording-video-in-a-second-language). The [app page](/apps/teleprompter-camera-overlay) lists the rest of the features.",
          },
        ],
      },
      {
        heading: "Myth 3: the sixty-second thing is not a real problem",
        blocks: [
          {
            type: "p",
            text:
              "It is, and it explains a lot of strange behaviour in cloud-based prompters. Because the cloud path is capped at roughly a minute of audio per task, an app using it has to quietly stop and restart recognition every minute. Done well, you never notice. Done badly, there is a hiccup where the scroll freezes for a second, loses your place, or jumps. If you have used a voice prompter that worked beautifully for short Reels and fell apart on a five-minute tutorial, this is very likely why. On-device recognition runs for as long as you talk.",
          },
          {
            type: "p",
            text:
              "The daily caps are the other half. A busy batch-recording day, twenty takes of ten scripts, can bump into per-app or per-device limits on the cloud path. Again, a well-built app will degrade gracefully; a poorly built one will just stop following you with no explanation.",
          },
        ],
      },
      {
        heading: "When cloud recognition is still the better tool",
        blocks: [
          {
            type: "p",
            text:
              "This is not a one-sided argument, so here is the other side. Cloud models are bigger and, for some languages and accents, still noticeably more accurate at transcribing free speech. If what you need is a **transcript**, a verbatim record of an interview or a meeting for subtitles and search, a cloud service with speaker labels and punctuation will usually beat an on-device model.",
          },
          {
            type: "p",
            text:
              "A teleprompter, though, is not transcribing free speech. It already knows exactly what you are going to say, because you wrote it. Its job is to work out **where** in a known text you are, which is a much easier problem than guessing arbitrary words, and it is why on-device accuracy is more than enough for scrolling: the app only needs to recognise enough of your words to keep its place, and a good one finds the place again if you stumble, repeat a line or skip ahead. The trade-off that matters for transcription barely registers for prompting.",
          },
          {
            type: "p",
            text:
              "Two more honest caveats. On-device language support depends on the iPhone model and iOS version, so a very old phone may support fewer languages than the cloud path would. And on-device recognition still needs microphone permission, which is a separate decision from where the audio goes; you grant it the same way, the difference is what happens after.",
          },
        ],
      },
      {
        heading: "How to check what your prompter does",
        blocks: [
          {
            type: "list",
            items: [
              "**Read the App Store privacy label.** An on-device prompter should declare that it collects no data, or only diagnostics. Audio Data or User Content listed under data linked to you is a sign recordings or speech leave the phone.",
              "**Turn on airplane mode and try voice-following.** If scrolling keeps tracking your voice, recognition is on-device. If it stops or silently switches to timed scrolling, it is not.",
              "**Record for three minutes straight.** A clean, uninterrupted follow is a good sign; a stall or jump near each minute mark points to the cloud path's limit.",
              "**Check whether a login is required.** Not proof either way, but a prompter that insists on an account before it will read a script usually has a server in the loop.",
            ],
          },
          {
            type: "p",
            text:
              "If you are deciding between voice-following and plain auto-scroll in the first place, [voice-follow vs auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter) covers which to use for which kind of video; the privacy question only arises once you choose voice.",
          },
        ],
      },
      {
        heading: "The short version",
        blocks: [
          {
            type: "p",
            text:
              "A voice-following teleprompter must listen to you, but it does not have to tell anyone else what it heard. On-device speech recognition keeps your scripts, your voice and your room on your phone, works in airplane mode, reacts faster, and has no one-minute or daily limits. Cloud recognition earns its place for transcription, not for prompting. If your prompter cannot follow you with Wi-Fi off, you now know why, and what to look for instead.",
          },
          {
            type: "p",
            text:
              "Next in this series: teleprompters for teachers and educators, from lecture capture to the flipped-classroom explainer, including how to record with students in the room without anyone's voice leaving it.",
          },
        ],
      },
    ],
  },
  {
    slug: "whatsapp-qr-code-for-restaurant-menu-shop-counter-iphone",
    title:
      "A WhatsApp QR Code for Your Menu, Shop Counter or Market Stall: The Print-Ready Setup on iPhone",
    description:
      "How to make a WhatsApp QR code customers can scan from a menu, counter card, shop window or flyer: the pre-filled message that gets you better enquiries, print sizes that scan reliably, where to place it, and how to do it offline on an iPhone in a few minutes.",
    datePublished: "2026-10-05",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text:
              "A small café in a tourist town has the same problem as a tailor, a tuition centre and a Saturday market stall: customers want to ask something quick, and the phone number on the sign makes them do three things (type it, save it, find it again) before they can. A WhatsApp QR code collapses that into one: point the camera, tap, and a chat opens with the question already half written. This guide is the practical version for a business that prints things: what the code should contain, how big to print it, where it works and where it does not, and how to make one on an iPhone without sending your number to a website.",
          },
          { type: "p", text: DISCLAIMER },
        ],
      },
      {
        heading: "What a WhatsApp QR code actually contains",
        blocks: [
          {
            type: "p",
            text:
              "There is nothing magic inside the square. It encodes a standard click-to-chat link in the form `https://wa.me/<number>?text=<message>`: your number in international format and, optionally, a pre-filled message. When someone scans it, their phone opens that link, WhatsApp recognises it, and a conversation with your number appears with the message ready to send. Neither side needs to save the other as a contact. The [link generator guide](/blog/whatsapp-link-generator-qr-code-full-size-dp) covers the link format itself; here we focus on the printed code.",
          },
          {
            type: "p",
            text:
              "Two consequences follow. First, the code is only as good as the number inside it, so build it from the number customers should actually reach, which for most small businesses is the WhatsApp Business number, not the owner's personal one. Second, because the message is part of the link, you can print different codes for different places, each with a message that tells you where the customer was standing.",
          },
        ],
      },
      {
        heading: "The pre-filled message is the part most businesses skip",
        blocks: [
          {
            type: "p",
            text:
              "A code with no message opens an empty chat, and empty chats produce \"Hi\" followed by silence while the customer works out what to type. A code with a message produces a usable first line and tells you the context. Some that work:",
          },
          {
            type: "list",
            items: [
              "On a restaurant menu: **Hi! I'd like to reserve a table for ___ people on ___.** The blanks invite the customer to fill in the two things you need.",
              "On a counter card at a repair shop: **Hi, I'm at the counter and would like a quote for:** so you can reply with a price while they wait.",
              "On a market stall: **Hi! I saw your stall at Sunday market and I'm interested in** which both starts the chat and reminds you which stall and which day.",
              "On a tuition or clinic flyer: **Hello, I'd like to know the available slots this week for** keeps the enquiry specific enough to answer in one message.",
            ],
          },
          {
            type: "p",
            text:
              "Keep it under about fifteen words. Longer messages make a denser QR code, which prints and scans less reliably at small sizes, and customers delete long pre-filled text anyway. Emoji and apostrophes are fine as long as the link is encoded properly, which is one reason to use an app rather than typing the URL by hand.",
          },
        ],
      },
      {
        heading: "Making the code on an iPhone, offline",
        blocks: [
          {
            type: "p",
            text:
              "**Chat Link & QR Code Maker** is a small iOS app (iOS 15.1 or later) built for exactly this. It is a one-time purchase, currently $2.99 on the App Store with no subscription or in-app purchases, and it runs entirely on the phone: your number, your message and the codes it makes never leave the device, and it works in airplane mode. The steps:",
          },
          {
            type: "list",
            items: [
              "Open the app and type the business number with its country code, digits only: 919876543210 for an Indian number, 447700900123 for a UK one. Drop the plus sign, spaces and leading zeros.",
              "Add the pre-filled message for this particular placement (the menu, the counter, the flyer).",
              "Tap **Open chat** once to confirm the link lands in the right conversation. This is the test that catches a wrong digit before it goes to the printer.",
              "Tap **Save QR to Photos**. The code is saved as a full-resolution PNG with no watermark, which is what a printer needs.",
              "Repeat with a different message for each placement, so each code tells you where it was scanned.",
            ],
          },
          {
            type: "p",
            text:
              "Every feature is included in the one purchase. The [app page](/apps/chat-link-qr-code-maker) has screenshots and the full list, including the profile-picture tool, which is useful once customers start opening chats and seeing a cropped logo.",
          },
        ],
      },
      {
        heading: "Print sizes and placement that actually scan",
        blocks: [
          {
            type: "p",
            text:
              "QR codes fail in the real world for boring reasons: too small, too far, too shiny, or too close to the edge of a laminated card. Rules that hold up:",
          },
          {
            type: "list",
            items: [
              "**Size follows distance.** A code on a table menu is scanned from about 30 cm; 2.5 cm (one inch) square is enough. A counter card scanned from arm's length needs 4 to 5 cm. A shop-window code read from the pavement needs 10 cm or more.",
              "**Leave a quiet zone.** Keep a clear margin around the code of at least the width of four of its small squares. Do not let a border, a logo or a fold cut into it.",
              "**Black on white beats branding.** Coloured codes scan, but dark-on-light with strong contrast scans fastest, including on older phones. Put the colour in the frame around it, not in the code.",
              "**Matte over gloss.** Glossy lamination and glass reflect overhead lights straight into the camera. If a code must go behind glass, place it where the light does not bounce, or use matte film.",
              "**Add three words of instruction.** \"Scan to chat with us on WhatsApp\" plus the WhatsApp name of the business. People scan codes that tell them what will happen.",
            ],
          },
          {
            type: "p",
            text:
              "Print one copy, scan it yourself from the real distance with the oldest phone in the family, and only then order a hundred.",
          },
        ],
      },
      {
        heading: "Where it works, and where a plain number is better",
        blocks: [
          {
            type: "p",
            text:
              "A WhatsApp QR code is at its best where the customer is physically present and the question is quick: menus, counters, stalls, waiting rooms, shop windows after hours, delivery packaging, receipts and invoices (a code with **Hi, I have a question about invoice** saves everyone a phone call). It is also handy on a business card, where the chat link lands more often than an email address.",
          },
          {
            type: "p",
            text:
              "It is a poor choice in a few places. On a screen, a tappable link beats a code every time, so for an Instagram bio, a website or an email signature, copy the link rather than the image. On a moving vehicle or a billboard, nobody is going to scan it. And if the person answering the number cannot keep up with chats during opening hours, a code that promises a quick reply will produce quick disappointment; in that case print the number and the hours instead, or put the code only where a slower reply is acceptable.",
          },
        ],
      },
      {
        heading: "A small checklist before you print",
        blocks: [
          {
            type: "list",
            items: [
              "The number is the business number, in international format, tested with Open chat.",
              "Each placement has its own pre-filled message, under fifteen words.",
              "The code is printed at a size matched to the scanning distance, with a quiet zone and a one-line instruction.",
              "The chat that opens has a logo that is not cropped and a greeting or quick replies set up, so the first impression is not an empty screen.",
              "Someone is actually answering the number, and the hours are stated if they are not.",
            ],
          },
          {
            type: "p",
            text:
              "Done properly, the code takes ten minutes to make and keeps working for as long as the number does. If you later change the message or the number, make a new code; the old one will keep pointing where it always did, so collect the old cards.",
          },
        ],
      },
    ],
  },
  {
    slug: "send-whatsapp-message-without-saving-number-android",
    title:
      "How to Send a WhatsApp Message Without Saving the Number on Android: Four Ways Compared",
    description:
      "Four ways to message someone on WhatsApp without adding them to your contacts on Android: the wa.me trick in Chrome, WhatsApp's own new-chat search, a free offline link and QR app, and a home-screen shortcut. Which to use when, and the privacy angle for your own number.",
    datePublished: "2026-10-05",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text:
              "You have a number on a flyer, a delivery slip, a classified ad or a screenshot, and you want to ask one question on WhatsApp. Saving a stranger to your contacts for a single message feels wrong, and on Android the contact also syncs to your Google account and shows up in Gmail for years. The good news is that WhatsApp has never required a saved contact to start a chat; it only makes it look that way. Here are four ways to send a WhatsApp message without saving the number on an Android phone, what each is good for, and the flip side: how to let customers message you without ever publishing a number they have to save.",
          },
          { type: "p", text: DISCLAIMER },
        ],
      },
      {
        heading: "Why this works at all: the wa.me link",
        blocks: [
          {
            type: "p",
            text:
              "WhatsApp publishes a click-to-chat format: `https://wa.me/<number>` where the number is written in international format with no plus sign, spaces or leading zeros, for example `wa.me/919876543210` for an Indian number or `wa.me/4915112345678` for a German one. Opening that link on a phone with WhatsApp installed opens a chat with that number, saved or not. Add `?text=` and a URL-encoded message, and the chat opens with the message typed and waiting. Every method below is a different way of getting that link in front of Android.",
          },
        ],
      },
      {
        heading: "Method 1: type the link into Chrome",
        blocks: [
          {
            type: "p",
            text:
              "The zero-install way. Open Chrome (or any browser), type `wa.me/` followed by the number in international format into the address bar, and go. Android shows a prompt to open the link in WhatsApp; tap it and the chat appears. If the number is not on WhatsApp you get a plain message saying so.",
          },
          {
            type: "list",
            items: [
              "**Good for:** a one-off message to a number you will never use again.",
              "**Watch out for:** typing errors. There is no check before the chat opens, and the number has to be converted to international format by hand: drop the leading 0 from a UK or Indian mobile number and put the country code in front.",
              "**Pre-filled message:** possible, but you have to encode it yourself (`%20` for spaces and so on), which is tedious on a phone keyboard.",
            ],
          },
        ],
      },
      {
        heading: "Method 2: WhatsApp's own new-chat search",
        blocks: [
          {
            type: "p",
            text:
              "Recent versions of WhatsApp for Android let you start a chat with an unsaved number from inside the app: tap the new-chat button, type the full number with country code into the search field at the top, and WhatsApp offers to message that number directly. The exact wording of that option has changed across versions, and on some phones it only appears once the number is typed in full with the country code, so if you do not see it, check that WhatsApp is up to date.",
          },
          {
            type: "list",
            items: [
              "**Good for:** when you are already in WhatsApp and have the number in front of you.",
              "**Watch out for:** older versions without the option, and no way to pre-fill a message.",
            ],
          },
        ],
      },
      {
        heading: "Method 3: a link and QR app that does the formatting for you",
        blocks: [
          {
            type: "p",
            text:
              "If you do this more than occasionally, or you want the message pre-written, an app that builds the link is quicker and less error-prone. **Chat Link & QR Code Maker** on Google Play is free with ads, needs no account, and runs completely offline on the phone: you type the number with its country code, optionally add a message, and the app produces the correctly encoded link straight away. Open the chat from it to check it lands on the right person, or copy the link for a note, an email or a message to a colleague. The number and message never leave the phone, which matters when the numbers are customers' rather than your own.",
          },
          {
            type: "list",
            items: [
              "**Good for:** regular use, pre-filled messages with spaces, punctuation and emoji that survive encoding, and keeping a link handy without saving anyone.",
              "**Also does:** turns any link into a QR code saved to your gallery at full resolution with no watermark, and pads a photo onto a square so a profile picture is not cropped.",
              "**Watch out for:** it is a link maker, not a bulk sender. One link, one chat.",
            ],
          },
          {
            type: "p",
            text:
              "The same app exists on iPhone; the [app page](/apps/chat-link-qr-code-maker) explains the link format in more detail, and the Play Store listing is at https://play.google.com/store/apps/details?id=com.vilva.watools.",
          },
        ],
      },
      {
        heading: "Method 4: a home-screen shortcut for a number you message often but will not save",
        blocks: [
          {
            type: "p",
            text:
              "There is a category of numbers you contact regularly but do not want in your contacts: the landlord's agent, a supplier's hotline, a tutor, a courier. For those, make the wa.me link once (Method 1 or 3), then in Chrome open it, tap the three-dot menu and choose **Add to Home screen**. Android places an icon that opens the chat directly. Nothing is added to your contacts, and the icon can be deleted when the arrangement ends. With a pre-filled message in the link, the shortcut can even carry a standard opening line such as **Hi, this is flat 4B,** so the other side knows who it is without you being in their contacts either.",
          },
        ],
      },
      {
        heading: "The other direction: letting people message you without saving your number",
        blocks: [
          {
            type: "p",
            text:
              "Everything above also works in reverse, and this is where it gets useful for anyone who sells, teaches or freelances. If you share a wa.me link instead of a phone number, customers tap once and land in a chat, which removes the save-the-number step that loses a surprising share of enquiries. Put the link in an Instagram or Facebook bio, a Google Business profile, an email signature, a classified ad or an invoice footer. For printed places, a QR code of the same link does the job: the app above saves one to your gallery, and you can share it to a print shop straight from the Android share sheet.",
          },
          {
            type: "p",
            text:
              "Two practical notes. Use a WhatsApp Business number for this if you have one, so the chat shows a business profile rather than a personal photo, and give the link a pre-filled message such as **Hi, I'm interested in** so the first message you receive is not just \"hello\". And remember a link is public: anyone who finds it can open a chat, which is the point, but it is also why the link should go to a number you are happy to receive strangers on.",
          },
        ],
      },
      {
        heading: "Quick comparison",
        blocks: [
          {
            type: "list",
            items: [
              "**One message, right now:** Method 1 (Chrome) or Method 2 (WhatsApp search).",
              "**A pre-filled message, or you do this often:** Method 3 (the app).",
              "**A number you contact weekly but will not save:** Method 4 (shortcut).",
              "**People should message you:** share a wa.me link, or print its QR code.",
            ],
          },
          {
            type: "p",
            text:
              "None of these methods tell the other person anything about you beyond what any WhatsApp message does, and none of them add anyone to your Google contacts. If you also deal with WhatsApp exports and voice notes on Android, the guides on [saving a chat as a PDF](/blog/save-whatsapp-chat-as-pdf-android-for-hr-landlord-insurer) and [reading voice notes as text offline](/blog/read-whatsapp-voice-notes-as-text-android-offline-faq) follow the same keep-it-on-the-phone approach.",
          },
        ],
      },
    ],
  },
  {
    slug: "teleprompter-for-teachers-and-educators",
    title: "A Teleprompter for Teachers and Educators: Flipped-Classroom Videos, Lecture Capture and Parent Updates Without the Stumbles",
    description:
      "How teachers use an iPhone teleprompter for flipped-classroom explainers, revision videos, lecture intros and parent messages: scripting for students, recording with pupils in the room, voice-following at classroom pace, and when a prompter is the wrong tool.",
    datePublished: "2026-10-06",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text:
              "Teachers are the one group of creators who already know how to explain things out loud, and still find recording a video oddly hard. In the classroom you read the room and adjust; in front of a phone there is no room to read, and the fourth attempt at a four-minute explainer eats the free period you had set aside for marking. A teleprompter fixes a specific part of that problem: it lets you say exactly what you planned, in order, while looking at the students who will watch it. This post is for educators at any level, from a primary teacher recording a phonics reminder for parents to a lecturer capturing a module intro, and it is honest about the cases where a script gets in the way.",
          },
        ],
      },
      {
        heading: "Four kinds of video teachers actually record",
        blocks: [
          {
            type: "p",
            text:
              "Not every teaching video wants a script. It helps to be clear about which type you are making before you write anything.",
          },
          {
            type: "list",
            items: [
              "**The flipped-classroom explainer.** Five to eight minutes on one concept, watched before the lesson so class time goes on practice. This is the type that benefits most from a prompter, because the explanation has to be tight, correctly sequenced and free of the tangents that are fine live but deadly on replay.",
              "**The revision or recap video.** A short run through a topic before an exam, often recorded in batches. Scripted, because precision matters and because you will record six of them in an afternoon.",
              "**The lecture or module intro.** Two minutes on what the unit covers, how it is assessed, and why it matters. Scripted, because it is reused every year and every word is on the record.",
              "**The parent or carer update.** A ninety-second message about the trip, the reading scheme or the week ahead. Scripted, because it has to be warm, brief and complete, and because you do not want to re-record it after discovering you forgot the date.",
            ],
          },
          {
            type: "p",
            text:
              "A worked example, a live demonstration or a conversation with students is usually better unscripted. Our earlier post on [teleprompters for online courses and tutorials](/blog/teleprompter-for-online-courses-and-tutorials) covers the course-length version of this split in more detail.",
          },
        ],
      },
      {
        heading: "Writing a script that sounds like teaching",
        blocks: [
          {
            type: "p",
            text:
              "The usual advice about writing for the ear applies, but teaching scripts have two extra demands. The first is sequencing: an explainer has to introduce ideas in the order a learner can absorb them, which is rarely the order a textbook uses. Write the script as if a specific student, one who struggled last term, were watching. The second is signposting. Learners watching alone cannot ask what you meant, so say what is coming (\"there are three steps, and the second one is where people go wrong\"), say when you have finished a step, and say what they should do next.",
          },
          {
            type: "p",
            text:
              "Keep sentences short enough to say in one breath, mark the words you want to stress in bold, and write out the questions you would ask the class, with a pause after each so the viewer can think. Then read it aloud once before you record. If a sentence trips you, it will trip you on camera too; rewrite it. The post on [writing a script that doesn't sound written](/blog/write-a-script-that-doesnt-sound-written) has the full method.",
          },
        ],
      },
      {
        heading: "Setting up: the phone, the script and the eye line",
        blocks: [
          {
            type: "p",
            text:
              "A classroom is a reasonable studio if you control two things: the light and the eye line. Put yourself facing a window or the main light, with the whiteboard behind you if it is relevant and a plain wall if it is not. Prop the phone at eye level; a stack of books under a phone stand on a desk is fine. Then put the script where your eyes already are.",
          },
          {
            type: "p",
            text:
              "This is what [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) does: it floats the script over the camera preview, right next to the front lens, so reading it and looking at the camera are the same act. The alternative, a script on a laptop beside the phone, produces the sideways glance every student notices and nobody can name. The script never appears in the saved video, and the app records in portrait 4K, so the same file works for a learning platform, a school app or a short clip for the school's social channel.",
          },
          {
            type: "p",
            text:
              "Set the text size larger than you think you need. Reading glasses, classroom lighting and the arm's-length distance to the phone all argue for big text and fewer words on screen, which also makes the scroll smoother. Our earlier guide to [keeping eye contact with the camera](/blog/how-to-keep-eye-contact-with-the-camera) explains why a narrow text column near the lens matters more than any other setting.",
          },
        ],
      },
      {
        heading: "Voice-following at classroom pace",
        blocks: [
          {
            type: "p",
            text:
              "Teachers speak differently from presenters: they slow down for the hard bit, pause for the imaginary hand going up, and speed through the recap. A prompter that scrolls at a fixed speed fights that rhythm, which is why so many educators give up on them. The app's voice-driven scrolling follows what you actually say, using Apple's on-device speech recognition; the text advances when you do and waits when you pause to let a point land. If you lose your place, start the sentence again and it finds you.",
          },
          {
            type: "p",
            text:
              "There is a version of this that matters particularly in schools: because recognition runs on the phone rather than in the cloud, nothing you say leaves the device, and that includes anything the microphone picks up in a room with students in it. The app works in airplane mode, which is also the practical way to stop notifications interrupting a take. The [on-device recognition post](/blog/on-device-speech-recognition-teleprompter-privacy) goes into why that distinction matters for anyone recording near other people's voices.",
          },
          {
            type: "p",
            text:
              "If you teach in a language other than the one your phone is set to, the script's language is detected automatically, and any language iOS supports for on-device recognition works. Teachers recording a bilingual explainer, or recording in a second language, should read the [second-language recording guide](/blog/recording-video-in-a-second-language) first; its advice on marking breath points applies doubly to teaching scripts.",
          },
        ],
      },
      {
        heading: "Recording with students in the room",
        blocks: [
          {
            type: "p",
            text:
              "Sometimes the video has to be made during the day, with a class working quietly behind the camera. Three things make that work. Face the phone away from the students so nobody is in shot without consent. Use voice-following rather than auto-scroll, because you will be interrupted and the script needs to wait for you. And keep every take short, a minute or two at most, so an interruption costs a minute rather than a lesson. The takes library in the app keeps every attempt, so you can record the four sections of an explainer across a day and pick the best of each.",
          },
          {
            type: "p",
            text:
              "If the room is noisy enough that recognition struggles, which can happen with thirty voices, switch to classic auto-scroll with the speed slider for that take. It is the one setting where a loud classroom beats a quiet one: auto-scroll does not care what it hears.",
          },
        ],
      },
      {
        heading: "When a teleprompter is the wrong tool",
        blocks: [
          {
            type: "p",
            text:
              "A script makes an explanation precise. It does not make it a good explanation, and it can make a warm teacher sound like a newsreader. If your strength is thinking aloud, improvising examples and reacting to confusion, record the first take without a script, listen back, and script only the parts that rambled. Modelling a problem on a whiteboard, demonstrating an experiment, or giving feedback on a student's work should almost always be unscripted; the value is in watching you think.",
          },
          {
            type: "p",
            text:
              "Be careful, too, with anything that students will quote back at you. A scripted statement about assessment criteria or a deadline is a commitment; make sure it matches the written policy before you record it. And remember that an unlimited number of scripts is a feature, not a target. Most teachers end up with a handful of recurring formats and reuse the structures year after year.",
          },
        ],
      },
      {
        heading: "A one-afternoon workflow",
        blocks: [
          {
            type: "list",
            items: [
              "Pick one topic and write a script of 400 to 600 words, with the questions and pauses written in.",
              "Read it aloud once, fix every sentence you stumble on.",
              "Set up the phone at eye level, face the light, airplane mode on.",
              "Record in sections of one to two minutes using voice-following; re-record only the section that went wrong.",
              "Pick the best take of each section from the takes library and export.",
              "Save the script; next year's version is an edit, not a rewrite.",
            ],
          },
          {
            type: "p",
            text:
              "The app is free on iPhone with occasional ads, and a small one-time purchase removes them; there is no subscription and no watermark on the video, which matters when a school budget is involved. It is iOS-only.",
          },
          {
            type: "p",
            text:
              "Next in this series: recording proper 4K video on an iPhone, which settings actually matter, when 4K is a waste of storage, and how to keep a portrait recording sharp on every platform you post to.",
          },
        ],
      },
    ],
  },
  {
    slug: "transcribe-voice-memos-voicemail-interviews-iphone-offline",
    title: "How to Transcribe Voice Memos, Voicemails and Interview Recordings on iPhone, Offline (No Subscription)",
    description:
      "Beyond chat apps: how to turn an iPhone Voice Memo, a saved voicemail or a long interview recording into text on the phone itself, with nothing uploaded. Which formats work, what to expect from long files, how to get a cleaner transcript, and what the one-time unlock covers.",
    datePublished: "2026-10-06",
    readingMinutes: 6,
    content: [
      {
        blocks: [
          {
            type: "p",
            text:
              "Most people meet voice transcription through a chat app: a friend sends a three-minute voice note and you want to read it instead. But the recordings that really need transcribing are usually the ones you made yourself. The lecture you recorded in Voice Memos. The voicemail from the clinic with a date in it. The forty-minute interview for a dissertation or an article. The idea you dictated in the car and now cannot remember. This post is about turning those into text on an iPhone without a subscription and without sending the audio to anyone's server.",
          },
          {
            type: "p",
            text:
              "The tool is [Voice Note to Text](/apps/voice-note-to-text), a small iPhone app whose speech-recognition model ships inside it. It was built for chat voice notes, but it opens any .m4a, .mp3, .wav or .opus file, which is what makes it useful for everything below. It is iOS-only, free to download with three transcriptions included, and a single one-time purchase of $2.99 unlocks unlimited use.",
          },
        ],
      },
      {
        heading: "Voice Memos: the two-tap route",
        blocks: [
          {
            type: "p",
            text:
              "Apple's Voice Memos app records in .m4a, a format the transcriber opens directly. Open Voice Memos, tap the recording, tap the three-dot menu, choose **Share**, and pick **Copy to Voice to Text** from the share sheet. The app decodes the file, loads its model on first use, and the transcript appears under the file name a few seconds later for a short memo. Tap **Copy** to paste it into Notes or an email, or **Share .txt** to save it as a file.",
          },
          {
            type: "p",
            text:
              "If the memo is already in the Files app, or came from a different recorder, open the transcriber directly and use **Pick a voice note & transcribe** to browse to it. Both routes produce the same result; the share sheet is just faster when you are already looking at the recording.",
          },
        ],
      },
      {
        heading: "Voicemail: getting the audio out first",
        blocks: [
          {
            type: "p",
            text:
              "On carriers that support Visual Voicemail, the Phone app lets you share a voicemail as an audio file: open the voicemail, tap the share button, and the same **Copy to Voice to Text** option appears. The result is a text version of the message with the appointment time, the reference number or the callback number in it, which is far easier to act on than replaying the audio three times with your finger over the pause button.",
          },
          {
            type: "p",
            text:
              "One caveat worth knowing: voicemail audio is heavily compressed and often recorded on a poor line, so expect a few more errors than with a clean memo. Numbers and names are the usual casualties. For anything important, check the digits against the audio once; the transcript gets you to the right place in seconds, and the recording confirms it.",
          },
        ],
      },
      {
        heading: "Interviews and lectures: long files",
        blocks: [
          {
            type: "p",
            text:
              "This is where most phone transcription apps either stop, cap you at a few minutes, or start charging per minute. There is no length limit here. A ten-minute recording is typically transcribed in well under a minute on a recent iPhone, and longer files take proportionally longer, so a one-hour interview is a few minutes of waiting rather than an upload, a queue and an email. Plug the phone in, leave it on the screen, and do something else.",
          },
          {
            type: "p",
            text:
              "For interviews there are two practical tips. First, record with the phone closer to the quieter speaker; a transcript is only as good as the audio, and the interviewer is nearly always louder than the interviewee. Second, transcribe the raw file before you trim or edit it, so the text and the audio line up when you go back to check a quote. The transcript does not include timestamps or speaker labels; it is a plain text of what was said, which is what most people want to search, quote from and summarise.",
          },
          {
            type: "p",
            text:
              "For students, the same workflow turns a recorded lecture into searchable notes. Ask permission to record, transcribe the .m4a afterwards, and paste the text into whatever you use for revision. The model handles around 100 languages and detects the language automatically, so a lecture in Spanish or Hindi needs no setting changed.",
          },
        ],
      },
      {
        heading: "Why offline matters for your own recordings",
        blocks: [
          {
            type: "p",
            text:
              "A chat voice note is usually trivial. A recorded interview, a medical voicemail or a dictated draft is not: it may contain someone else's personal details, an unpublished piece of work, or something you were told in confidence. Cloud transcription services process audio on their servers under terms that vary from vendor to vendor. Here the model runs on the iPhone and the app makes no network requests at all. You can verify this yourself by switching on airplane mode before transcribing: it still works. There is no account to create and the App Store privacy label reads **Data Not Collected**.",
          },
          {
            type: "p",
            text:
              "The trade-off is the download size. Because the speech model is inside the app, the install is around 96 MB. That is the price of the first transcription being instant and offline, and of never having to wait for a model to download later.",
          },
        ],
      },
      {
        heading: "Getting a cleaner transcript",
        blocks: [
          {
            type: "list",
            items: [
              "**Reduce background noise at the source.** A recording made in a café transcribes worse than one made in a car with the windows up. Nothing fixes this afterwards.",
              "**Speak in full sentences when dictating.** The model punctuates from the rhythm of your speech; a list of fragments comes out as a run-on.",
              "**Keep one language per recording where you can.** Detection is per file, so a memo that switches languages halfway through will be transcribed in whichever one dominates.",
              "**Convert first only if you must.** The app opens .m4a, .mp3, .wav, .opus, .ogg, .aac, .caf, .aiff, .flac, .amr and .3gp directly, so there is normally no reason to run a file through a converter.",
            ],
          },
        ],
      },
      {
        heading: "What the free tier and the unlock cover",
        blocks: [
          {
            type: "p",
            text:
              "The first three transcriptions are free, regardless of length, so you can test it on a real interview rather than a ten-second sample. After that, the one-time $2.99 purchase removes the limit. There are no minutes, credits or monthly plans, and no difference in quality between the free and unlocked transcriptions. If your need is a single long recording, the three free runs may be all you ever use.",
          },
          {
            type: "p",
            text:
              "The app runs on any iPhone with iOS 15.1 or later. If you would rather listen than read, or you need an audio file in a format another device can play, the companion [Opus to MP3 converter](/apps/voice-note-audio-converter) covers the other direction; and if your interest is chat voice notes specifically, the original guide to [transcribing WhatsApp voice messages on iPhone](/blog/transcribe-whatsapp-voice-message-to-text-iphone) walks through that case step by step.",
          },
          {
            type: "p",
            text: DISCLAIMER,
          },
        ],
      },
    ],
  },
  {
    slug: "medicine-cabinet-expiry-dates-android-first-aid-kit-audit",
    title: "Expired Medicine in the Cabinet? A 20-Minute Android Routine for Tracking Medicine and First-Aid Expiry Dates",
    description:
      "How to audit a medicine cabinet or first-aid kit once and never let it lapse again on Android: reading the date on the pack, logging each item with the Medicine tag, choosing a 7-day warning, the Android 12+ alarm permission that makes reminders arrive, and what the app does not do.",
    datePublished: "2026-10-06",
    readingMinutes: 6,
    content: [
      {
        blocks: [
          {
            type: "p",
            text:
              "Nobody checks the medicine cabinet until they need something from it, which is exactly the moment to discover the paracetamol expired in 2024 and the antihistamine is older than the dog. First-aid kits are worse: they live in a car boot or a kitchen drawer and get opened once a year. This is a one-time audit routine for Android that takes about twenty minutes for an average household cabinet, plus the setup that makes the phone warn you before anything lapses again. It uses the free [Expiry Date Tracker](/apps/expiry-date-tracker) app, which is Android-only and needs no account.",
          },
          {
            type: "p",
            text:
              "One boundary before we start: this is about dates, not dosages. The app tracks when things expire. Whether an expired medicine is still safe, or what to take, is a question for a pharmacist or doctor, and nothing below changes that.",
          },
        ],
      },
      {
        heading: "Step 1: empty the cabinet and sort into three piles",
        blocks: [
          {
            type: "p",
            text:
              "Take everything out and put it on a table. Make three piles: already expired, expires within a year, and later than that. Most people are surprised how large the first pile is. Expired medicines should go back to a pharmacy for disposal where that service exists, rather than in the bin or down the sink; your local pharmacy will tell you what they accept.",
          },
          {
            type: "p",
            text:
              "While sorting, look at where the date is printed. On blister packs it is usually embossed on the foil or printed on the box end; on bottles it is on the label near the batch number; on ointment tubes it is often on the crimped end. Note that medicine packaging uses several formats: EXP 03/2027, Use by 2027-03, or just a month and year. A month-only date means the end of that month.",
          },
        ],
      },
      {
        heading: "Step 2: log each item with the Medicine tag",
        blocks: [
          {
            type: "p",
            text:
              "Open the app and add the items from the second and third piles. For each one, tap **Scan barcode** and point the camera at the pack; the name fills in if the product is in the free Open Food Facts database or if you have scanned it before. Medicine barcodes are often missing from that database, so expect to tap **Add by hand** and type the name for a fair share of them. Type it once and the next scan of that barcode fills it in from your own history.",
          },
          {
            type: "p",
            text:
              "Then set the date. The quick chips (+1w, +2w, +1m, +3m, +6m, +1y) are built for food; for medicine you will mostly use the minus and plus buttons or type the date as YYYY-MM-DD, because the date on the pack is specific. For a month-only date, enter the last day of that month. Pick **Medicine** as the location, add the quantity if it helps, and tap **Save**. The screen shows how many days are left as you go, which is a small but satisfying way to watch the pile shrink.",
          },
          {
            type: "p",
            text:
              "Use the note field for the things you will have forgotten in six months: who the prescription was for, whether it is the children's or the adult strength, and where the kit actually lives if it is not the cabinet. There is no item limit and no sign-up, so log the lot.",
          },
        ],
      },
      {
        heading: "Step 3: choose a warning that gives you time to replace things",
        blocks: [
          {
            type: "p",
            text:
              "The default reminder is three days before the date and again on the day, at 09:00. For food that is right; for medicine it is too late, because the point is to have a replacement in the house before the old one lapses, and that means a trip to a pharmacy. In **Settings**, switch the reminder to **7 days before** (it still reminds you on the day as well) and pick an hour when you are likely to be near a shop rather than asleep: 12:00 or 18:00 suit most people better than 07:00.",
          },
          {
            type: "p",
            text:
              "One detail that catches people out: changing the reminder setting only applies to items you add or edit afterwards. So set the reminder preference before you start logging the cabinet, not at the end. If you have already added twenty items on the default, you can open each one and re-save it to pick up the new setting.",
          },
        ],
      },
      {
        heading: "Step 4: make sure the reminders can actually arrive",
        blocks: [
          {
            type: "p",
            text:
              "Reminders are scheduled on the phone itself, so they fire with no signal and no internet. What can stop them is Android, not the app. Three things to check once.",
          },
          {
            type: "list",
            items: [
              "**Notifications must be allowed** for the app. Android asks on first use; if you tapped away, go to Settings, Apps, Expiry Date Tracker, Notifications and turn them on.",
              "**On Android 12 and later, allow Alarms and reminders.** Exact-time reminders need this separate permission; it lives under the app's settings as \"Alarms and reminders\" on most phones.",
              "**Exempt the app from battery optimisation** if your phone is aggressive about background apps. Some manufacturers delay or drop scheduled alarms from apps they consider idle. Allowing the app to run in the background fixes it.",
            ],
          },
          {
            type: "p",
            text:
              "Test it: add a dummy item with a date a week from today, confirm the reminder arrives at the chosen hour, then delete the item.",
          },
        ],
      },
      {
        heading: "Step 5: the first-aid kit, the car and the travel bag",
        blocks: [
          {
            type: "p",
            text:
              "A household usually has more than one stash of medicine. Log the car kit and the travel kit in the same list, using the note field or the quantity to say which kit each item belongs to; the **Other** location works if Medicine feels wrong for a kit that also has plasters and saline. Sunscreen and contact-lens solution have dates too and belong in the same audit. The list groups everything by what expires first, so when the reminder arrives you see the item, where it is, and how many days it has left.",
          },
          {
            type: "p",
            text:
              "When you replace something, tap the tick to mark the old item used, which cancels its reminders, and add the new pack with its new date. That two-tap habit is what keeps the audit from needing to be repeated.",
          },
        ],
      },
      {
        heading: "What the app does not do, and when a spreadsheet is better",
        blocks: [
          {
            type: "p",
            text:
              "The list lives on your phone. There is no account, no cloud and no sharing, so a partner cannot see or edit the same list from their own phone; it is included in your Android device backup, which restores it on a new handset, but it is a personal list. For a household that wants two people to maintain one cabinet, a shared spreadsheet or a shared calendar with recurring events is the honest alternative, at the cost of entering dates by hand and losing the sorted-by-urgency view.",
          },
          {
            type: "p",
            text:
              "Scanning a barcode fills in the name, not the date; retail barcodes do not carry expiry information, so every tracker app asks you to enter it. And the app gives no medical guidance of any kind. It is a list with reminders, done well, for people who do not want an account to keep one.",
          },
          {
            type: "p",
            text:
              "It is free with a small banner ad; a one-time $1.99 purchase removes the ad and there is no subscription. It runs on Android 7.0 or later and is available in fifteen languages. If you did the [barcode and reminder setup guide](/blog/expiry-date-tracker-android-setup-barcode-reminders) for the kitchen already, the medicine audit is the same app, one more location tag, and a longer warning window. The equivalent for receipts and guarantees is the [Warranty Tracker](/apps/warranty-tracker) app, which follows the same no-account approach on iPhone.",
          },
        ],
      },
    ],
  },
  {
    slug: "recording-proper-4k-video-on-iphone-talking-head",
    title:
      "Recording Proper 4K Video on an iPhone: Settings, Storage, the Front Camera Question, and When 4K Is the Wrong Choice",
    description:
      "How to record genuinely good 4K talking-head video on an iPhone: the resolution and frame-rate settings, HEVC vs Most Compatible, storage per minute, locking exposure and white balance, why the front camera is fine, and the cases where 1080p is smarter.",
    datePublished: "2026-10-08",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text:
              "Every iPhone sold in the last several years can record 4K video, and most creators have it switched on without ever having thought about what it is doing. The result is a lot of footage that is technically 4K and practically no better than 1080p: soft because the phone was focused on the wall, flickering because exposure kept hunting, and taking up four times the space for no visible gain. This post is the setup walkthrough for recording 4K that is actually worth the pixels, written for people who film themselves talking to the camera. It covers the settings, the trade-offs, and the honest cases where you should turn 4K off.",
          },
        ],
      },
      {
        heading: "What 4K buys you, and what it does not",
        blocks: [
          {
            type: "p",
            text:
              "4K (3840 by 2160 pixels in landscape, the same count rotated in portrait) has four times the pixels of 1080p. For a talking-head video the benefit is rarely that viewers see more detail in your face; most of them watch on a phone, where the difference is invisible. The real benefits are three. You can crop: a 4K frame lets you punch in to a tighter shot in the edit and still deliver 1080p, which is the cheapest way to add a second camera angle you do not own. It survives compression better: platforms re-encode everything, and a sharper source comes out of that process looking cleaner. And it future-proofs the footage for a larger screen.",
          },
          {
            type: "p",
            text:
              "What 4K does not do is fix light, focus, stability or sound. A 4K clip of a badly lit face is a very detailed record of bad lighting. If you have not already worked through the basics of position, light and audio, the [talking-head setup guide](/blog/talking-head-video-setup-guide-iphone) comes first; this post assumes that groundwork and adds the resolution layer on top.",
          },
        ],
      },
      {
        heading: "The settings, in order",
        blocks: [
          {
            type: "p",
            text:
              "Open Settings, then Camera. The relevant screens are Record Video and Formats. Here is what to set and why.",
          },
          {
            type: "list",
            items: [
              "**Record Video: 4K at 24, 25 or 30 fps.** Choose by region and taste: 24 fps looks filmic, 25 fps matches European broadcast and avoids flicker under 50 Hz lighting, 30 fps matches most social platforms and North American lighting. Pick one and stay on it for every clip in a project; mixing frame rates in one edit causes stutter. Do not use 60 fps for a talking head unless you plan to slow footage down; it doubles the file size and makes the image look like a news broadcast.",
              "**Formats: High Efficiency.** This records HEVC (H.265), which is roughly half the size of H.264 for the same quality. The Settings screen prints an estimate next to each resolution and frame rate; on recent iPhones 4K at 30 fps in High Efficiency is listed at roughly 170 MB per minute, and 4K at 60 fps well over double that. Switch to Most Compatible only if an old editing application or a client's workflow genuinely cannot open HEVC, and switch back afterwards. Note that some combinations, such as 4K at 60 fps, are only available in High Efficiency on many models.",
              "**HDR Video: off for talking heads.** HDR looks superb on an iPhone screen and causes grief everywhere else: washed-out colours when uploaded, odd skin tones indoors, and mismatches when you mix it with non-HDR clips or graphics. Turn it on deliberately for scenery, not by default for faces.",
              "**Lock Camera and Lock White Balance: on.** Lock Camera stops the phone switching between its lenses mid-clip, which is a visible jump. Lock White Balance stops skin tones drifting as a cloud passes the window. Both are under Record Video on models that support them.",
              "**Grid and Level: on.** Not quality settings, but they are the difference between a straight horizon and a tilted one you only notice when it is too late to reshoot.",
            ],
          },
        ],
      },
      {
        heading: "The front camera is fine; the eye line is what matters",
        blocks: [
          {
            type: "p",
            text:
              "Creators are regularly told to use the rear camera because it is better. It is better, on paper: larger sensor, better lens, more light. In practice the trade is the other way round for a talking-head video. Using the rear camera means you cannot see the framing, cannot see the script, and cannot tell when your head has drifted out of shot until you check the clip afterwards. The front camera on any iPhone from the last few years records 4K at 24, 25 and 30 fps, and in the light you should be using anyway, a window or a soft panel, the quality difference between the two cameras is far smaller than the difference between a clip where you are looking at the lens and one where you are not.",
          },
          {
            type: "p",
            text:
              "That eye line is the whole reason a camera-overlay teleprompter exists. [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) floats the script over the front-camera preview, next to the lens, so reading and looking at the camera are the same movement; it records portrait 4K through that same preview, and the script never appears in the saved video. If you have been avoiding the front camera for quality reasons, try one clip each way at 4K in good light and compare them on a laptop screen. Most people stop worrying about it. The earlier post on [keeping eye contact with the camera](/blog/how-to-keep-eye-contact-with-the-camera) covers the habit side of this.",
          },
        ],
      },
      {
        heading: "Focus and exposure: the two things 4K makes more visible",
        blocks: [
          {
            type: "p",
            text:
              "At 1080p, slightly soft focus hides. At 4K it does not. Before every recording, tap on your face in the preview to set focus and exposure there, then press and hold until you see the AE/AF Lock label, so the camera stops reconsidering every time you move. If the app you are recording in does not expose that control, keep still and keep the light steady; autofocus on iPhones is good, but it is also keen, and a hand gesture that passes the lens can pull focus to your fingers for half a second.",
          },
          {
            type: "p",
            text:
              "Exposure flicker is the other 4K-visible fault. It comes from light that changes, usually a window with moving cloud or a lamp on a slightly flickering dimmer, and from the phone adapting to it. Lock exposure, close the curtain and use a lamp on a stable supply, and the problem disappears. If your face is too dark against a bright window, move so the window is in front of you rather than behind you; no resolution setting fixes backlighting.",
          },
        ],
      },
      {
        heading: "Storage: the practical arithmetic",
        blocks: [
          {
            type: "p",
            text:
              "At roughly 170 MB per minute for 4K at 30 fps in HEVC, a one-hour batch-recording session of takes and retakes is around 10 GB. That is manageable on a 256 GB phone and painful on a 64 GB one. Three habits help. Review takes immediately and delete the bad ones while you still remember which they were. Offload finished takes to a computer or external drive at the end of each session rather than letting them pile up for a month. And if you are the kind of creator who records a week of content in one sitting, check free space before you start; a multi-take session like the one described in the [voiceover and podcast post](/blog/teleprompter-for-voiceovers-and-podcasts) depends on not running out halfway through take fourteen.",
          },
          {
            type: "p",
            text:
              "If space is tight, 4K at 24 fps uses noticeably less than 30 fps, and 1080p at 30 fps uses less than half of either. Dropping to 1080p for throwaway content and keeping 4K for anything you might crop or reuse is a sensible policy.",
          },
        ],
      },
      {
        heading: "When 4K is the wrong choice",
        blocks: [
          {
            type: "list",
            items: [
              "**Low light.** The phone compensates by raising ISO, and at 4K the noise is clearer, not hidden. A well-lit 1080p clip beats a noisy 4K one every time.",
              "**Long recordings on an older phone.** Extended 4K sessions warm the phone and can trigger throttling or a recording stop; 1080p is cooler and safer for a forty-minute lecture.",
              "**Content that is only ever a 60-second vertical clip.** If you will never crop and the platform will downscale anyway, 1080p saves space and upload time with no visible loss. The [60-second script post](/blog/ideal-script-length-for-a-60-second-video) is where this kind of content lives.",
              "**Editing on a laptop that struggles.** 4K HEVC timelines are heavy. If your editor stutters, either record 1080p or create proxies; do not fight the machine.",
              "**When the goal is the first take, not the best take.** Resolution is a quality setting, and quality settings invite perfectionism. If you are still finding your voice on camera, lock in the basics, record at 1080p, and come back to 4K when the words are working.",
            ],
          },
        ],
      },
      {
        heading: "A pre-flight checklist",
        blocks: [
          {
            type: "list",
            items: [
              "Settings: 4K at 24, 25 or 30 fps; High Efficiency; HDR off; Lock Camera and Lock White Balance on.",
              "Free space: at least 2 GB per ten minutes you plan to record, plus margin.",
              "Light in front of you, stable, not flickering.",
              "Focus and exposure locked on your face.",
              "Phone on a tripod or a solid prop, in portrait if the content is vertical, lens at eye height.",
              "Script loaded and positioned next to the lens; one rehearsal read before the first take.",
            ],
          },
          {
            type: "p",
            text:
              "Do all of that once, save it as your default, and the resolution question stops being a question. Next in the series: batch-recording a week of content in one sitting, the workflow that makes all of these settings pay off.",
          },
        ],
      },
    ],
  },
  {
    slug: "photograph-orionid-meteor-shower-iphone-october-2026",
    title:
      "How to Photograph the Orionid Meteor Shower With an iPhone (21–22 October 2026): Timing, Moon, Settings and Realistic Odds",
    description:
      "The Orionids peak on the morning of 21 October 2026 with a bright gibbous moon. When to go out, where to look, why the Moon's setting time decides your odds, which iPhone settings catch a meteor, and what Night Cam's Stars, Trails and Time-lapse presets can and cannot do.",
    datePublished: "2026-10-08",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text:
              "The Orionids are the autumn meteor shower, debris from Halley's Comet that the Earth runs into every October. The 2026 peak is predicted for 21 October, with the best viewing in the dark hours before dawn on the mornings of 21 and 22 October. It is not the strongest shower of the year, and this year's bright Moon makes it harder still, but it is reliable, it is visible from both hemispheres, and its meteors are fast and often leave glowing trains. Photographing one with a phone is possible and is mostly a question of planning. This guide covers the timing, the Moon problem, what to point the phone at, the settings that give you a chance, and what a night-sky camera app like Night Cam can realistically do for you.",
          },
        ],
      },
      {
        heading: "The 2026 facts you need",
        blocks: [
          {
            type: "list",
            items: [
              "**Active period:** late September to late November; the shower is active now and the rate climbs towards the peak.",
              "**Peak:** 21 October 2026, with the two best mornings being 21 and 22 October. The radiant, the point the meteors appear to come from, rises before midnight and is highest around 2 a.m. local time.",
              "**Expected rate:** roughly 10 to 20 meteors per hour under a dark sky at the peak, fewer with light pollution or moonlight. In rare years the Orionids have reached 50 to 75 an hour; nobody is predicting that for 2026.",
              "**Speed:** about 66 kilometres per second, among the fastest of any shower, which is why Orionids are brief streaks rather than slow fireballs.",
              "**The Moon:** a bright waxing gibbous, around 80 percent lit, with full Moon on 26 October. The Moon sets in the early hours, several hours before dawn on the peak mornings, which is the single most important fact in this article.",
            ],
          },
        ],
      },
      {
        heading: "Plan around the Moon, not the peak hour",
        blocks: [
          {
            type: "p",
            text:
              "A gibbous Moon washes out faint meteors and, more to the point for a phone, floods a long exposure with grey. The good news is that on 21 and 22 October the Moon sets before the best viewing hours. Check the moonset time for your location, then plan to be in position and settled from moonset until the sky starts to brighten; for most of Europe and North America that is roughly 3 a.m. to the start of dawn. Night Cam's Tonight tab shows the moon phase and the next twelve hours of cloud cover for where you are, which answers the two questions that matter the night before: will the Moon be gone, and will the sky be clear.",
          },
          {
            type: "p",
            text:
              "Give your eyes twenty minutes to adapt and keep them adapted. A phone screen at normal brightness undoes that in seconds. Night Cam's red night mode turns the whole interface red, which protects your night vision while you adjust settings and check frames; if you are using the built-in Camera app instead, drop the screen brightness as low as it goes before you leave the house.",
          },
        ],
      },
      {
        heading: "Where to point the phone",
        blocks: [
          {
            type: "p",
            text:
              "Do not aim at Orion. The meteors radiate from near the club of Orion but appear all over the sky, and the ones closest to the radiant are short; the longest, most photogenic streaks are 40 to 60 degrees away from it. Aim the phone at a dark patch of sky a good distance from Orion, ideally with something on the horizon for scale, and accept that this is a numbers game. Then use the widest lens you have. The main 1x lens gathers the most light on most iPhones and is the usual recommendation for stars; the ultra-wide covers more sky and therefore catches more meteors, at the cost of a noisier, softer frame. For meteors specifically, the ultra-wide is a defensible choice. Try both.",
          },
        ],
      },
      {
        heading: "The honest part: how a phone catches a meteor",
        blocks: [
          {
            type: "p",
            text:
              "A dedicated camera for meteors runs continuous 15- to 30-second exposures for hours and keeps the one or two frames that caught something. A phone cannot run an unattended hour of raw long exposures in the Camera app, so you need a different strategy, and no app, including Night Cam, has a magic meteor preset. What you have are three approaches that each give you a real chance:",
          },
          {
            type: "list",
            items: [
              "**Repeated stacked stills.** Night Cam's Stars preset takes a 16-second stacked exposure after a 3-second countdown, which is enough time for a bright Orionid to cross the frame. Fire it again as soon as each capture finishes, for as long as you can stand the cold. Each capture is a lottery ticket; thirty tickets an hour is a fair number.",
              "**A star-trails session.** The Trails preset accumulates light over a long session into one image. Stars draw arcs; a meteor that crosses during the session draws a straight streak that cuts across those arcs, which is a distinctive and rather beautiful result. This is the closest thing a phone has to the dedicated-camera method, and the one most likely to catch something if you can leave the phone running.",
              "**Time-lapse.** The Time-lapse preset records the sky moving. A meteor appears in one or two frames of the result, which you can freeze and export. You get a lower-quality still than the other two methods, but you also get a clip, and a clip with a meteor in it is worth more on social platforms than a still.",
            ],
          },
          {
            type: "p",
            text:
              "Whichever you use, the phone must not move at all. A tripod with a phone clamp, or the phone wedged against a wall or a fence post, is not optional. The 3-second countdown before Night Cam captures exists so that your tap does not shake the frame; the same logic applies to the built-in Camera, where a volume-button press or a Bluetooth remote is steadier than tapping the screen.",
          },
        ],
      },
      {
        heading: "Doing it with the built-in Camera app",
        blocks: [
          {
            type: "p",
            text:
              "If you would rather not install anything, the built-in Camera app's Night mode on a tripod gives you exposures of up to around 30 seconds on recent models when the phone detects it is stable. Turn the flash off, tap the darkest part of the sky and drag the exposure slider down slightly so the sky does not turn grey, and shoot repeatedly. Its weaknesses for meteors are that you cannot run it unattended and that each shot needs a tap. For the Moon, incidentally, do the opposite of everything here: it is bright, needs a short exposure, and comes out better with the Moon preset in Night Cam or a tap on the Moon itself in the Camera app to expose for it.",
          },
        ],
      },
      {
        heading: "Settings checklist for the night",
        blocks: [
          {
            type: "list",
            items: [
              "Battery full, and a power bank if you plan a trails or time-lapse session; long captures in the cold drain quickly.",
              "Flash off. Screen as dim as possible, or red night mode.",
              "Tripod or solid prop. Phone locked in position; do not touch it during a capture.",
              "Aim 40 to 60 degrees from Orion, with the widest lens you have.",
              "Focus set to infinity; Night Cam's presets lock it there, in the Camera app tap a bright star and hold to lock.",
              "Start after moonset, keep going until the sky brightens, and resist checking every frame.",
            ],
          },
        ],
      },
      {
        heading: "What Night Cam is, and what it costs",
        blocks: [
          {
            type: "p",
            text:
              "[Night Cam: Stars & Aurora](/apps/night-cam) is an iPhone-only app, for iOS 18 or later, built around two things: a free forecast and a night camera. The Tonight forecast shows the aurora chance for your location from NOAA's Kp forecast and OVATION model, the next twelve hours of cloud cover and the moon phase, and it is always free. The camera has presets for the Moon, Stars, Aurora, star Trails and City for photos, and Night video, Aurora Live and Time-lapse for video. The download is free and includes three captures; after that Pro is a one-time $4.99 purchase, or a $0.99 Night Pass unlocks everything for 48 hours, which is a sensible option for a single meteor-shower weekend. There is no subscription and no account.",
          },
          {
            type: "p",
            text:
              "If you have read the earlier guide to [iPhone camera settings for the northern lights](/blog/iphone-camera-settings-northern-lights), the stillness and focus advice is the same; the difference with meteors is that you are photographing something that may or may not happen in any given 16 seconds, so the strategy shifts from one careful shot to many repeated ones. The [aurora forecast explainer](/blog/aurora-forecast-kp-index-explained) covers the other thing worth checking on an October night, since a geomagnetic storm would make the same dark sky doubly worth being out in.",
          },
        ],
      },
      {
        heading: "Set your expectations, then go anyway",
        blocks: [
          {
            type: "p",
            text:
              "Be realistic. With a 10-to-20-per-hour shower, a phone, and a Moon that only sets a few hours before dawn, a good night might yield one or two frames with a meteor in them, and a cloudy night yields none. The people who get the photo are the ones who went out on both mornings, set up before moonset, and let the phone run. The ones who do not get the photo still spent a couple of quiet hours under a dark sky watching the fastest meteors of the year, which is not a bad consolation.",
          },
        ],
      },
    ],
  },
  {
    slug: "whatsapp-voice-note-wont-play-car-pc-email-convert-opus-to-mp3-android",
    title:
      "WhatsApp Voice Note Won't Play in the Car, on a PC or in an Email? Where .opus Files Fail and How to Fix It on Android",
    description:
      "Why a forwarded WhatsApp voice note refuses to play on a car stereo, Windows PC, email attachment or transcription tool, and the Android fix: share it to Opus to MP3 Converter, pick MP3 or WAV, and send a file that opens everywhere. Includes the batch and WAV cases.",
    datePublished: "2026-10-08",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text:
              "The voice note played perfectly in WhatsApp. Then you saved it, forwarded it, or plugged the phone into the car, and the same file either refused to open or appeared as a grey icon nobody could click. This is one of the most common small frustrations on Android, and the cause is always the same: chat apps save voice messages as .opus files, a format that is excellent for sending speech over a slow connection and poorly supported by almost everything outside the chat app. This guide goes through the places .opus files fail, explains why, and shows the two-minute fix on Android that produces a file that plays everywhere.",
          },
        ],
      },
      {
        heading: "Why it plays in WhatsApp and nowhere else",
        blocks: [
          {
            type: "p",
            text:
              "A WhatsApp voice note is stored as Opus audio in a file with a name like PTT-20261007-WA0004.opus; PTT stands for push-to-talk. Opus is a modern, efficient codec and WhatsApp decodes it with its own built-in player, so inside the app it always works. The trouble starts when the file leaves the app. Many players, editors and devices either do not include an Opus decoder at all or do not recognise the .opus extension, so they report the file as unsupported, play silence, or simply hide it. The content is fine; the container is the problem.",
          },
        ],
      },
      {
        heading: "The five places it usually fails",
        blocks: [
          {
            type: "list",
            items: [
              "**Car stereos and USB sticks.** Most car head units play MP3 and WAV from a USB stick and nothing else. Copy a folder of .opus voice notes onto a stick and the car either shows an empty folder or skips every track.",
              "**Windows PCs and older media players.** Recent Windows builds can play Opus in some apps, but older machines, corporate laptops with locked-down codecs, and classic players often cannot. The file shows with a generic icon and double-clicking does nothing useful.",
              "**Email and office attachments.** You can attach a .opus file to a Gmail message, but the person receiving it, especially on a work computer, frequently cannot open it. For anything going to a lawyer, HR department, landlord or insurer, an MP3 is the polite format.",
              "**Transcription and editing tools.** Many transcription services and audio editors accept MP3 and WAV but reject or mangle .opus. If you want the words out of a voice note, converting first removes a whole class of errors.",
              "**Old phones and tablets.** A relative's older Android tablet or a cheap MP3 player will often play nothing but MP3. Grandparents being sent a grandchild's voice message is a surprisingly common reason people search for this.",
            ],
          },
        ],
      },
      {
        heading: "The fix: convert on the phone before you send",
        blocks: [
          {
            type: "p",
            text:
              "[Opus to MP3 Converter: Voice](/apps/voice-note-audio-converter) is a free Android app that decodes Opus on the device and writes an MP3 or WAV in seconds. The workflow uses Android's share sheet, so you never need to find the file in a folder:",
          },
          {
            type: "list",
            items: [
              "In WhatsApp, long-press the voice note, tap Share (on some versions this is behind the three-dot menu), and choose Opus to MP3 Converter from the share sheet. You can also pick a file from your file manager if you already saved it.",
              "Choose MP3 or WAV. MP3 at 128 kbps is the right default: it plays on everything and stays small. WAV is lossless 16-bit audio, the better choice if the file is going into an editor or a transcription tool.",
              "Tap Convert. The result appears with its own Share button; tap it to send the file to Gmail, Drive, Files, Bluetooth, a USB-connected computer, or any other app.",
            ],
          },
          {
            type: "p",
            text:
              "The original voice note is left untouched, so you lose nothing by converting. Conversion runs entirely on the phone with no upload, no account and no sign-up, and the app works in airplane mode, which matters more than it sounds: a voice note from a family member or a doctor is exactly the kind of audio you do not want passing through a random website's server. It is free, with ads, and there are no watermarks and no limits on length or number of files.",
          },
        ],
      },
      {
        heading: "The car-stereo case, step by step",
        blocks: [
          {
            type: "p",
            text:
              "This is the most asked-about scenario, so here it is in full. Convert the voice notes to MP3 as above. Then either connect the phone to the computer by USB and copy the MP3s to the stick, or, if the car accepts Bluetooth audio, skip the stick entirely and play the MP3 from any music player app on the phone; Bluetooth playback was never the problem, the .opus file was. If you have dozens of voice notes, for example a series of driving directions or a language lesson a friend recorded for you, select them all in the app at once; batch conversion handles a whole folder with one tap and gives each result its own Share button.",
          },
        ],
      },
      {
        heading: "The email-to-an-office case",
        blocks: [
          {
            type: "p",
            text:
              "When a voice note is evidence, such as a landlord's promise, a verbal agreement with a contractor, or an instruction from a manager, you want it in a format the recipient can open without asking IT for help. Convert to MP3, attach it to the email, and mention in the message that it is a copy of a WhatsApp voice note with the original date. If the recipient also needs the surrounding conversation, the companion app [Chat Export Studio](/apps/chat-export-studio) turns the whole chat into a PDF, and the earlier post on [saving a WhatsApp chat as a PDF for HR, a landlord or an insurer](/blog/save-whatsapp-chat-as-pdf-android-for-hr-landlord-insurer) explains how to present it. For a message that needs to be read rather than heard, the [voice note to text](/apps/voice-note-to-text) app transcribes offline on the phone.",
          },
        ],
      },
      {
        heading: "When you do not need to convert",
        blocks: [
          {
            type: "list",
            items: [
              "**Sending to another WhatsApp user.** Just forward it. Converting adds nothing.",
              "**Playing it yourself on a modern Android phone.** Most current Android file managers and music apps play .opus natively; if yours does, leave it alone.",
              "**Uploading to a service that accepts Opus.** Some transcription and cloud tools now do. Try the original first; convert only if it is rejected.",
              "**Audio quality purists.** Converting to MP3 is a lossy-to-lossy step, and the MP3 will be very slightly worse than the Opus original. For speech it is inaudible; for a music clip someone sent as a voice note, choose WAV, which decodes without a second round of lossy compression.",
            ],
          },
        ],
      },
      {
        heading: "Other formats the app handles",
        blocks: [
          {
            type: "p",
            text:
              "Although the name says Opus, the converter opens .ogg and .oga, .m4a and .aac from iPhone users, .amr and .3gp from older Android recorders, .caf, .aiff, .flac, .mp3 and .wav, and writes any of them to MP3 or WAV. In practice that makes it a general fix for the question \"why won't this audio file open\" rather than a WhatsApp-only tool, and the share-sheet workflow is the same whatever the source. If you want the fuller comparison of free methods, including doing it on a computer with VLC or ffmpeg, the earlier guide to [converting .opus to MP3 on iPhone and Android](/blog/convert-opus-to-mp3-iphone-android) covers those; this post is the short version for the cases where the file simply has to play somewhere else, today.",
          },
          { type: "p", text: DISCLAIMER },
        ],
      },
    ],
  },
  {
    slug: "batch-recording-a-week-of-content-in-one-sitting-teleprompter",
    title: "Batch-Recording a Week of Videos in One Sitting: A Teleprompter Workflow That Doesn't Burn You Out",
    description:
      "How to batch-record five to seven talking-head videos in one session on an iPhone: script prep, a fixed setup, a running order that protects your energy, and a teleprompter that keeps every take on pace.",
    datePublished: "2026-10-09",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Posting daily is easy for about nine days. Then a busy week arrives, the lighting is wrong at 10 pm, and the streak dies. The creators who last do not film every day; they film once and post all week. Batch-recording is the single habit that turns a short-form channel from a daily scramble into a scheduled job, and a teleprompter is what makes it possible to get through seven scripts in two hours without your delivery falling apart by number four.",
          },
          {
            type: "p",
            text: "This is the workflow I use with [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) on an iPhone: what to prepare the night before, how to set up once so every video matches, the running order that protects your energy, and the trade-offs, because batching is not right for every kind of content.",
          },
        ],
      },
      {
        heading: "The night before: scripts in, decisions out",
        blocks: [
          {
            type: "p",
            text: "A batch session fails when it mixes writing with recording. Writing is slow and self-critical; recording needs momentum. Separate them completely. The evening before, finish every script you intend to film, and load them all into the app. The app keeps unlimited scripts, so make one per video and name them with a number and a hook word, like `03 cold showers`, so you can move down the list without reading each one to remember which it is.",
          },
          {
            type: "list",
            items: [
              "Write for the ear, not the page. Short sentences, contractions, one idea per line. Our post on [writing a script that doesn't sound written](/blog/write-a-script-that-doesnt-sound-written) covers the editing pass that matters most.",
              "Keep lengths similar. Five scripts of 120 to 150 words are far easier to batch than two short ones and a five-minute explainer, because your pacing and energy stay in one gear.",
              "Mark the hook. Put the first sentence on its own line and read it aloud three times while writing. The hook is the line you will fluff most often; it is also the line that decides whether anyone watches the rest.",
              "Decide the order now. Hardest or most important video second, not first; easiest video last. More on why below.",
            ],
          },
        ],
      },
      {
        heading: "Set up once, then do not touch it",
        blocks: [
          {
            type: "p",
            text: "The whole economic argument for batching is that setup happens once. Put the phone on a tripod at eye level, frame yourself, set the light, check the audio, and then leave every one of those alone for the whole session. If you have not built a repeatable setup yet, the [talking-head filming setup guide](/blog/talking-head-video-setup-guide-iphone) walks through it in detail; for batching, three settings deserve a second look.",
          },
          {
            type: "list",
            items: [
              "Text size and scroll. Set the script text large enough to read from arm's length without squinting, and pick your scrolling mode for the whole session. Voice-follow, which scrolls as you speak using on-device speech recognition and finds its place again when you stumble, is the better choice for batching because it needs no speed adjustment between scripts of different lengths. If you prefer the fixed-speed auto-scroll slider, test it on your longest script and leave it there.",
              "Overlay position. The app floats the script next to the front camera lens so your eyes stay on the lens. Once it reads naturally in one video, it reads naturally in all of them; moving it mid-session is how you end up with three videos where you look slightly down and four where you do not.",
              "Recording quality. Portrait 4K for everything, so the week's videos match and you can crop or punch in during editing. The script itself is never in the saved video, so there is nothing to hide later.",
            ],
          },
          {
            type: "p",
            text: "Do one real take of the first script and watch it back before continuing. Not for performance, for mechanics: is the audio clean, is the framing holding, is the light flickering. Fixing a problem after take one costs two minutes; discovering it after take seven costs the session.",
          },
        ],
      },
      {
        heading: "The running order that protects your energy",
        blocks: [
          {
            type: "p",
            text: "Energy in a batch session is a curve, not a line. You are stiff for the first video, peak around the second and third, plateau, and start to flatten after about five. Plan around the curve instead of fighting it.",
          },
          {
            type: "list",
            items: [
              "Video 1: a warm-up you would happily re-record. Something low-stakes and conversational. You are loosening your face and finding the pace, and the app's takes library means you can come back and redo this one at the end if the first attempt is wooden.",
              "Videos 2 and 3: the ones that matter. Your pinned post, the launch announcement, the video you have been putting off. You are warm, not yet tired, and your reading is at its most natural.",
              "Videos 4 and 5: the steady middle. Standard content, familiar format. If voice-follow is doing the scrolling, these go quickly because you are not managing a speed slider between scripts.",
              "Video 6 and beyond: short, easy, or optional. A quick reply, a one-tip video, something you can cut if your delivery is flagging. Stop before the dip shows on camera; a six-video week with energy beats a seven-video week where the last one is flat.",
            ],
          },
          {
            type: "p",
            text: "Between videos, stand up, drink water, and read the next script once off camera before you press record. Thirty seconds of silent read-through removes most first-take stumbles, and voice-follow will pick you up if one slips through anyway.",
          },
        ],
      },
      {
        heading: "Takes: how many, and when to move on",
        blocks: [
          {
            type: "p",
            text: "Batching punishes perfectionism. A rule that works: two full takes per script, then a third only if the hook was wrong in both. Record each as a separate take rather than restarting mid-sentence, so the library holds clean, complete files you can choose between later. The best take is usually the second; the fourth is rarely better than the second and costs you the energy you need for the next script.",
          },
          {
            type: "p",
            text: "If a middle line keeps tripping you, do not fight it on camera. Stop, edit the line in the script to the way you naturally say it, and go again. Because the app is fully offline, there is no sync step; the edited script is live the moment you close the editor.",
          },
        ],
      },
      {
        heading: "Keeping a batch from looking like a batch",
        blocks: [
          {
            type: "p",
            text: "Viewers notice when seven videos were clearly filmed in the same shirt in the same hour, and some creators are fine with that; it reads as a consistent brand. If you would rather hide it, change one thing between videos: a layer on or off, a different mug, a shift of the chair, a tweak to the background light. Keep the framing and the overlay position fixed and change only what the viewer sees, not what you see.",
          },
          {
            type: "p",
            text: "The bigger tell is energy, not clothing. This is where the running order earns its keep. The flattest video of the week should be a low-stakes one on a quiet day, not the one you spend money promoting.",
          },
        ],
      },
      {
        heading: "When not to batch",
        blocks: [
          {
            type: "p",
            text: "Batching is a tool for evergreen and planned content. It is wrong for anything that depends on the day: reactions to news, replies to comments, anything that opens with \"today\". It also fights against formats where spontaneity is the appeal; a scripted, batched vlog is a contradiction and viewers can feel it. And if you find that your batched videos all sound the same, the problem is usually the scripts, not the batching: the fix is more variation in hooks and structure, which is what [scripting hooks that hold watch time](/blog/scripting-hooks-that-hold-watch-time) is about.",
          },
          {
            type: "p",
            text: "There is also a storage cost. Seven portrait 4K videos with two takes each is a lot of footage on a phone. Offload the takes you are keeping to a computer or cloud drive after each session, and delete the rest from the library. Keep the scripts; they are the valuable part, and they weigh nothing.",
          },
        ],
      },
      {
        heading: "A two-hour batch session, start to finish",
        blocks: [
          {
            type: "list",
            items: [
              "0:00 Set up the tripod, light and framing. Load the first script. One test take, watched back.",
              "0:10 Video 1, warm-up. Two takes.",
              "0:20 Videos 2 and 3, the important ones. Two to three takes each, a stand-up break between.",
              "0:55 Videos 4 and 5. Two takes each.",
              "1:25 Video 6, short and easy. One or two takes. Decide honestly whether video 7 is worth filming today.",
              "1:40 Re-record video 1 if the warm-up was stiff. Offload the keepers, delete the rest.",
              "2:00 Done. Scheduling the posts is a separate, sitting-down job for another time.",
            ],
          },
          {
            type: "p",
            text: "Teleprompter: Camera Overlay is free on the App Store with occasional ads, a small one-time purchase removes them, there is no subscription and no watermark, and everything, including the speech recognition that drives voice-follow, runs on the phone. It is iPhone-only. Next in this series: using a teleprompter for sales and outreach videos, where the script has to sound personal to someone who knows it is not.",
          },
        ],
      },
    ],
  },
  {
    slug: "is-a-pretend-police-call-bad-for-kids-fear-vs-encouragement-good-behavior-police-call",
    title: "Is a Pretend Police Call Bad for Kids? Fear vs Encouragement, and How to Use One Without Scaring Your Child",
    description:
      "Pretend police call apps for kids range from threatening to gentle. The difference between fear-based and encouragement-based nudges, what Good Behavior Police Call does differently on iPhone, and the house rules that keep it kind.",
    datePublished: "2026-10-09",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Search for \"fake police call for kids\" and you will find two very different things wearing the same name. One is a scare: sirens, a stern voice, \"the police are coming if you don't behave\". The other is a bit of theatre: a friendly character rings, asks for one small thing, and rings back later to say well done. Parents asking whether a pretend police call is a bad idea are usually picturing the first and hoping for the second. This post is about the difference, why it matters more than the format, and how to use [Good Behavior Police Call](https://apps.apple.com/us/app/good-behavior-police-call/id6815485255) on iPhone in a way you will not regret.",
          },
          {
            type: "p",
            text: "I will not pretend to be a child psychologist, and this post does not cite studies it cannot verify. It relies on something most parents already know from experience: children do what fear tells them for about a week, and what encouragement tells them for a lot longer. If you only want the setup, our [earlier walkthrough of the app](/blog/pretend-police-call-for-kids-bedtime-good-behavior-police-call-iphone) covers the first call step by step.",
          },
        ],
      },
      {
        heading: "The fear version, and why it backfires",
        blocks: [
          {
            type: "p",
            text: "The threat version works once because it is a surprise. The second time, the child has learned one of two things. Either the police really might come for not brushing teeth, in which case you have taught a four-year-old that the people they should run towards in an emergency are the people who punish small children. Or, more likely, they work out that nobody came, and the threat becomes background noise along with \"I'm counting to three\". Neither outcome helps at bedtime next week.",
          },
          {
            type: "p",
            text: "There is a quieter cost too. Fear-based nudges make the parent the person who summoned the scary thing. Encouragement-based nudges make the parent the person who passes on good news. Over hundreds of bedtimes, which of those you want to be is not a close call.",
          },
        ],
      },
      {
        heading: "What an encouragement-based call looks like",
        blocks: [
          {
            type: "p",
            text: "Good Behavior Police Call is built entirely around the second model, and the design choices are specific enough to list. There are no threats, no sirens and no talk of being in trouble. The two characters, Officer Pat (bright and warm) and Officer Sam (calm and steady), are explicitly made-up and not connected to any police force. On a call the officer explains why the job matters in a child's terms, such as sleep helping you grow or sugar bugs loving skipped teeth, asks for one small thing, and promises to check in afterwards. Then you get the last word: you tell your child the officer was proud of them.",
          },
          {
            type: "p",
            text: "Crucially, nudges are only half the app. Of the 13 calls, two are pure praise, Great day and Super helper, and they ring when things went right. That is the mechanism that keeps the officer someone a child is pleased to hear from. If the character only ever appears when something is wrong, it drifts toward the fear model no matter how gentle the script is; if it also appears to celebrate, it stays on the child's side.",
          },
        ],
      },
      {
        heading: "The 13 calls, sorted by how much they lean on authority",
        blocks: [
          {
            type: "p",
            text: "Not every call carries the same weight, and knowing which is which helps you choose. Roughly from lightest to heaviest:",
          },
          {
            type: "list",
            items: [
              "Praise calls, no authority at all: Great day and Super helper. Start here, ideally before you ever use a nudge, so the first time your child meets the officer it is good news.",
              "Routine nudges, the officer as a friendly reminder: Bedtime, Brushing teeth, Getting dressed, Screens off, Eating dinner, Tidying up. These are the bread and butter and the lowest risk.",
              "Social nudges, which touch on how the child treats others: Being kind to a brother or sister, Sharing and taking turns, Listening the first time. Use these sparingly; a sibling argument has two sides, and a call aimed at one child can feel like taking sides.",
              "Safety and regulation: Buckling up in the car, and Calming down, which includes a breathing exercise. Buckling up is a genuinely good fit for a gentle authority figure. Calming down is the one to be most careful with; a child in the middle of a meltdown may not be able to engage with a video call at all, and the breathing exercise works best when offered early, before the peak.",
            ],
          },
          {
            type: "p",
            text: "Bedtime and Great day are free forever; a single one-time purchase unlocks the rest, removes the small menu-screen ads (there are never ads during a call), and includes any calls added later. No subscription. The app is iPhone-only and needs iOS 15.1 or later.",
          },
        ],
      },
      {
        heading: "House rules that keep it kind",
        blocks: [
          {
            type: "p",
            text: "The app is designed to be gentle, but how you use it decides whether it stays that way. These are the rules I would set before the first call.",
          },
          {
            type: "list",
            items: [
              "Read the whole script first. The app lets you read every call before your child hears it. Do it, so nothing in the call surprises you and you can decide whether the wording fits your child.",
              "Never use it as a threat. \"Do you want me to call the officer?\" turns an encouragement tool into a fear tool in one sentence. The call should arrive as a pleasant surprise, not as a consequence.",
              "Follow every nudge with your own praise. The app deliberately leaves you the last word. Use it. The officer is the setup; you are the payoff.",
              "Use the delay. You can ring now, or in 10 seconds, 30 seconds or a minute, so you can hand the phone over first and not be seen tapping. The call is more convincing, and more fun, when the child answers it themselves.",
              "Let them decline. If the child declines the call, the officer can try once more. If they decline again, let it go; a child who does not want to talk to the officer tonight is telling you something.",
              "Retire it before it gets old. A pretend character has a shelf life. Most children see through it eventually, and the graceful end is for the child to say \"it's not a real officer, is it?\" and for you to say \"no, but you really did brush your teeth every night\".",
            ],
          },
        ],
      },
      {
        heading: "Video or voice, and why it matters for anxious children",
        blocks: [
          {
            type: "p",
            text: "The app offers both a video call, with an animated officer talking on screen, and a voice call. For a confident child, video is more engaging and holds attention through a teeth-brushing call. For a shy or anxious child, voice is the gentler first contact: there is no face to feel watched by, and the call feels more like a story being read. On video calls there is an optional self-view in the corner, shown live and never recorded or saved; some children love seeing themselves, some find it distracting, and you can leave it off.",
          },
          {
            type: "p",
            text: "Every call is fully voiced in nine languages, English, Spanish, French, German, Italian, Portuguese, Hindi, Japanese and Chinese, and the app follows your iPhone's language or lets you pick one in Settings. For a bilingual household this is worth a thought: the language your child associates with comfort at bedtime may not be the phone's language.",
          },
        ],
      },
      {
        heading: "Privacy, since it is a child holding the phone",
        blocks: [
          {
            type: "p",
            text: "There are no accounts and no sign-up. The calls are stored on the phone and work offline, the app never places a real phone call, ads in the free version are non-personalised, and the self-view is never recorded. Those are the things I would check before handing any app to a child, and they are the right answers here.",
          },
        ],
      },
      {
        heading: "The honest answer to the question",
        blocks: [
          {
            type: "p",
            text: "Is a pretend police call bad for kids? A threatening one is: it trades a quiet evening now for a worse relationship with authority, and with you, later. An encouragement-based one, used occasionally, read in advance, never as a threat, and always followed by your own praise, is a piece of bedtime theatre in the same family as the tooth fairy and the elf. Good Behavior Police Call is firmly in that second group by design: friendly made-up characters, no sirens, praise calls built in, and you getting the last word. Whether it is right for your particular child is still your call, which is exactly how it should be.",
          },
        ],
      },
    ],
  },
  {
    slug: "what-does-export-chat-mean-in-whatsapp-android-and-how-to-turn-it-into-a-pdf",
    title: "What Does \"Export Chat\" Mean in WhatsApp on Android? What It Includes, What It Leaves Out, and How to Turn It Into a PDF",
    description:
      "\"Export chat\" in WhatsApp on Android saves a copy of a conversation as a text file. What is in the file, what is not, whether the other person is told, the message limits, and how to turn the export into a readable PDF.",
    datePublished: "2026-10-09",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Open a WhatsApp chat on Android, tap the three dots, tap More, and there it is: **Export chat**. Plenty of people see that option and wonder what it does. Does it send the conversation somewhere? Does the other person find out? Is it the same as a backup? The questions arrive in every language, and the honest answer is that WhatsApp's own wording does not explain much. This post does: what Export chat means, exactly what ends up in the file, what is missing from it, and how to turn the raw export into a PDF you can actually read, using [Chat Export Studio](/apps/chat-export-studio) on Android.",
          },
        ],
      },
      {
        heading: "Export chat, in one sentence",
        blocks: [
          {
            type: "p",
            text: "Export chat makes a copy of one conversation as a plain text file, and hands that file to you through Android's share sheet so you can save it, email it or open it in another app. It does not change the chat, it does not delete anything, and it does not send anything to the other person. Think of it as printing the conversation to a file rather than to paper.",
          },
          {
            type: "p",
            text: "It is not a backup. A WhatsApp backup saves all your chats to Google Drive in a format only WhatsApp can restore. Export chat saves one conversation in a format anything can open, which is exactly why it is useful for keeping a record, handing a copy to someone, or reading an old conversation without WhatsApp.",
          },
        ],
      },
      {
        heading: "What is in the export",
        blocks: [
          {
            type: "p",
            text: "The export is a text file, usually named along the lines of `WhatsApp Chat with <name>.txt`, delivered on its own or inside a .zip. Each message is one line: the date, the time, the sender's name as saved in your contacts (or their number if not saved), and the message text. System events appear as lines too: when the chat was created, when someone joined or left a group, the encryption notice, and when a message was deleted. Media is where the choice you made matters.",
          },
          {
            type: "list",
            items: [
              "Without media: photos, videos, voice notes, stickers and documents appear only as placeholders such as `<Media omitted>`. The file is tiny and the export is quick. This is the option to use for a record of what was said.",
              "Include media: the attachments are added alongside the text file in a .zip. The export is much larger, can take a while, and WhatsApp includes media only for the most recent part of a long chat.",
            ],
          },
          {
            type: "p",
            text: "On the limits, the commonly cited figures are up to 40,000 messages without media and up to 10,000 with media; older messages beyond those limits are simply not included, and WhatsApp does not warn you when a chat is longer than that. If you need a very long group history, export without media. Timestamps follow your phone's clock setting, 12-hour or 24-hour, which matters later when another app has to parse the file.",
          },
        ],
      },
      {
        heading: "What is not in the export",
        blocks: [
          {
            type: "list",
            items: [
              "Calls. Voice and video call history is not part of a chat export.",
              "Disappearing messages that have already disappeared, and view-once photos or videos. If it is gone from the chat, it is gone from the export.",
              "Messages deleted for everyone appear only as a \"This message was deleted\" line, not with their original text.",
              "Reactions and some formatting may be lost or appear as plain characters, depending on the WhatsApp version.",
              "Anything from a phone you no longer have. Export works on the chat as it exists on this device.",
            ],
          },
        ],
      },
      {
        heading: "Does the other person know?",
        blocks: [
          {
            type: "p",
            text: "No. Exporting a chat is a local action on your phone. The other participant, or the group, gets no notification and sees no change. The flip side is also true: anyone you share a chat with can export it, which is worth remembering before you write anything in a group you would not want on paper.",
          },
          {
            type: "p",
            text: "One regional note. In Germany, WhatsApp removed the Export chat option from the app some years ago, and users there still do not see it in the menu. If you are in Germany and cannot find the option, that is why, not a setting you have missed.",
          },
        ],
      },
      {
        heading: "Step by step on Android",
        blocks: [
          {
            type: "list",
            items: [
              "Open the chat or group you want to export.",
              "Tap the three-dot menu in the top-right corner, then tap More, then Export chat. On some Samsung and Xiaomi phones the menu wording differs slightly, but the option is in the same place.",
              "Choose Without media or Include media. For a readable record, choose Without media.",
              "Android's share sheet opens. Pick where the file should go: Save to Drive, Files, Gmail, or directly into an app that can open it. If Chat Export Studio is installed, it appears in the share sheet and you can send the export straight to it.",
            ],
          },
          {
            type: "p",
            text: "If you saved the file instead of sharing it directly, open the Files app, find the .txt or .zip, tap it and choose Chat Export Studio, or open the app and use its own file picker to load the export.",
          },
        ],
      },
      {
        heading: "Turning the export into a PDF you can read",
        blocks: [
          {
            type: "p",
            text: "The raw export is one long wall of text, and a 2,000-message group chat is almost impossible to follow in it. Chat Export Studio opens the .txt or the .zip, from an Android or an iPhone export and in 12-hour or 24-hour time, and lays it out the way the chat looked on screen: one bubble per message with sender, date and time, one-to-one chats left and right, group chats with a colour per participant. System notices and media placeholders are shown as small pills instead of clutter, and pages break between messages rather than through them, so a printout stays readable.",
          },
          {
            type: "p",
            text: "The moment the file opens you also get statistics: total messages and words, messages per participant as counts and percentages, the busiest hour of the day, the date range, the media count and the most-used emoji. Tap Export styled PDF, and the PDF is generated on the phone and handed to Android's share sheet, ready to save to Drive or Files, email, or print. There is a built-in sample chat if you want to try the flow before exporting one of your own.",
          },
          {
            type: "p",
            text: "Everything happens on the device. There is no account and no sign-up, nothing is uploaded, it works in airplane mode, and the Play listing describes it as free to install with ads and a one-time purchase, with no subscription. For a conversation you are exporting precisely because it is sensitive, that matters more than any feature; our earlier post on [saving a WhatsApp chat as a PDF for HR, a landlord or an insurer](/blog/save-whatsapp-chat-as-pdf-android-for-hr-landlord-insurer) goes into when a PDF record is useful and what it can and cannot prove.",
          },
        ],
      },
      {
        heading: "Quick answers",
        blocks: [
          {
            type: "list",
            items: [
              "Export chat meaning: save a copy of one WhatsApp conversation as a text file you can keep or share.",
              "Is it safe? Yes for the chat itself; nothing is changed or deleted. Be careful where you send the file afterwards, because it contains the whole conversation.",
              "Does it include photos? Only if you choose Include media, and then only for the more recent part of a long chat.",
              "Can I export a group chat? Yes, the same way; the file lists every participant's messages.",
              "Can I undo it? There is nothing to undo on the chat side. Delete the exported file if you no longer want the copy.",
              "Why can I not find Export chat? Check under the three dots, then More. If you are in Germany, the option is not available in WhatsApp.",
            ],
          },
          {
            type: "p",
            text: DISCLAIMER,
          },
        ],
      },
    ],
  },
  {
    slug: "teleprompter-for-sales-and-outreach-videos",
    title: "Teleprompter for Sales and Outreach Videos: How to Read a Script That Still Sounds Personal",
    description:
      "How to record personalised sales, prospecting and outreach videos on an iPhone with a teleprompter: the one-paragraph script structure, the parts you must say unscripted, eye contact, length, and the mistakes that make a video feel mass-produced.",
    datePublished: "2026-10-10",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "A sales video has one job that a tutorial or a Reel does not: the person watching has to believe it was made for them. That is also exactly what a teleprompter threatens. Read a prospecting script word for word and the viewer can tell within three seconds that they are number forty-one on a list. Skip the script and you ramble, forget the one number that mattered, and record it four times. The craft is in the middle: a script that holds the structure and the facts, and a delivery that leaves room to be a person.",
          },
          {
            type: "p",
            text: "This post is the practical version of that balance for founders, account executives, recruiters, freelancers and anyone who sends short videos to specific people. It assumes you are recording on an iPhone, probably in a hurry, probably more than one in a sitting. Where a teleprompter app helps, we say how; where it hurts, we say that too.",
          },
        ],
      },
      {
        heading: "Why outreach videos fail (it is not the camera)",
        blocks: [
          {
            type: "p",
            text: "Most bad outreach videos share three faults. They open with the sender instead of the recipient (\"Hi, I'm Priya from...\"). They are too long, because without a script people pad. And they look away from the lens at the key moment, because that is when the sender glances at notes. A teleprompter that sits beside the front camera fixes the third problem outright, and a good script fixes the first two. What it cannot fix is a video that says nothing specific to the recipient; no amount of eye contact rescues a generic pitch.",
          },
        ],
      },
      {
        heading: "The four-part script that stays personal",
        blocks: [
          {
            type: "p",
            text: "Write the script as four short blocks and mark which ones are fixed and which ones change per person. The fixed parts go on the prompter verbatim. The variable parts go on the prompter as a prompt in brackets, which you fill in live.",
          },
          {
            type: "list",
            items: [
              "**The hook, variable (5 to 8 seconds).** One sentence about them, not you: something you noticed on their site, their hiring page, their last post, their product. On the prompter it reads as [Their thing: what I noticed]. You say it in your own words, looking at the lens, because you just read it a moment ago and it is fresh.",
              "**The bridge, fixed (5 seconds).** One sentence connecting their thing to what you do. This can be word-for-word; it is the same for everyone and it needs to be tight.",
              "**The value, fixed (15 to 25 seconds).** The one claim, the one number, the one example. This is the part people get wrong unscripted, so script it fully and read it. It is also where a prompter earns its keep: numbers and names are exactly what you forget under mild pressure.",
              "**The ask, variable (5 to 8 seconds).** A specific next step with a specific time. On the prompter: [Ask: 15 min Thursday?]. Say it to them, not to the script.",
            ],
          },
          {
            type: "p",
            text: "That structure lands at roughly 40 to 50 seconds spoken, which is the right length for a first touch. If you want the arithmetic on words per second, our post on [the ideal script length for a 60-second video](/blog/ideal-script-length-for-a-60-second-video) has it; the short version is about 110 to 130 words.",
          },
        ],
      },
      {
        heading: "Setting up the prompter so it reads as a conversation",
        blocks: [
          {
            type: "p",
            text: "In [Teleprompter: Camera Overlay](/apps/teleprompter-camera-overlay) the script floats over the camera preview next to the front lens, so your eyes stay close enough to the camera that the viewer reads it as eye contact. Three settings matter for outreach specifically:",
          },
          {
            type: "list",
            items: [
              "**Use voice-follow, not auto-scroll.** Voice-follow scrolls as you speak, using on-device speech recognition, and finds your place again if you stumble. That is what lets you leave the script for the variable parts: when you ad-lib the hook, the text waits; when you return to the fixed bridge, it picks you up. Auto-scroll at a fixed speed will run away from you during the personal bits. We compared the two modes in [voice-follow vs auto-scroll](/blog/voice-follow-vs-auto-scroll-teleprompter).",
              "**Large text, short lines.** Set the text size up so a line holds five or six words. Your eyes move less, which keeps the gaze steady, and the brackets for variable parts are easier to spot.",
              "**Put the bracketed prompts in capitals.** [THEIR THING] stands out in a wall of text and tells your brain: stop reading, start talking.",
            ],
          },
          {
            type: "p",
            text: "The script never appears in the saved video, and recording is portrait 4K, which matters when the video is going to be watched on a phone inside an email or a LinkedIn message.",
          },
        ],
      },
      {
        heading: "Recording ten personalised videos in a row without sounding tired",
        blocks: [
          {
            type: "p",
            text: "Outreach is a volume game, so you will batch. Do the research first, not between takes: for each person write the hook line and the ask line into a copy of the script before you sit down. Teleprompter: Camera Overlay keeps unlimited scripts, so one script per prospect, named after them, is the easiest way to avoid saying the wrong company name on camera, which is the single most embarrassing outreach mistake and more common than you would think.",
          },
          {
            type: "list",
            items: [
              "Record in one setting, one outfit, one light. Consistency reads as reliability.",
              "Do the fixed value block exactly the same every time; vary only what is meant to vary. Trying to improvise the core claim ten times produces nine worse versions.",
              "Two takes per person maximum. The second is usually the better one; the fifth never is.",
              "Stand up between every three videos and re-read the next hook out loud once off camera. Thirty seconds of silent read-through removes most first-take stumbles.",
              "Stop when your energy drops. A flat delivery in the hook is worse than sending the video tomorrow.",
            ],
          },
          {
            type: "p",
            text: "The longer version of this workflow is in [batch-recording a week of content in one sitting](/blog/batch-recording-a-week-of-content-in-one-sitting-teleprompter); the same rules apply, with the added twist that every video here has a different name in it.",
          },
        ],
      },
      {
        heading: "When not to use a teleprompter for outreach",
        blocks: [
          {
            type: "p",
            text: "Two honest exceptions. First, replies. If someone has written back and you are answering a specific question, do not script it; your reply should sound like a person thinking, and a prompter makes it sound like a person reading. Jot three words on a sticky note and talk. Second, very senior or very small audiences. If you are sending one video to one CEO, the 45-second structure still applies, but write it as bullet prompts only, not sentences, so nothing about it feels produced. The prompter is for the twentieth video of the day, when your structure would otherwise collapse; it is not for the one video that only ever needed to be good once.",
          },
          {
            type: "p",
            text: "A related trade-off: voice-follow needs to hear you clearly. In an open office or a car it may lag on the ad-libbed parts. In that case switch to auto-scroll for the fixed blocks and pause it manually, or record somewhere quieter.",
          },
        ],
      },
      {
        heading: "Compliance, claims and the words you cannot improvise",
        blocks: [
          {
            type: "p",
            text: "If you sell anything regulated (financial products, health services, anything with legally required wording), the fixed value block is where the approved language lives, and the prompter is how you guarantee you say it the same way every time. Keep the compliance sentence as its own paragraph on the script, read it exactly, and do not bracket it. This is one of the few situations where reading verbatim is the point rather than the problem.",
          },
        ],
      },
      {
        heading: "A one-minute checklist before you hit record",
        blocks: [
          {
            type: "list",
            items: [
              "Correct prospect's script loaded, their name and company checked.",
              "Hook and ask lines rewritten for them, in brackets, in capitals.",
              "Voice-follow on, text size large, phone at eye level, front lens next to the first line of text.",
              "Value block is word-for-word and under 25 seconds when read aloud.",
              "One specific time proposed in the ask.",
              "Quiet enough for speech recognition to keep up.",
            ],
          },
          {
            type: "p",
            text: "Teleprompter: Camera Overlay is free on the App Store with occasional ads, a small one-time purchase removes them, there is no subscription and no watermark, and everything, including the speech recognition behind voice-follow, runs on the phone and works offline. It is iPhone-only. Next in this series: overcoming camera anxiety, for the people who have the script, the setup and the plan, and still freeze when the red light comes on.",
          },
        ],
      },
    ],
  },
  {
    slug: "convert-whatsapp-voice-note-to-wav-iphone-lossless-for-editing-transcription-evidence",
    title: "WhatsApp Voice Note to WAV on iPhone: When You Need Lossless Audio for Editing, Transcription or Evidence",
    description:
      "MP3 is fine for listening; WAV is what editors, transcription services and formal records usually want. How to convert a WhatsApp .opus voice note to WAV on an iPhone, offline, and when MP3 is actually the better choice.",
    datePublished: "2026-10-10",
    readingMinutes: 6,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Most people who convert a WhatsApp voice note want an MP3 so it plays in the car or attaches to an email. But there is a second group with a different problem: the audio has to go into GarageBand or Audacity, be uploaded to a transcription or captioning service, be handed to a lawyer, an HR department or an insurer, or be archived for years. Those situations tend to ask for WAV, and the reasons are worth understanding before you pick a format.",
          },
          {
            type: "p",
            text: "This guide explains what WAV gets you that MP3 does not, how to turn a .opus voice note into a WAV file on an iPhone without uploading it anywhere, and the cases where WAV is the wrong answer and you should stick with MP3. It is written for people who have never thought about audio formats and would like to keep it that way.",
          },
        ],
      },
      {
        heading: "What a WhatsApp voice note actually is",
        blocks: [
          {
            type: "p",
            text: "WhatsApp records voice messages with the Opus codec, which is excellent at sounding clear at very low bitrates, and saves them as files named like PTT-20261010-WA0007.opus. Opus is great for chat and poor for almost everything else: many editors, players, older devices and upload forms do not accept .opus at all. Converting is not about improving the sound (the original quality is fixed the moment the message was recorded); it is about putting that sound into a container the next tool understands.",
          },
        ],
      },
      {
        heading: "WAV vs MP3: the honest difference",
        blocks: [
          {
            type: "list",
            items: [
              "**WAV is lossless.** It stores the decoded audio as plain 16-bit PCM samples. Nothing is thrown away in the conversion, so what the editor or transcription engine receives is exactly what the voice note contained.",
              "**MP3 is lossy, but good enough.** At 128 kbps MP3 is far above the bitrate of the original voice note, so for listening there is no audible loss. Decoding Opus and re-encoding to MP3 does add a second generation of compression, which is harmless for ears and mostly harmless for software.",
              "**WAV files are big.** Roughly ten times the size of the MP3 for the same clip. A two-minute voice note becomes about 20 MB as WAV versus about 2 MB as MP3.",
              "**WAV is the universal input.** Virtually every audio editor, DAW, captioning service, court transcription provider and archive system accepts WAV. The same is true of MP3 in practice, but WAV is the format nobody ever rejects.",
            ],
          },
        ],
      },
      {
        heading: "When WAV is the right choice",
        blocks: [
          {
            type: "list",
            items: [
              "**Editing.** If you are going to cut, clean up, normalise or mix the voice note (a podcast clip, a voiceover, a video), start from WAV so you do not stack a third round of compression on export.",
              "**Transcription and captioning services.** Many services accept both, but their guidance usually prefers uncompressed audio, and on a quiet or mumbled voice note the difference between WAV and MP3 can be the difference between a clean transcript and a guessed one. If you only need the words and nothing else, an on-device transcriber such as [Voice Note to Text](/apps/voice-note-to-text) skips the upload entirely.",
              "**Evidence and formal records.** When a voice message is going to HR, a landlord dispute, an insurer or a solicitor, provide the original .opus file *and* a WAV copy. WAV is the version the recipient can open without asking questions; the original is the version that shows nothing was altered.",
              "**Long-term archiving.** Formats come and go; uncompressed PCM in a WAV container is the one most likely to still open in twenty years.",
            ],
          },
        ],
      },
      {
        heading: "How to convert a voice note to WAV on iPhone (offline)",
        blocks: [
          {
            type: "p",
            text: "[Voice Note Audio Converter](/apps/voice-note-audio-converter), listed on the App Store as Opus to MP3 Converter, converts .opus voice notes to MP3 (128 kbps) or WAV (16-bit PCM) entirely on the phone. Nothing is uploaded, there is no account, and it works in airplane mode, which matters precisely in the situations above, where the recording may be private or sensitive.",
          },
          {
            type: "list",
            items: [
              "In WhatsApp, long-press the voice note, tap Share (or Forward, then the share icon), and choose the converter from the share sheet, or save the file to Files first and pick it from there.",
              "Choose WAV as the output format instead of MP3. You can convert one file or a whole batch in one go.",
              "Tap Convert. A typical voice note takes a few seconds.",
              "Use Share on the result to send it straight to Mail, AirDrop, a transcription app or Save to Files. The converted file lives in the app's cache, so save it somewhere permanent if you need to keep it.",
            ],
          },
          {
            type: "p",
            text: "If the file picker shows every file type rather than only audio, that is deliberate: iOS has no built-in type identifier for .opus, so an audio-only picker would grey out exactly the files you want. The app checks the extension itself. The same steps work for Telegram and Signal voice messages (.ogg, .m4a), iPhone voicemails and Voice Memos (.m4a), and anything else in the supported list: .opus .ogg .oga .m4a .aac .mp3 .wav .caf .aiff .flac .amr .3gp .mp4. The earlier post on [converting a WhatsApp voice note to MP3 on iPhone](/blog/convert-whatsapp-voice-note-to-mp3-iphone) covers getting the file out of WhatsApp in more detail if that step is the sticking point.",
          },
        ],
      },
      {
        heading: "When WAV is the wrong choice",
        blocks: [
          {
            type: "p",
            text: "Do not use WAV for sending to people. A 20 MB attachment for a two-minute message is rude, fails many email size limits, and gains nothing because the recipient is only going to listen. Do not use WAV for your own archive of ordinary chat audio either; MP3 at 128 kbps is more than the voice note deserves and a tenth of the storage. And WAV does not make a bad recording good: if the original voice note was recorded in a windy street, the WAV is a lossless copy of the wind. Choose WAV when something will *process* the audio, and MP3 when someone will *hear* it.",
          },
        ],
      },
      {
        heading: "Two tips for the evidence case",
        blocks: [
          {
            type: "list",
            items: [
              "Keep the original .opus file untouched, with its original filename, and note the chat, sender and date it was received. The converter never modifies the source file, so the original stays exactly as WhatsApp saved it.",
              "If you also need the conversation around the message in writing, export the chat as a PDF with [Chat Export Studio](/apps/chat-export-studio) so the audio has context. A voice note alone rarely tells the whole story.",
            ],
          },
          {
            type: "p",
            text: "Voice Note Audio Converter is free with no watermark and no file limit; a small ad banner can be removed with a one-time purchase, and there is no subscription. It is iPhone-only on the App Store (the Android version is on Google Play) and requires iOS 15.1 or later.",
          },
          {
            type: "p",
            text: DISCLAIMER,
          },
        ],
      },
    ],
  },
  {
    slug: "whatsapp-voice-transcript-not-available-for-your-language-android-fix",
    title: "WhatsApp Voice Transcripts Not Available in Your Language on Android? How to Read Any Voice Note as Text, Offline",
    description:
      "WhatsApp's built-in voice message transcripts only cover a handful of languages on Android. What the feature can and cannot do, why your language is missing, and how to transcribe any voice note in around 100 languages on your phone without uploading it.",
    datePublished: "2026-10-10",
    readingMinutes: 6,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "WhatsApp added voice message transcripts to Android in late 2024, and for a lot of people it quietly solved the problem of the three-minute voice note that arrives during a meeting. For a lot of other people it solved nothing, because the transcript option either does not appear, says the language is not supported, or produces text that is obviously the wrong language. If you speak Tamil, Turkish, Bengali, Polish, Vietnamese or any of the dozens of languages WhatsApp does not transcribe, this post is for you.",
          },
          {
            type: "p",
            text: "It covers what the built-in feature actually supports, the reasons it fails, and a way to read any voice note as text on Android that works in about 100 languages, needs no internet, and does not send the recording anywhere.",
          },
        ],
      },
      {
        heading: "What WhatsApp's own transcripts can do on Android",
        blocks: [
          {
            type: "p",
            text: "WhatsApp's transcription runs on your phone using downloadable language packs, so the audio is not sent to a server, which is good. The limitation is the list of packs. When the feature reached Android it supported English, Spanish, Portuguese (Brazil), Russian and Hindi. WhatsApp has been adding languages since (reports in September 2026 described packs for German, French, Italian, Japanese and Arabic appearing for Android beta users), but the list is still a short one of major languages, it rolls out gradually, and it is not the same on every phone or in every region.",
          },
          {
            type: "p",
            text: "Two further constraints are easy to miss. The feature transcribes the languages it has packs for, not the language of the voice note, so a Tamil voice note with the English pack installed either refuses or guesses. And it works on messages inside WhatsApp only; a voice note someone forwarded you from Telegram, a voicemail, or an .opus file you saved to your phone cannot be fed back in.",
          },
        ],
      },
      {
        heading: "Why the transcript option is missing or wrong",
        blocks: [
          {
            type: "list",
            items: [
              "**Your language has no pack.** The most common reason. WhatsApp's list is a fraction of the languages people actually send voice notes in.",
              "**The feature has not reached your account yet.** New languages and the feature itself arrive in waves; two people on the same version can see different options.",
              "**The pack is not downloaded.** Transcripts have to be turned on in WhatsApp's settings and the language pack downloaded before the option works offline.",
              "**Mixed-language audio.** A voice note that switches between, say, Hindi and English mid-sentence is hard for a single-language pack; expect gaps or nonsense in the switched parts.",
              "**It is not a WhatsApp voice note.** Audio from other apps, forwarded files and recordings in your Files app are outside the feature entirely.",
            ],
          },
        ],
      },
      {
        heading: "Read any voice note as text on Android, in any language, offline",
        blocks: [
          {
            type: "p",
            text: "[Voice Note to Text: Offline](/apps/voice-note-to-text) is an Android app that transcribes voice notes on the phone itself. The speech-recognition model ships inside the app, the language is detected automatically, and around 100 languages are supported. Because nothing is uploaded, it works with no internet connection at all, and the audio and the transcript never leave your phone. It is a one-time purchase with no subscription.",
          },
          {
            type: "p",
            text: "The steps on Android:",
          },
          {
            type: "list",
            items: [
              "In WhatsApp (or Telegram, Signal, or any chat app), long-press the voice note and tap Share. Choose Voice Note to Text from the Android share sheet.",
              "Alternatively, open your Files app, find the .opus, .m4a, .mp3 or .wav file, and share it to the app from there. This is how you handle forwarded files and voicemails.",
              "Wait a few seconds. The language is detected automatically; there is nothing to pick.",
              "Read the transcript on screen. Tap Copy to paste it into a reply, or Share .txt to send the text on or save it.",
            ],
          },
          {
            type: "p",
            text: "The earlier post on [reading WhatsApp voice notes as text on Android](/blog/read-whatsapp-voice-notes-as-text-android-offline-faq) answers the general questions (accuracy, long files, privacy); this one is specifically about the language gap.",
          },
        ],
      },
      {
        heading: "What automatic language detection means in practice",
        blocks: [
          {
            type: "p",
            text: "Detection works on the audio itself, so you do not have to know or declare what language a message is in before transcribing it. That matters more than it sounds. Family groups in India routinely mix two or three languages across a single day of messages; a model that picks the language per file rather than per installed pack handles a Tamil note, then a Hindi note, then an English one without any settings changes. It is not magic: a note that flips between languages within one sentence will still be transcribed primarily in whichever language dominates, and heavy slang, very poor audio or a speaker far from the microphone reduce accuracy in any language, including English.",
          },
          {
            type: "p",
            text: "A practical tip: if a transcript looks wrong, play the first five seconds of the note. Almost always the problem is the recording (background noise, a phone held at arm's length) rather than the language, and no transcriber fixes audio that a human would also struggle with.",
          },
        ],
      },
      {
        heading: "When you do not need this",
        blocks: [
          {
            type: "p",
            text: "If you and everyone who sends you voice notes speak one of the languages WhatsApp already covers, and the transcript option works on your phone, use it; it is built in and free. The case for a separate transcriber is specifically: a language WhatsApp does not support, audio from outside WhatsApp, a voicemail or interview recording, or wanting a text file you can keep and search rather than a transcript that lives inside the chat. For a one-off English voice note from a friend, WhatsApp's own feature is the right tool.",
          },
        ],
      },
      {
        heading: "Frequently asked questions",
        blocks: [
          {
            type: "list",
            items: [
              "**Does it need internet?** No. The model is inside the app; it works in airplane mode.",
              "**Is the audio uploaded anywhere?** No. Transcription runs on the phone and there is no account, no sign-up and no analytics.",
              "**Which file types work?** .opus (WhatsApp), .m4a, .mp3 and .wav, shared from a chat app or picked from your file manager.",
              "**Does it translate?** No. It transcribes the spoken language into text in that language. Paste the text into a translator if you need another language.",
              "**Is it a subscription?** No. It is a one-time purchase.",
            ],
          },
          {
            type: "p",
            text: DISCLAIMER,
          },
        ],
      },
    ],
  },
];

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
];

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
];

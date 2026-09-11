// Copy for the free browser tools at /tools/*.
//
// One page per query cluster, taken from the keyword research in
// ios-utils/PLAN.md. The head terms belong to much stronger domains, so each
// page leads with the exact phrasing people type and then goes after the long
// tail around it: the device, the file extension, the situation.
//
// Every page ends with the paid iOS app that solves the *next* problem the
// visitor has, which is the reason these pages exist commercially.

const APPS = {
  chatLink: {
    name: "Chat Link & QR Code Maker",
    appStoreId: "6810372979",
    color: "#0f766e",
  },
  converter: {
    name: "Opus to MP3 Converter",
    appStoreId: "6810373840",
    color: "#c2410c",
  },
  transcribe: {
    name: "Voice Note to Text: Offline",
    appStoreId: "6810376600",
    color: "#7c3aed",
  },
  export: {
    name: "Chat Export Studio: PDF",
    appStoreId: "6810375389",
    color: "#1d4ed8",
  },
};

export const TOOLS = {
  "whatsapp-link-generator": {
    slug: "whatsapp-link-generator",
    name: "WhatsApp Link & QR Code Generator",
    color: "#0f766e",
    alternateNames: [
      "wa.me link generator",
      "click to chat link generator",
      "WhatsApp QR code generator",
    ],
    head: {
      title: "WhatsApp Link Generator: free wa.me Link & QR Code Maker",
      description:
        "Turn any phone number into a wa.me click-to-chat link and a printable QR code, with an optional pre-filled message. Free, no sign-up, runs entirely in your browser.",
      keywords:
        "whatsapp link generator, wa.me link generator, click to chat link, whatsapp qr code generator, whatsapp link with message, whatsapp link for business",
      ogTitle: "Free WhatsApp Link & QR Code Generator",
    },
    h1: "WhatsApp link generator: make a wa.me link and QR code",
    answer:
      "Type a phone number with its country code and you get a wa.me click-to-chat link plus a QR code, instantly. Anyone who taps the link or scans the code opens a chat with you, with your message already typed. Nothing is uploaded and nothing is stored.",
    privacyNote:
      "The link and the QR code are built in your browser with JavaScript. The number you type never reaches a server, because there is no server involved in making it.",
    howTo: {
      title: "How to create a WhatsApp link",
      intro:
        "A click-to-chat link works for any number, including one that has never saved you as a contact. That is the whole point of it.",
      steps: [
        {
          name: "Enter the number with its country code. ",
          text: "Use the full international number, so 14155550100 rather than 4155550100. Drop the leading zero that some countries use for domestic dialling. Spaces, dashes and a plus sign are fine, they get stripped automatically.",
        },
        {
          name: "Add a message, if you want one. ",
          text: "Whatever you type here appears already written in the chat box when someone opens the link. It is the difference between a visitor saying nothing and a visitor sending an enquiry.",
        },
        {
          name: "Copy the link or download the QR code. ",
          text: "Use the link in a bio, an email signature or a Buy button. Use the PNG for print, where a link cannot be tapped.",
        },
      ],
    },
    featuresTitle: "What you get",
    features: [
      {
        title: "A proper wa.me link",
        text: "The official click-to-chat format, which works on iPhone, Android and the desktop and web apps.",
      },
      {
        title: "A pre-filled message",
        text: "The text is URL-encoded for you, so emoji, line breaks and punctuation survive the trip.",
      },
      {
        title: "A print-ready QR code",
        text: "Downloaded as a PNG with error correction, so it still scans after being printed, resized or partly covered.",
      },
      {
        title: "No account, no limits",
        text: "No sign-up, no watermark, no cap on how many links you make.",
      },
    ],
    body: [
      {
        title: "Why a click-to-chat link beats sharing your number",
        paras: [
          "Posting a phone number asks a lot of the reader. They have to select it, copy it, open the app, create a contact, and only then start typing. Most people do not finish that. A link collapses all of it into one tap.",
          "It also works in the other direction. Because the link opens a chat without either side saving the other as a contact, you can put it somewhere public without publishing a number that follows you around.",
        ],
      },
      {
        title: "Where the QR code earns its keep",
        paras: [
          "A QR code is what you use when the link cannot be tapped. A menu on a table, a flyer on a noticeboard, a business card, a sticker in a shop window, a slide at the end of a talk, the side of a van.",
          "Print it large enough to survive a phone camera at arm's length. Around 2 cm square is the practical floor for a card, and bigger is always safer on a poster. Keep a quiet margin of white around it and do not place it over a busy photograph.",
        ],
      },
      {
        title: "Getting the country code right",
        paras: [
          "This is the one step people get wrong. The number must be in full international form, with the country code at the front and no leading zero.",
          "A UK mobile written 07700 900123 becomes 447700900123. A German number written 0151 23456789 becomes 4915123456789. An Indian number written 098765 43210 becomes 919876543210. If the link opens a chat with nobody, the country code is almost always the reason.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this free, and is there a limit?",
        a: "It is free and there is no limit. There is no account and no paid tier, because the tool runs in your browser rather than on a server that costs money to run.",
      },
      {
        q: "Does the person need to have my number saved?",
        a: "No. That is the main reason to use a click-to-chat link. It opens a conversation between two numbers that have never been saved as contacts.",
      },
      {
        q: "Do I need a Business account?",
        a: "No. Click-to-chat links work with a normal account. A Business account adds things like a catalogue and away messages, but the link itself is the same.",
      },
      {
        q: "Can I change the message later?",
        a: "The message is encoded into the link, so changing it means generating a new link. If you expect to change it often, point people at a short link you control and update where it redirects.",
      },
      {
        q: "Will the QR code expire?",
        a: "No. The code is just the link drawn as a pattern, so it keeps working for as long as the number does. Nothing phones home and there is no tracking redirect in the middle.",
      },
      {
        q: "Is my phone number sent anywhere?",
        a: "No. The link and the QR image are generated by JavaScript running on your own device. You can disconnect from the internet after the page loads and the tool still works.",
      },
    ],
    apps: [
      {
        ...APPS.chatLink,
        title: "Want this on your phone instead?",
        text: "Chat Link & QR Code Maker does the same job on iPhone, offline, plus it saves QR codes straight to Photos and fixes profile pictures that get cropped. Free, no ads.",
      },
    ],
    related: [
      { href: "/tools/whatsapp-dp-full-size", label: "Fix a profile picture that keeps getting cropped" },
      { href: "/blog/whatsapp-link-generator-qr-code-full-size-dp", label: "Guide: links, QR codes and full-size profile pictures" },
      { href: "/apps/chat-link-qr-code-maker", label: "Chat Link & QR Code Maker for iPhone" },
      { href: "/tools", label: "All free browser tools" },
    ],
  },

  "whatsapp-dp-full-size": {
    slug: "whatsapp-dp-full-size",
    name: "Full-Size Profile Picture Maker",
    color: "#0f766e",
    alternateNames: ["WhatsApp DP full size", "profile picture without cropping"],
    head: {
      title: "WhatsApp DP Full Size: Set a Profile Picture Without Cropping",
      description:
        "Pad any photo to a perfect square so your profile picture is not cropped. Choose a blurred or solid background, then download. Free, in your browser, nothing uploaded.",
      keywords:
        "whatsapp dp full size, profile picture without cropping, full size dp, whatsapp profile picture crop, square profile picture maker",
      ogTitle: "Full-Size Profile Picture Without Cropping",
    },
    h1: "Set a full-size profile picture without cropping it",
    answer:
      "Profile pictures are cropped to a square and then to a circle, which cuts the sides off a normal photo. This tool pads your photo onto a square canvas first, so the whole image survives. Pick a blurred or solid background, then download.",
    privacyNote:
      "Your photo is drawn onto a canvas inside your browser and never leaves the device. There is no upload step, so there is nothing to delete afterwards.",
    howTo: {
      title: "How to stop your profile picture being cropped",
      intro:
        "The trick is to give the cropper a square to work with, so it has nothing left to cut off.",
      steps: [
        {
          name: "Choose your photo. ",
          text: "Drop it onto the box or click to pick one. Portrait shots benefit the most, because they lose the most to a square crop.",
        },
        {
          name: "Pick a background. ",
          text: "A blurred, zoomed copy of your own photo usually looks best and is the default. A solid colour is cleaner for a logo or a product shot.",
        },
        {
          name: "Download and set it. ",
          text: "You get a square image. Set it as your picture and skip the crop step, because there is nothing left to crop.",
        },
      ],
    },
    featuresTitle: "What you get",
    features: [
      {
        title: "Nothing cut off",
        text: "The full photo is scaled to fit inside the square rather than filled and trimmed.",
      },
      {
        title: "Blurred backdrop",
        text: "A zoomed, blurred copy of the photo fills the padding, which looks far better than flat bars.",
      },
      {
        title: "Solid colour option",
        text: "Pick any colour when you want a clean, deliberate edge instead of a blur.",
      },
      {
        title: "Large output",
        text: "A 1024 by 1024 pixel square, comfortably above what the crop step asks for, so it stays sharp.",
      },
    ],
    body: [
      {
        title: "Why the crop happens in the first place",
        paras: [
          "Profile pictures are displayed in a circle. To make that work with any photo, the app first crops to a square and then masks the square into a circle. A tall portrait photo loses the top and bottom, and a wide landscape photo loses both sides.",
          "You cannot turn that off. What you can do is hand over a photo that is already square, which leaves the cropper with nothing to remove.",
        ],
      },
      {
        title: "Blurred background or solid colour",
        paras: [
          "The blurred option takes your own photo, zooms it, blurs it heavily and paints it behind the original. Because the colours match, the padding reads as depth rather than as empty space. It suits people, pets and outdoor shots.",
          "A solid colour is the better choice for a logo, a piece of text or a product on a plain background. Sample a colour already in the image rather than pure white, which tends to glare against a dark interface.",
        ],
      },
      {
        title: "A note on where the circle bites",
        paras: [
          "Remember that the final shape is a circle inside the square, so the four corners are still hidden. Keep faces and text near the middle and away from the edges.",
          "If the subject is right at the edge of the original photo, crop it a little tighter yourself before padding, so it sits comfortably inside the visible circle.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why is my profile picture always cropped?",
        a: "Because it is forced into a square and then a circle. Any photo that is not already square loses whatever falls outside that square. Padding the photo first is the fix.",
      },
      {
        q: "Does this reduce the quality of my photo?",
        a: "The output is a 1024 pixel square saved as a high quality JPEG. Unless your original was larger than that in its shorter dimension, you will not notice a difference.",
      },
      {
        q: "Can I use it for other apps?",
        a: "Yes. A square image with the subject in the middle works for any service that crops to a square or a circle, so the same file suits most profiles.",
      },
      {
        q: "Is my photo uploaded?",
        a: "No. The image is decoded and redrawn by your own browser. It never crosses the network, which is also why the tool keeps working if you go offline after loading the page.",
      },
    ],
    apps: [
      {
        ...APPS.chatLink,
        title: "Do it from your camera roll instead",
        text: "Chat Link & QR Code Maker does this on iPhone without a browser, straight from Photos, and makes click-to-chat links and QR codes too. Free, no ads.",
      },
    ],
    related: [
      { href: "/tools/whatsapp-link-generator", label: "Make a wa.me link and QR code" },
      { href: "/blog/whatsapp-link-generator-qr-code-full-size-dp", label: "Guide: links, QR codes and full-size profile pictures" },
      { href: "/apps/chat-link-qr-code-maker", label: "Chat Link & QR Code Maker for iPhone" },
      { href: "/tools", label: "All free browser tools" },
    ],
  },

  "opus-to-mp3": {
    slug: "opus-to-mp3",
    name: "Opus to MP3 Converter",
    color: "#c2410c",
    alternateNames: ["opus to mp3", "ogg to mp3 converter", "voice note to mp3"],
    head: {
      title: "Opus to MP3 Converter: Convert Voice Notes in Your Browser",
      description:
        "Convert .opus and .ogg voice notes to MP3 or WAV in seconds. Several files at once, no upload, no sign-up, no waiting. Runs entirely inside your browser.",
      keywords:
        "opus to mp3, convert opus to mp3, ogg to mp3, voice note to mp3, opus converter, opus file won't play, whatsapp audio to mp3",
      ogTitle: "Free Opus to MP3 Converter, No Upload",
    },
    h1: "Opus to MP3 converter that runs in your browser",
    answer:
      "Voice notes are saved as .opus files, which most players and editors refuse to open. Drop them here and get MP3 or WAV back, in about a second. The conversion happens on your own machine, so nothing is uploaded and there is no file size cap from a server.",
    privacyNote:
      "Your browser already knows how to decode Opus, so the file is decoded where it sits and re-encoded in the page. Nothing is uploaded, there is no engine to download, and it keeps working with the network switched off.",
    howTo: {
      title: "How to convert an opus file to MP3",
      intro:
        "This works with a single voice note or with a folder full of them. Batch conversion is the usual case, so it is the default.",
      steps: [
        {
          name: "Add your files. ",
          text: "Drop in .opus, .ogg, .m4a, .amr, .aac, .wav or .mp3. Select several at once. On a phone, use the file picker to reach your downloads folder.",
        },
        {
          name: "Choose the output format. ",
          text: "MP3 is the safe default and opens anywhere. WAV is uncompressed and is the better choice if the audio is going into an editor or a transcription tool.",
        },
        {
          name: "Convert and download. ",
          text: "Conversion starts immediately, with no engine to download first. Take the files one at a time or use Download all.",
        },
      ],
    },
    featuresTitle: "What you get",
    features: [
      {
        title: "Batch conversion",
        text: "Queue a whole folder of voice notes and download them one by one or all together.",
      },
      {
        title: "Starts instantly",
        text: "Your browser decodes Opus natively, so there is no multi-megabyte converter to download before anything happens.",
      },
      {
        title: "No upload, no queue",
        text: "Nothing is sent to a server, so there is no waiting behind other people's jobs and no file size limit imposed from outside.",
      },
      {
        title: "Original filenames kept",
        text: "Each output keeps the name of its source file, which matters when you are converting dozens at once.",
      },
    ],
    body: [
      {
        title: "Why voice notes are .opus files",
        paras: [
          "Opus is a modern audio codec built for speech. It sounds better than MP3 at the very low bitrates a voice message uses, which is why messaging apps picked it. A minute of speech can be a few tens of kilobytes.",
          "The trade is compatibility. Opus is younger than MP3 and plenty of software never added support for it, which is why a voice note you saved often refuses to open in a music player, a car stereo, a voice recorder app or an older editing tool.",
        ],
      },
      {
        title: "When to choose MP3 and when to choose WAV",
        paras: [
          "Pick MP3 when you want the file to simply open, anywhere, including on hardware that is a decade old. It is the least surprising format there is.",
          "Pick WAV when the audio is going into an editor or a transcription tool. It is uncompressed, so it is large, but nothing is lost in a second round of compression.",
        ],
      },
      {
        title: "If the file will not play at all",
        paras: [
          "Check the extension first. Files arrive as .opus, .ogg or .oga depending on how they were exported, and some tools mislabel them. This converter accepts all three and works from the contents rather than the name.",
          "Also check the file actually finished downloading. A voice note saved from a chat while the connection dropped can be truncated, which looks identical to a format problem until you try to convert it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a file size or file count limit?",
        a: "No limit is imposed by us, because nothing is uploaded. The practical ceiling is your device's memory. Very long recordings, over an hour, are better converted on a computer than a phone.",
      },
      {
        q: "Do I have to wait for anything to download?",
        a: "No. Your browser can already decode Opus, so conversion starts the moment you press the button. A typical voice note finishes in well under a second.",
      },
      {
        q: "Does this work on an iPhone or an Android phone?",
        a: "Yes, in a mobile browser. Opus decoding needs a reasonably current browser, so on an older iPhone stuck on an early version of Safari the decode step can fail. The app version has its own decoder and does not depend on the browser at all.",
      },
      {
        q: "Is the audio uploaded to a server?",
        a: "No. The conversion runs inside the page on your own device. That is also why there is no queue and no account.",
      },
      {
        q: "Can I convert to M4A, AAC or back to Opus?",
        a: "Not here. Browsers will happily decode those formats but do not expose an encoder for them, so this tool writes MP3 and WAV only. The iPhone app can produce the others.",
      },
      {
        q: "I do not want the audio, I want the words. What then?",
        a: "Then converting is a detour. Transcribing the voice note directly gives you text you can search, quote and paste, without producing an audio file you then have to listen to.",
      },
    ],
    apps: [
      {
        ...APPS.transcribe,
        title: "If you actually wanted the words, not the file",
        text: "Most people converting a voice note are trying to avoid listening to it. Voice Note to Text transcribes it on your iPhone, offline, and gives you text you can copy. The speech model ships inside the app, so it works in airplane mode. $2.99, once, no subscription.",
      },
      {
        ...APPS.converter,
        title: "Converting these often?",
        text: "Opus to MP3 Converter does this on iPhone without a browser, appears in the share sheet so you can send a voice note straight to it, and writes M4A and WAV as well as MP3. Free, no ads.",
      },
    ],
    related: [
      { href: "/blog/convert-whatsapp-voice-note-to-mp3-iphone", label: "Guide: convert a voice note to MP3 on iPhone" },
      { href: "/blog/transcribe-whatsapp-voice-message-to-text-iphone", label: "Guide: turn a voice message into text" },
      { href: "/apps/voice-note-to-text", label: "Voice Note to Text for iPhone" },
      { href: "/apps/voice-note-audio-converter", label: "Opus to MP3 Converter for iPhone" },
      { href: "/tools", label: "All free browser tools" },
    ],
  },
};

export const TOOL_LIST = Object.values(TOOLS);

export function getTool(slug) {
  return TOOLS[slug];
}

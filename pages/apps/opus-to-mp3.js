import AppLanding from "../../components/appLanding";
import { getApp } from "../../data/apps";

// Short, searchable alias for the Opus to MP3 Converter app. Renders the same
// landing page; its canonical points at /apps/voice-note-audio-converter so
// search engines index one URL.
export default function Page() {
  return <AppLanding {...getApp("en", "voice-note-audio-converter")} />;
}

import AppLanding from "../../components/appLanding";
import { getApp } from "../../data/apps";

export default function Page() {
  return <AppLanding {...getApp("en", "chat-link-qr-code-maker")} />;
}

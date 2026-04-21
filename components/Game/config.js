import * as THREE from "three";

export const LANDMARKS = [
  {
    id: "about",
    title: "About",
    subtitle: "Lead AI Engineer",
    icon: "🧑‍🚀",
    color: "#6a5cff",
    position: new THREE.Vector3(-18, 0, -2),
  },
  {
    id: "talks",
    title: "Talks",
    subtitle: "50+ talks · 7 countries",
    icon: "🎤",
    color: "#ff5ca8",
    position: new THREE.Vector3(-14, 0, -16),
  },
  {
    id: "blogs",
    title: "Blogs",
    subtitle: "LogRocket · Medium · dev.to",
    icon: "📚",
    color: "#ffb347",
    position: new THREE.Vector3(0, 0, -22),
  },
  {
    id: "videos",
    title: "Videos",
    subtitle: "YouTube deep dives",
    icon: "📺",
    color: "#ff4757",
    position: new THREE.Vector3(14, 0, -16),
  },
  {
    id: "projects",
    title: "Projects",
    subtitle: "Open source & devtools",
    icon: "🛠️",
    color: "#3aafa8",
    position: new THREE.Vector3(18, 0, -2),
  },
  {
    id: "workshop",
    title: "Workshops",
    subtitle: "Hands-on AI + Web",
    icon: "🎓",
    color: "#00e0ff",
    position: new THREE.Vector3(12, 0, 12),
  },
  {
    id: "reviews",
    title: "Reviews",
    subtitle: "What students say",
    icon: "⭐",
    color: "#f6d365",
    position: new THREE.Vector3(-12, 0, 12),
  },
  {
    id: "socials",
    title: "Socials",
    subtitle: "Say hi anywhere",
    icon: "🌐",
    color: "#4ab3e4",
    position: new THREE.Vector3(0, 0, 18),
  },
];

export const PLAYER_START = new THREE.Vector3(0, 0, 6);
export const INTERACT_RADIUS = 3.2;
export const WORLD_RADIUS = 34;

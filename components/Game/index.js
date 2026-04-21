import { useGameStore } from "./state";
import Scene from "./Scene";
import HUD from "./HUD";
import Panel from "./Panel";
import TouchControls from "./TouchControls";
import Intro from "./Intro";

const stage = {
  position: "fixed",
  inset: 0,
  background: "#05010f",
  overflow: "hidden",
};

export default function Game() {
  const started = useGameStore((s) => s.started);
  return (
    <div style={stage}>
      <Scene />
      {started ? (
        <>
          <HUD />
          <TouchControls />
          <Panel />
        </>
      ) : (
        <Intro />
      )}
    </div>
  );
}

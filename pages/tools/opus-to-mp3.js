import ToolPage from "../../components/toolPage";
import OpusTool from "../../components/tools/OpusTool";
import { getTool } from "../../data/tools";

export default function Page() {
  return (
    <ToolPage tool={getTool("opus-to-mp3")}>
      <OpusTool />
    </ToolPage>
  );
}

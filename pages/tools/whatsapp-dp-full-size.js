import ToolPage from "../../components/toolPage";
import DpTool from "../../components/tools/DpTool";
import { getTool } from "../../data/tools";

export default function Page() {
  return (
    <ToolPage tool={getTool("whatsapp-dp-full-size")}>
      <DpTool />
    </ToolPage>
  );
}

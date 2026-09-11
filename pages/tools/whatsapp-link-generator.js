import ToolPage from "../../components/toolPage";
import LinkQrTool from "../../components/tools/LinkQrTool";
import { getTool } from "../../data/tools";

export default function Page() {
  return (
    <ToolPage tool={getTool("whatsapp-link-generator")}>
      <LinkQrTool />
    </ToolPage>
  );
}

import { Info } from "../Info";
import { Filter } from "../Filter";
import { ToggleAddSearch } from "../ToggleAddSearch";
import { ActionPanelWrapper } from "./ActionPanel.styles.js";
export const ActionPanel = ({ tasks }) => {
  return (
    <ActionPanelWrapper>
      <ToggleAddSearch />
      <Info tasks={tasks} />
      <Filter />
    </ActionPanelWrapper>
  );
};

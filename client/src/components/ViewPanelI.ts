export interface ViewPanelProps {

}

export interface ViewPanelState {
  accountTabs: AccountTab[],
}

export interface AccountTab {
  accountTabTitle: string,
  accountTabElement: JSX.Element,
}

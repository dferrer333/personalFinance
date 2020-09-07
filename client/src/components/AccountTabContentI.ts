export interface AccountTabContentProps {
  accountTabTitle: string,
  default?: boolean,
}

export interface AccountTabContentState {
  defaultAccountSelectedValue: string,
}

export type ChangeEvent = React.ChangeEvent<
    { name?: string | undefined; value: unknown; }>

import { Commit, Dispatch } from 'vuex'

type IAction<TS, TP> = (
  { commit, dispatch, state, rootState }: { commit: Commit; dispatch: Dispatch; state: TS; rootState: unknown },
  payload: TP,
) => void

type IActionWithoutPayload<TS> = ({
  commit,
  dispatch,
  state,
  rootState,
}: {
  commit: Commit
  dispatch: Dispatch
  state: TS
  rootState: unknown
}) => void

export { IAction, IActionWithoutPayload }

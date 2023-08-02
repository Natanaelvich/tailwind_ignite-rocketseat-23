export interface UsedSpaceWidgetProps {}

export function UsedSpaceWidget(props: UsedSpaceWidgetProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-5 text-violet-700">
          Used space
        </span>
        <span className="text-sm leading-5 text-violet-500">
          Your team has used 20% of your available space. Need more?
        </span>
      </div>

      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-1/4 rounded-full bg-violet-600" />
      </div>

      <div className="flex gap-3">
        <button type="button" className="text-sm font-medium text-violet-500">
          Dismiss
        </button>

        <button type="button" className="text-sm font-medium text-violet-700">
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
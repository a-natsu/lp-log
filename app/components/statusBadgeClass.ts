export function statusBadgeClass(status: string) {
  switch (status) {
    case "完了":
      return "bg-green-50 text-green-700 ring-1 ring-inset ring-green-200";
    case "検証":
      return "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200";
    case "実装":
      return "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-200";
    default:
      return "bg-gray-100 text-gray-700 ring-1 ring-inset ring-gray-200";
  }
}
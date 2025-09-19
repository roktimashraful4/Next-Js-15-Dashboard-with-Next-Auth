import { JSX } from "react";

export default function ShimmerTable(): JSX.Element {
  const rows = Array.from({ length: 6 }); // 6 shimmer rows

  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-800 bg-gray-900">
      <table className="w-full text-left border-collapse">
        {/* Sticky Header (same style as real table) */}
        <thead className="sticky top-0 bg-gray-800 text-gray-300 uppercase text-xs tracking-wider z-10">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Company</th>
          </tr>
        </thead>

        {/* Shimmer Rows */}
        <tbody className="divide-y divide-gray-800">
          {rows.map((_, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4">
                <div className="h-4 w-32 bg-gray-700 rounded animate-pulse" />
              </td>
              <td className="px-6 py-4">
                <div className="h-4 w-44 bg-gray-700 rounded animate-pulse" />
              </td>
              <td className="px-6 py-4">
                <div className="h-4 w-28 bg-gray-700 rounded animate-pulse" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

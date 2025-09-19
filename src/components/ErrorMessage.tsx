import { JSX } from "react";

interface Props {
  message: string;
  onRetry: () => void;
}

export default function ErrorMessage({ message, onRetry }: Props): JSX.Element {
  return (
    <div className="p-6 text-center bg-gray-900 border border-red-600 rounded-xl text-red-400">
      <p className="mb-4 font-medium">{message}</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white text-sm transition"
      >
        Retry
      </button>
    </div>
  );
}

"use client"; // Error components must be Client Components
import { XCircle } from "lucide-react";
import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex gap-4 border items-center rounded-lg p-6">
      <div>
        <XCircle className="h-10 w-10" />
      </div>
      <div>
        <h2 className="font-bold">Something went wrong!</h2>
        <p className="font-extralight">Your error debug code is <span className="font-bold">{error.digest} | {JSON.stringify(error)}</span></p>
      </div>
    </div>
  );
}

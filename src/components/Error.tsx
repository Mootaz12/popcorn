import React from "react";

function Error({ error }: { error: string }) {
  return (
    <p className="py-10 text-center text-lg font-semibold text-red-500">
      {error}
    </p>
  );
}

export default Error;

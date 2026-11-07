import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbfaf7",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="160" height="160">
          <circle cx="74" cy="124" r="68" fill="#c9d6cb" />
          <circle cx="134" cy="112" r="56" fill="#244b43" stroke="#fbfaf7" strokeWidth="5" />
          <circle cx="104" cy="62" r="34" fill="#7c3c5c" stroke="#fbfaf7" strokeWidth="5" />
        </svg>
      </div>
    ),
    size,
  );
}

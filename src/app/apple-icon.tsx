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
          background: "#0f6b5f",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          width="150"
          height="150"
        >
          <path
            d="M9.5 19.5 20 11l10.5 8.5"
            fill="none"
            stroke="#fbf7f0"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 18.5V29h15V18.5"
            fill="none"
            stroke="#fbf7f0"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 26.5s-4-2.6-4-5.3a2.1 2.1 0 0 1 4-1 2.1 2.1 0 0 1 4 1c0 2.7-4 5.3-4 5.3Z"
            fill="#f4a261"
          />
        </svg>
      </div>
    ),
    size,
  );
}

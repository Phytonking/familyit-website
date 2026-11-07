import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bullets = [
  "Home Wi-Fi and devices",
  "Parental controls and online safety",
  "Patient help for older relatives",
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #fbf7f0 0%, #f3ebdd 100%)",
          color: "#1f2a30",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="72"
            height="72"
          >
            <rect width="40" height="40" rx="11" fill="#0f6b5f" />
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
          <div style={{ fontSize: 44, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Tech help your whole family will actually understand.
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {bullets.map((b) => (
              <div
                key={b}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#ffffff",
                  border: "2px solid #e6dccb",
                  borderRadius: 999,
                  padding: "12px 24px",
                  fontSize: 26,
                  color: "#4a5a61",
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 999,
                    background: "#0f6b5f",
                  }}
                />
                {b}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#0f6b5f",
            fontWeight: 700,
          }}
        >
          <div>Remote sessions or in-home visits</div>
          <div
            style={{
              background: "#f4a261",
              color: "#1f2a30",
              borderRadius: 999,
              padding: "14px 28px",
            }}
          >
            {siteConfig.phone.display}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

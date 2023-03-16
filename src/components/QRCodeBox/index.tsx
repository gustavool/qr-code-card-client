import QRCode from "react-qr-code";

interface QRCodeBoxProps {
  link: string;
}

export default function QRCodeBox({ link }: QRCodeBoxProps) {
  return (
    <div
      style={{
        height: "auto",
        margin: "0 auto",
        maxWidth: 200,
        width: "100%",
      }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={link}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}

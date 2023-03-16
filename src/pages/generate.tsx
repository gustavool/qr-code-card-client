import CardFields from "@/components/CardFields";
import DefaultTemplate from "@/components/templates/default";

export type CardDataType = {
  name: string;
  about: string;
  linkedin: string;
  github: string;
};

export default function Generate() {
  return (
    <DefaultTemplate>
      <CardFields />
    </DefaultTemplate>
  );
}

import Text from "@/ui/Text/Text";

interface FeatureProps {
  title: string;
  description: string;
  imgSrc: string;
}

const Feature = ({ title, description, imgSrc }: FeatureProps) => {
  return (
    <div className="flex items-center py-16 gap-20">
      <div className="flex flex-col gap-5">
        <Text variant="h2">{title}</Text>
        <Text variant="body1"> {description}</Text>
      </div>

      <img src={imgSrc} className="max-w-md rounded-2xl" />
    </div>
  );
};

export default Feature
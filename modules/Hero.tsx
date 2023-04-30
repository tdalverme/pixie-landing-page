import Button from "@/ui/Button/Button";
import Text from "@/ui/Text/Text";

const Hero = (): React.ReactElement => {
  return (
    <div className="flex flex-col justify-center items-center bg-violet-600 pt-10 pb-24">
      <Text variant="h1" className="text-center text-white max-w-4xl">
        Easily Handle Your Shop's Appointments, Services, and More
      </Text>

      <Button size="lg" variant="white" className="mt-7 mb-12">
        Sign Up
      </Button>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        className="rounded-3xl"
      />
    </div>
  );
}

export default Hero
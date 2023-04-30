import Text from "@/ui/Text/Text";

const Integrations = (): React.ReactElement => {
  return (
      <div className="bg-violet-600 py-24 flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center text-center gap-6 text-white">
          <Text variant="h3">Integrations with your favorite tools</Text>
          <Text variant="body1">
            Sync your team’s most important apps, wth over 20 integrations
          </Text>
        </div>

        <div className="flex items-center justify-center gap-4">
          <img
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_White_512px.png"
            className="object-contain max-h-12"
          />
          <img
            src="https://assets.ifttt.com/images/channels/1396293310/icons/monochrome_large.png"
            className="object-contain max-h-12"
          />
          <img
            src="https://assets.ifttt.com/images/channels/799977804/icons/monochrome_large.png"
            className="object-contain max-h-12"
          />
        </div>
      </div>
  );
}

export default Integrations
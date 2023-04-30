import Text from "@/ui/Text/Text";

const BENEFITS = [
    {
        title: 'Reduce No-Shows and Cancellations',
        description: 'Implement an automated reminder system to send SMS or email notifications to customers and shops before their appointments.',
        imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg'
    },
    {
        title: 'Simplify the payment process',
        description: 'Allow shops to integrate with various payment gateways, such as Stripe or PayPal, to accept online payments for their services.',
        imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg'
    }
]

const Benefits = () => {
  return (
    <div className="flex flex-col gap-40">
      {BENEFITS.map((benefit, index) => (
        <div className={`flex items-center justify-center gap-20 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <img src={benefit.imgSrc} className="max-w-md rounded-2xl" />

          <div className="flex flex-col gap-6">
            <Text variant="h3">{benefit.title}</Text>
            <Text variant="body1">{benefit.description}</Text>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Benefits
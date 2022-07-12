import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="What You Can Find Using Spartlic"
    description="More than 700 car services shops details and many exclusive offers"
  >
    <VerticalFeatureRow
      title="Car Services Shops"
      description="Spartlic has 300+ car services shops details and locations, such as auto maintenance shops, tyre shops, recovery phone number and more."
      image="/assets/images/carServiceweb.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Used Auto Parts Shops"
      description="Spartlic has 400+ used auto parts shops details, where you can search for any car model and find shops details selling used auto parts for that model."
      image="/assets/images/usedparts2.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Car Services Offers"
      description="Spartlic has many exclusive offers on different car services such as polishing, window tinting, maintenance and more. Plus limited time offers with big discount rate."
      image="/assets/images/offersweb.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

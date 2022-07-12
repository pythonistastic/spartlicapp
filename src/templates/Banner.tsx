import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Dont waste your time and fuel looking around for shops"
      subtitle=" or used auto parts, and find offers instantly with Spartlic"
      button={
        <Link href="https://onelink.to/779can">
          <a>
            <Button>Download The App</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };

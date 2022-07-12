import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Find Car Services Shops Easily With\n'}
            <span className="text-primary-950">Spartlic</span>
          </>
        }
        description="The largest car services marketing platform"
        button={
          <Link href="https://onelink.to/779can">
            <a>
              <Button xl>Download The App</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

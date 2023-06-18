import React from 'react';
import {
  useTheme,
  Navbar,
  Button,
  Link,
  Text,
  Switch,
} from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import { SunIcon, MoonIcon } from '../common/icons';

const Header = () => {
  const collapseItems = [
    'Features',
    'Customers',
    'Pricing',
    'Company',
    'Legal',
    'Team',
    'Help & Feedback',
    'Login',
    'Sign Up',
  ];
  const darkMode = useDarkMode(false);

  return (
    <Navbar shouldHideOnScroll isBordered variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        hideIn="xs"
        variant="highlight-rounded"
      >
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Switch
          checked={darkMode.value}
          onChange={() => darkMode.toggle()}
          size="xl"
          iconOn={<SunIcon filled />}
          iconOff={<MoonIcon filled />}
        />
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#about"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

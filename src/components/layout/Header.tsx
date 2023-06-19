import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Link, Text, Switch } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import { SunIcon, MoonIcon } from '../common/icons';

const Header = () => {
  const collapseItems = [
    { name: '診断テスト', path: '/' },
    { name: '闇バイトとは', path: '/about' },
    { name: 'お問い合わせ', path: '/contact' },
  ];
  const darkMode = useDarkMode(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar shouldHideOnScroll isBordered variant="floating">
      <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
      <Navbar.Brand>
        <Text b color="inherit">
          闇バイト診断テスト
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <Navbar.Link href="/" isActive={currentPath === '/'}>
          診断テスト
        </Navbar.Link>
        <Navbar.Link href="/about" isActive={currentPath === '/about'}>
          闇バイトとは
        </Navbar.Link>
        <Navbar.Link href="/contact" isActive={currentPath === '/contact'}>
          お問い合わせ
        </Navbar.Link>
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
          <Navbar.CollapseItem key={item.name}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href={item.path}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

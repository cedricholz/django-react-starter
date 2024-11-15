import {
  Autocomplete,
  Burger,
  Group,
  rem,
  useMantineTheme,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconSearch } from "@tabler/icons-react"
import { MantineLogo } from "@mantinex/mantine-logo"
import "./Header.css"
import { Link } from "react-router-dom"
import HeaderProfile from "./HeaderProfile.jsx"

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
]

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false)

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={"link"}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ))

  return (
    <header className={"header"}>
      <div className={"inner"}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            <MantineLogo size={28} />
          </Link>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={"links"} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={"search"}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xs"
          />
          <HeaderProfile />
        </Group>
      </div>
    </header>
  )
}
export default Header

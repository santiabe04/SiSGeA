"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarMenuToggle, Button, Image} from "@nextui-org/react"
import { SearchIcon } from "./SearchIcon.jsx"
import { usePathname } from "next/navigation.js"
import { useState } from "react"

function NavBar({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()

  return (
    <Navbar isBordered  onMenuOpenChange={setIsMenuOpen}>
      {/*Toggle when Small Device*/}
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
      />

      {/*Logo*/}
      <NavbarBrand className="p-4 max-w-unit-5xl">
        <Image
          fill="true"
          src="/sisgea_logo.png"
          alt="SiSGeA Logo"
        />
      </NavbarBrand>

      {/*Routes*/}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((item) => {
          {item.subroutes && item.subroutes.length > 0 ? (
            <Dropdown key={item.label}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    radius="sm"
                    variant="light"
                  >
                    {item.label}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label={item.label}
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {item.subroutes.map((subroute) => {
                  <DropdownItem key={subroute.label}
                    description={subroute.description}
                  >
                    {subroute.label}
                  </DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem isActive={pathname === item.route ? "true" : ""} aria-current={pathname === item.route ? "page" : " "} key={item.label}>
              <Link color="foreground" href={pathname === item.route ? "#" : item.route}>
                {item.label}
              </Link>
            </NavbarItem>
          )}
        })}
      </NavbarContent>

      {/*End*/}
      <NavbarContent as="div" className="items-center" justify="end">
        {/*Search Bar*/}
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        {/*User*/}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            {/*Logo*/}
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="default"
              name="Admin"
              size="sm"
              src=""
            />
          </DropdownTrigger>
          {/*Options*/}
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar
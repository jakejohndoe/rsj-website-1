import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";

export const MacbookPro = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { name: "home", isActive: true },
    { name: "actor", isActive: false },
    { name: "author", isActive: false },
    { name: "professor", isActive: false },
    { name: "courses", isActive: false },
    { name: "blog", isActive: false },
    { name: "contact", isActive: false },
  ];

  // Pagination dots
  const paginationDots = Array(6).fill(null);

  // Social media icons
  const socialIcons = [
    { src: "/img-icons8-1.png", alt: "Facebook" },
    { src: "/img-icons8-1-1.png", alt: "Instagram" },
    { src: "/img-icons8-2-1.png", alt: "YouTube" },
    { src: "/img-icons8-3-1.png", alt: "TikTok" },
  ];

  return (
    <div className="bg-[#85848499] flex flex-row justify-center w-full">
      <div className="bg-[#85848499] overflow-hidden w-[1728px] h-[1117px]">
        <div className="relative w-[1442px] h-[1017px] top-[103px] left-36">
          <div className="absolute w-[1440px] h-[1014px] top-0 left-0 bg-[#000000e3] rounded-[50px]" />

          {/* Menu button */}
          <div className="absolute w-[47px] h-[47px] top-[35px] left-[42px] bg-[#ffffff99] rounded-[23.5px] shadow-[inset_0px_4px_4px_#00000040]">
            <div className="absolute w-3.5 h-7 top-2.5 left-2.5 bg-black" />
            <div className="absolute w-[13px] h-3.5 top-2.5 left-[25px] bg-black" />
            <div className="absolute w-[13px] h-3 top-[26px] left-[25px] bg-black" />
          </div>

          {/* SearchIcon button */}
          <div className="absolute w-[47px] h-[47px] top-[35px] left-[1146px] bg-[#ffffff99] rounded-[23.5px] shadow-[inset_0px_4px_4px_#00000040] flex items-center justify-center">
            <div className="relative w-7 h-[23px]">
              <div className="w-[23px] h-5 left-0 rounded-[11.72px/10.12px] border-[3px] border-solid border-black absolute top-0" />
              <img
                className="absolute w-[11px] h-2.5 top-[13px] left-[17px]"
                alt="Line"
                src="/line-1.svg"
              />
            </div>
          </div>

          {/* Sign in button */}
          <Button className="absolute w-[175px] h-[47px] top-[35px] left-[1221px] bg-[#ffffff99] rounded-[50px] border border-solid border-black shadow-[inset_0px_4px_4px_#00000040] text-black hover:bg-[#ffffffcc]">
            <span className="[font-family:'Pecita-Book',Helvetica] font-normal text-2xl">
              sign in
            </span>
          </Button>

          {/* Navigation menu */}
          <NavigationMenu className="absolute w-[975px] h-[47px] top-[35px] left-[111px]">
            <NavigationMenuList className="w-[961px] h-[47px] bg-[#ffffff99] rounded-[50px] shadow-[inset_0px_4px_4px_#00000040] flex items-center px-[30px]">


            {navItems.map((item, index) => (
              <NavigationMenuItem
             key={index}
             className={`px-4 ${index === 0 ? "mr-2" : ""}`}
            >
             <Button 
            variant="ghost"
            aria-current={item.isActive ? "page" : undefined}
            className={`${item.isActive ? "font-semibold" : ""} [font-family:'Pecita-Book',Helvetica] text-2xl bg-transparent hover:bg-gray-200 hover:bg-opacity-50`}
             >
      {item.name}
    </Button>
  </NavigationMenuItem>
))}



            </NavigationMenuList>
          </NavigationMenu>

          {/* Video/Image container */}
          <div className="absolute w-[778px] h-[509px] top-[456px] left-[52px]">
            <Card className="absolute w-[664px] h-[476px] top-0 left-[57px] bg-[#ffffff99] rounded-[100px] border-0">
              <CardContent className="relative w-[637px] h-[456px] top-3 left-3.5 bg-black rounded-[100px] p-0" />
            </Card>

            {/* Navigation arrows */}
            <img
              className="top-[220px] left-[748px] absolute w-[30px] h-[35px]"
              alt="Polygon"
              src="/polygon-1.svg"
            />
            <img
              className="top-56 left-0 absolute w-[30px] h-[35px]"
              alt="Polygon"
              src="/polygon-2.svg"
            />

            {/* Pagination dots */}
            <div className="absolute w-[140px] h-[21px] top-[488px] left-[318px] flex space-x-1">
              {paginationDots.map((_, index) => (
                <div
                  key={index}
                  className="w-5 h-[21px] bg-[#4e4e4e] rounded-[10.24px/10.36px]"
                />
              ))}
            </div>
          </div>

          {/* Name header */}
          <div className="absolute w-full top-[129px] left-[285px] flex">
            <h1 className="[font-family:'Pecita-Book',Helvetica] font-normal text-white text-9xl tracking-[0] leading-[normal]">
              Stevie
            </h1>
            <h1 className="[font-family:'Pecita-Book',Helvetica] font-normal text-white text-9xl tracking-[0] leading-[normal] ml-8">
              Johnson
            </h1>
          </div>

          {/* Subtitle */}
          <div className="absolute w-[555px] top-[287px] left-[428px] [font-family:'Pecita-Book',Helvetica] font-normal text-[#d1d1d1] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Actor / Professor / Director / Therapist / Father
          </div>

          {/* Dividing line */}
          <Separator className="absolute w-[1198px] h-1 top-[435px] left-[121px]">
            <img
              className="w-full h-full object-cover"
              alt="Dividing line"
              src="/dividing-line--for-pic-.svg"
            />
          </Separator>

          {/* About Me section */}
          <div className="absolute w-[458px] h-[417px] top-[450px] left-[862px]">
            <h2 className="absolute top-0 left-[94px] [font-family:'Pecita-Book',Helvetica] font-normal text-[#d1d1d1] text-[64px] tracking-[0] leading-[normal]">
              About Me:
            </h2>

            <p className="absolute top-[93px] left-0 [font-family:'Pecita-Book',Helvetica] font-normal text-[#d1d1d1] text-[29px] tracking-[0] leading-[normal]">
              Stevie Johnson is an actor,
              <br />
              director, producer, and professor
              <br />
              dedicated to storytelling <br />
              in all its forms.
              <br />
              <br />A father, artist, and visionary, <br />
              Stevie brings passion <br />
              and authenticity to every <br />
              project he undertakes.
            </p>
          </div>

          {/* Social media icons */}
          <div className="absolute w-[410px] h-[50px] top-[907px] left-[862px] flex justify-between">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-12 h-12 object-cover"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>

          {/* Footer */}
          <footer className="absolute w-[1442px] h-[30px] top-[987px] left-0 bg-transparent">
            <div className="relative w-[1440px] h-[30px]">
              <div className="absolute w-[1440px] h-[25px] top-0.5 left-0 bg-[#d9d9d90d]" />
              <div className="absolute top-0 left-[623px] [font-family:'Pecita-Book',Helvetica] font-normal text-[#d9d9d938] text-2xl tracking-[0] leading-[normal]">
                @2025 jakejohndoe
              </div>
            </div>
          </footer>

          {/* Bottom separator */}
          <Separator className="absolute w-[457px] h-px top-[889px] left-[862px]">
            <img
              className="w-full h-full object-cover"
              alt="Line"
              src="/line-2.svg"
            />
          </Separator>
        </div>
      </div>
    </div>
  );
};

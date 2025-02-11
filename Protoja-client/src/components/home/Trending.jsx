"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Trending() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div className="bg-[#E8E8E8] p-20" ref={ref}>
      <div className={`flex justify-between pt-3 pb-16`}>
        <Typography
          variant="body1"
          color="initial"
          className="text-5xl text-center font-semibold"
        >
          What's trending
        </Typography>
        <div className="flex">
          <div>
            <button className="bg-white w-[120px] rounded-[1440px] text-black p-1">
              What's trending
            </button>
            <Link href={"/service"}>Service</Link>
          </div>
          <div className="flex overflow-hidden justify-center items-center px-2.5 bg-white rounded-2xl h-[33px] min-h-[33px] w-[33px]">
            <Image
              loading="lazy"
              src="/assets/scrool/arrow.png"
              className="object-contain self-stretch my-auto aspect-[0.93] w-[13px]"
              width={120}
              height={120}
              alt="arrow"
            />
          </div>
        </div>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            size={4}
            className={`${
              isVisible ? "animate__animated animate__fadeInLeft" : ""
            }`}
          >
            <Image
              src="/assets/scrool/t1.png"
              width={2000}
              height={1000}
              alt="approch"
              className="h-[302px]"
            />
            <Typography variant="subtitle1" className="font-semibold mt-1 ">
              Rudy Capital | Turning crypto complexity into clarity
            </Typography>
            <Typography variant="body" className="font-normal text-black">
              Strategy - Visual Identity - Website
            </Typography>
          </Grid>
          <Grid
            size={4}
            className={`${
              isVisible ? "animate__animated animate-slideInFromTop " : ""
            }`}
          >
            <Image
              src="/assets/scrool/t3.png"
              width={2000}
              height={1000}
              alt="approch"
              className="h-[302px]"
            />
            <Typography variant="subtitle1" className="font-semibold mt-1 ">
              Nola | Beauty and bullsh*t don’t mix
            </Typography>
            <Typography variant="body" className="font-normal text-black">
              Strategy - Visual Identity - Website
            </Typography>
          </Grid>
          <Grid
            size={4}
            className={`${
              isVisible ? "animate__animated animate__fadeInRight" : ""
            }`}
          >
            <Image
              src={"/assets/scrool/t2.png"}
              width={2000}
              height={1000}
              alt="approch"
              className="h-[302px]"
            />
            <Typography variant="subtitle1" className="font-semibold mt-1 ">
              Otterspace | Unleashing the Power of Communities
            </Typography>
            <Typography variant="body" className="font-normal text-black">
              Strategy - Visual Identity - Website
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

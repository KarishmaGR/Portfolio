import HeroBgAnimation from "../Animation";
import { Bio } from "../../data/constant.js";
import Typewriter from "typewriter-effect";
import HeroImage from "./../../Images/HeroImage.jpeg";
import styled from "styled-components";

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 60%;
  border: 2px solid blue;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;
const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:white;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

const Herosection = () => {
  return (
    <div id="about" className="flex  justify-center z-0">
      <div className="clip-polygon  flex  overflow-hidden justify-end relative  py-8  px-28 ">
        <div className=" absolute  flex justify-center bottom-0  w-[100%]   right-0  overflow-hidden   top-[5%] left-[30%]  sm:left-[10%] sm:-top-[10%] -translate-x-12 -translate-y-10">
          <HeroBgAnimation />
        </div>
        <div className="  flex justify-between   sm:flex-col-reverse  sm:mb-6 sm:justify-center sm:items-center sm:gap-8 items-center w-[100vw]">
          <div
            id="left"
            className="  order-1 flex w-[100%]  justify-between flex-col"
          >
            <h1 className=" font-semibold text-[3rem] sm:text-[1.5rem] text-white  leading-tight  ">
              Hi, I am <br /> {Bio.name}
            </h1>
            <div className=" font-semibold w-[100%] text-3xl sm:text-2xl leading-snug flex gap-3 text-white">
              I am a
              <span className=" text-purple-900 sm:text-2xl">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className=" text-white  sm:text-sm text-[1rem] mb-5 leading-9 mt-5">
              {Bio.description}
            </div>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </div>

          <div
            id="right"
            className="  w-[100%] order-2 flex justify-end items-center "
          >
            <Img src={HeroImage} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Herosection;

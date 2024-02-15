import React from "react";
import { useRef, useState, useEffect } from "react";

export const CounterCard = ({ name, timeValue }) => {

  const [n, setN] = useState(timeValue);

  const [topP, setTopP] = useState();
  const [topFlipP, setTopFlipP] = useState(n);
  const [bottomP, setBottomP] = useState();
  const [bottomFlipP, setBottomFlipP] = useState();

  const topContent = useRef();
  const topFlip = useRef();
  const topFlipContent = useRef();
  const bottomContent = useRef();
  const bottomFlipContent = useRef();
  const bottomFlip = useRef();

  //   console.log(timeValue);

  useEffect(() => {

    console.log(n);

    let flag = false;

    if (!flag) {
      setN(timeValue);

      topFlip.current.classList.add("animate-flipDown");
      bottomFlip.current.classList.add("animate-flipUp");
    }



    // topContent.textContent = timeValue;
    // topFlipContent.textContent = timeValue;
    // bottomFlipContent.textContent = timeValue;

    // console.log(topContent.textContent);



    // topFlip.addEventListener("animationstart", () => {
    //   topFlipContent.textContent = timeValue;
    //   topContent.textContent = timeValue + 1;
    // });

    // topFlip.addEventListener("animationend", (e) => {
    //   topFlipContent.textContent = timeValue + 1;
    //   topFlip.current.classList.remove("animate-flipDown");
    // });

    // bottomFlip.addEventListener("animationstart", () => {
    //   // bottomP.textContent = seconds;
    //   bottomFlipContent.textContent = timeValue + 1;
    // });

    // bottomFlip.addEventListener("animationend", (e) => {
    //   bottomContent.textContent = timeValue + 1;
    //   bottomFlip.current.classList.remove("animate-fliUp");
    // });



    return () => {
      flag = true;
    }

  }, [timeValue]);

  function TopFlipStartAnimation() {
    // topFlipContent.textContent = timeValue;
    // topContent.textContent = timeValue + 1;

    // setTopFlipP(timeValue);
    setTopP(n + 1);
  }

  function TopFlipAnimationEnd() {
    // topFlipContent.textContent = timeValue + 1;

    setTopFlipP(n + 1);

    topFlip.current.classList.remove("animate-flipDown");
  }

  function BottomFlipAnimationStart() {
    // bottomFlipContent.textContent = timeValue + 1;

    setBottomFlipP(n + 1);
    // setBottomP(n + 1);
  }

  function BottomFlipAnimationEnd() {
    // bottomContent.textContent = timeValue + 1;

    setBottomP(n + 1);

    bottomFlip.current.classList.remove("animate-flipUp");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <div className=" relative overflow-hidden w-32 h-32 shadow-[0px_10px_5px_0px_rgba(0,0,0,0.5)]">

        <div className=" w-2.5 h-2.5 absolute bg-black rounded-full z-20 top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>

        <div className=" w-2.5 h-2.5 absolute bg-black rounded-full z-20 top-[50%] right-0 translate-x-[50%] translate-y-[-50%]"></div>
        

        <div
          className=" bg-[#2c2c44] w-full h-1/2 overflow-hidden text-[70px] font-extrabold absolute top-[-1px] left-0 rounded-t-md "
          id="top"
        >
          <p
            className=" absolute bottom-[-85%] left-[50%] translate-x-[-50%] text-[#d44e71]"
            ref={topContent}
          >
            {topP}
          </p>
        </div>



        <div
          className=" bg-[#2c2c44] w-full h-1/2 overflow-hidden text-[70px] font-extrabold absolute top-[-1px] left-0 origin-bottom rounded-t-md "
          id="flip-top"
          ref={topFlip}
          onAnimationStart={TopFlipStartAnimation}
          onAnimationEnd={TopFlipAnimationEnd}
        >
          <p
            className=" absolute bottom-[-85%] left-[50%] translate-x-[-50%] text-[#d44e71]"
            ref={topFlipContent}
          >
            {topFlipP}
          </p>
        </div>



        <div
          className=" bg-[#34364f] w-full h-1/2 overflow-hidden text-[70px] font-extrabold absolute bottom-0 left-0 rounded-b-md"
          id="bottom"
        >
          <p
            className=" absolute top-[-80%] left-[50%] translate-x-[-50%] text-[#f85d85]"
            ref={bottomContent}
          >
            {bottomP}
          </p>
        </div>



        <div
          className=" bg-[#34364f] w-full h-1/2 overflow-hidden text-[70px] font-extrabold absolute bottom-0 left-0 origin-top rounded-b-md"
          id="flip-bottom"
          ref={bottomFlip}
          onAnimationStart={BottomFlipAnimationStart}
          onAnimationEnd={BottomFlipAnimationEnd}
        >
          <p
            className=" absolute top-[-80%] left-[50%] translate-x-[-50%] text-[#f85d85]"
            ref={bottomFlipContent}
          >
            {bottomFlipP}
          </p>
        </div>


      </div>

      <p className=" text-[#8486a9] tracking-[5px]">{name}</p>
    </div>
  );
};

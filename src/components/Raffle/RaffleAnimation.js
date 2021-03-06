import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineMax } from "gsap";
import "./RaffleAnimation.scss";
import PropTypes from "prop-types";

const RaffleAnimation = ({ moveAnimation, onStop }) => {
  let person = useRef(null);
  let bitcoin = useRef(null);
  let machineCircles = document.getElementsByClassName("machine-circles");
  let hexags = document.getElementsByClassName("hexa");
  let blueSquares = useRef(null);
  let face = useRef(null);
  let face2 = useRef(null);

  let firstCoin = useRef(null);
  let firstCoinLines = useRef(null);

  let coins = useRef(null);
  let sparkleTop = document.getElementsByClassName("sparkle-top");

  let machineWrapper = useRef(null);
  let characterWrapper = useRef(null);
  let tl = new TimelineMax({});

  useEffect(() => {
    if (moveAnimation !== undefined) {
      if (moveAnimation) {
        startAnimation();
      } else {
        console.log("animation stop");
      }
    }
  }, [moveAnimation]);

  const setAnimationDefaultValues = () => {
    TweenMax.set(person.current, { transformOrigin: "center bottom" });
    TweenMax.set(face2.current, { autoAlpha: 1 });
    TweenMax.set(bitcoin.current, { autoAlpha: 0 });
    TweenMax.set(firstCoin.current, { y: -150, autoAlpha: 0 });
    TweenMax.set(firstCoinLines.current, { y: -150, autoAlpha: 0 });
    TweenMax.set([machineWrapper.current, coins.current], { autoAlpha: 1 });
    TweenMax.set(machineCircles, {
      autoAlpha: 0,
      transformOrigin: "center center",
    });
    TweenMax.set(sparkleTop, { autoAlpha: 0 });
    TweenMax.set(face.current, { autoAlpha: 0 });
    TweenMax.set(characterWrapper.current, { y: -150 });
    TweenMax.set(coins.current, { autoAlpha: 0 });
    TweenMax.set(hexags, { autoAlpha: 0 });
    TweenMax.set(blueSquares.current, { autoAlpha: 0 });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = async () => {
    tl.restart();
    setAnimationDefaultValues();
    await tl
      .fromTo(person.current, 0.3, { scaleY: 0 }, { scaleY: 1 })
      .to(bitcoin.current, 0.3, { autoAlpha: 1 }) // machine appears
      .to(firstCoin.current, 0.3, { autoAlpha: 1, y: -40 }) // coin
      .to(firstCoin.current, 0.3, { autoAlpha: 0, y: 150, delay: 0.3 }) // coin
      .to(blueSquares.current, 0.5, { autoAlpha: 1 }) // machine blue squares shows
      .staggerTo(machineCircles, 0.3, { autoAlpha: 1, rotation: 90 }, 0.1) // circles spinning
      .staggerTo(machineCircles, 0.1, { rotation: 6200 }, 0.2) // circles spinning
      .staggerTo(
        hexags,
        1,
        { autoAlpha: 1 },
        1,
        "-=5"
      ) /* MACHINE DOING THE THING */
      .staggerTo(hexags, 1, { autoAlpha: 0 }, 1, "-=3")
      .to(face2.current, 0.1, { autoAlpha: 0 })
      .to(face.current, 0.1, { autoAlpha: 1 }, "-=0.2")
      .to([machineWrapper.current, coins.current], 0.2, { autoAlpha: 0 }) // machine dissappears
      .to(characterWrapper.current, 0.1, { y: 150 }) //character moved  */
      .to(coins.current, 0.1, { autoAlpha: 1, y: 130 })
      .staggerTo(sparkleTop, 0.1, { autoAlpha: 1, y: 5 }, 0.1);
    onStop();
  };

  return (
    <div className="bg">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1245 1323"
        width="90%"
        height="90%"
        style={{ marginTop: "-2em" }}
        // viewBox="0 0 960 540"
      >
        <g id="wrapper">
          <g ref={characterWrapper}>
            <g id="character">
              <g ref={person}>
                <path
                  className="st0"
                  d="M735.2,400.5c0-20.7-15.8-37.6-35.7-38.5H580.9c-19.3,0-35.5,13.2-39.8,30.9c-0.7,3-1.1,6.2-1.1,9.4v216.2
         c0,5.9,4.9,10.8,10.9,10.8h150.3c6,0,10.9-4.8,10.9-10.8V460.2c0-2.1,0.1-11.9,0.2-24.2C725.8,430.2,735.2,416.5,735.2,400.5
         L735.2,400.5z"
                />
                <path
                  className="st1"
                  d="M735.2,390.7c0-21.6-15.8-39.2-35.7-40.1H580.9c-19.3,0-35.5,13.7-39.8,32.2c-0.7,3.2-1.1,6.5-1.1,9.9
         v225.5c0,6.2,4.9,11.2,10.9,11.2h150.3c6,0,10.9-5,10.9-11.2V453c0-2.1,0.1-4.1,0.2-16.9C725.8,429.9,735.2,407.3,735.2,390.7
         L735.2,390.7z"
                />
                <g className="st2">
                  <path
                    className="st3"
                    d="M492.5,805.5c-10.5,0-19-8.5-19-19v-149c0-10.5,8.5-19,19-19h85c8.8,0,16-7.2,16-16v-27
           c0-10.5,8.5-19,19-19h17c10.5,0,19,8.5,19,19v27c0,8.8,7.2,16,16,16h85c10.5,0,19,8.5,19,19v149c0,10.5-8.5,19-19,19H492.5z"
                  />
                  <path
                    className="st4"
                    d="M628,558c10.5,0,19,8.5,19,19v25.5c0,9.7,7.8,17.5,17.5,17.5h85c9.7,0,17.5,7.8,17.5,17.5v149
           c0,9.7-7.8,17.5-17.5,17.5h-257c-9.7,0-17.5-7.8-17.5-17.5v-149c0-9.7,7.8-17.5,17.5-17.5h85c9.7,0,17.5-7.8,17.5-17.5v-27
           c0-9.7,7.8-17.5,17.5-17.5H628 M628,555h-15.5c-11.3,0-20.5,9.2-20.5,20.5v27c0,8-6.5,14.5-14.5,14.5h-85
           c-11.3,0-20.5,9.2-20.5,20.5v149c0,11.3,9.2,20.5,20.5,20.5h257c11.3,0,20.5-9.2,20.5-20.5v-149c0-11.3-9.2-20.5-20.5-20.5h-85
           c-8,0-14.5-6.5-14.5-14.5V577C650,564.9,640.1,555,628,555z"
                  />
                </g>
                <path
                  className="st5"
                  d="M767,673v-35.5c0-9.7-7.8-17.5-17.5-17.5h-85c-9.7,0-17.5-7.8-17.5-17.5v-27c0-9.7-7.8-17.5-17.5-17.5H614
         c-10.5,0-19,8.5-19,19l0.4,70.3c0.1,14.5,11.8,26.2,26.3,26.1L767,673z"
                />
                <g className="st2">
                  <path
                    className="st3"
                    d="M688.7,498.5c-2.9,0-5.2-2.3-5.2-5.2v-26.7c0-2.9,2.3-5.2,5.2-5.2h10.7c2.9,0,5.2,2.3,5.2,5.2v26.7
           c0,2.9-2.3,5.2-5.2,5.2H688.7z"
                  />
                  <path
                    className="st4"
                    d="M697.8,463c2.9,0,5.2,2.3,5.2,5.2v25.2c0,2-1.7,3.7-3.7,3.7h-10.7c-2,0-3.7-1.7-3.7-3.7v-26.7
           c0-2,1.7-3.7,3.7-3.7H697.8 M697.8,460h-9.2c-3.7,0-6.7,3-6.7,6.7v26.7c0,3.7,3,6.7,6.7,6.7h10.7c3.7,0,6.7-3,6.7-6.7v-25.2
           C706,463.7,702.3,460,697.8,460z"
                  />
                </g>
                <g className="st2">
                  <path
                    className="st3"
                    d="M544.3,498.5c-3.2,0-5.8-2.6-5.8-5.8v-25.3c0-3.2,2.6-5.8,5.8-5.8h9.3c3.2,0,5.8,2.6,5.8,5.8v25.3
           c0,3.2-2.6,5.8-5.8,5.8H544.3z"
                  />
                  <path
                    className="st4"
                    d="M552.2,463c3.2,0,5.8,2.6,5.8,5.8v23.8c0,2.4-1.9,4.3-4.3,4.3h-9.3c-2.4,0-4.3-1.9-4.3-4.3v-25.3
           c0-2.4,1.9-4.3,4.3-4.3H552.2 M552.2,460h-6.3c-4.9,0-8.8,4-8.8,8.8v22.3c0,4.9,4,8.8,8.8,8.8h6.3c4.9,0,8.8-4,8.8-8.8v-22.3
           C561,464,557,460,552.2,460z"
                  />
                </g>
                <path
                  className="st6"
                  d="M640.8,571h-35.5c-29.4,0-53.3-23.8-53.3-53.3v-77.5c0-29.4,23.8-53.3,53.3-53.3h35.5
         c29.4,0,53.3,23.8,53.3,53.3v77.5C694,547.2,670.2,571,640.8,571z"
                />
                <path
                  className="st0"
                  d="M694,439h-89l0.5-54l96.8,0.5L694,439z"
                />
                <path className="st1" d="M611,413.4v-26.5h31" />
                <path
                  className="st1"
                  d="M694,440.3v77.5c0,29.4-23.8,53.3-53.3,53.3h-35.5c-29.4,0-53.3-23.8-53.3-53.3v-77.5
         c0-28.8,22.9-52.3,51.5-53.2"
                />
                <path
                  className="st1"
                  d="M707.7,416.4c0,12-9.8,21.8-21.8,21.8H648"
                />
                <g ref={face}>
                  <path
                    id="happyMouth"
                    className="st7"
                    d="M598.2,530c1,1.3,9.4,11.8,24,12c15,0.2,23.7-10.8,24.7-12"
                  />
                  <path
                    id="happyEyes"
                    className="st8"
                    d="M572.3,470c0.8-1,7.1-8.9,18-9c11.2-0.1,17.8,8.1,18.5,9 M637.3,470c0.8-1,7.1-8.9,18-9
           c11.2-0.1,17.8,8.1,18.5,9"
                  />
                </g>

                <g ref={face2}>
                  <line
                    id="mouth"
                    className="st7"
                    x1="609.2"
                    y1="539.6"
                    x2="637.2"
                    y2="539.6"
                  />
                  <g id="eyes">
                    <circle className="st4" cx="656.5" cy="469.7" r="8.5" />
                    <circle className="st4" cx="592.3" cy="469.7" r="8.5" />

                    <g id="bright">
                      <ellipse
                        transform="matrix(0.6106 -0.7919 0.7919 0.6106 -115.9888 707.2086)"
                        className="st9"
                        cx="661.2"
                        cy="471.6"
                        rx="1.6"
                        ry="1.6"
                      />

                      <ellipse
                        transform="matrix(0.6106 -0.7919 0.7919 0.6106 -111.912 704.2126)"
                        className="st9"
                        cx="660.2"
                        cy="465.9"
                        rx="2.7"
                        ry="2.7"
                      />

                      <ellipse
                        transform="matrix(0.6106 -0.7919 0.7919 0.6106 -136.6586 653.8516)"
                        className="st9"
                        cx="596.6"
                        cy="465.9"
                        rx="2.7"
                        ry="2.7"
                      />

                      <ellipse
                        transform="matrix(0.6106 -0.7919 0.7919 0.6106 -140.7354 656.8477)"
                        className="st9"
                        cx="597.6"
                        cy="471.5"
                        rx="1.6"
                        ry="1.6"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>

            <g id="sparkle">
              <g className="st2">
                <path
                  className="st3 sparkle-top"
                  d="M646.4,288.6c-0.4,0-0.8-0.2-1.1-0.4l-6.5-6.5c-0.6-0.6-0.6-1.5,0-2.1l6.4-6.4c0.3-0.3,0.7-0.4,1.1-0.4
         s0.8,0.2,1.1,0.4l6.5,6.5c0.6,0.6,0.6,1.5,0,2.1l-6.4,6.4C647.2,288.4,646.8,288.6,646.4,288.6z"
                />
                <path
                  className="st4 sparkle-top"
                  d="M646.3,274.3l6.5,6.5l-6.4,6.4l-6.5-6.5L646.3,274.3 M646.3,271.3c-0.8,0-1.5,0.3-2.1,0.9l-6.4,6.4
         c-0.6,0.6-0.9,1.3-0.9,2.1s0.3,1.6,0.9,2.1l6.5,6.5c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l6.4-6.4c0.6-0.6,0.9-1.3,0.9-2.1
         s-0.3-1.6-0.9-2.1l-6.5-6.5C647.8,271.5,647,271.3,646.3,271.3z"
                />
              </g>
              <g className="st2">
                <path
                  className="st3 sparkle-top"
                  d="M619.6,272c-0.4,0-0.8-0.2-1.1-0.4l-5.2-5.2c-0.6-0.6-0.6-1.5,0-2.1l5.1-5.1c0.3-0.3,0.7-0.4,1.1-0.4
         s0.8,0.1,1.1,0.4l5.2,5.2c0.6,0.6,0.6,1.5,0,2.1l-5.1,5.1C620.4,271.9,620,272,619.6,272z"
                />
                <path
                  className="st4 sparkle-top"
                  d="M619.5,260.2l5.2,5.2l-5.1,5.1l-5.2-5.2L619.5,260.2 M619.5,257.2c-0.8,0-1.5,0.3-2.1,0.9l-5.1,5.1
         c-1.2,1.2-1.2,3.1,0,4.2l5.2,5.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l5.1-5.1c1.2-1.2,1.2-3.1,0-4.2l-5.2-5.2
         C621.1,257.5,620.3,257.2,619.5,257.2z"
                />
              </g>
              <g className="st2">
                <path
                  className="st3 sparkle-top"
                  d="M624.9,321.6c-0.4,0-0.8-0.1-1.1-0.4l-16.7-16.7c-0.6-0.6-0.6-1.5,0-2.1l16.4-16.4c0.3-0.3,0.7-0.4,1.1-0.4
         s0.8,0.1,1.1,0.4l16.7,16.7c0.3,0.3,0.4,0.7,0.4,1.1s-0.2,0.8-0.4,1.1L626,321.2C625.7,321.4,625.3,321.6,624.9,321.6z"
                />
                <path
                  className="st4 sparkle-top"
                  d="M624.6,287l16.7,16.7l-16.4,16.4l-16.7-16.7L624.6,287 M624.6,284c-0.8,0-1.6,0.3-2.1,0.9l-16.4,16.4
         c-1.2,1.2-1.2,3.1,0,4.2l16.7,16.7c0.6,0.6,1.3,0.9,2.1,0.9s1.6-0.3,2.1-0.9l16.4-16.4c1.2-1.2,1.2-3.1,0-4.2l-16.7-16.7
         C626.2,284.3,625.4,284,624.6,284z"
                />
              </g>
              <g id="sparkle-top" className="st2"></g>
              <g className="st2">
                <path
                  className="st3 sparkle-top"
                  d="M624.9,322.6c-0.4,0-0.8-0.1-1.1-0.4l-16.7-16.7c-0.6-0.6-0.6-1.5,0-2.1l16.4-16.4c0.3-0.3,0.7-0.4,1.1-0.4
         s0.8,0.1,1.1,0.4l16.7,16.7c0.3,0.3,0.4,0.7,0.4,1.1s-0.2,0.8-0.4,1.1L626,322.2C625.7,322.4,625.3,322.6,624.9,322.6z"
                />
                <path
                  className="st4 sparkle-top"
                  d="M624.6,288l16.7,16.7l-16.4,16.4l-16.7-16.7L624.6,288 M624.6,285c-0.8,0-1.6,0.3-2.1,0.9l-16.4,16.4
         c-1.2,1.2-1.2,3.1,0,4.2l16.7,16.7c0.6,0.6,1.3,0.9,2.1,0.9s1.6-0.3,2.1-0.9l16.4-16.4c1.2-1.2,1.2-3.1,0-4.2l-16.7-16.7
         C626.2,285.3,625.4,285,624.6,285z"
                />
              </g>
              <g className="st2">
                <path
                  className="st3 sparkle-top"
                  d="M646.4,289.6c-0.4,0-0.8-0.2-1.1-0.4l-6.5-6.5c-0.6-0.6-0.6-1.5,0-2.1l6.4-6.4c0.3-0.3,0.7-0.4,1.1-0.4
         s0.8,0.2,1.1,0.4l6.5,6.5c0.6,0.6,0.6,1.5,0,2.1l-6.4,6.4C647.2,289.4,646.8,289.6,646.4,289.6z"
                />
                <path
                  className="st4 sparkle-top"
                  d="M646.3,275.3l6.5,6.5l-6.4,6.4l-6.5-6.5L646.3,275.3 M646.3,272.3c-0.8,0-1.5,0.3-2.1,0.9l-6.4,6.4
         c-0.6,0.6-0.9,1.3-0.9,2.1s0.3,1.6,0.9,2.1l6.5,6.5c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l6.4-6.4c0.6-0.6,0.9-1.3,0.9-2.1
         s-0.3-1.6-0.9-2.1l-6.5-6.5C647.8,272.5,647,272.3,646.3,272.3z"
                />
              </g>
              <g className="st2">
                <path
                  className="st3 sparkle-top"
                  d="M619.6,273c-0.4,0-0.8-0.2-1.1-0.4l-5.2-5.2c-0.6-0.6-0.6-1.5,0-2.1l5.1-5.1c0.3-0.3,0.7-0.4,1.1-0.4
         s0.8,0.1,1.1,0.4l5.2,5.2c0.6,0.6,0.6,1.5,0,2.1l-5.1,5.1C620.4,272.9,620,273,619.6,273z"
                />
                <path
                  className="st4 sparkle-top"
                  d="M619.5,261.2l5.2,5.2l-5.1,5.1l-5.2-5.2L619.5,261.2 M619.5,258.2c-0.8,0-1.5,0.3-2.1,0.9l-5.1,5.1
         c-1.2,1.2-1.2,3.1,0,4.2l5.2,5.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l5.1-5.1c1.2-1.2,1.2-3.1,0-4.2l-5.2-5.2
         C621.1,258.5,620.3,258.2,619.5,258.2z"
                />
              </g>
              <g className="st2">
                <path
                  className="st4 sparkle-top"
                  d="M438.9,558.6c-0.4,0-0.8-0.1-1.1-0.4l-16.7-16.7c-0.6-0.6-0.6-1.5,0-2.1l16.4-16.4c0.3-0.3,0.7-0.4,1.1-0.4
         s0.8,0.1,1.1,0.4l16.7,16.7c0.3,0.3,0.4,0.7,0.4,1.1s-0.2,0.8-0.4,1.1L440,558.2C439.7,558.4,439.3,558.6,438.9,558.6
         L438.9,558.6z"
                />
                <path
                  className="st3 sparkle-top"
                  d="M438.6,524l16.7,16.7l-16.4,16.4l-16.7-16.7L438.6,524 M438.6,521c-0.8,0-1.6,0.3-2.1,0.9l-16.4,16.4
         c-1.2,1.2-1.2,3.1,0,4.2l16.7,16.7c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l16.4-16.4c1.2-1.2,1.2-3.1,0-4.2l-16.7-16.7
         C440.2,521.3,439.4,521,438.6,521z"
                />
              </g>
              <g className="st2">
                <path
                  className="st4 sparkle-top"
                  d="M460.4,525.6c-0.4,0-0.8-0.2-1.1-0.4l-6.5-6.5c-0.6-0.6-0.6-1.5,0-2.1l6.4-6.4c0.3-0.3,0.7-0.4,1.1-0.4
         s0.8,0.2,1.1,0.4l6.5,6.5c0.6,0.6,0.6,1.5,0,2.1l-6.4,6.4C461.1,525.4,460.8,525.6,460.4,525.6z"
                />
                <path
                  className="st3 sparkle-top"
                  d="M460.3,511.3l6.5,6.5l-6.4,6.4l-6.5-6.5L460.3,511.3 M460.3,508.3c-0.8,0-1.5,0.3-2.1,0.9l-6.4,6.4
         c-0.6,0.6-0.9,1.3-0.9,2.1s0.3,1.6,0.9,2.1l6.5,6.5c0.6,0.6,1.4,0.9,2.1,0.9c0.8,0,1.5-0.3,2.1-0.9l6.4-6.4
         c0.6-0.6,0.9-1.3,0.9-2.1s-0.3-1.6-0.9-2.1l-6.5-6.5C461.8,508.5,461,508.3,460.3,508.3z"
                />
              </g>
              <g className="st2">
                <path
                  className="st4 sparkle-top"
                  d="M433.6,509c-0.4,0-0.8-0.2-1.1-0.4l-5.2-5.2c-0.6-0.6-0.6-1.5,0-2.1l5.1-5.1c0.3-0.3,0.7-0.4,1.1-0.4
         s0.8,0.1,1.1,0.4l5.2,5.2c0.6,0.6,0.6,1.5,0,2.1l-5.1,5.1C434.4,508.9,434,509,433.6,509z"
                />
                <path
                  className="st3 sparkle-top"
                  d="M433.5,497.2l5.2,5.2l-5.1,5.1l-5.2-5.2L433.5,497.2 M433.5,494.2c-0.8,0-1.5,0.3-2.1,0.9l-5.1,5.1
         c-1.2,1.2-1.2,3.1,0,4.2l5.2,5.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l5.1-5.1c1.2-1.2,1.2-3.1,0-4.2l-5.2-5.2
         C435.1,494.5,434.3,494.2,433.5,494.2z"
                />
              </g>
              <path
                className="st0 sparkle-top"
                d="M774.6,499.6l16.7-16.7l16.4,16.4L791,516L774.6,499.6z M763.2,476.8l6.5-6.5l6.4,6.4l-6.5,6.5L763.2,476.8z
        M791.2,461.4l5.2-5.2l5.1,5.1l-5.2,5.2L791.2,461.4z"
              />
            </g>
            <g id="horizontal">
              <path className="b" d="M326,698h595v196H326V698z" />
              <path id="line" className="st10" d="M332,695h582" />
            </g>
          </g>
          <g ref={machineWrapper}>
            <g ref={bitcoin}>
              <path
                className="st11"
                d="M779.3,1243H472.4c-9.2,0-16.6-7.4-16.6-16.6v-22.7h339.1v23.7C794.9,1236,787.9,1243,779.3,1243
       L779.3,1243z"
              />
              <path
                className="st4"
                d="M725.4,1228.4H523.9c-2.2,0-4-1.8-4-4v-3.6c0-2.2,1.8-4,4-4h201.6c2.2,0,4,1.8,4,4v3.6
       C729.4,1226.7,727.6,1228.4,725.4,1228.4z"
              />
              <path
                className="st12"
                d="M812.4,1203.7H438.3c-12.8,0-23.2-10.4-23.2-23.2v-163.8c0-12.8,10.4-23.2,23.2-23.2h374.1
       c12.8,0,23.2,10.4,23.2,23.2v163.8C835.7,1193.3,825.3,1203.7,812.4,1203.7z"
              />
              <g className="st2">
                <path
                  className="st3"
                  d="M519.9,992.2c-0.8,0-1.5-0.7-1.5-1.5v-17.4c0-5.7,4.6-10.3,10.3-10.3H719c6.6,0,12,5.4,12,12v15.7
         c0,0.8-0.7,1.5-1.5,1.5H519.9z"
                />
                <path
                  className="st4"
                  d="M718.9,964.5c5.8,0,10.5,4.7,10.5,10.5v15.7H519.9v-17.4c0-4.8,3.9-8.8,8.8-8.8H718.9 M718.9,961.5H528.6
         c-6.5,0-11.8,5.3-11.8,11.8v17.4c0,1.7,1.3,3,3,3h209.6c1.7,0,3-1.3,3-3V975C732.4,967.6,726.4,961.5,718.9,961.5z"
                />
              </g>
              <g className="st2">
                <path
                  className="st3"
                  d="M458.9,1132.5c-6.5,0-11.8-5.3-11.8-11.8v-75.4c0-6.5,5.3-11.8,11.8-11.8h75.4c6.5,0,11.8,5.3,11.8,11.8
         v75.4c0,6.5-5.3,11.8-11.8,11.8H458.9z"
                />
                <path
                  className="st4"
                  d="M534.3,1034.9c5.7,0,10.3,4.6,10.3,10.3v75.4c0,5.7-4.6,10.3-10.3,10.3h-75.4c-5.7,0-10.3-4.6-10.3-10.3
         v-75.4c0-5.7,4.6-10.3,10.3-10.3H534.3 M534.3,1031.9h-75.4c-7.4,0-13.3,6-13.3,13.3v75.4c0,7.4,6,13.3,13.3,13.3h75.4
         c7.4,0,13.3-6,13.3-13.3v-75.4C547.6,1037.9,541.6,1031.9,534.3,1031.9z"
                />
              </g>
              <g className="st2">
                <path
                  className="st3"
                  d="M588.6,1132.5c-7.4,0-13.5-6.1-13.5-13.5v-72c0-7.4,6.1-13.5,13.5-13.5h72c7.4,0,13.5,6.1,13.5,13.5v72
         c0,7.4-6.1,13.5-13.5,13.5H588.6z"
                />
                <path
                  className="st4"
                  d="M660.7,1034.9c6.6,0,12,5.4,12,12v72c0,6.6-5.4,12-12,12h-72c-6.6,0-12-5.4-12-12v-72c0-6.6,5.4-12,12-12
         H660.7 M660.7,1031.9h-72c-8.3,0-15,6.7-15,15v72c0,8.3,6.7,15,15,15h72c8.3,0,15-6.7,15-15v-72
         C675.7,1038.6,668.9,1031.9,660.7,1031.9z"
                />
              </g>
              <g className="st2">
                <path
                  className="st3"
                  d="M718.5,1132.5c-7.6,0-13.8-6.2-13.8-13.8v-71.4c0-7.6,6.2-13.8,13.8-13.8h71.4c7.6,0,13.8,6.2,13.8,13.8
         v71.4c0,7.6-6.2,13.8-13.8,13.8H718.5z"
                />
                <path
                  className="st4"
                  d="M789.9,1034.9c6.8,0,12.3,5.5,12.3,12.3v71.4c0,6.8-5.5,12.3-12.3,12.3h-71.4c-6.8,0-12.3-5.5-12.3-12.3
         v-71.4c0-6.8,5.5-12.3,12.3-12.3H789.9 M789.9,1031.9h-71.4c-8.5,0-15.3,6.9-15.3,15.3v71.4c0,8.5,6.9,15.3,15.3,15.3h71.4
         c8.5,0,15.3-6.9,15.3-15.3v-71.4C805.2,1038.8,798.3,1031.9,789.9,1031.9z"
                />
              </g>
              <g ref={blueSquares}>
                <g className="st2">
                  <path
                    className="st4"
                    d="M458.9,1132.5c-6.5,0-11.8-5.3-11.8-11.8v-75.4c0-6.5,5.3-11.8,11.8-11.8h75.4c6.5,0,11.8,5.3,11.8,11.8
           v75.4c0,6.5-5.3,11.8-11.8,11.8H458.9z"
                  />
                  <path
                    className="st3"
                    d="M534.3,1034.9c5.7,0,10.3,4.6,10.3,10.3v75.4c0,5.7-4.6,10.3-10.3,10.3h-75.4c-5.7,0-10.3-4.6-10.3-10.3
           v-75.4c0-5.7,4.6-10.3,10.3-10.3H534.3 M534.3,1031.9h-75.4c-7.4,0-13.3,6-13.3,13.3v75.4c0,7.4,6,13.3,13.3,13.3h75.4
           c7.4,0,13.3-6,13.3-13.3v-75.4C547.6,1037.9,541.6,1031.9,534.3,1031.9z"
                  />
                </g>
                <g className="st2">
                  <path
                    className="st4"
                    d="M588.6,1132.5c-7.4,0-13.5-6.1-13.5-13.5v-72c0-7.4,6.1-13.5,13.5-13.5h72c7.4,0,13.5,6.1,13.5,13.5v72
           c0,7.4-6.1,13.5-13.5,13.5H588.6z"
                  />
                  <path
                    className="st3"
                    d="M660.7,1034.9c6.6,0,12,5.4,12,12v72c0,6.6-5.4,12-12,12h-72c-6.6,0-12-5.4-12-12v-72c0-6.6,5.4-12,12-12
           H660.7 M660.7,1031.9h-72c-8.3,0-15,6.7-15,15v72c0,8.3,6.7,15,15,15h72c8.3,0,15-6.7,15-15v-72
           C675.7,1038.6,668.9,1031.9,660.7,1031.9z"
                  />
                </g>
                <g className="st2">
                  <path
                    className="st4"
                    d="M718.5,1132.5c-7.6,0-13.8-6.2-13.8-13.8v-71.4c0-7.6,6.2-13.8,13.8-13.8h71.4c7.6,0,13.8,6.2,13.8,13.8
           v71.4c0,7.6-6.2,13.8-13.8,13.8H718.5z"
                  />
                  <path
                    className="st3"
                    d="M789.9,1034.9c6.8,0,12.3,5.5,12.3,12.3v71.4c0,6.8-5.5,12.3-12.3,12.3h-71.4c-6.8,0-12.3-5.5-12.3-12.3
           v-71.4c0-6.8,5.5-12.3,12.3-12.3H789.9 M789.9,1031.9h-71.4c-8.5,0-15.3,6.9-15.3,15.3v71.4c0,8.5,6.9,15.3,15.3,15.3h71.4
           c8.5,0,15.3-6.9,15.3-15.3v-71.4C805.2,1038.8,798.3,1031.9,789.9,1031.9z"
                  />
                </g>
              </g>
              <g id="hexag">
                <path
                  className="st13 hexa "
                  d="M516.7,1050.5c-0.6-0.9-1.6-1.5-2.6-1.5H476c-1.1,0-2.1,0.6-2.6,1.5l-19.1,33c-0.5,0.9-0.5,2.1,0,3
         l19.1,33c0.5,0.9,1.5,1.5,2.6,1.5h38.1c1.1,0,2.1-0.6,2.6-1.5l19.1-33c0.5-0.9,0.5-2.1,0-3L516.7,1050.5z"
                />
                <path
                  className="st13 hexa "
                  d="M645.7,1050.5c-0.6-0.9-1.6-1.5-2.6-1.5H605c-1.1,0-2.1,0.6-2.6,1.5l-19.1,33c-0.5,0.9-0.5,2.1,0,3
         l19.1,33c0.5,0.9,1.5,1.5,2.6,1.5h38.1c1.1,0,2.1-0.6,2.6-1.5l19.1-33c0.5-0.9,0.5-2.1,0-3L645.7,1050.5z"
                />
                <path
                  className="st13 hexa"
                  d="M795.8,1083.5l-19.1-33c-0.6-0.9-1.6-1.5-2.6-1.5H736c-1.1,0-2.1,0.6-2.6,1.5l-19.1,33
         c-0.5,0.9-0.5,2.1,0,3l19.1,33c0.5,0.9,1.5,1.5,2.6,1.5h38.1c1.1,0,2.1-0.6,2.6-1.5l19.1-33
         C796.3,1085.6,796.3,1084.4,795.8,1083.5z"
                />
              </g>
              <g id="botones">
                <path
                  className="st14 machine-circles"
                  d="M478.4,1173.9c0,5.6-4.4,10.2-9.8,10.2s-9.8-4.6-9.8-10.2s4.4-10.2,9.8-10.2"
                />
                <path
                  className="st14 machine-circles"
                  d="M536.6,1173.9c0,5.6-4.4,10.2-9.8,10.2s-9.8-4.6-9.8-10.2s4.4-10.2,9.8-10.2"
                />
                <path
                  className="st14 machine-circles"
                  d="M605,1175.3c0,5.6-4.4,10.2-9.8,10.2s-9.8-4.6-9.8-10.2s4.4-10.2,9.8-10.2"
                />
                <path
                  className="st14 machine-circles"
                  d="M663.2,1175.3c0,5.6-4.4,10.2-9.8,10.2s-9.8-4.6-9.8-10.2s4.4-10.2,9.8-10.2"
                />
                <path
                  className="st14 machine-circles"
                  d="M734.5,1175.3c0,5.6-4.4,10.2-9.8,10.2s-9.8-4.6-9.8-10.2s4.4-10.2,9.8-10.2"
                />
                <path
                  className="st14 machine-circles"
                  d="M792.7,1175.3c0,5.6-4.4,10.2-9.8,10.2s-9.8-4.6-9.8-10.2s4.4-10.2,9.8-10.2"
                />
              </g>
            </g>
          </g>
        </g>
        <g ref={coins}>
          <g id="top-coin1">
            <circle className="st4" cx="632.3" cy="90.5" r="55" />
            <circle className="st0" cx="632.3" cy="90.5" r="47.3" />
            <g>
              <circle className="st9" cx="633.9" cy="89.4" r="1.2" />
              <circle className="st9" cx="636.9" cy="90" r="1.2" />
              <circle className="st9" cx="639.4" cy="92" r="1.2" />
              <circle className="st9" cx="641.5" cy="94.4" r="1.2" />
              <circle className="st9" cx="645.2" cy="94.5" r="1.2" />
              <circle className="st9" cx="642.9" cy="91.3" r="1.2" />
              <circle className="st9" cx="639.9" cy="88.7" r="1.2" />
              <circle className="st9" cx="636.2" cy="86.9" r="1.2" />
              <circle className="st9" cx="632.3" cy="86.5" r="1.2" />
              <circle className="st9" cx="634.1" cy="84.7" r="0.6" />
              <circle className="st9" cx="639.1" cy="85.5" r="0.6" />
              <circle className="st9" cx="642.9" cy="88.2" r="0.6" />
              <circle className="st9" cx="646" cy="91.5" r="0.6" />
              <circle className="st9" cx="647.8" cy="96" r="0.6" />
              <circle className="st9" cx="622.9" cy="106.5" r="1.2" />
              <circle className="st9" cx="630.8" cy="89.4" r="1.2" />
              <circle className="st9" cx="627.8" cy="90" r="1.2" />
              <circle className="st9" cx="625.2" cy="92" r="1.2" />
              <circle className="st9" cx="623.2" cy="94.4" r="1.2" />
              <circle className="st9" cx="621.7" cy="97.3" r="1.2" />
              <circle className="st9" cx="621.3" cy="100.4" r="1.2" />
              <circle className="st9" cx="621.7" cy="103.5" r="1.2" />
              <circle className="st9" cx="621.6" cy="109.8" r="1.2" />
              <circle className="st9" cx="619.6" cy="106.5" r="1.2" />
              <circle className="st9" cx="618.4" cy="102.5" r="1.2" />
              <circle className="st9" cx="618.3" cy="98.7" r="1.2" />
              <circle className="st9" cx="619.4" cy="94.5" r="1.2" />
              <circle className="st9" cx="621.7" cy="91.4" r="1.2" />
              <circle className="st9" cx="624.8" cy="88.7" r="1.2" />
              <circle className="st9" cx="628.4" cy="86.9" r="1.2" />
              <circle className="st9" cx="629.9" cy="84.8" r="0.6" />
              <circle className="st9" cx="625.2" cy="85.8" r="0.6" />
              <circle className="st9" cx="621.8" cy="88.3" r="0.6" />
              <circle className="st9" cx="618.7" cy="91.5" r="0.6" />
              <circle className="st9" cx="616.8" cy="96" r="0.6" />
              <circle className="st9" cx="616.1" cy="100.5" r="0.6" />
              <circle className="st9" cx="616.9" cy="105" r="0.6" />
              <circle className="st9" cx="618.8" cy="109.3" r="0.6" />
              <circle className="st9" cx="641.7" cy="106.5" r="1.2" />
              <circle className="st9" cx="642.9" cy="97.3" r="1.2" />
              <circle className="st9" cx="643.4" cy="100.4" r="1.2" />
              <circle className="st9" cx="642.9" cy="103.4" r="1.2" />
              <circle className="st9" cx="643" cy="109.8" r="1.2" />
              <circle className="st9" cx="645.1" cy="106.5" r="1.2" />
              <circle className="st9" cx="646.3" cy="102.5" r="1.2" />
              <circle className="st9" cx="646.4" cy="98.5" r="1.2" />
              <circle className="st9" cx="648.5" cy="100.5" r="0.6" />
              <circle className="st9" cx="647.7" cy="105" r="0.6" />
              <circle className="st9" cx="645.9" cy="109.3" r="0.6" />
              <circle className="st9" cx="633.7" cy="111.5" r="1.2" />
              <circle className="st9" cx="636.8" cy="110.9" r="1.2" />
              <circle className="st9" cx="639.3" cy="109" r="1.2" />
              <circle className="st9" cx="639.7" cy="112.4" r="1.2" />
              <circle className="st9" cx="636.1" cy="114" r="1.2" />
              <circle className="st9" cx="632.2" cy="114.5" r="1.2" />
              <circle className="st9" cx="634" cy="116.3" r="0.6" />
              <circle className="st9" cx="639" cy="115.5" r="0.6" />
              <circle className="st9" cx="642.7" cy="112.8" r="0.6" />
              <circle className="st9" cx="630.6" cy="111.5" r="1.2" />
              <circle className="st9" cx="627.6" cy="110.9" r="1.2" />
              <circle className="st9" cx="625.1" cy="109" r="1.2" />
              <circle className="st9" cx="624.6" cy="112.4" r="1.2" />
              <circle className="st9" cx="628.3" cy="114" r="1.2" />
              <circle className="st9" cx="629.7" cy="116.3" r="0.6" />
              <circle className="st9" cx="625" cy="115.2" r="0.6" />
              <circle className="st9" cx="621.6" cy="112.8" r="0.6" />
              <path
                className="st9"
                d="M652.8,80c-1-1-2.1-2-3.3-2.8c0.4,0.5,0.7,1,1.1,1.4c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.2,0.3
       c0.1-0.1,0.2-0.1,0.3-0.1c0.5,0,0.7,0.5,0.6,0.8c0.1,0.1,0.1,0.3,0.1,0.4v0.1c0.1,0.1,0.1,0.2,0.1,0.3c5,5,8,12,8,19.6
       c0,15.4-12.5,27.9-27.9,27.9s-27.9-12.5-27.9-27.9c0-8.1,3.5-15.4,9-20.5c-0.2-0.3-0.4-0.6-0.5-0.9c-0.4,0.3-0.7,0.7-1,1
       c-5.4,5.4-8.5,12.7-8.5,20.4c0,7.7,3,15,8.5,20.4c5.4,5.4,12.7,8.5,20.4,8.5s15-3,20.4-8.5c5.4-5.4,8.5-12.7,8.5-20.4
       C661.3,92.8,658.2,85.5,652.8,80L652.8,80z"
              />
              <path
                className="st9"
                d="M609.8,84l-0.7-0.6l9-9.9l-5.6-5.7l10-9.8l3.1,3l-0.7,0.7l-2.4-2.3l-8.6,8.5l5.6,5.7L609.8,84z M654.8,83.8
       c-0.2-0.4-0.3-0.7-0.5-1.1c-0.1-0.2,0-0.5,0.2-0.6l-7.6-8.5l5.6-5.7l-10-9.8l-3.1,3l0.7,0.7l2.4-2.3l8.6,8.5l-5.6,5.7L654.8,83.8
       L654.8,83.8z"
              />
              <path
                className="st9"
                d="M632.1,124.5c-6.4,0-12.4-2.5-16.9-7s-7-10.6-7-16.9s2.5-12.4,7-16.9s10.6-7,16.9-7s12.4,2.5,16.9,7
       s7,10.6,7,16.9s-2.5,12.4-7,16.9C644.6,122,638.6,124.5,632.1,124.5z M632.1,77.5c-12.7,0-23,10.3-23,23s10.3,23,23,23
       s23-10.3,23-23S644.8,77.5,632.1,77.5z"
              />
              <path
                className="st9"
                d="M616.2,79.7l16.1-16.1l16.1,16.1l-16.1,16.1L616.2,79.7z"
              />
              <path
                className="st9"
                d="M632.4,61.3l11.4,11.4l4.8-4.8l-16.1-16.1l-16.1,16.1l4.7,4.8L632.4,61.3z"
              />
              <path
                className="st9"
                d="M632.1,119.7c-10.6,0-19.2-8.6-19.2-19.2s8.6-19.2,19.2-19.2s19.2,8.6,19.2,19.2S642.7,119.7,632.1,119.7z
        M632.1,82.3c-10,0-18.2,8.2-18.2,18.2s8.2,18.2,18.2,18.2s18.2-8.2,18.2-18.2S642.2,82.3,632.1,82.3L632.1,82.3z"
              />
              <path
                className="st9"
                d="M616.3,79.7h32.2l-16.1,16.1L616.3,79.7z"
              />
              <path
                className="st17"
                d="M632.4,63.5v32.3l16.1-16.1L632.4,63.5z M632.4,51.8v9.5l11.4,11.4l4.8-4.8L632.4,51.8z"
              />
            </g>
          </g>
          <g id="top-coin2">
            <circle className="st4" cx="555.6" cy="200" r="55" />
            <circle className="st0" cx="555.6" cy="200" r="47.3" />
            <g>
              <circle className="st9" cx="557.1" cy="198.8" r="1.2" />
              <circle className="st9" cx="560.1" cy="199.5" r="1.2" />
              <circle className="st9" cx="562.7" cy="201.4" r="1.2" />
              <circle className="st9" cx="564.7" cy="203.8" r="1.2" />
              <circle className="st9" cx="568.5" cy="203.9" r="1.2" />
              <circle className="st9" cx="566.2" cy="200.7" r="1.2" />
              <circle className="st9" cx="563.1" cy="198" r="1.2" />
              <circle className="st9" cx="559.5" cy="196.3" r="1.2" />
              <circle className="st9" cx="555.6" cy="195.9" r="1.2" />
              <circle className="st9" cx="557.4" cy="194.2" r="0.6" />
              <circle className="st9" cx="562.4" cy="194.9" r="0.6" />
              <circle className="st9" cx="566.2" cy="197.7" r="0.6" />
              <circle className="st9" cx="569.2" cy="201" r="0.6" />
              <circle className="st9" cx="571.1" cy="205.5" r="0.6" />
              <circle className="st9" cx="546.2" cy="215.9" r="1.2" />
              <circle className="st9" cx="554.1" cy="198.8" r="1.2" />
              <circle className="st9" cx="551" cy="199.5" r="1.2" />
              <circle className="st9" cx="548.5" cy="201.5" r="1.2" />
              <circle className="st9" cx="546.5" cy="203.8" r="1.2" />
              <circle className="st9" cx="545" cy="206.7" r="1.2" />
              <circle className="st9" cx="544.5" cy="209.8" r="1.2" />
              <circle className="st9" cx="545" cy="212.9" r="1.2" />
              <circle className="st9" cx="544.9" cy="219.3" r="1.2" />
              <circle className="st9" cx="542.9" cy="215.9" r="1.2" />
              <circle className="st9" cx="541.7" cy="212" r="1.2" />
              <circle className="st9" cx="541.5" cy="208" r="1.2" />
              <circle className="st9" cx="542.7" cy="204" r="1.2" />
              <circle className="st9" cx="545" cy="200.8" r="1.2" />
              <circle className="st9" cx="548" cy="198" r="1.2" />
              <circle className="st9" cx="551.7" cy="196.4" r="1.2" />
              <circle className="st9" cx="553.1" cy="194.2" r="0.6" />
              <circle className="st9" cx="548.4" cy="195.3" r="0.6" />
              <circle className="st9" cx="545" cy="197.7" r="0.6" />
              <circle className="st9" cx="541.9" cy="201" r="0.6" />
              <circle className="st9" cx="540.1" cy="205.5" r="0.6" />
              <circle className="st9" cx="539.4" cy="210" r="0.6" />
              <circle className="st9" cx="540.2" cy="214.5" r="0.6" />
              <circle className="st9" cx="542" cy="218.8" r="0.6" />
              <circle className="st9" cx="565" cy="215.9" r="1.2" />
              <circle className="st9" cx="566.2" cy="206.7" r="1.2" />
              <circle className="st9" cx="566.6" cy="209.8" r="1.2" />
              <circle className="st9" cx="566.2" cy="212.9" r="1.2" />
              <circle className="st9" cx="566.3" cy="219.2" r="1.2" />
              <circle className="st9" cx="568.3" cy="215.9" r="1.2" />
              <circle className="st9" cx="569.5" cy="211.9" r="1.2" />
              <circle className="st9" cx="569.6" cy="208" r="1.2" />
              <circle className="st9" cx="571.8" cy="210" r="0.6" />
              <circle className="st9" cx="571" cy="214.5" r="0.6" />
              <circle className="st9" cx="569.1" cy="218.7" r="0.6" />
              <circle className="st9" cx="556.9" cy="221" r="1.2" />
              <circle className="st9" cx="560" cy="220.4" r="1.2" />
              <circle className="st9" cx="562.5" cy="218.5" r="1.2" />
              <circle className="st9" cx="563" cy="221.8" r="1.2" />
              <circle className="st9" cx="559.3" cy="223.5" r="1.2" />
              <circle className="st9" cx="555.4" cy="224" r="1.2" />
              <circle className="st9" cx="557.2" cy="225.8" r="0.6" />
              <circle className="st9" cx="562.3" cy="225" r="0.6" />
              <circle className="st9" cx="566" cy="222.3" r="0.6" />
              <circle className="st9" cx="553.9" cy="221" r="1.2" />
              <circle className="st9" cx="550.9" cy="220.3" r="1.2" />
              <circle className="st9" cx="548.3" cy="218.5" r="1.2" />
              <circle className="st9" cx="547.9" cy="221.8" r="1.2" />
              <circle className="st9" cx="551.5" cy="223.5" r="1.2" />
              <circle className="st9" cx="552.9" cy="225.7" r="0.6" />
              <circle className="st9" cx="548.3" cy="224.5" r="0.6" />
              <circle className="st9" cx="544.8" cy="222.2" r="0.6" />
              <path
                className="st9"
                d="M576,189.5c-1-1-2.1-2-3.3-2.8c0.4,0.5,0.7,1,1.1,1.4c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.2,0.3
       c0.1-0.1,0.2-0.1,0.3-0.1c0.5,0,0.7,0.5,0.6,0.8c0.1,0.1,0.1,0.3,0.1,0.4v0.1c0.1,0.1,0.1,0.2,0.1,0.3c5,5,8,12,8,19.6
       c0,15.4-12.5,27.9-27.9,27.9s-27.9-12.5-27.9-27.9c0-8.1,3.5-15.4,9-20.5c-0.2-0.3-0.4-0.6-0.5-0.9c-0.4,0.3-0.7,0.7-1,1
       c-5.4,5.4-8.5,12.7-8.5,20.4c0,7.7,3,15,8.5,20.4c5.4,5.4,12.7,8.5,20.4,8.5s15-3,20.4-8.5c5.4-5.4,8.5-12.7,8.5-20.4
       C584.5,202.2,581.5,195,576,189.5L576,189.5z"
              />
              <path
                className="st9"
                d="M533.1,193.5l-0.7-0.6l9-9.9l-5.6-5.7l10-9.8l3.1,3l-0.7,0.7l-2.4-2.3l-8.6,8.5l5.6,5.7L533.1,193.5z
        M578,193.2c-0.2-0.4-0.3-0.7-0.5-1.1c-0.1-0.2,0-0.5,0.2-0.6l-7.6-8.5l5.6-5.7l-10-9.8l-3.1,3l0.7,0.7l2.4-2.3l8.6,8.5l-5.6,5.7
       L578,193.2L578,193.2z"
              />
              <path
                className="st9"
                d="M555.4,233.9c-6.4,0-12.4-2.5-16.9-7s-7-10.6-7-16.9s2.5-12.4,7-16.9s10.6-7,16.9-7s12.4,2.5,16.9,7
       s7,10.6,7,16.9s-2.5,12.4-7,16.9C567.8,231.4,561.8,233.9,555.4,233.9z M555.4,187c-12.7,0-23,10.3-23,23s10.3,23,23,23
       s23-10.3,23-23S568.1,187,555.4,187z"
              />
              <path
                className="st9"
                d="M539.5,189l16.1-16.1l16.1,16.1l-16.1,16.1L539.5,189z"
              />
              <path
                className="st9"
                d="M555.6,170.7l11.4,11.4l4.8-4.8l-16.1-16.1l-16.1,16.1l4.7,4.8L555.6,170.7z"
              />
              <path
                className="st9"
                d="M555.4,229c-10.6,0-19.2-8.6-19.2-19.2s8.6-19.2,19.2-19.2s19.2,8.6,19.2,19.2
       C574.6,220.5,566,229,555.4,229z M555.4,191.7c-10,0-18.2,8.2-18.2,18.2s8.2,18.2,18.2,18.2s18.2-8.2,18.2-18.2
       S565.4,191.7,555.4,191.7L555.4,191.7z"
              />
              <path className="st9" d="M539.5,189h32.3l-16.1,16.1L539.5,189z" />
              <path
                className="st17"
                d="M555.6,173v32.3l16.1-16.1L555.6,173z M555.6,161.2v9.5l11.4,11.4l4.8-4.8L555.6,161.2z"
              />
            </g>
          </g>
          <g id="top-coin3">
            <circle className="st4" cx="706.3" cy="200" r="55" />
            <circle className="st0" cx="706.3" cy="200" r="47.3" />
            <g>
              <circle className="st9" cx="707.8" cy="198.8" r="1.2" />
              <circle className="st9" cx="710.8" cy="199.5" r="1.2" />
              <circle className="st9" cx="713.4" cy="201.4" r="1.2" />
              <circle className="st9" cx="715.4" cy="203.8" r="1.2" />
              <circle className="st9" cx="719.2" cy="203.9" r="1.2" />
              <circle className="st9" cx="716.9" cy="200.7" r="1.2" />
              <circle className="st9" cx="713.8" cy="198" r="1.2" />
              <circle className="st9" cx="710.2" cy="196.3" r="1.2" />
              <circle className="st9" cx="706.3" cy="195.9" r="1.2" />
              <circle className="st9" cx="708.1" cy="194.2" r="0.6" />
              <circle className="st9" cx="713.1" cy="194.9" r="0.6" />
              <circle className="st9" cx="716.9" cy="197.7" r="0.6" />
              <circle className="st9" cx="720" cy="201" r="0.6" />
              <circle className="st9" cx="721.8" cy="205.5" r="0.6" />
              <circle className="st9" cx="696.9" cy="215.9" r="1.2" />
              <circle className="st9" cx="704.8" cy="198.8" r="1.2" />
              <circle className="st9" cx="701.7" cy="199.5" r="1.2" />
              <circle className="st9" cx="699.2" cy="201.5" r="1.2" />
              <circle className="st9" cx="697.2" cy="203.8" r="1.2" />
              <circle className="st9" cx="695.7" cy="206.7" r="1.2" />
              <circle className="st9" cx="695.3" cy="209.8" r="1.2" />
              <circle className="st9" cx="695.7" cy="212.9" r="1.2" />
              <circle className="st9" cx="695.6" cy="219.3" r="1.2" />
              <circle className="st9" cx="693.6" cy="215.9" r="1.2" />
              <circle className="st9" cx="692.4" cy="212" r="1.2" />
              <circle className="st9" cx="692.2" cy="208" r="1.2" />
              <circle className="st9" cx="693.4" cy="204" r="1.2" />
              <circle className="st9" cx="695.7" cy="200.8" r="1.2" />
              <circle className="st9" cx="698.8" cy="198" r="1.2" />
              <circle className="st9" cx="702.4" cy="196.4" r="1.2" />
              <circle className="st9" cx="703.8" cy="194.2" r="0.6" />
              <circle className="st9" cx="699.1" cy="195.3" r="0.6" />
              <circle className="st9" cx="695.7" cy="197.7" r="0.6" />
              <circle className="st9" cx="692.6" cy="201" r="0.6" />
              <circle className="st9" cx="690.8" cy="205.5" r="0.6" />
              <circle className="st9" cx="690.1" cy="210" r="0.6" />
              <circle className="st9" cx="690.9" cy="214.5" r="0.6" />
              <circle className="st9" cx="692.7" cy="218.8" r="0.6" />
              <circle className="st9" cx="715.7" cy="215.9" r="1.2" />
              <circle className="st9" cx="716.9" cy="206.7" r="1.2" />
              <circle className="st9" cx="717.3" cy="209.8" r="1.2" />
              <circle className="st9" cx="716.9" cy="212.9" r="1.2" />
              <circle className="st9" cx="717" cy="219.2" r="1.2" />
              <circle className="st9" cx="719" cy="215.9" r="1.2" />
              <circle className="st9" cx="720.2" cy="211.9" r="1.2" />
              <circle className="st9" cx="720.3" cy="208" r="1.2" />
              <circle className="st9" cx="722.5" cy="210" r="0.6" />
              <circle className="st9" cx="721.7" cy="214.5" r="0.6" />
              <circle className="st9" cx="719.9" cy="218.7" r="0.6" />
              <circle className="st9" cx="707.7" cy="221" r="1.2" />
              <circle className="st9" cx="710.7" cy="220.4" r="1.2" />
              <circle className="st9" cx="713.2" cy="218.5" r="1.2" />
              <circle className="st9" cx="713.7" cy="221.8" r="1.2" />
              <circle className="st9" cx="710" cy="223.5" r="1.2" />
              <circle className="st9" cx="706.1" cy="224" r="1.2" />
              <circle className="st9" cx="707.9" cy="225.8" r="0.6" />
              <circle className="st9" cx="713" cy="225" r="0.6" />
              <circle className="st9" cx="716.7" cy="222.3" r="0.6" />
              <circle className="st9" cx="704.6" cy="221" r="1.2" />
              <circle className="st9" cx="701.6" cy="220.3" r="1.2" />
              <circle className="st9" cx="699.1" cy="218.5" r="1.2" />
              <circle className="st9" cx="698.6" cy="221.8" r="1.2" />
              <circle className="st9" cx="702.2" cy="223.5" r="1.2" />
              <circle className="st9" cx="703.7" cy="225.7" r="0.6" />
              <circle className="st9" cx="699" cy="224.5" r="0.6" />
              <circle className="st9" cx="695.6" cy="222.2" r="0.6" />
              <path
                className="st9"
                d="M726.7,189.5c-1-1-2.1-2-3.3-2.8c0.4,0.5,0.7,1,1.1,1.4c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.2,0.3
       c0.1-0.1,0.2-0.1,0.3-0.1c0.5,0,0.7,0.5,0.6,0.8c0.1,0.1,0.1,0.3,0.1,0.4v0.1c0.1,0.1,0.1,0.2,0.1,0.3c5,5,8,12,8,19.6
       c0,15.4-12.5,27.9-27.9,27.9s-27.9-12.5-27.9-27.9c0-8.1,3.5-15.4,9-20.5c-0.2-0.3-0.4-0.6-0.5-0.9c-0.4,0.3-0.7,0.7-1,1
       c-5.4,5.4-8.5,12.7-8.5,20.4c0,7.7,3,15,8.5,20.4c5.4,5.4,12.7,8.5,20.4,8.5s15-3,20.4-8.5c5.4-5.4,8.5-12.7,8.5-20.4
       C735.2,202.2,732.2,195,726.7,189.5L726.7,189.5z"
              />
              <path
                className="st9"
                d="M683.8,193.5l-0.7-0.6l9-9.9l-5.6-5.7l10-9.8l3.1,3l-0.7,0.7l-2.4-2.3l-8.6,8.5l5.6,5.7L683.8,193.5z
        M728.7,193.2c-0.2-0.4-0.3-0.7-0.5-1.1c-0.1-0.2,0-0.5,0.2-0.6l-7.6-8.5l5.6-5.7l-10-9.8l-3.1,3l0.7,0.7l2.4-2.3l8.6,8.5
       l-5.6,5.7L728.7,193.2L728.7,193.2z"
              />
              <path
                className="st9"
                d="M706.1,233.9c-6.4,0-12.4-2.5-16.9-7s-7-10.6-7-16.9s2.5-12.4,7-16.9s10.6-7,16.9-7c6.4,0,12.4,2.5,16.9,7
       s7,10.6,7,16.9s-2.5,12.4-7,16.9S712.5,233.9,706.1,233.9z M706.1,187c-12.7,0-23,10.3-23,23s10.3,23,23,23s23-10.3,23-23
       S718.8,187,706.1,187z"
              />
              <path
                className="st9"
                d="M690.2,189l16.1-16.1l16.1,16.1l-16.1,16.1L690.2,189z"
              />
              <path
                className="st9"
                d="M706.3,170.7l11.4,11.4l4.8-4.8l-16.1-16.1l-16.1,16.1l4.7,4.8L706.3,170.7z"
              />
              <path
                className="st9"
                d="M706.1,229c-10.6,0-19.2-8.6-19.2-19.2s8.6-19.2,19.2-19.2c10.6,0,19.2,8.6,19.2,19.2S716.7,229,706.1,229z
        M706.1,191.7c-10,0-18.2,8.2-18.2,18.2s8.2,18.2,18.2,18.2s18.2-8.2,18.2-18.2S716.2,191.7,706.1,191.7L706.1,191.7z"
              />
              <path className="st9" d="M690.2,189h32.3l-16.1,16.1L690.2,189z" />
              <path
                className="st17"
                d="M706.3,173v32.3l16.1-16.1L706.3,173z M706.3,161.2v9.5l11.4,11.4l4.8-4.8L706.3,161.2z"
              />
            </g>
          </g>
        </g>
        <g ref={firstCoin}>
          <circle className="st15" cx="625.4" cy="861" r="42.9" />
          <circle className="st0" cx="625.4" cy="861" r="34.8" />
          <g>
            <circle className="st9" cx="626.9" cy="858.4" r="0.9" />
            <circle className="st9" cx="629.1" cy="859" r="0.9" />
            <circle className="st9" cx="631" cy="860.4" r="0.9" />
            <circle className="st9" cx="632.5" cy="862.1" r="0.9" />
            <circle className="st9" cx="635.2" cy="862.2" r="0.9" />
            <circle className="st9" cx="633.5" cy="859.8" r="0.9" />
            <circle className="st9" cx="631.3" cy="857.9" r="0.9" />
            <circle className="st9" cx="628.6" cy="856.6" r="0.9" />
            <circle className="st9" cx="625.8" cy="856.3" r="0.9" />
            <circle className="st9" cx="627.1" cy="855" r="0.4" />
            <circle className="st9" cx="630.7" cy="855.6" r="0.4" />
            <circle className="st9" cx="633.5" cy="857.6" r="0.4" />
            <circle className="st9" cx="635.8" cy="860" r="0.4" />
            <circle className="st9" cx="637.1" cy="863.4" r="0.4" />
            <circle className="st9" cx="618.8" cy="871" r="0.9" />
            <circle className="st9" cx="624.6" cy="858.4" r="0.9" />
            <circle className="st9" cx="622.4" cy="859" r="0.9" />
            <circle className="st9" cx="620.5" cy="860.4" r="0.9" />
            <circle className="st9" cx="619.1" cy="862.1" r="0.9" />
            <circle className="st9" cx="618" cy="864.2" r="0.9" />
            <circle className="st9" cx="617.7" cy="866.5" r="0.9" />
            <circle className="st9" cx="618" cy="868.8" r="0.9" />
            <circle className="st9" cx="617.9" cy="873.4" r="0.9" />
            <circle className="st9" cx="616.4" cy="871" r="0.9" />
            <circle className="st9" cx="615.5" cy="868.1" r="0.9" />
            <circle className="st9" cx="615.5" cy="865.3" r="0.9" />
            <circle className="st9" cx="616.3" cy="862.2" r="0.9" />
            <circle className="st9" cx="618" cy="859.9" r="0.9" />
            <circle className="st9" cx="620.2" cy="857.9" r="0.9" />
            <circle className="st9" cx="622.9" cy="856.6" r="0.9" />
            <circle className="st9" cx="624" cy="855.1" r="0.4" />
            <circle className="st9" cx="620.5" cy="855.8" r="0.4" />
            <circle className="st9" cx="618" cy="857.6" r="0.4" />
            <circle className="st9" cx="615.8" cy="860" r="0.4" />
            <circle className="st9" cx="614.4" cy="863.4" r="0.4" />
            <circle className="st9" cx="613.9" cy="866.7" r="0.4" />
            <circle className="st9" cx="614.4" cy="870" r="0.4" />
            <circle className="st9" cx="615.8" cy="873.1" r="0.4" />
            <circle className="st9" cx="632.7" cy="871" r="0.9" />
            <circle className="st9" cx="633.5" cy="864.2" r="0.9" />
            <circle className="st9" cx="633.9" cy="866.5" r="0.9" />
            <circle className="st9" cx="633.5" cy="868.7" r="0.9" />
            <circle className="st9" cx="633.6" cy="873.4" r="0.9" />
            <circle className="st9" cx="635.2" cy="871" r="0.9" />
            <circle className="st9" cx="636" cy="868.1" r="0.9" />
            <circle className="st9" cx="636.1" cy="865.2" r="0.9" />
            <circle className="st9" cx="637.6" cy="866.7" r="0.4" />
            <circle className="st9" cx="637.1" cy="869.9" r="0.4" />
            <circle className="st9" cx="635.7" cy="873.1" r="0.4" />
            <circle className="st9" cx="626.8" cy="874.7" r="0.9" />
            <circle className="st9" cx="629.1" cy="874.2" r="0.9" />
            <circle className="st9" cx="630.9" cy="872.9" r="0.9" />
            <circle className="st9" cx="631.2" cy="875.3" r="0.9" />
            <circle className="st9" cx="628.5" cy="876.6" r="0.9" />
            <circle className="st9" cx="625.7" cy="877" r="0.9" />
            <circle className="st9" cx="627" cy="878.2" r="0.4" />
            <circle className="st9" cx="630.7" cy="877.7" r="0.4" />
            <circle className="st9" cx="633.4" cy="875.6" r="0.4" />
            <circle className="st9" cx="624.5" cy="874.7" r="0.9" />
            <circle className="st9" cx="622.3" cy="874.2" r="0.9" />
            <circle className="st9" cx="620.5" cy="872.8" r="0.9" />
            <circle className="st9" cx="620.1" cy="875.3" r="0.9" />
            <circle className="st9" cx="622.8" cy="876.6" r="0.9" />
            <circle className="st9" cx="623.8" cy="878.2" r="0.4" />
            <circle className="st9" cx="620.4" cy="877.4" r="0.4" />
            <circle className="st9" cx="617.9" cy="875.6" r="0.4" />
            <path
              className="st9"
              d="M640.8,851.6c-0.7-0.7-1.5-1.5-2.4-2.1c0.3,0.4,0.5,0.7,0.8,1c0.1,0.1,0.1,0.1,0.1,0.2
          c0.1,0.1,0.1,0.1,0.1,0.2c0.1-0.1,0.1-0.1,0.2-0.1c0.4,0,0.5,0.4,0.4,0.6c0.1,0.1,0.1,0.2,0.1,0.3v0.1c0.1,0.1,0.1,0.1,0.1,0.2
          c3.7,3.7,5.9,8.8,5.9,14.4c0,11.3-9.2,20.5-20.5,20.5c-11.3,0-20.5-9.2-20.5-20.5c0-5.9,2.6-11.3,6.6-15.1
          c-0.1-0.2-0.3-0.4-0.4-0.7c-0.3,0.2-0.5,0.5-0.7,0.7c-4,4-6.2,9.3-6.2,15c0,5.7,2.2,11,6.2,15c4,4,9.3,6.2,15,6.2s11-2.2,15-6.2
          c4-4,6.2-9.3,6.2-15C647.1,860.9,644.8,855.7,640.8,851.6L640.8,851.6z"
            />
            <path
              className="st9"
              d="M609.2,854.5l-0.5-0.4l6.6-7.3l-4.1-4.2l7.3-7.2l2.3,2.2l-0.5,0.5l-1.8-1.7l-6.3,6.2l4.1,4.2L609.2,854.5z
           M642.3,854.3c-0.1-0.3-0.2-0.5-0.4-0.8c-0.1-0.1,0-0.4,0.1-0.4l-5.6-6.2l4.1-4.2l-7.3-7.2l-2.3,2.2l0.5,0.5l1.8-1.7l6.3,6.2
          l-4.1,4.2L642.3,854.3L642.3,854.3z"
            />
            <path
              className="st9"
              d="M625.6,884.2c-4.7,0-9.1-1.8-12.4-5.1c-3.3-3.3-5.1-7.8-5.1-12.4s1.8-9.1,5.1-12.4c3.3-3.3,7.8-5.1,12.4-5.1
          s9.1,1.8,12.4,5.1c3.3,3.3,5.1,7.8,5.1,12.4s-1.8,9.1-5.1,12.4C634.8,882.4,630.4,884.2,625.6,884.2z M625.6,849.7
          c-9.3,0-16.9,7.6-16.9,16.9s7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9S634.9,849.7,625.6,849.7z"
            />
            <path
              className="st9"
              d="M613.9,851.3l11.8-11.8l11.8,11.8l-11.8,11.8L613.9,851.3z"
            />
            <path
              className="st9"
              d="M625.8,837.8l8.4,8.4l3.5-3.5l-11.8-11.8l-11.8,11.8l3.5,3.5L625.8,837.8z"
            />
            <path
              className="st9"
              d="M625.6,880.7c-7.8,0-14.1-6.3-14.1-14.1c0-7.8,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1
          C639.7,874.4,633.4,880.7,625.6,880.7z M625.6,853.2c-7.3,0-13.4,6-13.4,13.4s6,13.4,13.4,13.4s13.4-6,13.4-13.4
          S633,853.2,625.6,853.2L625.6,853.2z"
            />
            <path className="st9" d="M614,851.3h23.7l-11.8,11.8L614,851.3z" />
            <path
              className="st9"
              d="M625.8,839.5v23.7l11.8-11.8L625.8,839.5z M625.8,830.8v7l8.4,8.4l3.5-3.5L625.8,830.8z"
            />
          </g>
        </g>

        <path
          ref={firstCoinLines}
          className="st16"
          d="M676,759.4v142 M689.5,842.4v75 M573.5,755.4v142 M562,838.4v75"
        />
      </svg>
    </div>
  );
};

RaffleAnimation.propTypes = {
  moveAnimation: PropTypes.bool.isRequired,
  onStop: PropTypes.func.isRequired,
};

export default RaffleAnimation;

import Typewriter from "typewriter-effect";

const TypewriterTitle = () => {
  return (
    <Typewriter
      options={{
        strings: ["MERN Stack Web Developer", "Front End Developer "],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterTitle;

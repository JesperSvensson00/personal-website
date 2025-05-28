import { Box, Divider, Stack, Text } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  const personalProjects = [
    {
      name: "Student union chapter website",
      url: "https://www.cl-sektionen.se",
      github: "https://github.com/Webbutvecklare-CL/cl-sektionen.se/",
      description:
        "Website for the student union chapter at KTH, built with Next.js and Firebase. Developed from scratch, including a blog system with notifications and a dedicated admin interface for trustees to manage posts.",
    },
    {
      name: "Glosso - A vocabulary learning app",
      url: "https://glosso.vercel.app/",
      github: "",
      description:
        "Vocabulary learning app that helps you learn new words and phrases with a spaced repetition system, like Anki Cards. Built with Next.js, Postgres and Better Auth.",
    },
  ];

  const schoolProjects = [
    {
      name: "A proof of concept for a booking system",
      url: "https://github.com/JesperSvensson00/VIC-Bokningssystem",
      github: "",
      description:
        "Together in a group of 7 we built a booking system for a KTH organisation. Used frameworks: Vue.js, PSQL and FastAPI",
    },
    {
      name: "Smart shopping list",
      url: "https://github.com/JesperSvensson00/Smart-shopping-list",
      github: "",
      description:
        "Built a smart shopping list, which made recommendations based on previous purchases, together with a course mate using only PHP.",
    },
  ];

  return (
    <main className="flex flex-col items-center px-24 py-12">
      <h1 className="text-4xl font-bold mb-4">Hello! I am Jesper 👋🏼</h1>
      <Stack w={"42rem"} mt={"lg"}>
        <h2 className="text-3xl">About me</h2>
        <p>
          My name is Jesper Svensson and I am a fullstack developer with a
          interest in design, usability and learnability. I am currently a
          Double M.Sc Student, Computer Engineering and Education at KTH Royal
          Institute of Technology.
        </p>
        <p>
          My interest for programming started with making Javascript games using
          P5.js and one of my first game was{" "}
          <Link href="https://spel-sida.web.app/freecell.html">Freecell</Link>{" "}
          with more to follow, you find them{" "}
          <Link href="https://spel-sida.web.app/">here</Link>. Today I primarily
          program web applications and IoT-stuff, but I still have a dream of
          creating that perfect game.
        </p>
      </Stack>
      <Stack w={"42rem"} mt={"xl"}>
        <h2 className="text-3xl">Portfolio</h2>
        <Stack gap={"lg"}>
          <div>
            <h3 className="text-lg">Personal projects</h3>
            <Stack>
              {personalProjects.map((project) => (
                <Box key={project.name}>
                  <Link href={project.url} target="_blank">
                    {project.name}
                  </Link>
                  <Text>{project.description}</Text>
                </Box>
              ))}
            </Stack>
          </div>
          <div>
            <h3 className="text-lg">School projects</h3>
            <Stack>
              {schoolProjects.map((project) => (
                <Box key={project.name}>
                  <Link href={project.url} target="_blank">
                    {project.name}
                  </Link>
                  <Text>{project.description}</Text>
                </Box>
              ))}
            </Stack>
          </div>
        </Stack>
      </Stack>
    </main>
  );
}

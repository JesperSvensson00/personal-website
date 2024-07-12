import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-16">
      <h1 className="text-4xl font-bold mb-8">Welcome to my page!</h1>
      <section className="w-[42rem] flex flex-col space-y-4">
        <h2 className="text-3xl">About me</h2>
        <p>
          My name is Jesper Svensson and I am a software developer with a
          interest for design, usability and learnability. I am currently a
          Double M.Sc Student, Computer Engineering and Education at KTH Royal
          Institute of Technology.
        </p>
        <p>
          My interest for programming started with making Javascript games using
          P5.js and my first game was{" "}
          <Link href="https://spel-sida.web.app/freecell.html">Freecell</Link>{" "}
          with more to follow, you find them{" "}
          <Link href="https://spel-sida.web.app/">here</Link>.
        </p>
      </section>
      <section className="w-[42rem] flex flex-col space-y-4">
        <h2 className="text-3xl">Portfolio</h2>
        <div className="flex flex-col space-y-8">
          <div>
            <h3 className="text-lg">Here are some of my projects:</h3>
            <ul>
              <li className="space-x-4">
                <Link href="www.cl-sektionen.se">
                  Student union chapter website
                </Link>
                <Link
                  href={"https://github.com/Webbutvecklare-CL/cl-sektionen.se/"}
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg">School projects:</h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="https://github.com/JesperSvensson00/VIC-Bokningssystem">
                  A proof of concept for a booking system
                </Link>
                <p>
                  Together in a group of 7 we built a booking system for a KTH
                  organisation. Used frameworks: VUE, PSQL and FastAPI
                </p>
              </li>
              <li>
                <Link href="https://github.com/JesperSvensson00/Smart-shopping-list">
                  Smart shopping list
                </Link>
                <p>
                  Built a smart shopping list, which made recommendations based
                  on previous purchases, together with a course mate using only
                  PHP.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

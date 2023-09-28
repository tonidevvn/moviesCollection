import AboutMe from "../../assets/about_me.svg";

function About() {
  return (
    <div>
      <h3>
        Hi there, I&#39;m&nbsp;
        <a href="https://github.com/tonidevvn" rel="nofollow">
          Toni
        </a>
        &nbsp;👋
      </h3>

      <div className="bg-gray-200 p-4 m-4 rounded-md">
        <h2>I&#39;m a Web Developer&nbsp;💻, Photographer&nbsp;📸!</h2>

        <p>
          I have a passion for developing websites that showcase my creativity.
          I love the adventure of finding caches and connecting with new people
          who have the same interest.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img src={AboutMe} className="max-w-xs md:max-w-md" alt="About me" />
      </div>
    </div>
  );
}

export default About;

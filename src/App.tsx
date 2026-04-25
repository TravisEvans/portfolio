import { useState } from "react";
import { createPortal } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Markdown from "react-markdown";

import Header from "./Header.tsx"
import Card from "./assets/Card.tsx"
import Artists from "./misc/Artists.tsx"
import NotFound from "./misc/404.tsx"
import Pics from "./misc/pics"
import "./App.css";


// ____________ blog files ____________

const files = import.meta.glob('../blog/*.md', { query: '?raw', import: 'default', eager: true });

function parseFrontmatter(raw: string) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) return { data: {}, content: raw };

    const frontmatter = match[1];
    const content = match[2];

    const data: Record<string, string> = {};
    frontmatter.split('\n').forEach(line => {
        const [key, ...rest] = line.split(':');
        if (key) data[key.trim()] = rest.join(':').trim();
    });

    return { data, content };
}

const posts = Object.values(files).map((raw) => {
    const { data, content } = parseFrontmatter(raw as string);
    return {
        title: data.title ?? 'Untitled',
        date: data.date ?? '',
        summary: data.summary ?? '',
        content,
    };
});



// ____________ pages ____________

const Home = () => (
	<>
		<section className="hero">
			<div className="textHero container">
				<h2>Design & development portfolio.</h2>
				<h3><Link to="/projects">See my works.</Link></h3>
			</div>
			<div className="picHero" style={{ backgroundImage: "url(/images/lake.webp)" }} />
		</section>

		<section id="overview" className="section light">
			<div className="container">
				<h3>Overview.</h3>
				<br />
				<p>
					This site acts as a display for professional development. <br />
					I'm open to work, freelance or otherwise, and would love for you to explore my works as reference. <br />
					<br /> A brief overview on what I do:
				</p>
				<br />
				<ul>
					<li>
						<h4>Development</h4>
						<p>
							Full-stack development work. I like design, I like logic, and I've developed a career in combining both.
						</p>
						<br />
					</li>
					<li>
						<h4>Photography</h4>
						<p>
							Everyone can take a photo. I take them well, and have displayed my own images across this site.
						</p>
						<br />
					</li>
					<li>
						<h4>Graphic design</h4>
						<p>
							Closely related to the above, though developed separately. It's an accommodation for my love for design.
						</p>
						<br />
					</li>
				</ul>
			</div>
		</section>

		<section id="brief" className="section">
			<div className="container narrow">
				<h3>Noteable works</h3>
				<ul className="noteableList">
					<li><a href="https://chat.travisevans.org">Universal public chat app</a></li>
					<li><a href="https://rivals.travisevans.org">Rivals exercise tracker</a></li>
				</ul>
			</div>
		</section>
	</>
);

const Projects = () => (
	<>
		<section className="hero">
			<div className="textHero container">
				<h2>Projects.</h2>
				<h3>Browse, enjoy.</h3>
			</div>
		</section>

		{/* Portfolio */}
		<section className="section light">
			<div className="container narrow">
				<h3 className="projectHeading"><a href="https://github.com/TravisEvans/portfolio">-&gt;The website you're on.</a></h3>
				<span className="projectLink">https://github.com/TravisEvans/portfolio</span>
				<p>I realised I had no portfolio of works to easily show anyone. <br />With this realisation, I began to develop a portfolio.<br />Welcome to the portfolio.</p>
			</div>
		</section>

		{/* Chat App */}
		<section className="section dark">
			<div className="container narrow">
				<h3 className="projectHeading"><a href="https://chat.travisevans.org">-&gt;Universal general chat.</a></h3>
				<span className="projectLink">chat.travisevans.org</span>
				<p>I thought to make something to test realtime database integration with node.js. <br />I also thought it'd be funny.</p>
			</div>
		</section>

		{/* Rivals */}
		<section className="section">
			<div className="container narrow">
				<h3 className="projectHeading"><a href="https://rivals.travisevans.org">-&gt;Rivals minimal exercise tracker.</a></h3>
				<span className="projectLink">https://rivals.travisevans.org</span>
				<p>A scaleable project for group or individual exercise tracking, designed to increase exercise consistency.</p>
			</div>
		</section>

		{/* Photography */}
		<section className="section light">
			<div className="container narrow">
				<h3 className="projectHeading"><Link to="/misc/pics" >-&gt;Photography portfolio.</Link></h3>
				<span className="projectLink">https://travisevans.org/misc/pics</span>
				<p>A portfolio of some of my favourite images.</p>
			</div>
		</section>
	</>
);

const About = () => (
	<>
		<section className="hero">
			<div className="picHero forcePicHeroLeft" style={{ backgroundImage: "url(/images/mountain.webp)", backgroundPosition: "top center" }} />
			<div className="textHero container">
				<h2>Who I am.</h2><br />
				<h2>What I do.</h2>
				<h3>At least partially.</h3>
			</div>
		</section>

		<section id="contact" className="section light">
			<div className="container">
				<h3>Formally, Mr Travis Evans.</h3>
				<br />
				<p>I'm a developer with a few extra skills—graphic design, marketing, SEO, and photography among them.<br />
					I currently work across all of these areas, and yes, the photos here are mine. I think they're nice.</p>
				<br />
				<p>I'm studying computer science currently, though I've worked with code for years.<br />
					Outside of study, I've always cared about design—it's a big part of what led me here, and why this site looks the way it does.</p>
				<br />
				<p>Combining design and logic is a passion that has shaped my career.<br />
					Most of my time tends to revolve around this passion.</p>
				<br />
				<p>Feel free to browse <Link to="/projects">my works</Link>. Or if you feel similarly about design, you might enjoy <a href="/misc/artists">these artists</a>.</p>
			</div>
		</section>
	</>
);

const Blog = () => {
    const [openPost, setOpenPost] = useState<typeof posts[0] | null>(null);

    const closePost = () => setOpenPost(null);

    const postCards = () => posts.map(post => (
        <div key={post.title + '_' + post.date} className="postCard mb-5">
            <Card title={post.title} date={post.date} content={post.summary} button="Read more" fn={() => setOpenPost(post)} />
        </div>
    ));

    return (
        <>
            <section className="hero">
                <div className="textHero container">
                    <h2>Blog.</h2>
                    <h3>Probably worth the read.</h3>
                </div>
            </section>

            <section id="blog" className="section light">
                <div className="container">
                    {postCards()}
                </div>
            </section>

            {openPost && createPortal(
                <div className="modal-overlay" onClick={closePost}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <Card title={openPost.title} date={openPost.date} content={openPost.content} button="Close post" fn={closePost} />
                    </div>
                </div>,
                document.body
            )}
        </>
    )
};

const Contact = () => (
	<>
		<section className="hero">
			<div className="picHero forcePicHeroLeft" style={{ backgroundImage: "url(/images/field.webp)" }} />
			<div className="textHero container">
				<h2>Get in touch.</h2>
				<h3>Or just go <Link to="/projects">look at my works.</Link></h3>
			</div>
		</section>

		<section id="contact" className="section light">
			<div className="container narrow">
				<h3>Contacting me.</h3>
				<p>I am open to employment, hackathons, or other enquiries also.</p>
				<p>Feel free to send a message, and I will respond.</p>
				<p>Email me: <a href="mailto:business@travisevans.org">business@travisevans.org</a></p>
				<p>GitHub: <a href="https://github.com/TravisEvans">github.com/TravisEvans</a></p>
			</div>
		</section>
	</>
);

const Footer = () => {
	const [year] = useState<number>(new Date().getFullYear());

	return (
		<footer>
			<div className="container narrow">
				<p>&copy; <span>{year}</span> Travis Evans</p>
			</div>
		</footer>
	);
};

const App = () => {
	return (
		<Router>
			<div id="app-shell">
			<Header />
			<main id="app-main">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/misc/artists" element={<Artists />} />
				<Route path="/misc/pics" element={<Pics />} />
				<Route path="*" element={<NotFound />} />  {/* catch all */}
			</Routes>
			</main>
			<Footer />
			</div>
		</Router>
	);
};

export default App;

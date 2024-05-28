import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

function HomepageHero() {
    return (
        <header className="hero hero--primary">
            <div className="container">
                <div className="row">
                    <div className="col col--4">
                        <img className="img--fullwidth" src="/img/logo_full.svg" alt="Southampton Robotics Outreach Logo" />
                    </div>
                    <div className="col col--8">
                        <Heading as="h1">
                            We are Southampton Robotics Outreach
                        </Heading>
                        <p className="hero__subtitle">
                            We are a society at the University of Southampton that runs robotics and STEM outreach events for young people.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default function Home() {
    return (
        <Layout title="Southampton Robotics Outreach" description="The University of Southampton society that runs outreach events">
            <HomepageHero />
            <main></main>
        </Layout>
    );
};
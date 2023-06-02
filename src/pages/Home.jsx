import { Section } from 'components/App.styled';
import { Hero } from 'components/Hero/Hero';
import { LatestTwitts } from 'components/LatestTwitts/LatestTwitts';

const Home = () => {
    return (
        <Section>
            <Hero />
            <LatestTwitts />
        </Section>
    );
};

export default Home;

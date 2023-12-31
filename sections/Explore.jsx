'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreCards } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('exploreCard-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Main projects" textStyles="text-center" />
        <TitleText
          title={<>Visit the main projects <br className="md:block hidden" /> on this Tech Week</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreCards.map((exploreCard, index) => (
            <ExploreCard
              key={exploreCard.id}
              {...exploreCard}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

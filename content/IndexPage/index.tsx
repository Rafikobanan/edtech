import React from 'react';
import cn from 'classnames';
import useTranslates from 'hooks/useTranslates';
import Button from 'components/Buttons/Button';
import FreedomSvg from 'assets/freedom.svg';
import RocketSvg from 'assets/rocket.svg';
import RewardsSvg from 'assets/rewards.svg';
import SupportSvg from 'assets/support.svg';
import Slider from 'components/Slider';
import styles from './styles.module.scss';
import Plans from './Plans';
import Form from './Form';

const IndexPage = () => {
  const [
    firstSectionImageAlt,
    firstSectionTitle,
    firstSectionSubtitle,
    firstSectionButton,
    advantagesTitle,
    advantagesFirstCardTitle,
    advantagesFirstCardContent,
    advantagesSecondCardTitle,
    advantagesSecondCardContent,
    advantagesThirdCardTitle,
    advantagesThirdCardContent,
    advantagesFourthCardTitle,
    advantagesFourthCardContent,
    companyTitle,
    companyDescription,
    companySubtitle,
    companyCard,
    plansTitle,
    plansSubtitle,
    formTitle
  ] = useTranslates(
    'index.first.section.image.alt',
    [
      { id: 'index.first.section.title' },
      {
        span: (...chunks) => <span>{chunks}</span>,
        img: () => <img alt="" src="./two-hands.png" />
      }
    ],
    'index.first.section.subtitle',
    'index.first.section.button',
    'index.advantages.title',
    'index.advantages.first.card.title',
    'index.advantages.first.card.description',
    'index.advantages.second.card.title',
    'index.advantages.second.card.description',
    'index.advantages.third.card.title',
    'index.advantages.third.card.description',
    'index.advantages.fourth.card.title',
    'index.advantages.fourth.card.description',
    'index.company.title',
    [
      { id: 'index.company.description' },
      {
        span: (parts) => <span>{parts}</span>
      }
    ],
    'index.company.subtitle',
    'index.company.card',
    'index.plans.title',
    'index.plans.subtitle',
    [
      { id: 'index.form.title' },
      {
        span: (parts) => <span>{parts}</span>,
        img: () => <img alt="" src="./two-hands.png" />
      }
    ]
  );

  const sliderList = [
    'for-student.jpg',
    'for-student.jpg',
    'for-student.jpg',
    'for-student.jpg',
    'for-student.jpg'
  ];

  return (
    <>
      <section className={styles.firstSection}>
        <img
          className={styles.firstSectionImage}
          alt={firstSectionImageAlt as string}
          src="./for-student.jpg"
        />
        <div className={styles.firstSectionContent}>
          <h2 className={styles.firstSectionTitle}>{firstSectionTitle}</h2>
          <h4 className={styles.firstSectionSubtitle}>{firstSectionSubtitle}</h4>
          <Button className={styles.firstSectionButton}>{firstSectionButton}</Button>
        </div>
      </section>
      <section className={styles.advantages}>
        <h2 className={styles.title}>{advantagesTitle}</h2>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{advantagesFirstCardTitle}</div>
            <div className={styles.cardContent}>{advantagesFirstCardContent}</div>
            <FreedomSvg />
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{advantagesSecondCardTitle}</div>
            <div className={styles.cardContent}>{advantagesSecondCardContent}</div>
            <RocketSvg />
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{advantagesThirdCardTitle}</div>
            <div className={styles.cardContent}>{advantagesThirdCardContent}</div>
            <RewardsSvg />
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{advantagesFourthCardTitle}</div>
            <div className={styles.cardContent}>{advantagesFourthCardContent}</div>
            <SupportSvg />
          </div>
        </div>
      </section>
      <section className={styles.company}>
        <h2 className={styles.title}>{companyTitle}</h2>
        <p className={styles.subtitle}>{companyDescription}</p>
        <h4 className={styles.companySubtitle}>{companySubtitle}</h4>
        <Slider>
          <div className={styles.slider}>
            <div className={styles.sliderItem}>
              <img
                className={styles.invertedFace}
                alt={firstSectionImageAlt as string}
                src="./inverted-face.png"
              />
              <div className={styles.sliderTitle}>{companyCard}</div>
            </div>
            {sliderList.map((sliderImage, index) => (
              <div
                className={styles.sliderItem}
                key={`slider_${index}`}
                style={{ backgroundImage: `url(${sliderImage})` }}
              />
            ))}
          </div>
        </Slider>
      </section>
      <section className={styles.plans}>
        <h2 className={styles.title}>{plansTitle}</h2>
        <p className={styles.subtitle}>{plansSubtitle}</p>
        <Plans />
      </section>
      <section className={styles.formSection}>
        <div className={styles.form}>
          <h2 className={cn(styles.title, styles.formTitle)}>{formTitle}</h2>
          <Form />
        </div>
      </section>
    </>
  );
};

export default IndexPage;

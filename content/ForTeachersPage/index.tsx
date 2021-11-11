import cn from 'classnames';
import React from 'react';
import useTranslates from 'hooks/useTranslates';
import Button from 'components/Buttons/Button';
import FreedomSvg from 'assets/freedom.svg';
import RocketSvg from 'assets/rocket.svg';
import RewardsSvg from 'assets/rewards.svg';
import SupportSvg from 'assets/support.svg';
import Slider from 'components/Slider';
import Start from './Start';
import Form from './Form';
import styles from './styles.module.scss';

const ForTeachersPage = () => {
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
    startTitle,
    companyTitle,
    companyDescription,
    companySubtitle,
    companyCard,
    formTitle
  ] = useTranslates(
    'teacher.first.section.image.alt',
    [
      { id: 'teacher.first.section.title' },
      {
        span: (parts) => <span>{parts}</span>,
        img: () => <img alt="" src="./two-hands.png" />
      }
    ],
    'teacher.first.section.subtitle',
    'teacher.first.section.button',
    'teacher.advantages.title',
    'teacher.advantages.first.card.title',
    'teacher.advantages.first.card.description',
    'teacher.advantages.second.card.title',
    'teacher.advantages.second.card.description',
    'teacher.advantages.third.card.title',
    'teacher.advantages.third.card.description',
    'teacher.advantages.fourth.card.title',
    'teacher.advantages.fourth.card.description',
    'teacher.start.title',
    'teacher.company.title',
    [{ id: 'teacher.company.description' }, { span: (parts) => <span>{parts}</span> }],
    'teacher.company.subtitle',
    'teacher.company.card',
    [
      { id: 'teacher.form.title' },
      { span: (parts) => <span>{parts}</span>, img: () => <img src="./two-hands.png" /> }
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
          src="./for-teacher.jpg"
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
      <section className={styles.start}>
        <h2 className={styles.title}>{startTitle}</h2>
        <Start />
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
                key={`slider-item_${index}`}
                className={styles.sliderItem}
                style={{ backgroundImage: `url(${sliderImage})` }}
              />
            ))}
          </div>
        </Slider>
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

export default ForTeachersPage;

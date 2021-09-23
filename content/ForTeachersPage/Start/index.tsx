import React, { useState } from 'react';
import cn from 'classnames';
import useTranslates from 'hooks/useTranslates';
import ThoughtSvg from 'assets/thought.svg';
import SelfieSvg from 'assets/selfie.svg';
import ToTheStarsSvg from 'assets/to-the-stars.svg';
import Tabs from 'components/Tabs';
import LinkWithArrow from 'components/LinkWithArrow';
import styles from './styles.module.scss';

const Start = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [
    firstSelect,
    secondSelect,
    thirdSelect,
    firstCaseDescription,
    firstCaseSubdescription,
    firstCaseLink,
    secondCaseDescription,
    secondCaseSubdescription,
    secondCaseLink,
    thirdCaseDescription,
    thirdCaseSubdescription,
    thirdCaseLink
  ] = useTranslates(
    'teacher.start.first.select',
    'teacher.start.second.select',
    'teacher.start.third.select',
    'teacher.start.first.case.description',
    'teacher.start.first.case.subdescription',
    'teacher.start.first.case.link',
    [{ id: 'teacher.start.second.case.description' }, { span: () => <span /> }],
    'teacher.start.second.case.subdescription',
    'teacher.start.second.case.link',
    'teacher.start.third.case.description',
    'teacher.start.third.case.subdescription',
    'teacher.start.third.case.link'
  );

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const tabs = [
    { content: firstSelect, isActive: activeTab === 0, handleClick: () => handleTabClick(0) },
    { content: secondSelect, isActive: activeTab === 1, handleClick: () => handleTabClick(1) },
    { content: thirdSelect, isActive: activeTab === 2, handleClick: () => handleTabClick(2) }
  ];

  return (
    <div className={styles.start}>
      <Tabs className={styles.tabs} list={tabs} />
      <div className={cn(styles.case, { [styles.active]: activeTab === 0 })}>
        <ThoughtSvg className={styles.thought} />
        <div className={styles.caseContent}>
          <p className={styles.description}>{firstCaseDescription}</p>
          <p className={styles.subdescription}>{firstCaseSubdescription}</p>
          <LinkWithArrow className={styles.link} href="/">
            {firstCaseLink}
          </LinkWithArrow>
        </div>
      </div>
      <div className={cn(styles.case, { [styles.active]: activeTab === 1 })}>
        <SelfieSvg className={styles.thought} />
        <div className={styles.caseContent}>
          <p className={styles.description}>{secondCaseDescription}</p>
          <p className={styles.subdescription}>{secondCaseSubdescription}</p>
          <LinkWithArrow className={styles.link} href="/">
            {secondCaseLink}
          </LinkWithArrow>
        </div>
      </div>
      <div className={cn(styles.case, { [styles.active]: activeTab === 2 })}>
        <ToTheStarsSvg className={styles.thought} />
        <div className={styles.caseContent}>
          <p className={styles.description}>{thirdCaseDescription}</p>
          <p className={styles.subdescription}>{thirdCaseSubdescription}</p>
          <LinkWithArrow className={styles.link} href="/">
            {thirdCaseLink}
          </LinkWithArrow>
        </div>
      </div>
    </div>
  );
};

export default Start;

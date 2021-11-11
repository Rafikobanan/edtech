import React, { useState } from 'react';
import cn from 'classnames';
import useTranslates from 'hooks/useTranslates';
import Button from 'components/Buttons/Button';
import CheckMarkSvg from 'assets/check-mark.svg';
import styles from './styles.module.scss';
import Tabs from '../../../components/Tabs';

const Plans = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [
    firstSelect,
    secondSelect,
    firstCardTitle,
    firstCardList,
    firstCardAdditional,
    firstCardPrice,
    firstCardAnotherPrice,
    cardButton,
    secondCardTitle,
    secondCardList
  ] = useTranslates(
    'index.plans.first.select',
    'index.plans.second.select',
    'index.plans.first.card.title',
    [
      { id: 'index.plans.first.card.list' },
      {
        li: (parts) => (
          <li className={styles.cardListItem}>
            <CheckMarkSvg />
            {parts}
          </li>
        )
      }
    ],
    'index.plans.first.card.additional',
    'index.plans.first.card.price',
    'index.plans.first.card.another.price',
    'index.plans.card.button',
    'index.plans.second.card.title',
    [
      { id: 'index.plans.second.card.list' },
      {
        li: (parts) => (
          <li className={styles.cardListItem}>
            <CheckMarkSvg />
            {parts}
          </li>
        )
      }
    ]
  );

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const tabs = [
    { content: firstSelect, isActive: activeTab === 0, handleClick: () => handleTabClick(0) },
    { content: secondSelect, isActive: activeTab === 1, handleClick: () => handleTabClick(1) }
  ];

  return (
    <div className={styles.plans}>
      <Tabs className={styles.tabs} list={tabs} />
      <div className={cn(styles.card, styles.accent, { [styles.visible]: activeTab === 0 })}>
        <div className={styles.cardTop}>
          <div className={styles.cardTitle}>{firstCardTitle}</div>
          <ul className={styles.cardList}>{firstCardList}</ul>
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.cardAdditional}>{firstCardAdditional}</div>
          <div className={styles.cardPrice}>{firstCardPrice}</div>
          <div className={styles.cardAnotherPrice}>{firstCardAnotherPrice}</div>
          <Button className={styles.cardButton}>{cardButton}</Button>
        </div>
      </div>
      <div className={cn(styles.card, { [styles.visible]: activeTab === 1 })}>
        <div className={styles.cardTop}>
          <div className={styles.cardTitle}>{secondCardTitle}</div>
          <ul className={styles.cardList}>{secondCardList}</ul>
        </div>
        <div className={styles.cardBottom}>
          <Button color="secondary" className={styles.cardButton}>
            {cardButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Plans;

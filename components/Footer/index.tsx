import React from 'react';
import InstagramSvg from 'assets/instagram.svg';
import YoutubeSvg from 'assets/youtube.svg';
import TikTokSvg from 'assets/tik-tok.svg';
import LinkedinSvg from 'assets/linkedin.svg';
import IconButton from 'components/Buttons/IconButton';
import Logo from 'components/Logo';
import Button from 'components/Buttons/Button';
import AppLink from 'components/AppLink';
import useTranslates from 'hooks/useTranslates';
import styles from './styles.module.scss';
import { hrefs } from '../../config';
import ActiveLink from '../ActiveLink';

const Footer = () => {
  const [
    footerButton,
    footerProducts,
    footerCompany,
    footerHelp,
    footerPolicies,
    studentsLink,
    teachersLink,
    businessLink,
    aboutLink,
    careersLink,
    contactsLink,
    blogLink,
    supportLink,
    faqLink,
    termsLink,
    privacyLink,
    footerCopy
  ] = useTranslates(
    'all.footer.button',
    'all.footer.products',
    'all.footer.company',
    'all.footer.help',
    'all.footer.policies',
    'all.footer.students.link',
    'all.footer.teachers.link',
    'all.footer.business.link',
    'all.footer.about.link',
    'all.footer.careers.link',
    'all.footer.contacts.link',
    'all.footer.blog.link',
    'all.footer.support.link',
    'all.footer.faq.link',
    'all.footer.terms.link',
    'all.footer.privacy.link',
    [{ id: 'all.footer.copy' }, { img: () => <img alt="" src="./heart.png" /> }]
  );

  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <Logo />
        <AppLink href={hrefs.LOGIN}>
          <Button className={styles.button}>{footerButton}</Button>
        </AppLink>
      </div>
      <div className={styles.content}>
        <div className={styles.socials}>
          <IconButton className={styles.iconButton} strokeDisabled>
            <InstagramSvg className={styles.instagram} />
          </IconButton>
          <IconButton className={styles.iconButton} strokeDisabled>
            <YoutubeSvg className={styles.youtube} />
          </IconButton>
          <IconButton className={styles.iconButton} strokeDisabled>
            <TikTokSvg className={styles.tikTok} />
          </IconButton>
          <IconButton className={styles.iconButton} strokeDisabled>
            <LinkedinSvg className={styles.linkedin} />
          </IconButton>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <div className={styles.columnTitle}>{footerProducts}</div>
            <ActiveLink activeClassName={styles.activeLink} href={hrefs.FOR_STUDENTS}>
              {studentsLink}
            </ActiveLink>
            <ActiveLink activeClassName={styles.activeLink} href={hrefs.FOR_TEACHERS}>
              {teachersLink}
            </ActiveLink>
            <AppLink href="/">{businessLink}</AppLink>
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>{footerCompany}</div>
            <AppLink href="/">{aboutLink}</AppLink>
            <AppLink href="/">{careersLink}</AppLink>
            <AppLink href="/">{contactsLink}</AppLink>
            <AppLink href="/">{blogLink}</AppLink>
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>{footerHelp}</div>
            <AppLink href="/">{supportLink}</AppLink>
            <AppLink href="/">{faqLink}</AppLink>
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>{footerPolicies}</div>
            <AppLink href="/">{termsLink}</AppLink>
            <AppLink href="/">{privacyLink}</AppLink>
          </div>
        </div>
      </div>
      <div className={styles.copy}>{footerCopy}</div>
    </div>
  );
};

export default Footer;

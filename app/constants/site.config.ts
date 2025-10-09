import type { Site } from '~/types/site';

// TODO: change fake site config with currect data
const site: Site = {
  name: 'نام سایت',
  description:
    'توضیحات ارائه شده هماره با لوگو که میتواند جهت توضیحات لوگو استفاده شود. این متن برای توضیحات لوگو است',
  address: 'این قسمت آدرس شرکت است',
  credits: 'تمام حقوق مادی و معنوی این وبسایت محفوط است',
  logo: '',
  phone: '+989910979727',
  socials: [
    {
      icon: 'i-custom-telegram',
      link: 'https://t.me/username',
      name: 'telegram',
    },
    {
      icon: 'i-custom-instagram',
      link: 'https://instagram.com/username',
      name: 'instagram',
    },
    {
      icon: 'i-custom-rubika',
      link: 'https://rubika.ir/username',
      name: 'rubika',
    },
    {
      icon: 'i-custom-eitaa',
      link: 'https://eitaa.com/username',
      name: 'eitaa',
    },
  ],
};

export default site;

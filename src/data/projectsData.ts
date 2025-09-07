import BackgroundImageIzumrudny from '../../img/backgroundProjectPageIzum.svg';
import BackgroundImageIQClub from '../../img/backgroundProjectPageIQ.svg';
import imgAboutIzum1 from '../../img/imgAboutIsum1.svg';
import imgAboutIzum2 from '../../img/imgAboutIsum2.svg';
import imgAboutIQ1 from '../../img/imgAbout1IQ.svg';
import imgAboutIQ2 from '../../img/imgAbout2IQ.svg';
import IZUMList1 from '../../img/imgaboutProjecIZUMtList1.svg';
import IZUMList2 from '../../img/imgaboutProjecIZUMtList2.svg';
import IZUMList3 from '../../img/imgaboutProjecIZUMtList3.svg';
import IZUMList4 from '../../img/imgaboutProjecIZUMtList4.svg';

interface ProjectData {
  id: string;
  title1: string;
  title2: string;
  subtitle: string;
  image: string;
  imgAbout1: string;
  imgAbout2: string;
  description: string;
  IMGaboutList1: string;
  aboutList1: string;
  IMGaboutList2: string;
  aboutList2: string;
  IMGaboutList3: string;
  aboutList3: string;
  IMGaboutList4: string;
  aboutList4: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'izumrudny',
    title1: 'Изумрудный',
    title2: ' Village',
    subtitle: 'Коттеджный посёлок бизнес-класса',
    image: BackgroundImageIzumrudny,
    imgAbout1: imgAboutIzum1,
    imgAbout2: imgAboutIzum2,
    description: '- это коттеджный посёлок категории Бизнес. Обособленная охраняемая территория на 40 частных домовладений и 25 таунхаусов в 25 минутах от центра Казани.',
    IMGaboutList1: IZUMList1,
    aboutList1: 'Рядом есть детские сады и школы',
    IMGaboutList2: IZUMList2,
    aboutList2: 'Доступность общественного транспорта',
    IMGaboutList3: IZUMList3,
    aboutList3: 'Большое количество магазинов и ТЦ ',
    IMGaboutList4: IZUMList4,
    aboutList4: 'Развитая внутренняя инфраструктура - есть всё на территории клуба',
  },
];

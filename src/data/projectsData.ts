import BackgroundImageIzumrudny from '../../img/backgroundProjectPageIzum.svg'; 
import BackgroundImageIQClub from '../../img/backgroundProjectPageIQ.svg'; 
import BackgroundImageUsadiClub from '../../img/backgroundProjectPageUsadi.svg'; 
import imgAboutIzum1 from '../../img/imgAboutIsum1.svg'; 
import imgAboutIzum2 from '../../img/imgAboutIsum2.svg'; 
import imgAboutIQ1 from '../../img/imgAboutIQ1.svg'; 
import imgAboutIQ2 from '../../img/imgAboutIQ2.svg'; 
import imgAboutUsadi1 from '../../img/imgAboutUsadi1.svg'; 
import imgAboutUsadi2 from '../../img/imgAboutUsadi2.svg'; 
import IZUMList1 from '../../img/imgaboutProjecIZUMtList1.svg'; 
import IZUMList2 from '../../img/imgaboutProjecIZUMtList2.svg'; 
import IZUMList3 from '../../img/imgaboutProjecIZUMtList3.svg'; 
import IZUMList4 from '../../img/imgaboutProjecIZUMtList4.svg'; 
import IQList1 from '../../img/imgaboutProjectIQList1.svg'; 
import IQList2 from '../../img/imgaboutProjectIQList2.svg'; 
import IQList3 from '../../img/imgaboutProjectIQList3.svg'; 
import IQList4 from '../../img/imgaboutProjectIQList4.svg'; 
import UsadiList1 from '../../img/imgaboutProjectUsadiList1.svg'; 
import UsadiList2 from '../../img/imgaboutProjectUsadiList2.svg'; 
import UsadiList3 from '../../img/imgaboutProjectUsadiList3.svg'; 
import UsadiList4 from '../../img/whiteRec.svg';

export interface ProjectData {
  id: string;
  title1: string;
  title2: string;
  fullName: string;
  subtitle: string;
  image: string;
  description: string;
  imgAbout1: string;
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
    title2: 'Village',
    fullName: 'Изумрудный Village',
    subtitle: 'Коттеджный посёлок бизнес-класса',
    image: BackgroundImageIzumrudny,
    description: '- это коттеджный посёлок категории Бизнес. Обособленная охраняемая территория на 40 частных домовладений и 25 таунхаусов в 25 минутах от центра Казани.',
    imgAbout1: imgAboutIzum1,
    IMGaboutList1: IZUMList1,
    aboutList1: 'Рядом есть детские сады и школы',
    IMGaboutList2: IZUMList2,
    aboutList2: 'Доступность общественного транспорта',
    IMGaboutList3: IZUMList3,
    aboutList3: 'Большое количество магазинов и ТЦ',
    IMGaboutList4: IZUMList4,
    aboutList4: 'Развитая внутренняя инфраструктура - есть всё на территории клуба'
  },
  {
    id: 'iqclub',
    title1: 'IQ',
    title2: 'CLUB',
    fullName: 'IQ CLUB',
    subtitle: 'Современный таунхаус-клуб в Казани',
    image: BackgroundImageIQClub,
    description: '- это инновационный жилой комплекс, где все жилые здания представляют собой комфортные таунхаусы. IQClub предлагает жителям уникальную комбинацию преимуществ жилья в частном секторе и удобств общего пользования, таких как парк. детские площадки, зона для барбекю и спортивные площадки.',
    imgAbout1: imgAboutIQ1,
    IMGaboutList1: IQList1,
    aboutList1: 'Комфорт закрытого клуба внутри города',
    IMGaboutList2: IQList2,
    aboutList2: 'Просторная квадратура для жизни большой семьи',
    IMGaboutList3: IQList3,
    aboutList3: 'Развитая инфраструктура вокруг',
    IMGaboutList4: IQList4,
    aboutList4: 'Закрытая территория с пропускной системой безопасности'
  },
  {
    id: 'usadi',
    title1: 'Усады',
    title2: 'Village',
    fullName: 'Усады Village',
    subtitle: 'Построенные “код ключ” дома',
    image: BackgroundImageUsadiClub,
    description: '- это проектное строительство частных домов на территории поселка Усады (г. Казань)',
    imgAbout1: imgAboutUsadi1,
    IMGaboutList1: UsadiList1,
    aboutList1: 'Строительство домов под ключ',
    IMGaboutList2: UsadiList2,
    aboutList2: 'Подвод всех коммуникаций',
    IMGaboutList3: UsadiList3,
    aboutList3: 'Закрытая территория с пропускной системой безопасности',
    IMGaboutList4: UsadiList4,
    aboutList4: ''
  }
];

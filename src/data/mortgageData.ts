import mortgage1 from '../../img/mortgageCredits.svg';
import mortgage2 from '../../img/mortgageFamily.svg';
import mortgage3 from '../../img/mortgageIT.svg';
import mortgage4 from '../../img/mortgageHelp.svg';

interface MortgageData {
  title: string;
  description: string
  procent: string;
  vznos: string;
  image: string;
}

export const mortgageData: MortgageData[] = [
    {
        title: 'ИПОТЕЧНЫЕ КРЕДИТЫ',
        description: 'Бесплатно подберём базовую ипотечную программу',
        procent: 'от 13,7%',
        vznos: 'от 10%',
        image: mortgage1,
    },

    {
        title: 'СЕМЕЙНАЯ ИПОТЕКА',
        description: 'Используем материнский капитал  в качестве первоначального взноса',
        procent: 'от 4%',
        vznos: 'от 15%',
        image: mortgage2,
    },

    {
        title: 'IT СПЕЦИАЛИСТАМ',
        description: 'В рамках данной программы сотрудники IT-компаний могут построить частный дом в ипотеку по льготной ставке.',
        procent: 'от 4%',
        vznos: 'от 15%',
        image: mortgage3,
    },

    {
        title: 'ГОСПОДДЕРЖКА 2025',
        description: 'Используем материнский капитал  в качестве первоначального взноса',
        procent: 'от 6%',
        vznos: 'от 15%',
        image: mortgage4,
    },
];
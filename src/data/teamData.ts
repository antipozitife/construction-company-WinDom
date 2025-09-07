import mortgage1 from '../../img/mortgageCredits.svg';
import mortgage2 from '../../img/mortgageFamily.svg';
import mortgage3 from '../../img/mortgageIT.svg';
import mortgage4 from '../../img/mortgageHelp.svg';

import Zaharov from '../../img/Zaharov.svg';
import Nazipova from '../../img/Nazipova.svg';
import Muharyamov from '../../img/Muharyamov.svg';
import Vaganov from '../../img/Vaganov.svg';
import Davidova from '../../img/Davidova.svg';
import Kabakov from '../../img/Kabakov.svg';
import Sergeeva from '../../img/Cergeeva.svg';
import Smirnov from '../../img/Smirnov.svg';
import Ivanov from '../../img/Ivanov.svg';
import Fedotova from '../../img/Fedotova.svg';
import Kuzin from '../../img/Kuzin.svg';
import Elistrtov from '../../img/Elistratov.svg';
import Salyahiev from '../../img/Salyahiev.svg';


interface TeamData {
    name: string;
    title: string;
    image: string;
}

export const teamData: TeamData[] = [
    {
        name: 'Игорь Захаров',
        title: 'Руководитель проекта',
        image: Zaharov,
    },

    {
        name: 'Луиза Назипова',
        title: 'Главный архитектор',
        image: Nazipova,
    },

    {
        name: 'Мухарямов Расул',
        title: 'Заместитель руководителя проекта',
        image: Muharyamov,
    },

    {
        name: 'Ваганов Дмитрий',
        title: 'Заместитель руководителя проекта',
        image: Vaganov,
    },

    {
        name: 'Анфиса Давыдова',
        title: 'Руководитель отдела маркетинга',
        image: Davidova,
    },

    {
        name: 'Евгений Кабаков',
        title: 'Руководитель отдела продаж',
        image: Kabakov,
    },

    {
        name: 'Эльвира Сергеева',
        title: 'Руководитель отдела ипотеки',
        image: Sergeeva,
    },

    {
        name: 'Игорь Смирнов',
        title: 'Менеджер по сопровождению',
        image: Smirnov,
    },

    {
        name: 'Иван Иванов',
        title: 'Менеджер по сопровождению',
        image: Ivanov,
    },

    {
        name: 'Лариса Федотова',
        title: 'Ведущий Юрисконсульт',
        image: Fedotova,
    },

    {
        name: 'Алексей Кузин',
        title: 'Начальник участка',
        image: Kuzin,
    },

    {
        name: 'Николай Елистратов',
        title: 'Прораб',
        image: Elistrtov,
    },

    {
        name: 'Фаниль Саляхиев',
        title: 'Прораб',
        image: Salyahiev,
    },
];